import React from 'react';
import { Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
    return (
        <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>No signup required</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Turn vague ideas into
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                    build-ready prompts
                </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Transform your rough website concept into a clear, structured prompt that developers and AI builders can use immediately.
            </p>
        </div>
    );
};
