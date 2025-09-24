import React from "react";

const LanguageBanner: React.FC = () => {
  const languages = [
    "Aanu Tattva ",
    "Agastya",
    "Bhaskaracharya",
    "ChitraDarshan",
    "NavyaVigyan",
    "PrajnaKritrima",
    "Varahamihira",
  ];

  // Duplicate the array to create seamless loop
  const duplicatedLanguages = [...languages, ...languages];

  return (
    <section className="py-8 bg-black overflow-hidden border-y border-gray-200">
      <div className="relative">
        {/* Main scrolling content */}
        <div className="flex animate-scroll-left whitespace-nowrap">
          {duplicatedLanguages.map((language, index) => (
            <div
              key={index}
              className="inline-flex items-center mx-6 text-2xl md:text-3xl font-bold text-white/80 hover:text-white transition-colors duration-300"
            >
              <span className="mr-6">{language}</span>
              <div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for the scrolling animation */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default LanguageBanner;