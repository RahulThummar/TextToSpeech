import { createContext } from "react";
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

export const InputContext = createContext();

function App() {
  const value = {
    // Empty context for now if needed by other reusable UI components
  };

  return (
    <InputContext.Provider value={value}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />

          <main className="flex-grow pt-24 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              {/* Coming soon route can be added here later */}
            </Routes>
          </main>
          <Footer />
          <Analytics />
        </div>
      </Router>
    </InputContext.Provider>
  );
}

export default App;
