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
        <div className="w-full">
            <div className="bg-white/80 backdrop-blur-xl border border-slate-200 shadow-2xl rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 -mx-10 -my-10 w-40 h-40 bg-gradient-to-br from-orange-400 to-purple-600 rounded-full opacity-10 blur-3xl pointer-events-none"></div>

                <div className="relative z-10 max-w-4xl mx-auto space-y-12">

                    {/* Section 1: Text Content */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-800">Text Content</h2>

                        {error && (
                            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-xl shadow-sm">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm text-red-700 font-medium">{error}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="bg-slate-50 border border-slate-100 p-5 sm:p-6 rounded-2xl shadow-sm space-y-6">
                            <TextInput text={text} setText={setText} disabled={isPlaying} maxLength={3000} />

                            <hr className="border-slate-200" />

                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                                <div className="w-full lg:w-2/3">
                                    <Controls
                                        speed={speed}
                                        setSpeed={setSpeed}
                                        pitch={pitch}
                                        setPitch={setPitch}
                                        disabled={isPlaying}
                                    />
                                </div>
                                <div className="w-full lg:w-1/3 flex lg:justify-end">
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

                    {/* Section 2: Voice Selection */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-slate-800">Voice Selection</h2>
                        <div className="bg-slate-50 border border-slate-100 p-5 sm:p-6 rounded-2xl shadow-sm">
                            <VoiceSelector
                                voices={voices}
                                selectedVoice={selectedVoice}
                                setSelectedVoice={setSelectedVoice}
                                handlePreview={handlePreview}
                                disabled={isPlaying}
                            />
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};
