import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-12 bg-gray-800 animate-fadeIn">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">What Our Users Say</h2>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p className="text-gray-300 mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
          <h3 className="font-semibold text-white">John Doe</h3>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p className="text-gray-300 mb-4">"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
          <h3 className="font-semibold text-white">Jane Smith</h3>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p className="text-gray-300 mb-4">"Ut enim ad minim veniam, quis nostrud exercitation."</p>
          <h3 className="font-semibold text-white">Mike Johnson</h3>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p className="text-gray-300 mb-4">"Duis aute irure dolor in reprehenderit in voluptate."</p>
          <h3 className="font-semibold text-white">Sarah Williams</h3>
        </div>
      </div>
    </section>
  );
}