import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { FadeInUp, FadeIn, StaggerContainer, StaggerItem, SlideInLeft, SlideInRight, TypewriterText, AnimatedCounter } from "../components/AnimationWrapper";

const Home = () => {
  const [dbTestimonials, setDbTestimonials] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8787/api/testimonials')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data.length > 0) {
          setDbTestimonials(data.data.slice(0, 3));
        }
      })
      .catch(err => console.error("Failed to fetch testimonials"));
  }, []);

  const heroSlides = [
    {
      image: '/hero_bg.jpg',
      bgPos: 'bg-[position:70%_top] lg:bg-center',
      badge1: 'HEALTHY SMILES',
      badge2: 'BRIGHTER FUTURES',
      title1: 'Discover Your Most',
      title2: 'Confident Smile',
      desc: 'Looking for a dentist you can actually trust? At Smile Planet Dental Care, we provide painless, affordable, and high-quality treatments right here in Bhubaneswar. Whether you need a simple cleanup or a full smile makeover, we have got you covered.',
      theme: {
          title: 'text-secondary',
          title2: 'text-primary',
          desc: 'text-text-secondary',
          badgeBg: 'bg-primary text-white',
          badgeText: 'text-primary'
      }
    },
    {
      image: '/hero_image_2.png',
      bgPos: 'bg-[position:85%_top] lg:bg-center',
      badge1: 'GENTLE DENTISTRY',
      badge2: 'ZERO STRESS',
      title1: 'Dental Care You',
      title2: 'Will Actually Enjoy',
      desc: 'We know going to the dentist can be scary. That is why we focus on making your visit as comfortable, quick, and painless as possible. Sit back, relax, and let us take care of your teeth with a gentle touch.',
      theme: {
          title: 'text-white drop-shadow-md',
          title2: 'text-accent drop-shadow-md',
          desc: 'text-white/95 drop-shadow-md',
          badgeBg: 'bg-white/20 text-white backdrop-blur-sm',
          badgeText: 'text-white drop-shadow-sm'
      }
    }
  ];
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]">
      {/* Hero Section */}
      <motion.section initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, margin: "-100px"}} transition={{duration: 0.7, ease: "easeOut"}} 
        className="relative overflow-hidden w-full bg-surface min-h-[500px] lg:min-h-[auto]" 
      >
        {/* Invisible static content to define the fluid height of the section */}
        <div className="invisible pt-32 pb-24 lg:pt-32 lg:pb-40">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl p-6 sm:p-0">
                <div className={`flex items-center gap-2 mb-6 uppercase tracking-wider text-xs lg:text-sm font-bold text-primary`}>
                <span>{heroSlides[0].badge1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                <span>{heroSlides[0].badge2}</span>
              </div>
              
              <h1 className={`text-xl sm:text-2xl md:text-4xl lg:text-6xl font-black leading-tight mb-4 text-secondary`}>
                <TypewriterText text={heroSlides[0].title1} className="block" />
                <TypewriterText text={heroSlides[0].title2} delay={0.6} className={`block text-primary`} />
              </h1>
              
              <p className={`hidden md:block text-lg mb-8 max-w-lg leading-normal font-medium text-text-secondary`}>
                {heroSlides[0].desc}
              </p>
              
              <Link to="/contact" className="inline-flex bg-primary text-white px-5 py-2.5 lg:px-8 lg:py-3.5 text-sm lg:text-base rounded-full font-bold hover:bg-secondary transition-all transform hover:-translate-y-1 items-center gap-2 shadow-lg shadow-primary/30">Send an Inquiry<svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              </div>
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </div>

        {/* Full Slide Content (Image + Text swipes together) */}
        <AnimatePresence initial={false}>
          <motion.div
            key={currentHero}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.8 }}
            className="absolute inset-0 pt-16 pb-24 lg:pt-32 lg:pb-40"
          >
            <div 
              className={`absolute top-0 left-0 right-0 h-full bottom-0 bg-cover bg-no-repeat z-0 ${heroSlides[currentHero].bgPos}`}
              style={{ backgroundImage: `url('${heroSlides[currentHero].image}')` }}
            />
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center pb-8 lg:pb-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="w-[65%] sm:w-[50%] lg:w-full lg:max-w-2xl">
                  <div className={`flex items-center gap-2 mb-6 uppercase tracking-wider text-xs lg:text-sm font-bold text-primary`}>
                <span>{heroSlides[currentHero].badge1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                <span>{heroSlides[currentHero].badge2}</span>
              </div>
              
              <h1 className={`text-xl sm:text-2xl md:text-4xl lg:text-6xl font-black leading-tight mb-4 text-secondary`}>
                <TypewriterText text={heroSlides[currentHero].title1} className="block" />
                <TypewriterText text={heroSlides[currentHero].title2} delay={0.6} className={`block text-primary`} />
              </h1>
              
              <p className={`hidden md:block text-lg mb-8 max-w-lg leading-normal font-medium text-text-secondary`}>
                {heroSlides[currentHero].desc}
              </p>
              
              <Link to="/contact" className="inline-flex bg-primary text-white px-5 py-2.5 lg:px-8 lg:py-3.5 text-sm lg:text-base rounded-full font-bold hover:bg-secondary transition-all transform hover:-translate-y-1 items-center gap-2 shadow-lg shadow-primary/30">Send an Inquiry<svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
                </div>
                <div className="hidden lg:block"></div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Dots (Stay on top statically) */}
        <div className="absolute bottom-16 lg:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroSlides.map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrentHero(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentHero ? 'bg-primary scale-125' : 'bg-primary/30 hover:bg-primary/50'}`}
            />
          ))}
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, margin: "-100px"}} transition={{duration: 0.7, ease: "easeOut"}} className="py-16 bg-gradient-to-br from-primary/10 via-surface to-accent/10 relative z-20 mt-0 lg:-mt-10 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="hidden md:block absolute top-[50px] left-24 right-24 border-t-2 border-dashed border-border z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {/* Feature 1 */}
            <div className="group relative text-center bg-white p-6 rounded-[2rem] shadow-sm border border-border border-b-4 hover:border-b-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden z-10">

              {/* Dentist Style Graphics: Subtle Grid & Tooth Watermark */}
              <div className="absolute inset-0 bg-[radial-gradient(#0EA5A415_1px,transparent_1px)] [background-size:12px_12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]"></div>
              <svg className="absolute -bottom-6 -right-6 w-24 h-24 text-primary/5 group-hover:text-primary/10 transition-colors transform group-hover:scale-110 duration-500 rotate-12 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.5 2 6 4.5 6 8C6 10 7.5 11.5 8.5 12.5C9.5 13.5 10 15 10 16.5C10 17.5 10.5 18.5 11 19C11.5 19.5 12.5 20 13.5 20C15 20 16.5 19 17.5 17C18.5 15 19 13 19 11C19 6 16.5 2 12 2Z" />
              </svg>

              <div className="relative z-10 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto shadow-inner ring-4 ring-primary/5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <svg className="w-7 h-7 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-base font-bold text-secondary mb-2">Modern & Clean<br/>Clinic</h3>
              <p className="text-sm text-text-secondary">We maintain strict hygiene and use the latest equipment so you feel completely safe.</p>
            </div>
            {/* Feature 2 */}
            <div className="group relative text-center bg-white p-6 rounded-[2rem] shadow-sm border border-border border-b-4 hover:border-b-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden z-10">

              {/* Dentist Style Graphics: Subtle Grid & Tooth Watermark */}
              <div className="absolute inset-0 bg-[radial-gradient(#0EA5A415_1px,transparent_1px)] [background-size:12px_12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]"></div>
              <svg className="absolute -bottom-6 -right-6 w-24 h-24 text-primary/5 group-hover:text-primary/10 transition-colors transform group-hover:scale-110 duration-500 rotate-12 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.5 2 6 4.5 6 8C6 10 7.5 11.5 8.5 12.5C9.5 13.5 10 15 10 16.5C10 17.5 10.5 18.5 11 19C11.5 19.5 12.5 20 13.5 20C15 20 16.5 19 17.5 17C18.5 15 19 13 19 11C19 6 16.5 2 12 2Z" />
              </svg>

              <div className="relative z-10 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto shadow-inner ring-4 ring-primary/5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <svg className="w-7 h-7 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
              </div>
              <h3 className="text-base font-bold text-secondary mb-2">Care for the<br/>Whole Family</h3>
              <p className="text-sm text-text-secondary">From kids to grandparents, we offer honest treatments tailored for every age group.</p>
            </div>
            {/* Feature 3 */}
            <div className="group relative text-center bg-white p-6 rounded-[2rem] shadow-sm border border-border border-b-4 hover:border-b-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden z-10">

              {/* Dentist Style Graphics: Subtle Grid & Tooth Watermark */}
              <div className="absolute inset-0 bg-[radial-gradient(#0EA5A415_1px,transparent_1px)] [background-size:12px_12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]"></div>
              <svg className="absolute -bottom-6 -right-6 w-24 h-24 text-primary/5 group-hover:text-primary/10 transition-colors transform group-hover:scale-110 duration-500 rotate-12 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.5 2 6 4.5 6 8C6 10 7.5 11.5 8.5 12.5C9.5 13.5 10 15 10 16.5C10 17.5 10.5 18.5 11 19C11.5 19.5 12.5 20 13.5 20C15 20 16.5 19 17.5 17C18.5 15 19 13 19 11C19 6 16.5 2 12 2Z" />
              </svg>

              <div className="relative z-10 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto shadow-inner ring-4 ring-primary/5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <svg className="w-7 h-7 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-base font-bold text-secondary mb-2">Painless<br/>Treatments</h3>
              <p className="text-sm text-text-secondary">Scared of the dentist? Don't be. We specialize in pain-free procedures to keep you relaxed.</p>
            </div>
            {/* Feature 4 */}
            <div className="group relative text-center bg-white p-6 rounded-[2rem] shadow-sm border border-border border-b-4 hover:border-b-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden z-10">

              {/* Dentist Style Graphics: Subtle Grid & Tooth Watermark */}
              <div className="absolute inset-0 bg-[radial-gradient(#0EA5A415_1px,transparent_1px)] [background-size:12px_12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]"></div>
              <svg className="absolute -bottom-6 -right-6 w-24 h-24 text-primary/5 group-hover:text-primary/10 transition-colors transform group-hover:scale-110 duration-500 rotate-12 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.5 2 6 4.5 6 8C6 10 7.5 11.5 8.5 12.5C9.5 13.5 10 15 10 16.5C10 17.5 10.5 18.5 11 19C11.5 19.5 12.5 20 13.5 20C15 20 16.5 19 17.5 17C18.5 15 19 13 19 11C19 6 16.5 2 12 2Z" />
              </svg>

              <div className="relative z-10 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto shadow-inner ring-4 ring-primary/5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <svg className="w-7 h-7 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-base font-bold text-secondary mb-2">Expert Local<br/>Doctors</h3>
              <p className="text-sm text-text-secondary">Proudly serving Bhubaneswar with a highly experienced team that genuinely cares.</p>
            </div>
          </div>
        </div>
      </motion.section>

            {/* About Dr. Subhalaxmi Kar Section */}
      <motion.section initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, margin: "-100px"}} transition={{duration: 0.7, ease: "easeOut"}} className="py-20 bg-background">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/10 via-surface to-accent/10 rounded-[2rem] p-6 lg:p-10 flex flex-col lg:flex-row items-center gap-10 shadow-xl border border-white/50">
            <div className="w-full lg:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full transform translate-x-4 translate-y-4 opacity-50 blur-lg"></div>
                <img src="/images/dr_kar.jpeg" alt="Dr. Subhalaxmi Kar" className="relative w-full aspect-square object-cover rounded-full border-8 border-surface shadow-2xl" />
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <div className="inline-block bg-primary text-white font-bold px-4 py-1.5 rounded-full text-sm mb-4 border border-primary/20">
                MEET YOUR DENTIST
              </div>
              <h2 className="text-2xl lg:text-4xl font-black text-secondary mb-4">Dr. Subhalaxmi Kar</h2>
              <p className="text-lg text-primary font-bold mb-4">BDS, FRCD | Root Canal & Laser Dentistry Expert</p>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Dr. Subhalaxmi Kar is known as one of the most gentle and skilled dentists in Bhubaneswar. With years of experience in root canals and laser dentistry, she focuses on providing honest advice and precise treatments that actually last. 
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-4 bg-surface p-4 rounded-2xl shadow-sm border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary"><span className="text-2xl">🎓</span></div>
                  <span className="font-bold text-text-primary">Sum Hospital Alum</span>
                </div>
                <div className="flex items-center gap-4 bg-surface p-4 rounded-2xl shadow-sm border border-border">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent"><span className="text-2xl">✨</span></div>
                  <span className="font-bold text-text-primary">Laser Dentistry</span>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors">
                Know More About Dr. Kar
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Dr. Baba Sankar Section */}
      <motion.section initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, margin: "-100px"}} transition={{duration: 0.7, ease: "easeOut"}} className="py-20 bg-background pt-0">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-bl from-accent/10 via-surface to-primary/10 rounded-[2rem] p-6 lg:p-10 flex flex-col-reverse lg:flex-row items-center gap-10 shadow-xl border border-white/50">
            <div className="w-full lg:w-2/3">
              <div className="inline-block bg-primary text-white font-bold px-4 py-1.5 rounded-full text-sm mb-4 border border-primary/20">
                MEET YOUR SURGEON
              </div>
              <h2 className="text-2xl lg:text-4xl font-black text-secondary mb-4">Dr. Baba Sankar</h2>
              <p className="text-lg text-primary font-bold mb-4">BDS, Dental Surgeon | Root Canal Specialist</p>
              <p className="text-text-secondary text-lg leading-normal mb-8">
                Dr. Baba Sankar is a highly skilled dental surgeon with advanced training in Orthodontics and Oral Implants (Regd. No.: 2676 A). From saving a bad tooth with a root canal to giving you a completely new smile with permanent implants, you are in very safe and careful hands.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-4 bg-surface p-4 rounded-2xl shadow-sm border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary"><span className="text-2xl">🎓</span></div>
                  <span className="font-bold text-text-primary">Sum Hospital Alum</span>
                </div>
                <div className="flex items-center gap-4 bg-surface p-4 rounded-2xl shadow-sm border border-border">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent"><span className="text-2xl">🦷</span></div>
                  <span className="font-bold text-text-primary">Implantologist</span>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors">
                Know More About Dr. Sankar
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tl from-accent to-primary rounded-full transform -translate-x-4 translate-y-4 opacity-50 blur-lg"></div>
                <img src="/images/dr_baba_sankar.png" alt="Dr. Baba Sankar" className="relative w-full aspect-square object-cover rounded-full border-8 border-surface shadow-2xl object-top" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>


      {/* Treatment Process Section */}
      <motion.section initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, margin: "-100px"}} transition={{duration: 0.7, ease: "easeOut"}} className="py-24 bg-background relative z-10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary text-white font-bold px-5 py-2 rounded-full text-sm mb-6 uppercase tracking-widest border border-primary/20">SIMPLE & TRANSPARENT</div>
            <h2 className="text-3xl lg:text-5xl font-black text-secondary mb-6">How We Take Care of You</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-normal">We like to keep things simple, transparent, and completely stress-free from the moment you walk through our clinic doors.</p>
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-1/8 right-1/8 border-t-2 border-dashed border-border z-0"></div>
            
                        {[
              { 
                step: "01", 
                title: "Consultation", 
                desc: "We sit down with you, listen to your concerns, and thoroughly check your teeth.", 
                icon: <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
              },
              { 
                step: "02", 
                title: "Custom Plan", 
                desc: "We explain exactly what you need and how much it will cost, with zero hidden fees.", 
                icon: <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              },
              { 
                step: "03", 
                title: "Painless Care", 
                desc: "Sit back and relax. We use modern tools to make sure you feel little to no pain.", 
                icon: <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              },
              { 
                step: "04", 
                title: "Perfect Smile", 
                desc: "Walk out with a healthy smile. We will even check up on you after you leave!", 
                icon: <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              }
            ].map((item, i) => (
              <div key={i} className="group relative z-10 flex flex-col items-center text-center bg-white p-6 rounded-[2rem] shadow-sm border border-border border-b-4 hover:border-b-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">

              {/* Dentist Style Graphics: Subtle Grid & Tooth Watermark */}
              <div className="absolute inset-0 bg-[radial-gradient(#0EA5A415_1px,transparent_1px)] [background-size:12px_12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]"></div>
              <svg className="absolute -bottom-6 -right-6 w-24 h-24 text-primary/5 group-hover:text-primary/10 transition-colors transform group-hover:scale-110 duration-500 rotate-12 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.5 2 6 4.5 6 8C6 10 7.5 11.5 8.5 12.5C9.5 13.5 10 15 10 16.5C10 17.5 10.5 18.5 11 19C11.5 19.5 12.5 20 13.5 20C15 20 16.5 19 17.5 17C18.5 15 19 13 19 11C19 6 16.5 2 12 2Z" />
              </svg>

                <div className="w-24 h-24 bg-surface rounded-full border-4 border-background shadow-xl flex items-center justify-center mb-6 relative group">
                  <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <div className="relative z-10">{item.icon}</div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-surface">{item.step}</div>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-text-secondary px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>


      {/* Before & After Section */}
      <motion.section initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, margin: "-100px"}} transition={{duration: 0.7, ease: "easeOut"}} className="py-24 bg-surface overflow-hidden relative border-t border-border">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-gradient-to-t from-accent/10 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/10 text-primary font-bold px-5 py-2 rounded-full text-sm mb-6 uppercase tracking-widest border border-accent/20">REAL RESULTS</div>
            <h2 className="text-3xl lg:text-5xl font-black text-secondary mb-6 tracking-tight">Real Results from Real Patients</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">See the difference for yourself! Here are just a few examples of how we've helped people in Bhubaneswar get their confidence back.</p>
            </div>
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Slider 1 */}
            <div className="flex flex-col gap-4 bg-surface p-6 rounded-3xl shadow-sm border border-border transition-transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-text-primary text-center mb-2">Laser Whitening</h3>
              <div className="rounded-2xl overflow-hidden shadow-inner">
                <BeforeAfterSlider beforeImage="/images/results/indian_yellow_teeth.jpg" afterImage="/images/results/indian_white_teeth.jpg" />
              </div>
              <p className="text-base text-text-secondary text-center mt-2 px-4">Get rid of stubborn yellow stains safely and quickly with our laser whitening.</p>
            </div>
            
            {/* Slider 2 */}
            <div className="flex flex-col gap-4 bg-surface p-6 rounded-3xl shadow-sm border border-border transition-transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-text-primary text-center mb-2">Invisible Aligners</h3>
              <div className="rounded-2xl overflow-hidden shadow-inner">
                <BeforeAfterSlider beforeImage="/images/results/indian_crooked_teeth.jpg" afterImage="/images/results/indian_straight_teeth.jpg" />
              </div>
              <p className="text-base text-text-secondary text-center mt-2 px-4">Fix crooked teeth without bulky metal braces. Invisible aligners make it easy.</p>
            </div>

            {/* Slider 3 */}
            <div className="flex flex-col gap-4 bg-surface p-6 rounded-3xl shadow-sm border border-border transition-transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-text-primary text-center mb-2">Dental Veneers</h3>
              <div className="rounded-2xl overflow-hidden shadow-inner">
                <BeforeAfterSlider beforeImage="/images/results/indian_gapped_teeth.jpg" afterImage="/images/results/indian_closed_gap_teeth.jpg" />
              </div>
              <p className="text-base text-text-secondary text-center mt-2 px-4">Hide gaps and chipped teeth instantly. Veneers give you that flawless, natural look.</p>
            </div>

            {/* Slider 4 */}
            <div className="flex flex-col gap-4 bg-surface p-6 rounded-3xl shadow-sm border border-border transition-transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-text-primary text-center mb-2">Crown Restorations</h3>
              <div className="rounded-2xl overflow-hidden shadow-inner">
                <BeforeAfterSlider beforeImage="/images/results/indian_chipped_teeth.jpg" afterImage="/images/results/indian_fixed_teeth.jpg" />
              </div>
              <p className="text-base text-text-secondary text-center mt-2 px-4">Save damaged teeth and make them look brand new with our strong dental crowns.</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/treatments" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-secondary transition-colors shadow-lg shadow-primary/20">
              Explore All Treatments
              <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </motion.section>

      
      {/* Why Choose Us Section */}
      <motion.section initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, margin: "-100px"}} transition={{duration: 0.7, ease: "easeOut"}} className="py-24 bg-surface">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="inline-block bg-primary text-white font-bold px-5 py-2 rounded-full text-sm mb-6 uppercase tracking-widest border border-primary/20">WHY CHOOSE US</div>
              <h2 className="text-3xl lg:text-5xl font-black text-secondary mb-6">Why We Are Bhubaneswar's Favorite</h2>
              <p className="text-lg text-text-secondary mb-8 leading-normal">
                We know finding a good dentist is tough. Here's why so many locals trust Smile Planet Dental Care for their family's oral health.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Advanced Laser Technology", desc: "No one likes the drill. We use modern lasers for faster healing and less pain." },
                  { title: "Strict Sterilization Protocols", desc: "Your safety is our priority. Every tool is 100% sterilized and sealed in pouches." },
                  { title: "Transparent Pricing", desc: "No surprise bills. We tell you exactly what a treatment costs before we start." },
                  { title: "Zero Wait Time Policy", desc: "We respect your schedule. When you book a time, you get seen at that time." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-primary mb-1">{feature.title}</h3>
                      <p className="text-sm text-text-secondary">{feature.desc}</p>
            </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Link to="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors border-b-2 border-primary pb-1">
                  Discover Our Clinic
                  <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-[3rem] transform rotate-3 scale-105"></div>
              <img src="/clinic_interior.jpg" alt="Clinic Interior" className="relative rounded-[3rem] shadow-2xl object-cover w-full h-[600px] border-8 border-surface" />
              
              <div className="absolute -bottom-8 -left-8 bg-surface p-6 rounded-3xl shadow-2xl border border-border flex items-center gap-4">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center text-success">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <div className="text-2xl font-black text-secondary">ISO 9001</div>
                  <div className="text-xs lg:text-sm font-bold text-text-secondary">Certified Clinic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>


      {/* Patient Reviews */}
      <motion.section initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, margin: "-100px"}} transition={{duration: 0.7, ease: "easeOut"}} className="py-24 bg-background">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-4xl font-black text-secondary mb-6">What Our Patients Say</h2>
            <div className="flex justify-center gap-1 mb-4">
              {[1,2,3,4,5].map(i => <svg key={i} className="w-8 h-8 text-yellow-400 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
            </div>
            <p className="text-lg text-text-secondary font-medium">Based on 500+ Happy Patients</p>
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(dbTestimonials.length > 0 ? dbTestimonials : [
              { name: "Aadyasha Priyadarshinee", content: "One of the best dental clinic out there. The doctor is extremely polite with nice behaviour, affordable price with well managed clinic. You should definitely visit." },
              { name: "Kumar Sarat", content: "I recently visited this dental clinic for tooth extraction. The extraction was quick and almost painless. The clinic is neat, hygienic and well managed. Thank you for the excellent treatment." },
              { name: "Chiranjeebi Sahoo", content: "Best dental clinic till the date.The doctor is very cooperative with good behaviour.Must visit for painless treatment." }
            ]).map((review, i) => (
              <div key={i} className="group bg-white p-8 rounded-[2rem] shadow-sm border border-border border-b-4 border-transparent hover:border-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">

              {/* Dentist Style Graphics: Subtle Grid & Tooth Watermark */}
              <div className="absolute inset-0 bg-[radial-gradient(#0EA5A415_1px,transparent_1px)] [background-size:12px_12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]"></div>
              <svg className="absolute -bottom-6 -right-6 w-24 h-24 text-primary/5 group-hover:text-primary/10 transition-colors transform group-hover:scale-110 duration-500 rotate-12 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.5 2 6 4.5 6 8C6 10 7.5 11.5 8.5 12.5C9.5 13.5 10 15 10 16.5C10 17.5 10.5 18.5 11 19C11.5 19.5 12.5 20 13.5 20C15 20 16.5 19 17.5 17C18.5 15 19 13 19 11C19 6 16.5 2 12 2Z" />
              </svg>

                <div className="absolute -top-5 right-8 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl leading-none">"</span>
                </div>
                <div className="flex items-center gap-1 mb-6 text-yellow-400">
                  {[1,2,3,4,5].map(star => <svg key={star} className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                </div>
                <p className="text-sm text-text-secondary italic mb-6 leading-relaxed">"{(review.text || review.content)}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-sm">
                    <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${review.name.replace(/\s+/g, "")}&backgroundColor=e2e8f0`} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary">{review.name}</h4>
                    <p className="text-xs text-success font-medium flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Verified Patient
                    </p>
            </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/testimonials" className="inline-flex items-center gap-2 bg-surface border-2 border-border text-text-primary px-5 py-2.5 lg:px-8 lg:py-3.5 text-sm lg:text-base rounded-full font-bold hover:border-primary hover:text-primary transition-colors shadow-sm">
              Read All Patient Reviews
              <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </motion.section>

      
      {/* Trust Section */}
      <motion.section initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, margin: "-100px"}} transition={{duration: 0.7, ease: "easeOut"}} className="py-24 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs lg:text-sm font-bold text-accent drop-shadow-sm uppercase tracking-wider mb-3">WE ARE HERE FOR YOU</div>
              <h2 className="text-2xl lg:text-4xl font-black text-secondary mb-6 leading-tight">
                Your Trusted Dental Clinic <br/>in Bhubaneswar
              </h2>
              <p className="text-lg text-text-secondary mb-10 leading-relaxed">
                Whether it's a routine cleaning or a complex root canal, we treat every patient like family. Our goal is simple: to provide the best dental care in Bhubaneswar at honest prices.
              </p>
              
              <div className="flex flex-wrap gap-8 lg:gap-12 bg-surface p-6 rounded-3xl shadow-md border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.5 2 6 4.5 6 8C6 10 7.5 11.5 8.5 12.5C9.5 13.5 10 15 10 16.5C10 17.5 10.5 18.5 11 19C11.5 19.5 12.5 20 13.5 20C15 20 16.5 19 17.5 17C18.5 15 19 13 19 11C19 6 16.5 2 12 2Z" /></svg>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-secondary leading-none mb-1"><AnimatedCounter to={10} suffix="+" /></div>
                    <div className="text-xs text-text-secondary font-bold uppercase tracking-wide">Years Exp.</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-secondary leading-none mb-1"><AnimatedCounter to={5} suffix="K+" /></div>
                    <div className="text-xs text-text-secondary font-bold uppercase tracking-wide">Happy Patients</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-success/10 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-secondary leading-none mb-1"><AnimatedCounter to={99} suffix="%" /></div>
                    <div className="text-xs text-text-secondary font-bold uppercase tracking-wide">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="shadow-2xl rounded-2xl overflow-hidden border border-border">
              <div className="bg-surface border-b border-border p-6 flex justify-between items-center">
                <h3 className="text-lg font-bold text-secondary">How often should I visit the dentist?</h3>
                <span className="text-primary font-bold text-2xl leading-none">-</span>
              </div>
              <div className="bg-background p-6">
                <p className="text-text-secondary mb-8 text-sm leading-relaxed">
                  For most people, a quick checkup and cleaning every six months is perfect. It helps us catch tiny issues before they turn into painful (and expensive) problems.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-text-primary font-bold text-sm">
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center text-success"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                    Catch cavities before they hurt
                  </li>
                  <li className="flex items-center gap-3 text-text-primary font-bold text-sm">
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center text-success"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                    Keep your natural teeth longer
                  </li>
                  <li className="flex items-center gap-3 text-text-primary font-bold text-sm">
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center text-success"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                    Maintain a fresh, bright smile
                  </li>
                </ul>
                <Link to="/contact" className="w-full bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                  Book Your Appointment
                  <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default Home;
