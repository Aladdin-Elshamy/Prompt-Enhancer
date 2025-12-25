import type { IPromptService } from './IPromptService';
import type { Idea, ImprovedPrompt } from '../types/prompt';

export class MockPromptService implements IPromptService {
  async transform(idea: Idea): Promise<ImprovedPrompt> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const content = `Build a ${idea.trim()} with the following specifications:

Purpose: [Clearly defined purpose based on user input]
Target Audience: [Specific user demographics and needs]
Core Features:
  • [Feature 1 with implementation detail]
  • [Feature 2 with implementation detail]
  • [Feature 3 with implementation detail]

Pages Required:
  1. Homepage - [Description]
  2. [Additional pages based on needs]

Design Style: Modern, clean interface with [specific style attributes]
Technical Requirements: Responsive design, accessibility standards, performance optimization`;

    return {
      id: crypto.randomUUID(),
      originalIdea: idea,
      content,
      createdAt: new Date(),
    };
  }
}
