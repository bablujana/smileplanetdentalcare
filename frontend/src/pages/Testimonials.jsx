import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Anita Sharma',
    type: 'Patient',
    rating: 5,
    text: '"Amazing experience! The doctors are very professional and caring. My teeth feel so much better now."'
  },
  {
    name: 'Rohit Kumar',
    type: 'Patient',
    rating: 5,
    text: '"Clean, modern clinic with advanced technology. Highly recommended for everyone."'
  },
  {
    name: 'Sneha Patel',
    type: 'Patient',
    rating: 5,
    text: '"The best dental clinic in town! Very friendly staff and excellent treatment."'
  },
  {
    name: 'Vikram Singh',
    type: 'Patient',
    rating: 5,
    text: '"I got my braces treatment here and the results are fantastic. Thank you Smile Planet!"'
  },
  {
    name: 'Priya Nair',
    type: 'Patient',
    rating: 5,
    text: '"The clinic is well maintained and the doctors explain everything in detail. Truly a great experience."'
  },
  {
    name: 'Arjun Mehta',
    type: 'Patient',
    rating: 5,
    text: '"Professional, transparent pricing and excellent care. I\'m really happy with the results."'
  }
];

const Testimonials = () => {
  const [dbTestimonials, setDbTestimonials] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:8787/api/testimonials')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data.length > 0) {
          setDbTestimonials(data.data);
        }
      })
      .catch(err => console.error("Failed to fetch testimonials"));
  }, []);

  const displayTestimonials = dbTestimonials.length > 0 ? dbTestimonials : testimonials;
  return (
    <div className="min-h-screen bg-white pb-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[350px] lg:min-h-[auto] bg-surface pt-32 pb-12 lg:pt-16 lg:pb-16 border-b border-border bg-[length:100%_350px] lg:bg-[length:100%_100%] lg:bg-cover bg-[position:top_right] lg:bg-center bg-no-repeat mb-16"
        style={{ backgroundImage: "url('/testimonial_hero.png')" }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="w-[60%] sm:w-[50%] lg:w-full lg:max-w-2xl">
            <div className="inline-block bg-primary text-white font-bold px-4 py-2 rounded-full text-[10px] sm:text-xs mb-3 lg:mb-6 px-2 py-1 lg:px-4 lg:py-2 uppercase tracking-widest border border-primary/20 backdrop-blur-sm">
              PATIENT STORIES
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-secondary leading-snug mb-6">
              Real Smiles, Real People
            </h1>
            <p className="hidden md:block text-lg text-text-secondary leading-relaxed font-medium mb-6 max-w-lg">
              Hear from our happy patients who trust Smile Planet for their dental care. Their smiles inspire us to do better every day.
            </p>
            
            <div className="bg-white/80 backdrop-blur-md border border-primary/20 rounded-2xl p-2 lg:p-4 max-w-[200px] lg:max-w-sm flex items-center gap-4 shadow-lg shadow-primary/5">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 lg:w-10 lg:h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                    <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=Patient${i}&backgroundColor=e2e8f0`} alt="Patient" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-text-primary"><span className="text-xs lg:text-base">Trusted by 5,000+ patients</span></p>
                <div className="flex text-yellow-400 mt-0.5">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-white overflow-hidden shadow-sm">
                   <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${testimonial.name}&backgroundColor=e2e8f0`} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-xs text-primary font-medium">{testimonial.type}</p>
                </div>
              </div>
              
              <div className="flex text-yellow-400 mb-4 gap-0.5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 italic leading-relaxed">
                {(testimonial.text || testimonial.content)}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-primary rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* subtle background pattern */}
          <div className="absolute inset-0 opacity-10">
             <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
               <defs>
                 <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                   <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="currentColor" />
                 </pattern>
               </defs>
               <rect width="100%" height="100%" fill="url(#pattern)" />
             </svg>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Share Your Experience</h3>
              <p className="text-background">Help others find the best dental care by leaving us a review on Google.</p>
            </div>
          </div>
          
          <div className="relative z-10">
            <a href="https://www.google.com/search?q=Smile+Planet+Dental+Care+Kharavela+Nagar+Bhubaneswar#lrd=0x3a19a7597c4369e9:0xa33c63e848bcbbeb,3,,,," target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-8 py-3.5 rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg">
              Write a Google Review
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
