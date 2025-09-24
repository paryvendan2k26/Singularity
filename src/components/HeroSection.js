import { ArrowRight, Sparkles } from "lucide-react";
import ModelViewer from "./ModelViewer";
import React, { useState, useEffect, useRef } from "react";


const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const fullText = "Innovation";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (isTyping && currentText.length < fullText.length) {
      timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, 150);
    } else if (currentText.length === fullText.length) {
      setIsTyping(false);
    }
    return () => clearTimeout(timeout);
  }, [currentText, isTyping, fullText]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      
      {/* 3D Model Viewer - positioned to overlap and layered behind text */}

      {/* Main Content Container - text on top of the model viewer */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 items-center w-full max-w-7xl min-h-[80vh]">
          
          {/* Left - Large Typography "Work" equivalent */}
          <div className="lg:col-span-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left h-full">
            <div className="space-y-6">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight">
                <span className="block">Build</span>
              </h1>
              
              <div className="relative mt-8">
                <h2 className="text-xl md:text-2xl font-light text-gray-400 tracking-wide">
                  <span className="typing-text">{currentText}</span>
                  <span className="animate-pulse text-white ml-1">|</span>
                </h2>
              </div>
            </div>
          </div>

          {/* Center - Empty grid cell to maintain spacing */}
          <div className="hidden lg:flex lg:col-span-1"></div>

          {/* Right - Large Typography "Exhibitions" equivalent */}
          <div className="lg:col-span-1 flex flex-col justify-center items-center lg:items-end text-center lg:text-right h-full">
            <div className="space-y-6">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight">
                <span className="block">Deploy</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Left - Clean footer */}
      <div className="absolute bottom-8 left-8 text-left space-y-1 z-20">
        <p className="text-xs text-gray-500 uppercase tracking-wider">Powered by</p>
        <p className="text-sm font-medium text-white">Microsoft Student Community</p>
        <p className="text-xs text-gray-400">SRM University - AP</p>
      </div>

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
        
        .typing-text {
          display: inline-block;
          overflow: hidden;
          border-right: 2px solid transparent;
          animation: typing 2s steps(20, end), blink-caret 1s step-end infinite;
        }
        
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink-caret {
          0%, 50% { border-color: rgba(255,255,255,0.7); }
          51%, 100% { border-color: transparent; }
        }
        
        /* Mobile responsiveness */
        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .lg\\:col-span-1 {
            text-align: center;
            padding: 0 1rem;
          }
          
          .items-end {
            align-items: center;
          }
          
          .text-right {
            text-align: center;
          }
          
          /* Hide top nav on mobile for cleaner look */
          .absolute.top-0 {
            display: none;
          }
          
          /* Adjust bottom cards for mobile */
          .absolute.bottom-8.right-8 {
            right: 1rem;
            left: 1rem;
            max-width: none;
          }
          
          .absolute.bottom-8.left-8 {
            left: 1rem;
            bottom: 20rem;
          }
        }
        
        @media (max-width: 768px) {
          .text-7xl {
            font-size: 4rem;
          }
          
          .text-8xl {
            font-size: 5rem;
          }
          
          .text-9xl {
            font-size: 6rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
