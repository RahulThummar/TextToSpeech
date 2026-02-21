import React from 'react';
import SEO from '../components/SEO';
import { TextToSpeechFeature } from '../features/textToSpeech';

const Home = () => {
    return (
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <SEO
                title="Text to Speech (Offline & Private)"
                description="Convert text to speech directly in your browser using system voices. No uploads. No tracking."
                keywords="text to speech, tts, local speech, browser tts, offline tts, speech synthesis"
                canonical="/"
            />

            <div className="text-center mb-12 animate-fade-in-down">
                <h1 className="text-4xl md:text-6xl font-extrabold pb-2 text-slate-900 mb-4 tracking-tight" style={{
                    background: 'linear-gradient(135deg, #0f172a 0%, #0369a1 35%, #7e22ce 65%, #c2410c 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}>
                    Text to Speech
                </h1>
                <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    Convert text into natural speech (100% local)
                </p>
            </div>

            {/* TTS Main Tool */}
            <div className="animate-fade-in-up max-w-5xl mx-auto">
                <TextToSpeechFeature />
            </div>
        </div>
    );
};

export default Home;
