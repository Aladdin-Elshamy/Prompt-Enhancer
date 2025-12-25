import axios from 'axios';
import type { Idea, ImprovedPrompt } from '../types/prompt';
import type { IPromptService } from './IPromptService';

const API_BASE_URL = 'https://prompt-enhancer-api.vercel.app/api';

class PromptService implements IPromptService {
  async transform(idea: Idea): Promise<ImprovedPrompt> {
    try {
      const response = await axios.post(`${API_BASE_URL}/transform`, {
        idea
      });

      if (response.status !== 200) {
        throw new Error('Failed to transform idea');
      }

      const data = response.data;
      return {
        ...data,
        createdAt: new Date(data.createdAt),
      };
    } catch (error) {
      throw error;
    }
  }
}

export const promptService = new PromptService();