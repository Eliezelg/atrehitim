import type { APIRoute } from 'astro';
import { sendContactEmail } from '../../utils/sendEmail';

export const post: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.message) {
      return new Response(JSON.stringify({
        error: 'All fields are required'
      }), { status: 400 });
    }

    await sendContactEmail(data);

    return new Response(JSON.stringify({
      message: 'Email sent successfully'
    }), { status: 200 });
  } catch (error) {
    console.error('Error in contact API:', error);
    return new Response(JSON.stringify({
      error: 'Failed to send email'
    }), { status: 500 });
  }
};