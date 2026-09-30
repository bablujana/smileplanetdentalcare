import API_BASE_URL from '../api';
import React, { useState } from 'react';
import { FadeInUp, FadeIn, StaggerContainer, StaggerItem } from '../components/AnimationWrapper';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setSubmitStatus({ type: 'success', message: 'Inquiry submitted successfully! Redirecting to WhatsApp...' });
        
        // Construct WhatsApp message
        const whatsappText = `*New Website Inquiry!*
*Name:* ${formData.fullName}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'N/A'}
*Service:* ${formData.service}
*Message:* ${formData.message || 'N/A'}`;
        const whatsappUrl = `https://wa.me/918249329033?text=${encodeURIComponent(whatsappText)}`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');

        setFormData({ fullName: '', phone: '', email: '', service: 'General Inquiry', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to submit inquiry. Please try again.' });
      }
    } catch (err) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-background pb-24">
      
      {/* Header */}
      <section className="relative overflow-hidden min-h-[350px] lg:min-h-[auto] bg-surface pt-32 pb-12 lg:pt-24 lg:pb-28 border-b border-border bg-[length:100%_350px] lg:bg-[length:100%_100%] lg:bg-cover bg-[position:top_right] lg:bg-center bg-no-repeat relative "
        style={{ backgroundImage: "url('/treatment_1.png')" }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="w-[60%] sm:w-[50%] lg:w-full lg:max-w-2xl">
            <div className="inline-block bg-primary text-white font-bold px-4 py-2 rounded-full text-[10px] sm:text-xs mb-3 lg:mb-6 px-2 py-1 lg:px-4 lg:py-2 uppercase tracking-widest border border-primary/20 backdrop-blur-sm">
              GET IN TOUCH
            </div>
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-black text-secondary leading-snug mb-6">
              Contact Smile Planet
            </h1>
            <p className="hidden md:block text-lg text-text-secondary leading-relaxed font-medium mb-6 max-w-lg">
              Have a question or want to schedule a visit? We would love to hear from you. Reach out to us using the details below or fill out the form.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        
        {/* Top: 3 Info Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <StaggerItem className="group relative bg-white p-8 rounded-[2rem] shadow-sm border border-border border-b-4 border-transparent hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#0EA5A415_1px,transparent_1px)] [background-size:12px_12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]"></div>
            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary ring-4 ring-primary/5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h3 className="text-2xl font-black text-secondary mb-2 group-hover:text-primary transition-colors">Call Us</h3>
              <p className="text-text-secondary mb-10">We are available during clinic hours.</p>
              <a href="tel:+918249329033" className="text-xl font-bold text-primary block">+91 8249329033</a>
            </div>
          </StaggerItem>

          {/* Address */}
          <StaggerItem className="group relative bg-white p-8 rounded-[2rem] shadow-sm border border-border border-b-4 border-transparent hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#0EA5A415_1px,transparent_1px)] [background-size:12px_12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]"></div>
            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary ring-4 ring-primary/5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-2xl font-black text-secondary mb-2 group-hover:text-primary transition-colors">Visit Us</h3>
              <p className="text-text-secondary leading-relaxed font-medium">Unit-3 BDA Lane, Near BDA Office, <br/>Kharavela Nagar, Bhubaneswar, Odisha</p>
            </div>
          </StaggerItem>

          {/* Timings */}
          <StaggerItem className="group relative bg-white p-8 rounded-[2rem] shadow-sm border border-border border-b-4 border-transparent hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#0EA5A415_1px,transparent_1px)] [background-size:12px_12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]"></div>
            <div className="relative z-10 text-center flex flex-col items-center w-full">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary ring-4 ring-primary/5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-black text-secondary mb-2 group-hover:text-primary transition-colors">Clinic Hours</h3>
              <div className="space-y-3 text-text-secondary font-medium w-full max-w-[200px]">
                <div className="flex justify-between border-b border-background pb-2"><span>Mon - Sat</span> <span className="font-bold text-text-primary">10AM - 8PM</span></div>
                <div className="flex justify-between text-red-500"><span>Sunday</span> <span className="font-bold">Closed</span></div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom: Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Contact Form */}
          <FadeInUp>
            <div className="bg-white rounded-[3rem] p-10 lg:p-14 shadow-xl border border-primary/10 h-full relative overflow-hidden">
              <svg className="absolute -bottom-10 -right-10 w-64 h-64 text-primary/5 rotate-12 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.5 2 6 4.5 6 8C6 10 7.5 11.5 8.5 12.5C9.5 13.5 10 15 10 16.5C10 17.5 10.5 18.5 11 19C11.5 19.5 12.5 20 13.5 20C15 20 16.5 19 17.5 17C18.5 15 19 13 19 11C19 6 16.5 2 12 2Z" />
              </svg>
              
              <h2 className="text-3xl font-black text-secondary mb-2">Submit an Inquiry</h2>
              <p className="text-text-secondary mb-10">Have a question about a treatment, pricing, or want to book a visit? Let us know below.</p>

              <form className="relative z-10 space-y-6" onSubmit={handleSubmit}>
                {submitStatus.message && (
                  <div className={`p-4 rounded-xl font-bold ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-2">Full Name</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-2">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-2">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-2">Inquiry Type</label>
                    <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow appearance-none text-text-secondary font-medium">
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Book a Visit">Book a Visit</option>
                      <option value="Pricing / Treatment Cost">Pricing / Treatment Cost</option>
                      <option value="Dental Emergency">Dental Emergency</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-text-primary mb-2">Your Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="5" className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-secondary transition-all shadow-lg shadow-primary/20 hover:-translate-y-1 disabled:opacity-50 disabled:hover:-translate-y-0">
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </form>
            </div>
          </FadeInUp>

          {/* Google Maps */}
          <FadeInUp>
            <div className="bg-white rounded-[3rem] p-4 shadow-xl border border-primary/10 h-full min-h-[500px] flex flex-col relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors duration-500 pointer-events-none z-10 rounded-[3rem]"></div>
              
              <a href="https://www.google.com/maps/dir//Smile+Planet+Dental+Care,+SCR+12,+BDA+Ln,+near+BDA+Office,+Unit+3,+Kharvela+Nagar,+Bhubaneswar,+Odisha+751001/@20.2702703,85.761778,7834m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3a19a7597c4369e9:0xa33c63e848bcbbeb!2m2!1d85.8354554!2d20.2757175?entry=ttu&g_ep=EgoyMDI2MDkyNy4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="bg-surface p-6 rounded-[2rem] flex items-center gap-4 mb-4 hover:bg-primary/5 hover:scale-[1.02] transition-all cursor-pointer group">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h3 className="font-black text-secondary">Find Us on the Map</h3>
                  <p className="text-sm text-text-secondary font-medium group-hover:text-primary transition-colors">Click here to get directions to Smile Planet Dental Care</p>
                </div>
              </a>

              <div className="flex-grow rounded-[2rem] overflow-hidden relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.6109968471!2d85.83288047605991!3d20.275722513233827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7597c4369e9%3A0xa33c63e848bcbbeb!2sSmile%20Planet%20Dental%20Care!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale-[20%] contrast-125 hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </FadeInUp>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
