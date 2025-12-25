import React from 'react';
import { ArrowRight } from 'lucide-react';

interface IdeaFormProps {
    idea: string;
    setIdea: (idea: string) => void;
    isImproving: boolean;
    onSubmit: (e: React.FormEvent) => void;
}

export const IdeaForm: React.FC<IdeaFormProps> = ({
    idea,
    setIdea,
    isImproving,
    onSubmit,
}) => {
    return (
        <form onSubmit={onSubmit} className="space-y-6">
            <div className="relative">
                <textarea
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    placeholder="e.g., a website for my coffee shop"
                    className="w-full px-6 py-5 text-lg border-2 border-slate-200 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 focus:outline-none transition-all resize-none h-32 shadow-sm"
                    disabled={isImproving}
                />
                {idea.length > 0 && (
                    <div className="absolute bottom-4 right-4 text-sm text-slate-400">
                        {idea.length} characters
                    </div>
                )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <button
                    type="submit"
                    disabled={!idea.trim() || isImproving}
                    className="group w-full sm:w-auto px-8 py-4 bg-linear-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 focus:ring-4 focus:ring-emerald-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-200 flex items-center justify-center gap-2"
                >
                    {isImproving ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Transforming...</span>
                        </>
                    ) : (
                        <>
                            <span>Improve My Idea</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>
            </div>
        </form>
    );
};
