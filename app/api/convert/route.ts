import { NextRequest, NextResponse } from 'next/server'
import { convertContent } from '@/lib/openai'

export async function POST(request: NextRequest) {
  try {
    const { inputText, inputType, outputType } = await request.json()

    if (!inputText || !inputType || !outputType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate input length
    if (inputText.length > 10000) {
      return NextResponse.json(
        { error: 'Input text too long (max 10000 characters)' },
        { status: 400 }
      )
    }

    // Convert content using OpenAI
    const convertedContent = await convertContent(inputText, inputType, outputType)

    return NextResponse.json({
      success: true,
      content: convertedContent,
      metadata: {
        inputLength: inputText.length,
        outputLength: convertedContent.length,
        inputType,
        outputType,
        timestamp: new Date().toISOString(),
      }
    })

  } catch (error) {
    console.error('Conversion error:', error)
    return NextResponse.json(
      { error: 'Failed to convert content' },
      { status: 500 }
    )
  }
}
