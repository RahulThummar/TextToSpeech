import React from 'react';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 text-slate-700 space-y-8 animate-fade-in-up">
            <SEO
                title="Privacy Policy"
                description="Privacy policy for Speech Project."
                canonical="/privacy-policy"
            />
            <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
                <p className="p-6 bg-white/50 border border-slate-200 rounded-2xl">
                    We take your privacy seriously. More details coming soon.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
