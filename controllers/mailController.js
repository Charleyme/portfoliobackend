// routes/mailRoutes.js
import express from "express";
import { Resend } from "resend";
import dotenv from 'dotenv';
const router = express.Router();
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail=  async (req, res) => {
  const { firstname, lastname, email, message } = req.body;

  if (!firstname || !lastname || !email || !message) {
    return res.status(400).json({ success: false, error: "All fields are required" });
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "charlesjiwueze826@gmail.com",
      subject: `Message from ${firstname} ${lastname}`,
      text: `From: ${firstname} ${lastname}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Failed to send message" });
  }
};

export default router;

