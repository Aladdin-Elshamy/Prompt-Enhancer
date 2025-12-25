import { useState, useCallback } from 'react';
import type { ApiError, Idea, ImprovedPrompt } from '../types/prompt';
import { promptService } from '../services/PromptService';
import { handleToast } from '../functions/handleToast';
import type { AxiosError } from 'axios';

export const usePromptTransformer = () => {
  const [idea, setIdea] = useState<Idea>('');
  const [isImproving, setIsImproving] = useState(false);
  const [improvedPrompt, setImprovedPrompt] = useState<ImprovedPrompt | null>(null);

  const transformIdea = useCallback(async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!idea.trim() || isImproving) return;

    setIsImproving(true);
    try {
      const result = await promptService.transform(idea);
      setImprovedPrompt(result);
    } catch (error) {
      const axiosError = error as AxiosError<ApiError>;
      console.error('Faild to transform idea:', error);
      handleToast(axiosError.response?.data?.error || "An unexpected error occurred", "error");
    } finally {
      setIsImproving(false);
    }
  }, [idea, isImproving, promptService]);

  const reset = useCallback(() => {
    setIdea('');
    setImprovedPrompt(null);
  }, []);

  return {
    idea,
    setIdea,
    isImproving,
    improvedPrompt,
    transformIdea,
    reset,
  };
};
