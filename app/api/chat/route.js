import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const response = await client.messages.create({
      model: 'claude-opus-4-5',
      max_tokens: 1024,
      system: "You are a helpful, thoughtful assistant on Luminary — a personal blog and ideas space. Be concise, warm, and intellectually engaging.",
      messages,
    });

    return Response.json({ content: response.content[0].text });
  } catch (err) {
    console.error(err);
    return Response.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
