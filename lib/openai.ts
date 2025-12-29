import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
})

export async function convertContent(
  inputText: string,
  inputType: string,
  outputType: string
): Promise<string> {
  const prompt = `
    Convert the following ${inputType} content into a ${outputType} format.
    
    Requirements:
    1. Maintain the core message and key points
    2. Optimize for the target platform
    3. Use appropriate tone and structure
    4. Include relevant hashtags/formatting
    5. Keep it engaging and professional
    
    Input content:
    ${inputText}
    
    Converted ${outputType}:
  `

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: "You are a professional content strategist and copywriter. You specialize in repurposing content across different formats while maintaining quality and engagement."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 2000,
    })

    return completion.choices[0]?.message?.content || 'Error generating content'
  } catch (error) {
    console.error('OpenAI API error:', error)
    throw new Error('Failed to convert content')
  }
}

export async function generateMultipleFormats(inputText: string) {
  const formats = ['blog_post', 'twitter_thread', 'linkedin_article', 'newsletter']
  const results: Record<string, string> = {}

  for (const format of formats) {
    try {
      const content = await convertContent(inputText, 'generic', format)
      results[format] = content
    } catch (error) {
      results[format] = 'Failed to generate content'
    }
  }

  return results
}
