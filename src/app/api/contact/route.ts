import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email Template for the Admin
    const adminMailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Admin receives the email
      subject: `New Inquiry from ${name} - HopeBridge Contact Form`,
      replyTo: email,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #064e3b; padding: 32px 24px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">New Contact Inquiry</h1>
            <p style="color: #d1fae5; margin: 8px 0 0 0; font-size: 14px;">You have received a new message from the website contact form.</p>
          </div>
          
          <div style="padding: 32px 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">
                  <span style="font-weight: 600; color: #374151; font-size: 14px; display: block; margin-bottom: 4px;">Full Name</span>
                  <span style="color: #111827; font-size: 16px;">${name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">
                  <span style="font-weight: 600; color: #374151; font-size: 14px; display: block; margin-bottom: 4px;">Email Address</span>
                  <a href="mailto:${email}" style="color: #059669; font-size: 16px; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">
                  <span style="font-weight: 600; color: #374151; font-size: 14px; display: block; margin-bottom: 4px;">Phone Number</span>
                  <span style="color: #111827; font-size: 16px;">${phone || "Not provided"}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 24px 0 0 0;">
                  <span style="font-weight: 600; color: #374151; font-size: 14px; display: block; margin-bottom: 8px;">Message</span>
                  <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; color: #1f2937; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
                </td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 16px 24px; text-align: center;">
            <p style="color: #6b7280; margin: 0; font-size: 12px;">This email was sent automatically from your website's contact form.</p>
          </div>
        </div>
      `,
    };

    // Email Template for the User (Auto-Reply)
    const userMailOptions = {
      from: `"HopeBridge Foundation" <${process.env.EMAIL_USER}>`,
      to: email, // User receives the auto-reply
      subject: `We have received your message, ${name}!`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #064e3b; padding: 40px 24px; text-align: center; position: relative;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">HopeBridge.</h1>
          </div>
          
          <div style="padding: 40px 32px;">
            <h2 style="color: #111827; margin: 0 0 16px 0; font-size: 20px; font-weight: 700;">Hello ${name},</h2>
            <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
              Thank you for reaching out to us! We have successfully received your message and our team is currently reviewing it.
            </p>
            
            <div style="background-color: #ecfdf5; border-left: 4px solid #10b981; padding: 16px 20px; border-radius: 0 8px 8px 0; margin-bottom: 24px;">
              <p style="color: #065f46; margin: 0; font-size: 15px; font-weight: 500;">
                You can expect a response from our team within the next <strong style="color: #047857;">24 hours</strong>.
              </p>
            </div>
            
            <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 32px 0;">
              In the meantime, feel free to explore our website and learn more about our ongoing community initiatives, volunteer programs, and how we are making a difference together.
            </p>
            
            <div style="text-align: center;">
              <a href="https://ngo-eight-sigma.vercel.app/" style="display: inline-block; background-color: #064e3b; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 15px; padding: 14px 28px; border-radius: 9999px;">Visit Our Website</a>
            </div>
          </div>
          
          <div style="background-color: #f9fafb; border-top: 1px solid #e5e7eb; padding: 24px; text-align: center;">
            <p style="color: #6b7280; margin: 0 0 8px 0; font-size: 13px;">Warm regards,</p>
            <p style="color: #374151; font-weight: 600; margin: 0 0 16px 0; font-size: 14px;">The HopeBridge Team</p>
            <p style="color: #9ca3af; margin: 0; font-size: 12px;">This is an automated message, please do not reply directly to this email.</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email.", details: error?.message || String(error) },
      { status: 500 }
    );
  }
}
