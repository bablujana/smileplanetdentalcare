import React from 'react';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* Header */}
      <section className="bg-brand-lightTeal/30 pt-16 pb-24 border-b border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 uppercase">
              Simple Steps to a<br/>Healthier, Brighter Smile
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Getting started is easy! Follow these simple steps and let us take care of your dental health.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mb-20">
        <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center relative">
          
          {/* Connector Line (hidden on mobile) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
          
          {[
            { num: 1, title: 'Book Appointment', desc: 'Choose a convenient date and time online or by phone.', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
            { num: 2, title: 'Consultation', desc: 'Meet with our expert dentist for a detailed checkup and diagnosis.', icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z' },
            { num: 3, title: 'Treatment', desc: 'Get the right treatment plan tailored to your needs.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
            { num: 4, title: 'Follow-up', desc: 'We ensure your progress and long-term oral health.', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
          ].map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center max-w-[200px] mb-8 md:mb-0 bg-white">
              <div className="w-16 h-16 rounded-full bg-brand-lightTeal flex items-center justify-center mb-2 border-4 border-white shadow-sm">
                 <svg className="w-8 h-8 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} /></svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold mb-4 -mt-6 border-2 border-white shadow-sm relative z-20">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* Why it's easy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">Why it's Easy & Convenient?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
               <svg className="w-6 h-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Online Booking</h4>
              <p className="text-sm text-gray-500">Book from anywhere, anytime.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
               <svg className="w-6 h-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Short Waiting Time</h4>
              <p className="text-sm text-gray-500">Respect your time and schedule.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
               <svg className="w-6 h-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Personalized Care</h4>
              <p className="text-sm text-gray-500">Treatment plans for your unique needs.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
               <svg className="w-6 h-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Ongoing Support</h4>
              <p className="text-sm text-gray-500">We're with you at every step.</p>
            </div>
          </div>

        </div>
      </section>

      
      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-lightTeal/50 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between border border-brand-teal/10">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to start your journey to a healthier smile?</h3>
            <p className="text-gray-600">Book your appointment today and take the first step.</p>
          </div>
          <div className="mt-6 md:mt-0">
            <button className="bg-brand-teal text-white px-8 py-3.5 rounded-full font-medium hover:bg-brand-darkTeal transition-colors flex items-center gap-2">
              Book Appointment
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HowItWorks;
