import React, { useMemo, useState } from 'react';

const VoiceSelector = ({ voices, selectedVoice, setSelectedVoice, handlePreview, disabled }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('All');

    // Grouping logic
    const groupedVoices = useMemo(() => {
        const groups = { All: [] };
        voices.forEach(voice => {
            const langCode = voice.lang || 'en-US';
            const langName = new Intl.DisplayNames(['en'], { type: 'language' }).of(langCode.split('-')[0]) || langCode;

            if (!groups[langName]) {
                groups[langName] = [];
            }
            groups[langName].push(voice);
            groups.All.push(voice);
        });
        return groups;
    }, [voices]);

    const tabs = Object.keys(groupedVoices).sort((a, b) => a === 'All' ? -1 : a.localeCompare(b));

    // Filtering logic
    const displayedVoices = (groupedVoices[activeTab] || []).filter(voice => {
        const search = searchQuery.toLowerCase();
        return voice.name.toLowerCase().includes(search) || voice.lang.toLowerCase().includes(search);
    });

    const resolveGender = (name) => {
        const lowerName = name.toLowerCase();
        if (lowerName.includes('female') || lowerName.includes('woman') || lowerName.includes('girl')) return 'Female';
        if (lowerName.includes('male') || lowerName.includes('man') || lowerName.includes('boy')) return 'Male';
        return 'Auto'; // Default since many APIs don't specify
    };

    return (
        <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center px-1">
                <label className="text-sm font-semibold text-slate-700">Select Voice</label>
                <span className="text-xs font-medium text-slate-500">{displayedVoices.length} voices</span>
            </div>

            {/* Search and Tabs */}
            <div className="space-y-3">
                <div className="relative">
                    <svg className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search voices..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                        disabled={disabled}
                    />
                </div>

                <div className="flex overflow-x-auto pb-2 space-x-2 scrollbar-hide">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            disabled={disabled}
                            className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition-all ${activeTab === tab
                                ? 'bg-slate-800 text-white shadow-md'
                                : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Voice Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 max-h-[380px] overflow-y-auto pr-2 pb-2 custom-scrollbar">
                {voices.length === 0 ? (
                    <div className="col-span-full py-8 text-center text-slate-500 text-sm">Loading natural voices...</div>
                ) : displayedVoices.length === 0 ? (
                    <div className="col-span-full py-8 text-center text-slate-500 text-sm">No voices found.</div>
                ) : (
                    displayedVoices.map((voice) => {
                        const isSelected = selectedVoice === voice.voiceURI;
                        const gender = resolveGender(voice.name);

                        return (
                            <div
                                key={voice.voiceURI}
                                onClick={() => !disabled && setSelectedVoice(voice.voiceURI)}
                                className={`relative group p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'
                                    } ${isSelected
                                        ? 'border-orange-500 bg-orange-50 shadow-sm'
                                        : 'border-slate-100 bg-white hover:border-slate-200'
                                    }`}
                            >
                                {isSelected && (
                                    <div className="absolute top-3 right-3 text-orange-500">
                                        <svg className="w-5 h-5 bg-white rounded-full" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}

                                <div className="pr-6">
                                    <h4 className="font-bold text-slate-800 text-sm mb-1 truncate" title={voice.name}>
                                        {voice.name.replace(/(Microsoft|Google|Apple|Natural|Neural|Online|\(Natural\))/gi, '').trim() || voice.name.split(' ')[0]}
                                    </h4>

                                    <div className="flex items-center space-x-2 mb-3 shrink-0 flex-wrap gap-y-1">
                                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600">
                                            {voice.lang}
                                        </span>
                                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium ${gender === 'Female' ? 'bg-pink-100 text-pink-700' : gender === 'Male' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>
                                            {gender}
                                        </span>
                                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-green-100 text-green-700">
                                            Natural
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handlePreview(voice.voiceURI);
                                    }}
                                    disabled={disabled}
                                    className="w-full flex items-center justify-center space-x-2 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100 hover:text-orange-600 transition-colors disabled:opacity-50"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                    </svg>
                                    <span>Preview</span>
                                </button>
                            </div>
                        );
                    })
                )}
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: #cbd5e1;
                    border-radius: 20px;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default VoiceSelector;
