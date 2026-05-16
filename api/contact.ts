import { Resend } from 'resend';

export const config = {
  runtime: 'edge',
};

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const RECIPIENT_EMAIL = 'devwavebd@gmail.com';

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  try {
    const { name, email, projectType, message } = await req.json();

    if (!resend) {
      return new Response(JSON.stringify({ success: false, error: 'RESEND_API_KEY is not configured' }), { status: 500 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Devwave Contact Form <onboarding@resend.dev>',
      to: [RECIPIENT_EMAIL],
      subject: `New Contact Form Submission: ${projectType}`,
      html: `
        <h1>New Message from ${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return new Response(JSON.stringify({ success: false, error: error.message }), { status: 400 });
    }

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
