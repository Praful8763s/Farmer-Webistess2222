import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"
import { NextResponse } from "next/server"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Add context about the Local Farmer Marketplace to the system message
    const systemMessage = {
      role: "system",
      content:
        "You are a helpful assistant for the Local Farmer Marketplace, a platform connecting local farmers with consumers. You can help with questions about organic produce, farming practices, ordering, delivery options, and more. Be friendly, informative, and promote sustainable agriculture.",
    }

    // Add the system message if it doesn't exist
    const updatedMessages = messages[0]?.role === "system" ? messages : [systemMessage, ...messages]

    const result = streamText({
      model: openai("gpt-4o"),
      messages: updatedMessages,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: "Failed to process chat request" }, { status: 500 })
  }
}
