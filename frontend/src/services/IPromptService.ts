import type { Idea, ImprovedPrompt } from '../types/prompt';

export interface IPromptService {
  transform(idea: Idea): Promise<ImprovedPrompt>;
}
