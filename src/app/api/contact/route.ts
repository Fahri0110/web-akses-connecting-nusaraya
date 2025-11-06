import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, message } = body

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Log the contact form submission
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      company,
      service,
      message,
      timestamp: new Date().toISOString()
    })

    // Here you could:
    // 1. Send email using a service like SendGrid or Resend
    // 2. Save to database using Prisma
    // 3. Send notification to Slack/Teams
    // 4. Use ZAI to process the inquiry

    // For now, we'll just simulate a successful submission
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate processing time

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        name,
        email,
        service,
        submittedAt: new Date().toISOString()
      }
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}