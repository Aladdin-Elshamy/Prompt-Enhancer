import React from 'react';

export const Features: React.FC = () => {
    return (
        <div className="mt-16 pt-12 border-t border-slate-200">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
                <div>
                    <div className="text-3xl font-bold text-slate-900 mb-2">Instant</div>
                    <div className="text-slate-600">Get results in seconds</div>
                </div>
                <div>
                    <div className="text-3xl font-bold text-slate-900 mb-2">Clear</div>
                    <div className="text-slate-600">Structured & specific output</div>
                </div>
                <div>
                    <div className="text-3xl font-bold text-slate-900 mb-2">Ready</div>
                    <div className="text-slate-600">Copy & paste to build</div>
                </div>
            </div>
        </div>
    );
};
