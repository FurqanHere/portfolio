import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, "data", "messages.json");

const app = express();
app.use(cors());
app.use(express.json());

// --- Email Configuration ---
// Create a .env file in the server directory with these variables:
// SMTP_HOST=smtp.gmail.com
// SMTP_PORT=587
// SMTP_USER=your-email@gmail.com
// SMTP_PASS=your-app-password
// RECIPIENT_EMAIL=furqanatiq123@gmail.com
const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
const SMTP_PORT = parseInt(process.env.SMTP_PORT) || 587;
const SMTP_USER = process.env.SMTP_USER || "";
const SMTP_PASS = process.env.SMTP_PASS || "";
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "furqanatiq123@gmail.com";

let mailTransporter = null;
if (SMTP_USER && SMTP_PASS) {
  mailTransporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

function readMessages() {
  if (!fs.existsSync(DATA_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  } catch {
    return [];
  }
}

function writeMessages(messages) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(messages, null, 2));
}

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const entry = {
    name,
    email,
    message,
    receivedAt: new Date().toISOString(),
  };

  // Save to local file
  const messages = readMessages();
  messages.push(entry);
  writeMessages(messages);

  // Send email notification
  if (mailTransporter) {
    try {
      const mailOptions = {
        from: SMTP_USER,
        to: RECIPIENT_EMAIL,
        subject: `New Contact Form Submission from ${name}`,
        text: `
You received a new message from your portfolio website:

Name: ${name}
Email: ${email}
Message: ${message}
        `,
        html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
  <p><strong>Message:</strong></p>
  <p style="padding: 15px; background: #f5f5f5; border-radius: 5px;">${message}</p>
</div>
        `,
      };
      await mailTransporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }

  res.status(200).json({ ok: true });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Portfolio API listening on http://localhost:${PORT}`);
  if (!SMTP_USER || !SMTP_PASS) {
    console.log("⚠️  Email notifications are disabled - set SMTP_USER and SMTP_PASS in a .env file to enable.");
  }
});
