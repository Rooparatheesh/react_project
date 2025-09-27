import React from 'react';

// Features Section
function FeaturesSection() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Most Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Cryptocurrency</span> Platform
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            We provide you with a trading experience like never before with our cutting edge technology 
            and user-friendly platform designed for both beginners and professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
              <img 
                src="src/assets/bitcoin-theme.png" 
                alt="Mobile Trading" 
                className="w-full h-48 object-cover rounded-lg mb-6 opacity-80"
              />
              <h3 className="text-xl font-semibold text-white mb-3">Mobile Trading</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Trade on the go with our advanced mobile application. Access real-time market data, 
                execute trades, and manage your portfolio anywhere, anytime.
              </p>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <img 
                src="src/assets/bitcoin-theme.png" 
                alt="Secure Wallet" 
                className="w-full h-48 object-cover rounded-lg mb-6 opacity-80"
              />
              <h3 className="text-xl font-semibold text-white mb-3">Secure Wallet</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Keep your digital assets safe with our military-grade encryption and multi-signature 
                security protocols. Your funds are protected 24/7.
              </p>
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
              <img 
                src="src/assets/bitcoin-theme.png" 
                alt="Advanced Analytics" 
                className="w-full h-48 object-cover rounded-lg mb-6 opacity-80"
              />
              <h3 className="text-xl font-semibold text-white mb-3">Advanced Analytics</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Make informed decisions with our comprehensive market analysis tools, 
                real-time charts, and AI-powered trading insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Team Section
function TeamSection() {
  return (
    <section className="bg-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Expert Team</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Our team of blockchain experts and financial professionals are here to guide you 
            through your cryptocurrency journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="group text-center">
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                JD
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">John Doe</h3>
            <p className="text-blue-400 text-sm mb-3">CEO & Founder</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Blockchain pioneer with 10+ years experience in cryptocurrency markets and fintech innovation.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="group text-center">
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                JS
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">Jane Smith</h3>
            <p className="text-emerald-400 text-sm mb-3">CTO</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Technology leader specializing in blockchain architecture and secure trading platform development.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="group text-center">
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                MW
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">Mike Wilson</h3>
            <p className="text-purple-400 text-sm mb-3">Head of Trading</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Former Wall Street trader with expertise in cryptocurrency markets and algorithmic trading strategies.
            </p>
          </div>

          {/* Team Member 4 */}
          <div className="group text-center">
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                SL
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">Sarah Lee</h3>
            <p className="text-orange-400 text-sm mb-3">Head of Security</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Cybersecurity expert ensuring the highest level of protection for our platform and user assets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Most Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Cryptocurrency</span> Platform
          </h2>
          <p className="text-slate-400 text-lg">
            Get answers to the most frequently asked questions about our platform and services.
          </p>
        </div>

        <div className="space-y-4">
          {/* FAQ Item 1 */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-blue-500/30 transition-colors duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <h3 className="text-white font-medium">What is a Cryptocurrency how does it work?</h3>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-blue-500/30 transition-colors duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <h3 className="text-white font-medium">How do I buy my first Bitcoin with Bitnow?</h3>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-blue-500/30 transition-colors duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <h3 className="text-white font-medium">How do I keep my cryptocurrency secure on Bitnow?</h3>
            </div>
          </div>

          {/* FAQ Item 4 */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-blue-500/30 transition-colors duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <h3 className="text-white font-medium">What are the fees for trading on Bitnow platform?</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Content Component
export default function ContentSections() {
  return (
    <div>
      <FeaturesSection />
      <TeamSection />
      <FAQSection />
    </div>
  );
}