import { useState, useEffect, useCallback } from 'react';
import { getVoices, speakText, stopSpeech } from '../utils/speechEngine';

export const useTextToSpeech = () => {
    const [text, setText] = useState('');
    const [voices, setVoices] = useState([]);
    const [selectedVoice, setSelectedVoice] = useState('');
    const [speed, setSpeed] = useState(1);
    const [pitch, setPitch] = useState(0); // -10 to 10
    const [isPlaying, setIsPlaying] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const initVoices = async () => {
            const availableVoices = await getVoices();

            // Filter natural voices only
            const naturalVoices = availableVoices.filter(voice => {
                const name = voice.name.toLowerCase();
                // Exclusions
                if (name.includes('compact') || name.includes('espeak') || name.includes('festival') || name.includes('mbrola') || name.includes('robot')) {
                    return false;
                }
                // Inclusions
                if (voice.localService || name.includes('natural') || name.includes('neural') || name.includes('google') || name.includes('microsoft')) {
                    return true;
                }
                return false;
            });

            // Fallback to all voices if filtering leaves none
            const finalVoices = naturalVoices.length > 0 ? naturalVoices : availableVoices;

            setVoices(finalVoices);
            if (finalVoices.length > 0) {
                // Try to pick a default english voice if available
                const defaultVoice = finalVoices.find(v => v.lang.includes('en-') && v.default)
                    || finalVoices.find(v => v.lang.includes('en-'))
                    || finalVoices[0];
                setSelectedVoice(defaultVoice.voiceURI);
            }
        };
        initVoices();
    }, []);

    useEffect(() => {
        // Cleanup if unmounted while playing
        return () => {
            stopSpeech();
        };
    }, []);

    const handlePlay = useCallback(() => {
        setError('');
        setIsPlaying(true);
        speakText(
            text,
            selectedVoice,
            speed,
            pitch,
            () => {
                setIsPlaying(false);
            },
            (err) => {
                setIsPlaying(false);
                setError(typeof err === 'string' ? err : 'An error occurred during speech synthesis.');
            }
        );
    }, [text, selectedVoice, speed, pitch]);

    const handleStop = useCallback(() => {
        stopSpeech();
        setIsPlaying(false);
    }, []);

    const handlePreview = useCallback((voiceURI) => {
        stopSpeech(); // Stop any active preview/playback
        const voiceObj = voices.find(v => v.voiceURI === voiceURI);
        const name = voiceObj ? voiceObj.name.split(' ')[0] : 'a natural voice';
        speakText(
            `Hi, I'm ${name}. I'll read your text naturally.`,
            voiceURI,
            1, // normal speed
            0, // normal pitch
            null,
            null
        );
    }, [voices]);

    return {
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
    };
};
