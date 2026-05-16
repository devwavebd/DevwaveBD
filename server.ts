import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from 'resend';
import dotenv from 'dotenv';
import compression from 'compression';

dotenv.config();

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const RECIPIENT_EMAIL = 'devwavebd@gmail.com';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(compression());
  app.use(express.json());

  // API Route: Contact Form
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, projectType, message } = req.body;

      if (!resend) {
        console.warn("RESEND_API_KEY is not set. Email not sent.");
        return res.status(200).json({ success: true, message: "Demo mode: Email not sent because API key is missing." });
      }

      const { data, error } = await resend.emails.send({
        from: 'Devwave Contact Form <onboarding@resend.dev>',
        to: [RECIPIENT_EMAIL],
        subject: `New Contact Form Submission: ${projectType || 'General'}`,
        html: `
          <h1>New Message from ${name}</h1>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Project Type:</strong> ${projectType || 'General'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      if (error) {
        return res.status(400).json({ success: false, error: error.message });
      }

      res.status(200).json({ success: true, data });
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message });
    }
  });

  // API Route: Newsletter Subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const { email } = req.body;

      if (!resend) {
        console.warn("RESEND_API_KEY is not set. Email not sent.");
        return res.status(200).json({ success: true, message: "Demo mode: Subscription recorded but email not sent." });
      }

      const { data, error } = await resend.emails.send({
        from: 'Devwave Newsletter <onboarding@resend.dev>',
        to: [RECIPIENT_EMAIL],
        subject: `New Newsletter Subscription`,
        html: `
          <h1>New Subscriber!</h1>
          <p><strong>Email:</strong> ${email} has subscribed to the newsletter.</p>
        `,
      });

      if (error) {
        return res.status(400).json({ success: false, error: error.message });
      }

      res.status(200).json({ success: true, data });
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
