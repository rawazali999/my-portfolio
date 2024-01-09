import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { fullName, email, message } = await req.json();

  console.log(fullName, email, message);

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "rawazali988@gmail.com",
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "rawazali988@gmail.com",
      subject: "New Contact from Portfolio",
      html: `
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Email failed to send" });
  }
}
