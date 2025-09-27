import React from 'react';

export default function PhoneImages() {
  return (
    <section className="py-12 px-4 flex justify-center space-x-4">
      <div className="w-1/3 transform hover:scale-105 transition-transform duration-300">
        <img src="/phone1.jpg" alt="Phone 1" className="w-full rounded-lg shadow-lg" />
      </div>
      <div className="w-1/3 transform hover:scale-105 transition-transform duration-300">
        <img src="/phone2.jpg" alt="Phone 2" className="w-full rounded-lg shadow-lg" />
      </div>
      <div className="w-1/3 transform hover:scale-105 transition-transform duration-300">
        <img src="/phone3.jpg" alt="Phone 3" className="w-full rounded-lg shadow-lg" />
      </div>
    </section>
  );
}