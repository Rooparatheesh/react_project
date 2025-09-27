import React from 'react';

export default function Hero() {
  return (
    <section className="fixed top-0 left-0 w-screen h-screen bg-slate-900 flex items-center justify-center overflow-hidden z-0">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-screen h-screen">
        <img
          src="src/assets/bitcoin-theme.png"
          alt="Bitcoin Theme Background"
          className="w-screen h-screen object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-blue-900/40"></div>
        
        {/* Animated circuit patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-32 h-32 border border-blue-500 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 border border-cyan-400 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent animate-pulse">
            Ultricies ut etiam
          </span>
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">
            voluptate ante congue
          </span>
          <span className="block text-slate-300 text-2xl sm:text-3xl md:text-4xl mt-4 font-normal">
            jokichn na Lorem ipsum
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
          Experience the future of cryptocurrency trading with our advanced platform 
          designed for modern investors and blockchain enthusiasts.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 w-full sm:w-auto">
            <span className="relative z-10 flex items-center justify-center">
              Learn More
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-lg font-semibold rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 w-full sm:w-auto">
            <span className="relative z-10 flex items-center justify-center">
              Start Trading
              <svg className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Stats/Features */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
              500K+
            </div>
            <div className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Active Traders</div>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
              $2.5B+
            </div>
            <div className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Volume Traded</div>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <div className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Uptime</div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75 delay-700"></div>
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-emerald-400 rounded-full animate-ping opacity-75 delay-1000"></div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}