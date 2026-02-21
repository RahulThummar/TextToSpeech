import React from 'react';
import SEO from '../components/SEO';

const Terms = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 text-slate-700 space-y-8 animate-fade-in-up">
            <SEO
                title="Terms of Use"
                description="Terms of Use for Speech Project."
                canonical="/terms"
            />
            <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-6">Terms of Use</h1>
                <p className="p-6 bg-white/50 border border-slate-200 rounded-2xl">
                    Terms of use information coming soon.
                </p>
            </div>
        </div>
    );
};

export default Terms;
