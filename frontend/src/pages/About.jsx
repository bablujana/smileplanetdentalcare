import React from 'react';
import { motion } from 'framer-motion';
import { FadeInUp, StaggerContainer, StaggerItem, AnimatedCounter } from '../components/AnimationWrapper';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <motion.section initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} 
        className="relative overflow-hidden min-h-[350px] lg:min-h-[auto] bg-surface pt-32 pb-12 lg:pt-24 lg:pb-28 border-b border-border bg-[length:100%_350px] lg:bg-[length:100%_100%] lg:bg-cover bg-[position:top_right] lg:bg-center bg-no-repeat relative "
        style={{ backgroundImage: "url('/about_us_hero_new.png')" }}
      >
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="w-[60%] sm:w-[50%] lg:w-full lg:max-w-2xl">
            <div className="inline-block bg-primary text-white font-bold px-4 py-2 rounded-full text-[10px] sm:text-xs mb-3 lg:mb-6 px-2 py-1 lg:px-4 lg:py-2 uppercase tracking-widest border border-primary/20 backdrop-blur-sm">
              OUR STORY
            </div>
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-black text-secondary mb-6 leading-tight">
              Redefining Dental Care <br/>in Bhubaneswar
            </h1>
            <p className="hidden md:block text-lg text-text-secondary leading-relaxed font-medium max-w-lg">
              At Smile Planet Dental Care, we believe that a visit to the dentist should be a relaxing, transparent, and completely pain-free experience. Welcome to the future of dentistry.
            </p>
          </div>
        </div>
      </motion.section>

      {/* The Story / Introduction */}
      <div className="py-24 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl lg:text-5xl font-black text-secondary leading-snug">
              A Legacy of Trust,<br/>Hygiene, and Excellence.
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Smile Planet Dental Care was built on a simple yet powerful philosophy: <strong>Dentistry must be honest, painless, and accessible.</strong> 
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              For years, patients have avoided dental treatments due to fear of pain or hidden costs. We set out to change that completely. Today, we are proud to be one of Bhubaneswar's most trusted dental clinics, featuring state-of-the-art laser technology, a strict 100% sterilization protocol, and a team of highly specialized doctors.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-border mt-8">
              <div>
                <div className="text-3xl md:text-4xl font-black text-primary mb-2"><AnimatedCounter to={10} suffix="+" /></div>
                <div className="text-sm font-bold text-text-secondary uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-primary mb-2"><AnimatedCounter to={5000} suffix="+" /></div>
                <div className="text-sm font-bold text-text-secondary uppercase tracking-wider">Happy Patients</div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-[3rem] transform -rotate-3 scale-105"></div>
            <img src="/clinic_interior.jpg" alt="Clinic Interior" className="relative rounded-[3rem] shadow-2xl object-cover w-full h-[500px] border-8 border-surface" />
          </div>
        </div>
      </div>

      {/* Doctor Profile Section - Super Detailed */}
      <div className="py-24 bg-surface border-y border-border">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background rounded-[3rem] p-8 lg:p-16 shadow-xl border border-primary/10 flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="w-64 h-64 lg:w-96 lg:h-96 flex-shrink-0 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-[3rem] transform rotate-6 scale-105 opacity-20"></div>
              <img src="/images/dr_kar.jpeg" alt="Dr. Subhalaxmi Kar" className="relative w-full h-full object-cover rounded-[3rem] shadow-2xl border-4 border-white" />
            </div>
            
            <div className="flex-grow">
              <div className="inline-block bg-accent/10 text-primary font-bold px-4 py-2 rounded-full text-[10px] sm:text-xs mb-3 lg:mb-6 px-2 py-1 lg:px-4 lg:py-2 uppercase tracking-widest">
                CLINIC FOUNDER & CHIEF DENTIST
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-secondary mb-2">Dr. Subhalaxmi Kar</h2>
              <p className="text-2xl text-primary font-medium mb-8">BDS, FRCD, Root Canal & Laser Specialist</p>
              
              <div className="space-y-4 text-lg text-text-secondary leading-relaxed mb-8">
                <p>
                  Dr. Subhalaxmi Kar is widely recognized as one of the most gentle and meticulously skilled dental surgeons in Odisha. An alumnus of the prestigious Sum Hospital, she holds a Fellowship in Laser Dentistry (Regd. No.: 2790 A) and is a certified Root Canal Specialist from Hyderabad.
                </p>
                <p>
                  Her approach is deeply rooted in patient comfort. She strongly believes that dental anxiety is a thing of the past. By leveraging advanced rotary endodontics and dental lasers, Dr. Kar ensures that complex procedures like root canals, extractions, and smile makeovers are completely painless and require minimal recovery time.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-surface p-4 rounded-2xl border border-border">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                  <span className="font-bold text-text-primary text-sm">Fellowship in Laser Dentistry</span>
                </div>
                <div className="flex items-center gap-3 bg-surface p-4 rounded-2xl border border-border">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                  <span className="font-bold text-text-primary text-sm">Certified Root Canal Specialist</span>
                </div>
                <div className="flex items-center gap-3 bg-surface p-4 rounded-2xl border border-border">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                  <span className="font-bold text-text-primary text-sm">Advanced Cosmetic Dentistry</span>
                </div>
                <div className="flex items-center gap-3 bg-surface p-4 rounded-2xl border border-border">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                  <span className="font-bold text-text-primary text-sm">Pediatric (Child) Care Expert</span>
                </div>
              </div>
            </div>
            
          </div>

          <div className="bg-background rounded-[3rem] p-8 lg:p-16 shadow-xl border border-primary/10 flex flex-col-reverse lg:flex-row gap-16 items-center mt-12">
            
            <div className="flex-grow">
              <div className="inline-block bg-accent/10 text-primary font-bold px-4 py-2 rounded-full text-[10px] sm:text-xs mb-3 lg:mb-6 px-2 py-1 lg:px-4 lg:py-2 uppercase tracking-widest">
                LEAD SURGEON & IMPLANTOLOGIST
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-secondary mb-2">Dr. Baba Sankar</h2>
              <p className="text-2xl text-primary font-medium mb-8">BDS, Dental Surgeon | Root Canal Specialist</p>
              
              <div className="space-y-4 text-lg text-text-secondary leading-relaxed mb-8">
                <p>
                  Dr. Baba Sankar is an experienced dental surgeon who graduated from SUM Hospital. He has spent years taking advanced training in Orthodontics (braces and smile correction) and Oral Implantology (permanent artificial teeth).
                </p>
                <p>
                  He is known for his calm nature and careful hands. Whether you need a difficult tooth removal, a painless root canal, or a full set of new dental implants, Dr. Sankar makes sure the treatment is done right the first time so your smile stays healthy for years to come.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-surface p-4 rounded-2xl border border-border">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                  <span className="font-bold text-text-primary text-sm">Fellowship in Clinical Orthodontics</span>
                </div>
                <div className="flex items-center gap-3 bg-surface p-4 rounded-2xl border border-border">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                  <span className="font-bold text-text-primary text-sm">Fellowship in Oral Implantology</span>
                </div>
                <div className="flex items-center gap-3 bg-surface p-4 rounded-2xl border border-border">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                  <span className="font-bold text-text-primary text-sm">Complex Root Canal Specialist</span>
                </div>
                <div className="flex items-center gap-3 bg-surface p-4 rounded-2xl border border-border">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                  <span className="font-bold text-text-primary text-sm">Surgical Extractions</span>
                </div>
              </div>
            </div>

            <div className="w-64 h-64 lg:w-96 lg:h-96 flex-shrink-0 relative">
              <div className="absolute inset-0 bg-gradient-to-tl from-accent to-primary rounded-[3rem] transform -rotate-6 scale-105 opacity-20"></div>
              <img src="/images/dr_baba_sankar.png" alt="Dr. Baba Sankar" className="relative w-full h-full object-cover object-top rounded-[3rem] shadow-2xl border-4 border-white" />
            </div>
            
          </div>

        </div>
      </div>

      {/* Comprehensive "Why Choose Us" Data */}
      <section className="py-24 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-secondary mb-6">The Smile Planet Difference</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We don't just fix teeth; we elevate your entire healthcare experience. Here is the immense value you get when you step into our clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Absolute Zero-Pain Dentistry",
              desc: "Fear the drill? We utilize modern anesthetic techniques and advanced laser dentistry to ensure you feel absolutely nothing during your procedure. Dentistry shouldn't hurt, and with us, it never will."
            },
            {
              title: "Hospital-Grade Sterilization",
              desc: "Your health is paramount. We follow a strict 4-step sterilization protocol. Every single instrument is autoclaved and sealed in disposable pouches, opened directly in front of you."
            },
            {
              title: "100% Transparent Pricing",
              desc: "No hidden charges, no surprise fees at the front desk. After your consultation, we provide a detailed, printed treatment plan showing the exact cost of every procedure before we touch your teeth."
            },
            {
              title: "Advanced Tech & 3D Imaging",
              desc: "We don't rely on guesswork. Our clinic is equipped with high-resolution digital X-rays, intraoral cameras, and laser technology for precise diagnoses and flawless results."
            },
            {
              title: "Zero Wait-Time Guarantee",
              desc: "Your time is incredibly valuable. We tightly manage our booking schedule so that when you book a slot, you are seated in the dental chair exactly at that time. No crowded waiting rooms."
            },
            {
              title: "Comfort-First Environment",
              desc: "Our clinic doesn't feel like a hospital. From the ambient lighting and soothing music to our ultra-comfortable ergonomic dental chairs, every detail is designed to relax your mind."
            }
          ].map((item, index) => (
            <div key={index} className="group relative bg-white p-6 rounded-[2rem] shadow-md border-b-4 border-transparent hover:border-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              {/* Subtle Medical/Dental Watermark */}
              <svg className="absolute -bottom-6 -right-6 w-32 h-32 text-primary/5 group-hover:text-primary/10 transition-colors transform group-hover:scale-110 duration-500 rotate-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.5 2 6 4.5 6 8C6 10 7.5 11.5 8.5 12.5C9.5 13.5 10 15 10 16.5C10 17.5 10.5 18.5 11 19C11.5 19.5 12.5 20 13.5 20C15 20 16.5 19 17.5 17C18.5 15 19 13 19 11C19 6 16.5 2 12 2Z" />
              </svg>

              <div className="relative z-10">
                
                  {/* Dentist Style Graphics: Subtle Grid & Medical Cross */}
                  <div className="absolute inset-0 bg-[radial-gradient(#0EA5A415_1px,transparent_1px)] [background-size:12px_12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors font-bold text-xl">+</div>

                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5 text-primary ring-4 ring-primary/5 group-hover:bg-primary group-hover:text-white transition-colors duration-300 relative z-10">
                  <svg className="w-7 h-7 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-black text-secondary mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Premium Redesign */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#0EA5A410_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-secondary mb-6">Our Core Purpose</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Light Card: Mission */}
            <div className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-2xl border border-border relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 h-full flex flex-col">
              <svg className="absolute -top-12 -right-12 w-48 h-48 text-primary/5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              
              <div className="w-20 h-20 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 ring-8 ring-primary/5 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-secondary mb-6">Our Mission</h3>
              <p className="text-xl text-text-secondary leading-relaxed font-medium flex-grow">
                Our goal is to take the fear out of going to the dentist by making your visit as comfortable and caring as possible. We believe in helping you understand your dental health, giving you honest advice, and providing treatments that last—all with clear and fair pricing.
              </p>
            </div>
            
            {/* Dark Card: Vision */}
            <div className="bg-primary rounded-[3rem] p-10 lg:p-16 shadow-2xl shadow-primary/30 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 h-full flex flex-col" style={{ transitionDelay: '100ms' }}>
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff20_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
              <svg className="absolute -bottom-12 -left-12 w-48 h-48 text-white/5 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>

              <div className="w-20 h-20 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-8 ring-8 ring-white/5 group-hover:bg-white group-hover:text-primary transition-all duration-500 relative z-10">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-secondary mb-6 relative z-10">Our Vision</h3>
              <p className="text-xl text-white/90 leading-relaxed font-medium relative z-10 flex-grow">
                Our vision is to be the most trusted dental clinic in Bhubaneswar. We want every family in our community to have a healthy, beautiful smile, and we want to make visiting the dentist something you actually look forward to instead of fear.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
