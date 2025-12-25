export interface ImprovedPrompt {
  id: string;
  originalIdea: string;
  content: string;
  createdAt: Date;
}

export type Idea = string;

export interface ApiError {
  error: string;
}
