import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Close menu when route changes
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home", icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" },
    { path: "/about", label: "About", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-none rounded-none ${isMenuOpen
          ? 'bg-transparent shadow-none backdrop-blur-none'
          : 'glass-card shadow-2xl'
          }`}
        style={{
          background: isMenuOpen ? 'transparent' : 'rgba(255, 255, 255, 0.85)'
        }}
      >
        <div className="mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link
              to="/"
              className="flex items-center space-x-3 group transition-all duration-300 relative z-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="relative">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-lg relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #f97316 0%, rgba(168, 85, 247, 0.9) 100%)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <div
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500"
                  style={{ background: 'linear-gradient(135deg, rgba(56,189,248,0.75), rgba(168,85,247,0.75), rgba(249,115,22,0.65))' }}
                ></div>
              </div>
              <div className="flex flex-col">
                <h1
                  className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight"
                  style={{
                    background: 'linear-gradient(135deg, #0f172a 0%, #0369a1 35%, #7e22ce 65%, #c2410c 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Speech Project
                </h1>
                <span className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-wider">COMING SOON</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 group ${isActive(item.path)
                    ? "shadow-lg"
                    : ""
                    }`}
                  style={isActive(item.path) ? {
                    background: 'linear-gradient(135deg, rgba(249,115,22,0.95) 0%, rgba(168,85,247,0.7) 100%)',
                    color: 'white',
                    boxShadow: '0 12px 44px rgba(0, 0, 0, 0.15), 0 0 36px rgba(249, 115, 22, 0.22)',
                  } : {
                    color: '#334155',
                    background: 'rgba(255, 255, 255, 0.5)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(item.path)) {
                      e.target.style.background = 'rgba(249, 115, 22, 0.12)';
                      e.target.style.color = '#0f172a';
                      e.target.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.path)) {
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.target.style.color = '#334155';
                      e.target.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                    <span>{item.label}</span>
                  </div>
                  {isActive(item.path) && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent"></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden relative z-50">
              <button
                className="p-2 rounded-xl glass-card relative group overflow-hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.2), rgba(168,85,247,0.2))' }}
                ></div>
                <svg
                  className={`w-7 h-7 transition-all duration-300 transform ${isMenuOpen ? 'rotate-90 scale-90' : 'rotate-0 scale-100'}`}
                  style={{ color: '#0f172a' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay & Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none delay-500'
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Side Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-xs bg-white/95 border-l border-slate-200 shadow-2xl transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          style={{
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)'
          }}
        >
          <div className="flex flex-col h-full pt-28 px-6 pb-8">
            <div className="flex-1 space-y-2">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-2">Navigation</div>
              {navLinks.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 group ${isActive(item.path)
                    ? 'bg-slate-100 border border-slate-200'
                    : 'hover:bg-slate-50 border border-transparent'
                    }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms',
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(20px)'
                  }}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${isActive(item.path) ? 'shadow-lg shadow-orange-500/20' : ''
                      }`}
                    style={{
                      background: isActive(item.path)
                        ? 'linear-gradient(135deg, #f97316 0%, rgba(168,85,247,0.85) 100%)'
                        : 'rgba(0,0,0,0.05)'
                    }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: isActive(item.path) ? 'white' : '#475569' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <span className={`text-lg font-medium ${isActive(item.path) ? 'text-slate-900' : 'text-slate-600'}`}>
                    {item.label}
                  </span>
                  {isActive(item.path) && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-orange-500 shadow-lg shadow-orange-500/50"></div>
                  )}
                </Link>
              ))}
            </div>

            <div className="border-t border-slate-200 pt-8 mt-auto">
              <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-orange-400 to-purple-600">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Speech Project</h4>
                  <p className="text-xs text-slate-500">AI Speech Tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
