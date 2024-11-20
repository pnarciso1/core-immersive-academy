import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  console.log('Sending email to ContactUs@coreimmersive.com');
  console.log('Name:', data.name);
  console.log('Email:', data.email);
  console.log('Message:', data.message);

  // In a real application, you'd send an email here
  return NextResponse.json({ message: 'Email sent successfully' });
}