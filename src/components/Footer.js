import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Platform',
      links: [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Privacy Policy', path: '/privacy-policy' },
        { label: 'Terms of Use', path: '/terms' },
      ]
    }
  ];

  return (
    <footer className="mt-auto relative z-10 border-t border-slate-200/60 bg-white/40 backdrop-blur-md">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group w-fit">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #f97316 0%, rgba(168, 85, 247, 0.9) 100%)' }}>
                <svg className="w-6 h-6 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
                  Speech Project
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                  AI Speech Tools
                </span>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Next-generation speech tools powered by AI. Transform speech to text and text to speech seamlessly.
            </p>
          </div>

          {/* Links Columns */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    {link.external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-orange-600 transition-colors text-sm font-medium flex items-center group"
                      >
                        {link.label}
                        <svg className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-slate-500 hover:text-orange-600 transition-colors text-sm font-medium block"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm font-medium">
            © {currentYear} Speech Project. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-xs text-slate-400 font-medium bg-slate-100/50 px-3 py-1 rounded-full border border-slate-100">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span>Available Soon</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
