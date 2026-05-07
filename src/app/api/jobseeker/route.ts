import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";
import { Readable } from "stream";
import type { IncomingMessage } from "http";

export const dynamic = "force-dynamic";

async function toNodeRequest(req: NextRequest): Promise<IncomingMessage> {
  const buf = Buffer.from(await req.arrayBuffer());
  const stream = Readable.from(buf) as unknown as IncomingMessage;
  stream.headers = Object.fromEntries(req.headers.entries());
  stream.method = req.method;
  return stream;
}

function parseForm(
  req: IncomingMessage
): Promise<{ fields: formidable.Fields; files: formidable.Files }> {
  return new Promise((resolve, reject) => {
    const form = formidable({
      maxFileSize: 5 * 1024 * 1024, // 5MB
      allowEmptyFiles: true,
      multiples: true,
    });
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

function getField(fields: formidable.Fields, key: string): string {
  const val = fields[key];
  if (Array.isArray(val)) return val[0] ?? "";
  return val ?? "";
}

function getFile(files: formidable.Files, key: string): formidable.File | null {
  const val = files[key];
  if (Array.isArray(val)) return val[0] ?? null;
  return val ?? null;
}

export async function POST(req: NextRequest) {
  try {
    const nodeReq = await toNodeRequest(req);
    const { fields, files } = await parseForm(nodeReq);

    // Extract fields
    const fullName = getField(fields, "fullName");
    const phone = getField(fields, "phone");
    const altPhone = getField(fields, "altPhone");
    const location = getField(fields, "location");
    const jobType = getField(fields, "jobType");
    const experience = getField(fields, "experience");
    const aadhaar = getField(fields, "aadhaar");

    // Validate required fields
    if (!fullName || !phone) {
      return NextResponse.json(
        { success: false, message: "Full name and phone number are required." },
        { status: 400 }
      );
    }

    // Build email attachments
    const attachments: nodemailer.SendMailOptions["attachments"] = [];

    const resumeFile = getFile(files, "resume");
    if (resumeFile && resumeFile.size > 0) {
      attachments.push({
        filename: resumeFile.originalFilename ?? "resume",
        content: fs.readFileSync(resumeFile.filepath),
      });
    } else {
      return NextResponse.json(
        { success: false, message: "Resume is required." },
        { status: 400 }
      );
    }

    const photoFile = getFile(files, "photo");
    if (photoFile && photoFile.size > 0) {
      attachments.push({
        filename: photoFile.originalFilename ?? "photo",
        content: fs.readFileSync(photoFile.filepath),
      });
    }

    const aadhaarFile = getFile(files, "aadhaarFile");
    if (aadhaarFile && aadhaarFile.size > 0) {
      attachments.push({
        filename: aadhaarFile.originalFilename ?? "aadhaar",
        content: fs.readFileSync(aadhaarFile.filepath),
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 20px;">
        <div style="background: linear-gradient(135deg, #065f46, #10b981); border-radius: 12px 12px 0 0; padding: 30px; color: white;">
          <h1 style="margin: 0; font-size: 24px;">New Job Application 📄</h1>
          <p style="margin: 8px 0 0; opacity: 0.85;">From GK Associate Website</p>
        </div>
        <div style="background: white; border-radius: 0 0 12px 12px; padding: 30px; border: 1px solid #e2e8f0; border-top: none;">
          <table style="width: 100%; border-collapse: collapse;">
            ${[
              ["Full Name", fullName],
              ["Phone", phone],
              ["Alternate Phone", altPhone || "—"],
              ["Location", location || "—"],
              ["Job Type Applied", jobType || "—"],
              ["Experience", experience || "—"],
              ["Aadhaar Number", aadhaar || "—"],
              ["Resume", resumeFile?.originalFilename || "Attached"],
              ["Photo", photoFile?.originalFilename || "Not Provided"],
            ]
              .map(
                ([label, value]) => `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; width: 40%; font-size: 14px;">${label}</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-weight: 600; font-size: 14px;">${value}</td>
              </tr>`
              )
              .join("")}
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #ecfdf5; border-radius: 8px; border-left: 4px solid #10b981;">
            <p style="margin: 0; font-size: 13px; color: #065f46;"><strong>Note:</strong> Resume and other documents are attached to this email.</p>
          </div>
        </div>
        <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 16px;">GK Associate – Manpower & Security Services Website</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"GK Associate Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `[JOB APPLICATION] ${fullName} – ${jobType || "General"}`,
      html: htmlBody,
      attachments,
    });

    // Clean up temp files
    for (const f of [resumeFile, photoFile, aadhaarFile]) {
      if (f?.filepath) {
        try { fs.unlinkSync(f.filepath); } catch (_) {}
      }
    }

    return NextResponse.json({
      success: true,
      message: "Your application has been submitted successfully! We will contact you soon.",
    });
  } catch (error) {
    console.error("Jobseeker API error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
