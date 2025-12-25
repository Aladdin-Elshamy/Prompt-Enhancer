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
                    { role: "system", content: "You are a professional prompt engineer. Improve the following user idea into a clear, concise, and effective prompt for an LLM. note if the user didn't provide any idea, like saying hi or some writing numbers something like that greet them and ask them to write an idea to enahnce" },
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
