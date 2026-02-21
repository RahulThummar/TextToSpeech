import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border rounded-xl transition-all duration-300 overflow-hidden ${
              isOpen 
                ? 'border-orange-200 shadow-lg bg-orange-50/30' 
                : 'border-slate-100 hover:border-orange-100 hover:shadow-md bg-white'
            }`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-5 text-left flex items-center justify-between group transition-colors duration-200"
              aria-expanded={isOpen}
            >
              <h3 
                className={`text-lg font-semibold pr-4 transition-colors duration-200 ${
                  isOpen ? 'text-orange-700' : 'text-slate-700 group-hover:text-slate-900'
                }`}
              >
                {item.question}
              </h3>
              
              <div 
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isOpen
                    ? 'bg-orange-100 text-orange-600 rotate-180'
                    : 'bg-slate-50 text-slate-400 group-hover:bg-orange-50 group-hover:text-orange-500'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            
            <div
              className={`transition-[max-height,opacity] duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6 pt-2 text-slate-600 border-t border-orange-100/50 leading-relaxed text-base">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
