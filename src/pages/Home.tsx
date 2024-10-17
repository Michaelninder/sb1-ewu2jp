import React from 'react';
import { Server, Globe, Star, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to XP-Hostde</h1>
          <p className="text-xl mb-8">Your Premier Minecraft Server and Web Hosting Provider</p>
          <a href="#services" className="bg-white text-blue-600 py-2 px-6 rounded-full font-bold hover:bg-blue-100 transition duration-300">
            Explore Our Services
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Server className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Minecraft Server Hosting</h3>
              <p className="text-gray-600 mb-4">High-performance servers with DDoS protection and 24/7 support.</p>
              <a href="#" className="text-blue-600 font-bold flex items-center">
                Learn More <ArrowRight className="ml-2" />
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Globe className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Web Hosting</h3>
              <p className="text-gray-600 mb-4">Fast and reliable web hosting solutions for your online presence.</p>
              <a href="#" className="text-blue-600 font-bold flex items-center">
                Learn More <ArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <Star className="text-yellow-400 w-8 h-8 mb-4" />
                <p className="text-gray-600 mb-4">
                  "XP-Hostde provides excellent service. Our Minecraft server has never been more stable!"
                </p>
                <p className="font-bold">- Happy Client {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Choose XP-Hostde for reliable and high-performance hosting solutions.</p>
          <div className="flex justify-center space-x-4">
            <a href="/status" className="bg-white text-blue-600 py-2 px-6 rounded-full font-bold hover:bg-blue-100 transition duration-300">
              Check Status
            </a>
            <a href="https://panel.xp-host.de" className="bg-green-500 text-white py-2 px-6 rounded-full font-bold hover:bg-green-600 transition duration-300">
              Go to Panel
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;