import { useState, useCallback } from 'react';
import type { IPromptService } from '../services/IPromptService';
import type { Idea, ImprovedPrompt } from '../types/prompt';

export const usePromptTransformer = (promptService: IPromptService) => {
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
      console.error('Failed to transform idea:', error);
      // Handle error state if needed
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
