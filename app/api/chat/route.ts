import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    const result = streamText({
      model: openai("gpt-4-turbo"),
      messages,
      system:
        "You are a helpful assistant specializing in student health and wellness. Provide accurate and supportive information, but always recommend consulting with a healthcare professional for specific medical advice.",
    })
    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in chat route:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

