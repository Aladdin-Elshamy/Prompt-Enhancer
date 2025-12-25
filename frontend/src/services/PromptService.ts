import axios, { AxiosError } from 'axios';
import type { Idea, ImprovedPrompt, ApiError } from '../types/prompt';
import type { IPromptService } from './IPromptService';
import { handleToast } from '../functions/handleToast';

const API_BASE_URL = 'https://prompt-enhancer-api.vercel.app/api';

export class PromptService implements IPromptService {
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
        const axiosError = error as AxiosError<ApiError>;
      console.error('PromptService error:', error);
      handleToast(axiosError.response?.data?.error || "An unexpected error occurred", "error");
      throw error;
    }
  }
}
