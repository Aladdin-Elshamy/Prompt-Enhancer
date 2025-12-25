import React from 'react';
import { Check } from 'lucide-react';
import type { ImprovedPrompt } from '../types/prompt';
import { useCopy } from '../hooks/useCopy';

interface PromptResultProps {
    prompt: ImprovedPrompt;
    onReset: () => void;
}

export const PromptResult: React.FC<PromptResultProps> = ({
    prompt,
    onReset,
}) => {
    const { isCopied, copyToClipboard } = useCopy();
    return (
        <div className="space-y-6 animate-fadeIn">
            <div className="bg-white border-2 border-emerald-200 rounded-2xl p-8 shadow-lg">
                <div className='flex justify-between items-center mb-4'>
                    <div className="flex items-center gap-2 text-emerald-600 font-semibold ">
                        <Check className="w-5 h-5" />
                        <span>Improved Prompt</span>
                    </div>
                    <button
                        onClick={() => {
                            copyToClipboard(prompt.content);
                        }}
                        className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
                    >
                        {isCopied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
                <div className="relative">
                    <pre className="text-slate-700 whitespace-pre-wrap font-mono text-sm leading-relaxed bg-slate-50 p-6 rounded-xl overflow-x-auto">
                        {prompt.content}
                    </pre>


                </div>
                <div className='flex justify-between items-center mb-4 mt-4'>
                    <div className="flex items-center gap-2 pl-4 text-slate-500 font-semibold ">
                        <span>Original Idea</span>
                    </div>
                </div>
                <div className="relative">
                    <pre className="text-slate-700 whitespace-pre-wrap font-mono text-sm leading-relaxed bg-slate-50 p-6 rounded-xl overflow-x-auto">
                        {prompt.originalIdea}
                    </pre>


                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                    onClick={onReset}
                    className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200"
                >
                    Try Another Idea
                </button>

            </div>
        </div>
    );
};
