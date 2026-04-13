"use server";

import { resend } from "@/lib/resend";
import React from "react";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  port?: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const { name, email, phone, port, message } = data;

  if (!name || !email || !message) {
    return { error: "Missing required fields (name, email, message)." };
  }

  try {
    const { data: resData, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Resend standard sender for unverified domains
      to: 'sultanfleetserve@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #003366; border-bottom: 2px solid #e4a04f; padding-bottom: 10px;">New Inquiry: Sultan Fleet Serve</h2>
          
          <div style="margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Arrival Port:</strong> ${port || 'Not provided'}</p>
          </div>

          <div style="margin-top: 20px; background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #e4a04f;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin-top: 30px; font-size: 12px; color: #777; border-top: 1px solid #eee; padding-top: 10px;">
            This email was sent via the contact form on your website.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { error: error.message };
    }

    return { success: true, data: resData };
  } catch (err: any) {
    console.error("Email sending failed:", err);
    return { error: err.message || "Failed to send email." };
  }
}
