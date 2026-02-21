import React from 'react';
import SEO from '../components/SEO';

const homeSections = [
    {
        title: "Speech Tools",
        description: "Transform your audio and text with AI.",
        tools: [
            {
                id: 'text-to-speech',
                name: 'Text to Speech',
                desc: 'Convert any text into natural sounding speech.',
                path: '#',
                icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z',
                color: 'blue'
            },
            {
                id: 'speech-to-text',
                name: 'Speech to Text',
                desc: 'Accurately transcribe spoken words to text.',
                path: '#',
                icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
                color: 'purple'
            }
        ]
    }
];

const colorVariants = {
    blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        decoration: "bg-blue-500",
        borderHover: "hover:border-blue-100",
        titleHover: "group-hover:text-blue-600",
        linkText: "text-blue-500"
    },
    cyan: {
        bg: "bg-cyan-50",
        Text: "text-cyan-600",
        decoration: "bg-cyan-500",
        borderHover: "hover:border-cyan-100",
        titleHover: "group-hover:text-cyan-600",
        linkText: "text-cyan-500"
    },
    purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        decoration: "bg-purple-500",
        borderHover: "hover:border-purple-100",
        titleHover: "group-hover:text-purple-600",
        linkText: "text-purple-500"
    },
    green: {
        bg: "bg-green-50",
        text: "text-green-600",
        decoration: "bg-green-500",
        borderHover: "hover:border-green-100",
        titleHover: "group-hover:text-green-600",
        linkText: "text-green-500"
    },
    indigo: {
        bg: "bg-indigo-50",
        text: "text-indigo-600",
        decoration: "bg-indigo-500",
        borderHover: "hover:border-indigo-100",
        titleHover: "group-hover:text-indigo-600",
        linkText: "text-indigo-500"
    },
    amber: {
        bg: "bg-amber-50",
        text: "text-amber-600",
        decoration: "bg-amber-500",
        borderHover: "hover:border-amber-100",
        titleHover: "group-hover:text-amber-600",
        linkText: "text-amber-500"
    },
    orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        decoration: "bg-orange-500",
        borderHover: "hover:border-orange-100",
        titleHover: "group-hover:text-orange-600",
        linkText: "text-orange-500"
    },
    pink: {
        bg: "bg-pink-50",
        text: "text-pink-600",
        decoration: "bg-pink-500",
        borderHover: "hover:border-pink-100",
        titleHover: "group-hover:text-pink-600",
        linkText: "text-pink-500"
    },
    slate: {
        bg: "bg-slate-50",
        text: "text-slate-600",
        decoration: "bg-slate-500",
        borderHover: "hover:border-slate-100",
        titleHover: "group-hover:text-slate-600",
        linkText: "text-slate-500"
    }
};

const Home = () => {
    return (
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <SEO
                title="AI Speech Tools"
                description="Speech tools powered by modern AI. Coming soon."
                keywords="ai speech tools, text to speech, coming soon"
                canonical="/"
            />

            {/* Hero */}
            <div className="text-center mb-16 animate-fade-in-down">
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    AI Speech Tools
                </h1>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    Coming Soon
                </p>
            </div>

            {/* Tool Sections */}
            <div className="space-y-16 animate-fade-in-up">
                {homeSections.map((section, idx) => (
                    <div key={idx}>
                        <div className="flex items-center space-x-4 mb-6">
                            <h2 className="text-2xl font-bold text-slate-800">{section.title}</h2>
                            <div className="h-px bg-slate-200 flex-1"></div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {section.tools.map((tool) => {
                                const colors = colorVariants[tool.color] || colorVariants.blue;
                                return (
                                    <div
                                        key={tool.id}
                                        className={`group relative bg-white p-6 rounded-2xl shadow-sm border border-slate-100 opacity-60 cursor-not-allowed block`}
                                    >
                                        <div className={`absolute top-0 right-0 p-4 opacity-5 rounded-bl-3xl ${colors.decoration}`}>
                                            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d={tool.icon} /></svg>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className={`p-3 rounded-xl ${colors.bg} ${colors.text}`}>
                                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={tool.icon} /></svg>
                                            </div>
                                            <div>
                                                <h3 className={`text-lg font-bold text-slate-700 transition-colors mb-1 ${colors.titleHover}`}>{tool.name}</h3>
                                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{tool.desc}</p>
                                            </div>
                                        </div>

                                        <div className={`mt-4 flex items-center text-xs font-bold text-slate-400 transform transition-all duration-300`}>
                                            Coming Soon
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
