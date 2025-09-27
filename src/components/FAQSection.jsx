import React from 'react';

export default function FAQSection() {
  return (
    <section className="py-12 bg-gray-800 animate-fadeIn">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Frequently Asked Questions</h2>
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-4">
          <h3 className="text-xl font-semibold text-white mb-2">What is your favorite template from BTCNow?</h3>
          <p className="text-gray-300">Answer placeholder text goes here.</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-4">
          <h3 className="text-xl font-semibold text-white mb-2">How do I get started?</h3>
          <p className="text-gray-300">Answer placeholder text goes here.</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-2">Is BTCNow secure?</h3>
          <p className="text-gray-300">Answer placeholder text goes here.</p>
        </div>
      </div>
    </section>
  );
}