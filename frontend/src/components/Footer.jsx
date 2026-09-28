import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="relative mt-24 z-40">
      
      {/* Floating CTA Overlay */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative -mb-12 z-50">
        <div className="bg-primary bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px] rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/20">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Ready for your perfect smile?</h3>
            <p className="text-white/90 font-medium text-sm md:text-base">Book your consultation today and let us transform your dental health.</p>
          </div>
          <Link to="/contact" className="flex-shrink-0 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-background transition-colors flex items-center gap-2 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            Send an Inquiry Now
          </Link>
            </div>
      </div>

      {/* Actual Footer */}
      <footer className="relative bg-secondary text-white overflow-hidden pt-16">
        {/* Dental Watermark Background */}
        <svg className="absolute -bottom-24 -right-24 w-96 h-96 text-primary/20 rotate-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.5 2 6 4.5 6 8C6 10 7.5 11.5 8.5 12.5C9.5 13.5 10 15 10 16.5C10 17.5 10.5 18.5 11 19C11.5 19.5 12.5 20 13.5 20C15 20 16.5 19 17.5 17C18.5 15 19 13 19 11C19 6 16.5 2 12 2Z" />
        </svg>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Socials */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-1 shadow-lg group-hover:scale-105 transition-transform"><img src="/images/logo.png" alt="Smile Planet Logo" className="w-full h-full object-contain" /></div>
              <div>
                <span className="block font-black text-2xl text-white leading-none tracking-tight">Smile Planet</span>
                <span className="block text-xs font-bold text-accent uppercase tracking-widest mt-0.5">Dental Care</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              Premium dental care combining advanced laser technology, strict sterilization, and compassionate doctors to give you a brighter, healthier future.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-secondary hover:border-accent transition-all">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-secondary hover:border-accent transition-all">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-secondary hover:border-accent transition-all">
                <FaTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2"><span className="w-4 h-1 bg-accent rounded-full"></span> Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent/50">›</span> About Our Clinic</Link></li>
              <li><Link to="/treatments" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent/50">›</span> All Treatments</Link></li>
              <li><Link to="/testimonials" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent/50">›</span> Patient Success Stories</Link></li>
              <li><Link to="/privacy" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent/50">›</span> Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent/50">›</span> Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2"><span className="w-4 h-1 bg-accent rounded-full"></span> Treatments</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/treatments#laser-teeth-whitening" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent/50">›</span> Laser Dentistry</Link></li>
              <li><Link to="/treatments#painless-root-canals" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent/50">›</span> Painless Root Canal</Link></li>
              <li><Link to="/treatments#invisible-aligners" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent/50">›</span> Invisible Aligners</Link></li>
              <li><Link to="/treatments#laser-teeth-whitening" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent/50">›</span> Teeth Whitening</Link></li>
              <li><Link to="/treatments#pediatric-dentistry" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent/50">›</span> Pediatric Dentistry</Link></li>
            </ul>
          </div>

          {/* Contact Info & Hours */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2"><span className="w-4 h-1 bg-accent rounded-full"></span> Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">Unit-3 BDA Lane, Near BDA Office<br/>Kharavela Nagar, Bhubaneswar, Odisha</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+918249329033" className="hover:text-accent transition-colors">+91 8249329033</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@smileplanet.com" className="hover:text-accent transition-colors">info@smileplanet.com</a>
              </li>
              <li className="flex items-start gap-3 pt-2">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white mb-1">Operating Hours:</span>
                  <span className="block text-white/70">Mon - Sat: 10:00 AM - 8:00 PM</span>
                  <span className="block text-white/70">Sunday: Closed</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Smile Planet Dental Care. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
