import React from 'react';

const TextInput = ({ text, setText, maxLength = 3000, disabled = false }) => {
    const handleChange = (e) => {
        if (e.target.value.length <= maxLength) {
            setText(e.target.value);
        }
    };

    const handleClear = () => setText('');
    const handlePaste = async () => {
        try {
            const clipboardText = await navigator.clipboard.readText();
            const newText = text + clipboardText;
            if (newText.length <= maxLength) {
                setText(newText);
            } else {
                setText(newText.slice(0, maxLength));
            }
        } catch (err) {
            console.error('Failed to read clipboard contents: ', err);
        }
    };

    const currentLength = text.length;

    return (
        <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center px-1">
                <label htmlFor="tts-input" className="text-sm font-semibold text-slate-700">
                    Text Content
                </label>
                <div className="flex items-center space-x-4">
                    <span className={`text-xs font-medium ${currentLength >= maxLength ? 'text-red-500' : 'text-slate-500'}`}>
                        {currentLength} / {maxLength}
                    </span>
                </div>
            </div>

            <textarea
                id="tts-input"
                name="tts-input"
                value={text}
                onChange={handleChange}
                disabled={disabled}
                placeholder="Type or paste the text here to convert it into natural sounding speech..."
                className="w-full min-h-[200px] p-5 bg-white border border-slate-200 text-slate-700 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-y disabled:opacity-50"
            />

            <div className="flex justify-end space-x-2 px-1 pt-1">
                <button
                    onClick={handleClear}
                    disabled={disabled || text.length === 0}
                    className="px-3 py-1.5 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-1"
                >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    <span>Clear</span>
                </button>
                <button
                    onClick={handlePaste}
                    disabled={disabled}
                    className="px-3 py-1.5 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-1"
                >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                    <span>Paste</span>
                </button>
            </div>

        </div>
    );
};

export default TextInput;
