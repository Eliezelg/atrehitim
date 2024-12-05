import sgMail from '@sendgrid/mail';

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
  productName?: string;
}) {
  if (!import.meta.env.SENDGRID_API_KEY) {
    console.error('SendGrid API key is not configured');
    throw new Error('Email service not configured');
  }

  sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY);

  const msg = {
    to: 'info@atrehitim.co.il', // Replace with your email
    from: 'noreply@atrehitim.co.il', // Replace with your verified sender
    subject: `New Contact Form Submission${data.productName ? ` - ${data.productName}` : ''}`,
    text: `
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      Message: ${data.message}
      ${data.productName ? `Product: ${data.productName}` : ''}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Message:</strong> ${data.message}</p>
      ${data.productName ? `<p><strong>Product:</strong> ${data.productName}</p>` : ''}
    `,
  };

  try {
    await sgMail.send(msg);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}