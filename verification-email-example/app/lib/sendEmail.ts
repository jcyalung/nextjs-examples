import nodemailer from 'nodemailer';

export async function sendVerificationEmail(to: string, link: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.TEST_EMAIL,
      pass: process.env.TEST_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: 'Verify your email',
    html: `<p>Click <a href="${link}">here</a> to verify your email.</p>`,
  });
}
