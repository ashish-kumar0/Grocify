import React, { useEffect } from 'react';
import aboutHero from '../../assets/about-hero.png';
import aboutTeam from '../../assets/about-team.png';
import { FaLeaf, FaTruck, FaHeart } from 'react-icons/fa';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[14vh] min-h-screen bg-zinc-50 font-sans text-zinc-800">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutHero} 
            alt="Fresh Groceries Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg tracking-tight">
            Freshness, <span className="text-orange-500">Delivered.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-100 font-light drop-shadow-md">
            Your partner in healthy living, bringing the best of nature directly to your doorstep.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zinc-800 mb-4">Our <span className="text-orange-500">Mission</span></h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Mission Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-300 border border-zinc-100 group">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
              <FaLeaf className="text-3xl text-orange-500 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">100% Organic</h3>
            <p className="text-zinc-600 leading-relaxed">
              We source only the freshest, highest quality organic produce directly from local farms. Everything is carefully selected to ensure maximum nutrition and taste.
            </p>
          </div>

          {/* Mission Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-300 border border-zinc-100 group">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
              <FaTruck className="text-3xl text-orange-500 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Fast Delivery</h3>
            <p className="text-zinc-600 leading-relaxed">
              From the farm to your table in record time. Our efficient delivery network ensures your groceries arrive within hours, preserving peak freshness.
            </p>
          </div>

          {/* Mission Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-300 border border-zinc-100 group">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
              <FaHeart className="text-3xl text-orange-500 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Community First</h3>
            <p className="text-zinc-600 leading-relaxed">
              We believe in giving back. Every purchase supports local farmers and sustainable agricultural practices that benefit our entire community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section with Glassmorphism */}
      <section className="relative py-24 mb-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutTeam} 
            alt="Our Farmers" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 flex md:justify-end">
          <div className="bg-white/80 backdrop-blur-xl p-10 md:p-14 rounded-3xl shadow-2xl max-w-2xl border border-white/40">
            <h2 className="text-4xl font-bold text-zinc-800 mb-6">The Grocify <span className="text-orange-500">Story</span></h2>
            <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
              Founded in 2025, Grocify started with a simple belief: everyone deserves access to fresh, healthy, and affordable food. What began as a small local initiative has quickly grown into a community-driven platform.
            </p>
            <p className="text-lg text-zinc-700 mb-8 leading-relaxed">
              Our founders, a passionate group of food enthusiasts and tech innovators, saw a gap between local farmers producing incredible goods and families struggling to access them. Grocify is the bridge.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-zinc-300/50">
              <div>
                <h4 className="text-4xl font-bold text-orange-500">10k+</h4>
                <p className="text-zinc-600 font-medium">Happy Customers</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-orange-500">200+</h4>
                <p className="text-zinc-600 font-medium">Local Farm Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
