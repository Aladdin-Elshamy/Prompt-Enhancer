import React from 'react';
import { Header } from '../components/Header';
import { IdeaForm } from '../components/IdeaForm';
import { PromptResult } from '../components/PromptResult';
import { Features } from '../components/Features';
import { Layout } from '../components/common/Layout';
import { usePromptTransformer } from '../hooks/usePromptTransformer';
import { PromptService } from '../services/PromptService';

const promptService = new PromptService();

export const HomePage: React.FC = () => {
    const {
        idea,
        setIdea,
        isImproving,
        improvedPrompt,
        transformIdea,
        reset,
    } = usePromptTransformer(promptService);

    return (
        <Layout>
            <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
                <Header />
            
                {!improvedPrompt ? (
                    <IdeaForm
                        idea={idea}
                        setIdea={setIdea}
                        isImproving={isImproving}
                        onSubmit={transformIdea}
                    />
                ) : (
                    <PromptResult
                        prompt={improvedPrompt}
                        onReset={reset}
                    />
                )}

                <Features />
            </div>
        </Layout>
    );
};
