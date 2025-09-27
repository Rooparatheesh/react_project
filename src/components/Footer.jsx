import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-6 animate-fadeIn">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white">BTCNow</h3>
        </div>
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">About Us</a>
          <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Services</a>
          <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Contact</a>
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Your email"
            className="p-2 rounded-l bg-gray-800 text-white border-none focus:outline-none"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r transition-all duration-200 hover:scale-105">
            Subscribe
          </button>
        </div>
        <p className="text-gray-500 text-sm">© 2025 BTCNow. All rights reserved.</p>
      </div>
    </footer>
  );
}