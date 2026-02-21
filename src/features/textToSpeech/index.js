import React from 'react';
import TextInput from './components/TextInput';
import VoiceSelector from './components/VoiceSelector';
import Controls from './components/Controls';
import ActionButtons from './components/ActionButtons';
import { useTextToSpeech } from './hooks/useTextToSpeech';

export const TextToSpeechFeature = () => {
    const {
        text,
        setText,
        voices,
        selectedVoice,
        setSelectedVoice,
        speed,
        setSpeed,
        pitch,
        setPitch,
        isPlaying,
        error,
        handlePlay,
        handleStop,
        handlePreview
    } = useTextToSpeech();

    return (
        <div className="w-full max-w-5xl mx-auto space-y-10">

            {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-xl shadow-sm animate-fade-in-down mx-4 sm:mx-0">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-red-700 font-medium">{error}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Studio Editor Card */}
            <div className="bg-white/90 backdrop-blur-2xl border border-slate-200 shadow-xl shadow-slate-200/50 rounded-[2rem] overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-2xl">
                {/* Input Area */}
                <div className="flex-grow">
                    <TextInput text={text} setText={setText} disabled={isPlaying} maxLength={3000} />
                </div>

                {/* Tools Footer */}
                <div className="bg-slate-50/80 border-t border-slate-100 p-6 sm:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="w-full md:w-2/3">
                            <Controls
                                speed={speed}
                                setSpeed={setSpeed}
                                pitch={pitch}
                                setPitch={setPitch}
                                disabled={isPlaying}
                            />
                        </div>
                        <div className="w-full md:w-1/3 flex md:justify-end border-t md:border-t-0 border-slate-200 pt-6 md:pt-0">
                            <ActionButtons
                                isPlaying={isPlaying}
                                handlePlay={handlePlay}
                                handleStop={handleStop}
                                textLength={text.trim().length}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Voice Cards Container */}
            <div className="bg-white/90 backdrop-blur-2xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6 sm:p-8 rounded-[2rem] transition-all duration-500 hover:shadow-2xl">
                <VoiceSelector
                    voices={voices}
                    selectedVoice={selectedVoice}
                    setSelectedVoice={setSelectedVoice}
                    handlePreview={handlePreview}
                    disabled={isPlaying}
                />
            </div>

        </div>
    );
};
