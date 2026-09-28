import React, { useEffect } from 'react';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-xl border border-border">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-black text-secondary mb-4">Privacy Policy</h1>
            <p className="text-text-secondary font-medium">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          </div>
          
          <div className="prose prose-lg prose-headings:text-secondary prose-p:text-text-secondary prose-a:text-primary max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-6 leading-relaxed">Welcome to Smile Planet Dental Care. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. The Data We Collect</h2>
            <p className="mb-4 leading-relaxed">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-text-secondary">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
              <li><strong>Medical Data:</strong> information you willingly provide regarding your dental history through our secure inquiry forms.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Data</h2>
            <p className="mb-6 leading-relaxed">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to manage our relationship with you, schedule appointments, and provide top-tier dental services.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
            <p className="mb-6 leading-relaxed">We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Contact Us</h2>
            <p className="mb-6 leading-relaxed">If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
            <div className="bg-background p-6 rounded-2xl border border-border mt-4">
              <p className="font-bold text-secondary mb-1">Smile Planet Dental Care</p>
              <p className="text-text-secondary">Unit-3 BDA Lane, Kharavela Nagar, Bhubaneswar</p>
              <p className="text-text-secondary mt-2">Phone: +91 82493 29033</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
