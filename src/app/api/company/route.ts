import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";
import { Readable } from "stream";
import type { IncomingMessage } from "http";

export const dynamic = "force-dynamic";

// Convert NextRequest to a Node.js IncomingMessage-compatible stream
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

function getField(
  fields: formidable.Fields,
  key: string
): string {
  const val = fields[key];
  if (Array.isArray(val)) return val[0] ?? "";
  return val ?? "";
}

function getFile(
  files: formidable.Files,
  key: string
): formidable.File | null {
  const val = files[key];
  if (Array.isArray(val)) return val[0] ?? null;
  return val ?? null;
}

export async function POST(req: NextRequest) {
  try {
    const nodeReq = await toNodeRequest(req);
    const { fields, files } = await parseForm(nodeReq);

    // Extract fields
    const companyName = getField(fields, "companyName");
    const contactPerson = getField(fields, "contactPerson");
    const phone = getField(fields, "phone");
    const email = getField(fields, "email");
    const location = getField(fields, "location");
    const serviceType = getField(fields, "serviceType");
    const staffCount = getField(fields, "staffCount");
    const message = getField(fields, "message");

    // Validate required fields
    if (!companyName || !contactPerson || !phone) {
      return NextResponse.json(
        { success: false, message: "Company name, contact person, and phone are required." },
        { status: 400 }
      );
    }

    // Build email attachments from uploaded files
    const attachments: nodemailer.SendMailOptions["attachments"] = [];
    const docFile = getFile(files, "document");
    if (docFile && docFile.size > 0) {
      attachments.push({
        filename: docFile.originalFilename ?? "document",
        content: fs.readFileSync(docFile.filepath),
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

    // Email content
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1e40af, #3b82f6); border-radius: 12px 12px 0 0; padding: 30px; color: white;">
          <h1 style="margin: 0; font-size: 24px;">New Manpower Request 🏢</h1>
          <p style="margin: 8px 0 0; opacity: 0.85;">From GK Associate Website</p>
        </div>
        <div style="background: white; border-radius: 0 0 12px 12px; padding: 30px; border: 1px solid #e2e8f0; border-top: none;">
          <table style="width: 100%; border-collapse: collapse;">
            ${[
              ["Company Name", companyName],
              ["Contact Person", contactPerson],
              ["Phone", phone],
              ["Email", email || "—"],
              ["Location", location || "—"],
              ["Service Required", serviceType || "—"],
              ["Staff Count", staffCount || "—"],
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
          ${
            message
              ? `<div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <p style="margin: 0; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
              <p style="margin: 8px 0 0; color: #1e293b; font-size: 14px; line-height: 1.6;">${message}</p>
            </div>`
              : ""
          }
          <div style="margin-top: 24px; padding: 16px; background: #eff6ff; border-radius: 8px;">
            <p style="margin: 0; font-size: 13px; color: #1d4ed8;"><strong>Action Required:</strong> Please contact the company within 2 hours.</p>
          </div>
        </div>
        <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 16px;">GK Associate – Manpower & Security Services Website</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"GK Associate Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `[COMPANY REQUEST] ${companyName} – ${serviceType || "Manpower"}`,
      html: htmlBody,
      attachments,
    });

    // Clean up temp files
    if (docFile?.filepath) {
      try { fs.unlinkSync(docFile.filepath); } catch (_) {}
    }

    return NextResponse.json({
      success: true,
      message: "Your request has been submitted successfully! We will contact you within 2 hours.",
    });
  } catch (error) {
    console.error("Company API error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
