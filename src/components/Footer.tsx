import React from 'react';
import { ActiveTab } from '../types';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand block */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setActiveTab('home')}>
              <div className="bg-white p-2 rounded-xl">
                <img
                  src="/Bedramake Main Logo (No BG).webp"
                  alt="Bedramake logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Empowering global academic authorship through professional publishing, double-blind peer editing, and hyper-affordable student pathways.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-wider font-semibold text-white mb-4">
              Quick Gateways
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => setActiveTab('home')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                 <button 
                  onClick={() => setActiveTab('scholar')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Scholar Index
                </button>
              </li>
              <li>
                 <button 
                  onClick={() => setActiveTab('scholar-submission')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Publish to Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('writing')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Writing Help Desk
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('tools')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Editor Tools Help
                </button>
              </li>
            </ul>
          </div>

          {/* Guidelines / Services */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-wider font-semibold text-white mb-4">
              Academic Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => setActiveTab('about')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  About Bedramake Network
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('contact')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Contact Editorial Office
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('jobs')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Careers & Panel Vacancies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('admission')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Admission & Mentorship Help
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-mono tracking-wider font-semibold text-white mb-4">
              Network Support
            </h3>
            <div className="flex items-start gap-2.5 text-sm">
              <Mail className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
              <span>teambedr@gmail.com</span>
            </div>
            <div className="flex items-start gap-2.5 text-sm">
              <Phone className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
              <span>+91 6307595827</span>
            </div>
            <div className="flex items-start gap-2.5 text-sm">
              <MapPin className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
              <span>Global Academic Hub / Kolkata, India</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-850 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {currentYear} Bedramake Network. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <button 
              onClick={() => setActiveTab('terms')} 
              className="hover:text-slate-400 cursor-pointer text-left transition-colors font-mono"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => setActiveTab('privacy')} 
              className="hover:text-slate-400 cursor-pointer text-left transition-colors font-mono"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setActiveTab('cope')} 
              className="hover:text-slate-400 cursor-pointer text-left transition-colors font-mono"
            >
              COPE Compliance
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
