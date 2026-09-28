import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FadeInUp, StaggerContainer, StaggerItem, FadeIn } from '../components/AnimationWrapper';

const treatmentsData = [
  {
    category: "Preventive & General Dentistry",
    description: "The foundation of a healthy smile. We focus on early detection and preserving your natural teeth.",
    items: [
      {
        title: 'Comprehensive Checkups',
        image: '/images/treatments/checkups.jpg',
        desc: 'Detailed examination of your teeth, gums, and jaw using low-radiation digital X-rays to catch cavities early.',
        bullets: ['Oral cancer screening', 'Digital X-rays', 'Gum health evaluation'],
        icon: (
          <svg className="w-8 h-8 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        )
      },
      {
        title: 'Ultrasonic Teeth Cleaning',
        image: '/images/treatments/cleaning.jpg',
        desc: 'Professional scaling and polishing to remove stubborn plaque, tartar, and coffee/tea stains that brushing misses.',
        bullets: ['Tartar removal', 'Enamel polishing', 'Fluoride treatment'],
        icon: (
          <svg className="w-8 h-8 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
        )
      },
      {
        title: 'Pediatric Dentistry',
        image: '/images/treatments/pediatric.jpg',
        desc: 'Gentle, friendly, and fear-free dental care designed specifically for children to build healthy habits early.',
        bullets: ['Pit & fissure sealants', 'Fluoride varnishes', 'Cavity prevention'],
        icon: (
          <svg className="w-8 h-8 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
        )
      }
    ]
  },
  {
    category: "Advanced Cosmetic Dentistry",
    description: "Transform your confidence with state-of-the-art aesthetic treatments designed to give you a flawless smile.",
    items: [
      {
        title: 'Laser Teeth Whitening',
        image: '/images/treatments/whitening.jpg',
        desc: 'Achieve a brilliantly white smile in just one session using advanced laser technology that minimizes sensitivity.',
        bullets: ['Instant results', 'Safe for enamel', 'Long-lasting brightness'],
        icon: (
          <svg className="w-8 h-8 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        )
      },
      {
        title: 'Invisible Aligners',
        image: '/images/treatments/aligners.jpg',
        desc: 'Straighten crooked or misaligned teeth discreetly without the hassle of traditional metal braces.',
        bullets: ['Clear & unnoticeable', 'Removable for eating', 'Faster than braces'],
        icon: (
          <svg className="w-8 h-8 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
        )
      },
      {
        title: 'Porcelain Veneers',
        image: '/images/treatments/veneers.jpg',
        desc: 'Custom-made, ultra-thin shells bonded to the front of your teeth to instantly fix gaps, chips, and severe stains.',
        bullets: ['Stain-resistant', 'Natural appearance', 'Durable and strong'],
        icon: (
          <svg className="w-8 h-8 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        )
      }
    ]
  },
  {
    category: "Restorative & Surgical Care",
    description: "Rebuild and restore the full function and strength of your teeth with our advanced surgical and restorative procedures.",
    items: [
      {
        title: 'Painless Root Canals',
        image: '/images/treatments/root_canal.jpg',
        desc: 'Save severely infected teeth from extraction. We use advanced rotary endodontics for a fast, pain-free experience.',
        bullets: ['Single-visit RC available', 'Stops severe tooth pain', 'Preserves natural tooth'],
        icon: (
          <svg className="w-8 h-8 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
        )
      },
      {
        title: 'Dental Implants',
        image: '/images/treatments/implants.jpg',
        desc: 'The gold standard for replacing missing teeth. Implants act like natural roots and provide a permanent, strong bite.',
        bullets: ['Looks and feels natural', 'Prevents bone loss', 'Lifetime durability'],
        icon: (
          <svg className="w-8 h-8 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" /></svg>
        )
      },
      {
        title: 'Wisdom Tooth Removal',
        image: '/images/treatments/extraction.jpg',
        desc: 'Experience completely safe and painless wisdom tooth extraction performed by our expert surgical team.',
        bullets: ['100% painless with advanced local anesthesia', 'Specialized techniques for minimal swelling', 'Fast and comfortable recovery protocol'],
        icon: (
          <svg className="w-8 h-8 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" /></svg>
        )
      }
    ]
  }
];

const Treatments = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      
      {/* Header */}
      <motion.section initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} 
        className="relative overflow-hidden min-h-[350px] lg:min-h-[auto] bg-surface pt-32 pb-12 lg:pt-8 lg:pb-8 border-b border-border bg-[length:100%_350px] lg:bg-[length:100%_100%] lg:bg-cover bg-[position:top_right] lg:bg-center bg-no-repeat relative "
        style={{ backgroundImage: "url('/treatment_1.png')" }}
      >
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="w-[60%] sm:w-[50%] lg:w-full lg:max-w-2xl">
            <div className="-translate-y-6 lg:translate-y-0 inline-block bg-primary text-white font-bold px-4 py-2 rounded-full text-[10px] sm:text-xs mb-2 lg:mb-3 px-2 py-1 lg:px-4 lg:py-2 uppercase tracking-widest border border-primary/20 backdrop-blur-sm">
              CLINICAL EXCELLENCE
            </div>
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-black text-secondary leading-snug mb-3">
              World-Class Treatments.<br/>Zero Compromise.
            </h1>
            <p className="hidden md:block text-lg text-text-secondary leading-relaxed font-medium mb-3 max-w-lg">
              Whether you need a routine cleanup, a complex root canal, or a complete cosmetic smile makeover, our advanced clinic in Bhubaneswar is equipped to handle all your dental needs perfectly.
            </p>
            <Link to="/contact" className="inline-flex bg-primary text-white px-4 py-2 lg:px-8 lg:py-4 text-sm lg:text-base rounded-full font-bold hover:bg-secondary transition-all shadow-lg shadow-primary/20 hover:-translate-y-1 items-center gap-2">
              Send an Inquiry
              <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Treatment Categories */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        {treatmentsData.map((category, catIdx) => (
          <div key={catIdx} className="scroll-mt-32">
            <div className="mb-12 border-l-4 border-primary pl-6">
              <h2 className="text-2xl lg:text-3xl md:text-4xl font-black text-secondary mb-4">{category.category}</h2>
              <p className="text-lg text-text-secondary max-w-3xl leading-relaxed">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, index) => (
                <div key={index} id={item.title.toLowerCase().replace(/\s+/g, '-')} className="group relative bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden">
                  
                  {/* Image Header */}
                  <div className="w-full h-56 overflow-hidden relative bg-slate-100">
                    <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                    
                    {/* Floating Icon */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white text-primary flex items-center justify-center shadow-[0_8px_20px_rgb(0,0,0,0.1)] z-20 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <div className="scale-75">{item.icon}</div>
                    </div>
                  </div>

                  <div className="p-6 lg:p-8 flex-grow flex flex-col relative z-10 bg-white">
                    {/* Subtle Tooth Watermark */}
                    <svg className="absolute -bottom-2 -right-2 w-24 h-24 text-primary/5 group-hover:text-primary/10 transition-colors transform group-hover:scale-110 duration-500 rotate-12 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.5 2 6 4.5 6 8C6 10 7.5 11.5 8.5 12.5C9.5 13.5 10 15 10 16.5C10 17.5 10.5 18.5 11 19C11.5 19.5 12.5 20 13.5 20C15 20 16.5 19 17.5 17C18.5 15 19 13 19 11C19 6 16.5 2 12 2Z" />
                    </svg>

                    <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-text-secondary text-sm mb-6 leading-relaxed flex-grow">{item.desc}</p>
                    
                    <ul className="space-y-2 mt-auto">
                      {item.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-text-secondary font-medium">
                          <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Technology Banner */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-secondary rounded-[3rem] p-10 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
          <svg className="absolute -top-24 -right-24 w-96 h-96 text-primary/20 rotate-12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.5 2 6 4.5 6 8C6 10 7.5 11.5 8.5 12.5C9.5 13.5 10 15 10 16.5C10 17.5 10.5 18.5 11 19C11.5 19.5 12.5 20 13.5 20C15 20 16.5 19 17.5 17C18.5 15 19 13 19 11C19 6 16.5 2 12 2Z" />
          </svg>
          <div className="relative z-10 w-full md:w-2/3">
            <h3 className="text-2xl lg:text-3xl md:text-4xl font-black text-secondary mb-4">Powered by Advanced Technology</h3>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              We utilize state-of-the-art Dental Lasers, Rotary Endodontics, and low-radiation Digital Imaging to ensure every single treatment is incredibly precise, faster, and 100% painless.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-full text-sm font-bold">Dental Lasers</span>
              <span className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-full text-sm font-bold">Rotary Endodontics</span>
              <span className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-full text-sm font-bold">Intraoral Cameras</span>
            </div>
          </div>
          <div className="relative z-10">
            <Link to="/contact" className="bg-white text-secondary px-4 py-2 lg:px-8 lg:py-4 text-sm lg:text-base rounded-full font-bold hover:bg-background transition-colors flex items-center gap-2 shadow-xl whitespace-nowrap">
              Book a Visit
              <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Treatments;
