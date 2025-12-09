import { GoogleGenAI } from "@google/genai";

export class AppService {
  constructor(
    private readonly appIA: GoogleGenAI = new GoogleGenAI({
      apiKey: process.env.API_KEY,
    })
  ) {}

  async resolveQuestion(question: string): Promise<string | undefined> {
    const response = await this.appIA.models.generateContent({
      model: "gemini-2.5-flash",
      contents: question,
    });

    return response.text;
  }
}
