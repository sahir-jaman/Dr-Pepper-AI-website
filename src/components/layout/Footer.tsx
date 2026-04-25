import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-drpepper-black pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-3xl font-black italic text-drpepper-red mb-8 block tracking-tighter">DR PEPPER</Link>
            <p className="text-white/50 font-medium mb-8 leading-relaxed">
              Dr Pepper has been the unconventional choice since 1885. Boldly original, surprisingly smooth.
            </p>
            <div className="flex space-x-6">
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Youtube size={20} />} />
            </div>
          </div>
          
          <FooterColumn title="Shop">
            <FooterLink to="/products">All Products</FooterLink>
            <FooterLink to="/products">Zero Sugar</FooterLink>
            <FooterLink to="/products">Limited Drops</FooterLink>
            <FooterLink to="/find">Store Locator</FooterLink>
          </FooterColumn>
          
          <FooterColumn title="About">
            <FooterLink to="/about">Our Story</FooterLink>
            <FooterLink to="/about">Dr Pepper Museum</FooterLink>
            <FooterLink to="/about">Careers</FooterLink>
            <FooterLink to="/about">Contact Us</FooterLink>
          </FooterColumn>
          
          <FooterColumn title="Privacy">
            <FooterLink to="/">Privacy Policy</FooterLink>
            <FooterLink to="/">Terms of Use</FooterLink>
            <FooterLink to="/">Accessibility</FooterLink>
            <FooterLink to="/">Cookie Settings</FooterLink>
          </FooterColumn>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-sm font-medium">
            © {new Date().getFullYear()} Dr Pepper/Seven Up, Inc. All rights reserved.
          </p>
          <div className="flex gap-8">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Dr_Pepper_logo.svg/1200px-Dr_Pepper_logo.svg.png" className="h-6 grayscale opacity-20" alt="Logo" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">{title}</h4>
      <div className="flex flex-col space-y-4">
        {children}
      </div>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="text-white/60 hover:text-drpepper-red transition-colors text-sm font-bold">
      {children}
    </Link>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-drpepper-red hover:border-drpepper-red transition-all text-white/50 hover:text-white">
      {icon}
    </a>
  );
}
