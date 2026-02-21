import React from 'react';

const Controls = ({ speed, setSpeed, pitch, setPitch, disabled }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-3">
                <div className="flex justify-between items-center px-1">
                    <label htmlFor="speed-slider" className="text-sm font-semibold text-slate-700">Speed</label>
                    <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">{speed}x</span>
                </div>
                <input
                    id="speed-slider"
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={speed}
                    onChange={(e) => setSpeed(parseFloat(e.target.value))}
                    disabled={disabled}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500 disabled:opacity-50"
                />
            </div>

            <div className="flex flex-col space-y-3">
                <div className="flex justify-between items-center px-1">
                    <label htmlFor="pitch-slider" className="text-sm font-semibold text-slate-700">Pitch</label>
                    <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">
                        {pitch > 0 ? `+${pitch}` : pitch}
                    </span>
                </div>
                <input
                    id="pitch-slider"
                    type="range"
                    min="-10"
                    max="10"
                    step="1"
                    value={pitch}
                    onChange={(e) => setPitch(parseInt(e.target.value))}
                    disabled={disabled}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500 disabled:opacity-50"
                />
            </div>
        </div>
    );
};

export default Controls;
