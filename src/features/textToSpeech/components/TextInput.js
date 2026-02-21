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
        <div className="flex flex-col w-full h-full bg-white relative">
            {/* Editor Header */}
            <div className="flex justify-between items-center px-6 py-4 bg-white border-b border-slate-100">
                <div className="flex items-center space-x-2 py-1">
                    <span className="w-3 h-3 rounded-full bg-rose-400 shadow-sm shadow-rose-200"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400 shadow-sm shadow-amber-200"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm shadow-emerald-200"></span>
                    <span className="ml-4 text-xs font-bold text-slate-400 uppercase tracking-wider pl-2">Speech Studio</span>
                </div>
                <div className="flex items-center space-x-4">
                    <span className={`text-[11px] font-bold tracking-wide uppercase px-2 py-1 rounded-md ${currentLength >= maxLength ? 'bg-red-50 text-red-500' : 'bg-slate-50 text-slate-400'}`}>
                        {currentLength} / {maxLength}
                    </span>
                </div>
            </div>

            {/* Text Area */}
            <div className="relative group">
                <textarea
                    id="tts-input"
                    name="tts-input"
                    value={text}
                    onChange={handleChange}
                    disabled={disabled}
                    placeholder="Enter or paste your text here. The natural voices will read it flawlessly..."
                    className="w-full min-h-[220px] p-6 text-slate-700 bg-transparent focus:outline-none resize-y disabled:opacity-50 text-lg leading-relaxed placeholder-slate-300"
                />

                {/* Floating Action Bar */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        onClick={handleClear}
                        disabled={disabled || text.length === 0}
                        title="Clear Text"
                        className="p-2 text-slate-400 bg-white shadow-sm border border-slate-100 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-all disabled:opacity-0"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                    <button
                        onClick={handlePaste}
                        disabled={disabled}
                        title="Paste Text"
                        className="p-2 text-slate-400 bg-white shadow-sm border border-slate-100 hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all disabled:opacity-0"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default TextInput;
