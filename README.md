# 🧾 Invoicer – Smart Invoicing Made Simple

**Invoicer** is a full-stack invoicing application built to streamline the client billing experience. It allows users to create, send, and manage invoices with ease while leveraging modern web technologies. Authenticated users can send invoices via email, track payments, and enjoy a beautiful dashboard with animated charts—all deployed on Vercel.

---

## 🚀 Features

* 🌐 **Next.js App Router** for advanced routing and server-side rendering
* 🔐 **Custom Auth** using [Auth.js](https://authjs.dev/) with **Magic Link** login via [Mailtrap](https://l.rw.rw/jan_marshal)
* 💪 Create, edit, and mark invoices as paid
* 📤 Send invoices to clients with stunning email templates
* 🛎️ One-click **Reminder Emails** for unpaid invoices
* 📄 Fully **custom-coded PDF** invoice generation (not template-based)
* 💽 **Neon Postgres** + **Prisma ORM** for scalable data management
* 📊 **Beautiful Dashboard** with animated charts
* ✅ Validation powered by **Zod** and **Conform**
* 🎨 Clean, modern UI built with **Tailwind CSS** and **Shadcn UI**
* ⚡ Server-side implementation with **React Streaming**
* 🌐 Deployed on **Vercel**
* 🧼 Clean, modular, and maintainable codebase
* 🎯 Beautiful responsive **Landing Page**

---

## 🧰 Tech Stack

| Category   | Tech Stack                                                                              |
| ---------- | --------------------------------------------------------------------------------------- |
| Framework  | [Next.js](https://nextjs.org) (App Router)                                              |
| Styling    | [Tailwind CSS](https://tailwindcss.com), [Shadcn UI](https://ui.shadcn.com)             |
| Auth       | [Auth.js](https://authjs.dev/) + Magic Link via [Mailtrap](https://l.rw.rw/jan_marshal) |
| Email      | Mailtrap Email API                                                                      |
| PDF Gen    | Custom-coded PDF generation                                                             |
| Database   | [Neon](https://neon.tech) Postgres                                                      |
| ORM        | [Prisma](https://prisma.io)                                                             |
| Validation | [Zod](https://zod.dev/), [Conform](https://conform.guide/)                              |
| Deployment | [Vercel](https://vercel.com/)                                                           |
| Background | [ui.ibelick.com](https://ui.ibelick.com/)                                               |

---

## 📸 Screenshots

| Dashboard                                    | Invoice View                             |
| -------------------------------------------- | ---------------------------------------- |
| ![Dashboard](./public/screens/dashboard.png) | ![Invoice](./public/screens/invoice.png) |

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/invoicer.git
cd invoicer
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
DATABASE_URL=your_neon_postgres_connection_url
NEXTAUTH_SECRET=your_auth_secret
NEXTAUTH_URL=http://localhost:3000
MAILTRAP_API_KEY=your_mailtrap_api_key
MAILTRAP_SENDER_EMAIL=your_verified_mailtrap_email
```

### 4. Generate Prisma Client

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📤 Deployment

This app is fully optimized for deployment on [Vercel](https://vercel.com/). After setting your environment variables in Vercel’s dashboard, connect your GitHub repo and deploy in minutes.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature/feature-name`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature/feature-name`)
5. Open a pull request

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
