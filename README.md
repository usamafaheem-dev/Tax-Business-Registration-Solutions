# Tax & Business Registration Solutions

A modern **Next.js 15** website for a tax and business consultancy brand (MBS), focused on:

- Tax filing support
- Company registration guidance
- Trademark protection
- Compliance and advisory services

## 🚀 Tech Stack

- Next.js (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Nodemailer (contact form emails)

## 📄 Main Pages

- `/` – Home
- `/services` – Services overview
- `/about` – Company details and team
- `/blogs` – Blog listing
- `/contact` – Contact details + form

## 🛠️ Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Create environment variables

Create a `.env.local` file in the project root:

```env
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-app-password
```

> `EMAIL_USER` and `EMAIL_PASS` are used by `src/app/api/contact/route.ts` to send admin and auto-reply emails.

### 3) Run development server

```bash
npm run dev
```

Open: `http://localhost:3000`

## 📦 Available Scripts

- `npm run dev` – Start development server
- `npm run build` – Create production build
- `npm run start` – Run production server
- `npm run lint` – Run ESLint checks

## 📁 Project Structure

```text
src/
  app/            # Routes and pages (App Router)
  components/     # Reusable UI and section components
  lib/            # Static content/data and helper utilities
public/
  images/         # Website images
  fonts/          # Custom fonts
```

## ✉️ Contact Form Flow

When a user submits the contact form:

1. Data is sent to `POST /api/contact`
2. Admin receives inquiry email
3. User receives automatic confirmation email

## 🌐 Brand Info (Current)

- **Name:** My Business Solution
- **Tagline:** Complete Tax & Business Registration Solutions
- **Location:** Hyderabad, Pakistan

---
