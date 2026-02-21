export const getVoices = () => {
    return new Promise((resolve) => {
        let voices = window.speechSynthesis.getVoices();
        if (voices.length) {
            resolve(voices);
            return;
        }
        const voicesChanged = () => {
            voices = window.speechSynthesis.getVoices();
            resolve(voices);
            window.speechSynthesis.removeEventListener('voiceschanged', voicesChanged);
        };
        window.speechSynthesis.addEventListener('voiceschanged', voicesChanged);
    });
};

export const speakText = (text, voiceURI, rate, pitch, onEnd, onError) => {
    if (!('speechSynthesis' in window)) {
        if (onError) onError('Speech synthesis not supported in this browser.');
        return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    if (!text.trim()) {
        if (onError) onError('Please enter some text to speak.');
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text);

    const voices = window.speechSynthesis.getVoices();
    const selectedVoice = voices.find(v => v.voiceURI === voiceURI);
    if (selectedVoice) {
        utterance.voice = selectedVoice;
    }

    // rate is typically 0.1 to 10 (default 1)
    utterance.rate = rate;

    // pitch mapping: user [-10, 10] -> api [0, 2]
    // -10 -> 0.0, 0 -> 1.0, 10 -> 2.0
    utterance.pitch = (pitch + 10) / 10;

    if (onEnd) utterance.onend = onEnd;
    if (onError) utterance.onerror = onError;

    window.speechSynthesis.speak(utterance);
};

export const stopSpeech = () => {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
};
