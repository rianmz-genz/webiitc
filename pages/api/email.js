// pages/api/sendEmail.js

import { sendEmail } from "@/utils/email";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { email, subject, html } = req.body;

  const result = await sendEmail({ to: email, subject, html: html });

  if (result) {
    res.status(200).json({ message: "Email sent successfully!" });
  } else {
    res.status(500).json({ error: result });
  }
}
