import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import dotenv from "dotenv";

dotenv.config();

const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.github.ai/inference";
const modelName = "openai/gpt-4o";

export const handleTransform = async (req, res) => {
    const { idea } = req.body;

    if (!idea) {
        return res.status(400).json({ error: "Idea is required" });
    }

    try {
        const client = ModelClient(
            endpoint,
            new AzureKeyCredential(token)
        );

        const response = await client.path("/chat/completions").post({
            body: {
                messages: [
                    { role: "system", content: `You are a professional prompt engineer. Your task is to improve prompts.

                        RULES:
                        1. If user provides a prompt idea or task description, IMMEDIATELY transform it into an enhanced, detailed prompt
                        2. Do NOT ask clarifying questions - make reasonable assumptions
                        3. Do NOT chat or have conversations
                        4. Output ONLY the improved prompt, nothing else
                        5. If input is a greeting (hi, hello) or nonsense, respond with: "Please provide a prompt idea or task description that you'd like me to enhance."

                        ENHANCEMENT GUIDELINES:
                        - Make prompts clear, specific, and actionable
                        - Add relevant context and constraints
                        - Structure complex prompts with sections
                        - Include output format specifications when helpful

                        Now enhance this prompt idea:` },
                    { role: "user", content: idea }
                ],
                model: modelName
            }
        });

        if (isUnexpected(response)) {
            throw response.body.error;
        }

        const improvedContent = response.body.choices[0].message.content;

        res.json({
            id: Date.now().toString(),
            originalIdea: idea,
            content: improvedContent,
            createdAt: new Date().toISOString()
        });
    } catch (err) {
        console.error("AI Transformation error:", err);
        res.status(500).json({ error: "Failed to transform idea into improved prompt" });
    }
}
