/* eslint-disable no-undef */
import React from 'react';

// FAQ Section
// eslint-disable-next-line react-refresh/only-export-components
function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFAQData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://mocki.io/v1/94cb45d3-da0b-4d55-b874-0afbf87f3fd3');
        if (!response.ok) {
          throw new Error('Failed to fetch FAQ data');
        }
        const data = await response.json();
        setFaqData(data.faq || []);
        setError(null);
      } catch (err) {
        setError(err.message);
        // Fallback data in case of API failure
        setFaqData([
          {
            question: "What is BRIX Templates?",
            answer: "BRIX Templates provides high-quality, ready-to-use website templates for different industries and use cases."
          },
          {
            question: "Can I customize BRIX Templates?",
            answer: "Yes, all templates are fully customizable. You can edit colors, fonts, layouts, and components to match your brand."
          },
          {
            question: "Do I need coding knowledge to use BRIX Templates?",
            answer: "No, you don't need to be a developer. Templates are designed to be user-friendly and easy to update without coding."
          },
          {
            question: "What kind of support is provided?",
            answer: "We provide detailed documentation and customer support to help you set up and customize your template smoothly."
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQData();
  }, []);

  if (loading) {
    return (
      <section className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
            <p className="text-slate-400 mt-4">Loading FAQ...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Questions</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Get answers to the most frequently asked questions about our templates and services.
          </p>
          {error && (
            <div className="mt-4 p-3 bg-yellow-900/30 border border-yellow-600/50 rounded-lg">
              <p className="text-yellow-400 text-sm">
                Note: Using fallback data due to API connection issue
              </p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg hover:border-blue-500/30 transition-all duration-300"
            >
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <h3 className="text-white font-medium">{faq.question}</h3>
                  </div>
                  <div className={`text-blue-400 transition-transform duration-200 ${expandedIndex === index ? 'rotate-45' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 5v10M5 10h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${expandedIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                <div className="px-6">
                  <div className="pl-5">
                    <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}