# GK Associate – Manpower & Security Services Website

A full-stack Next.js website for GK Associate, providing manpower request and job application forms with email delivery.

## Tech Stack

- **Next.js 16** (App Router)
- **Tailwind CSS** (styling)
- **Nodemailer** (email sending)
- **Formidable** (multipart/form-data parsing)
- **Vercel** (deployment target)

## Project Structure

```
src/
├── app/
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services page
│   ├── contact/page.tsx    # Contact page (main)
│   ├── api/
│   │   ├── company/route.ts    # POST /api/company
│   │   └── jobseeker/route.ts  # POST /api/jobseeker
│   ├── layout.tsx
│   └── globals.css
└── components/
    ├── Navbar.tsx
    ├── Footer.tsx
    ├── StickyCTA.tsx         # Floating WhatsApp + Call buttons
    ├── ContactClient.tsx     # Tab switcher (client component)
    ├── CompanyForm.tsx       # Company manpower request form
    └── JobSeekerForm.tsx     # Job seeker application form
```

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Environment Variables

Create a `.env.local` file (already created as template):

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password       # Gmail App Password (not your login password)
RECEIVER_EMAIL=your-email@gmail.com
```

### Gmail App Password Setup
1. Go to Google Account → Security → 2-Step Verification → App passwords
2. Generate a password for "Mail"
3. Use that 16-character password as `SMTP_PASS`

## Vercel Deployment

1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `RECEIVER_EMAIL`
4. Deploy

## Features

- ✅ Home page with hero, services, trust points, CTAs
- ✅ About page with timeline and values
- ✅ Services page (Security, Housekeeping, Labour)
- ✅ Contact page with two tabs:
  - **Company Form** – Request manpower (sends email with optional attachment)
  - **Job Seeker Form** – Apply for job (sends email with resume/photo/Aadhaar)
- ✅ File upload: PDF, DOC, DOCX, JPG, PNG (max 5MB)
- ✅ Form validation (required fields, file type/size)
- ✅ Success/error states
- ✅ Sticky WhatsApp + Call buttons
- ✅ Google Map embed
- ✅ SEO meta tags on all pages
- ✅ Mobile-first responsive design
