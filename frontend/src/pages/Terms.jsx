import React, { useEffect } from 'react';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-xl border border-border">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-black text-secondary mb-4">Terms & Conditions</h1>
            <p className="text-text-secondary font-medium">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          </div>
          
          <div className="prose prose-lg prose-headings:text-secondary prose-p:text-text-secondary max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="mb-6 leading-relaxed">By accessing our website and utilizing our dental services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Medical Disclaimer</h2>
            <p className="mb-6 leading-relaxed">The content on this website is provided for general informational purposes only and is not intended as, nor should it be considered a substitute for, professional medical or dental advice. Do not use the information on this website for diagnosing or treating any medical or dental condition.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Appointments and Cancellations</h2>
            <p className="mb-4 leading-relaxed">When booking an appointment, you agree to provide accurate and complete information. We request that you provide at least 24 hours notice for cancellations.</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-text-secondary">
              <li>Late arrivals may result in reduced treatment time or rescheduling.</li>
              <li>Repeated missed appointments without notice may affect your ability to book future visits online.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Payment Terms</h2>
            <p className="mb-6 leading-relaxed">Payment is due at the time services are rendered unless prior arrangements have been made. We accept major credit cards, cash, and UPI payments.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Governing Law</h2>
            <p className="mb-6 leading-relaxed">These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in Bhubaneswar, Odisha.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
