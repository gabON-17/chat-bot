import { GoogleGenAI } from "@google/genai";

export default class LinkService {
  constructor(
    private readonly appIA: GoogleGenAI = new GoogleGenAI({
      apiKey: process.env.API_KEY,
    })
  ) {}
  async verify(link: string): Promise<string | undefined> {
    link +=
      " Verifique se este link é seguro para acessar (Me diga apenas se e seguro e um breve resumo de 1 linha)";
    const response = await this.appIA.models.generateContent({
      model: "gemini-2.5-flash",
      contents: link,
    });

    return response.text;
  }
}
