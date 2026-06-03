import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { Home, BookOpen, PenTool, Cpu, Menu, X, Info, Mail, Briefcase, GraduationCap, Award, Send } from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home' as ActiveTab, name: 'Home', icon: Home },
    { id: 'scholar' as ActiveTab, name: 'Scholar Registry', icon: Award },
    { id: 'scholar-submission' as ActiveTab, name: 'Submit Paper', icon: Send },
    { id: 'publishing' as ActiveTab, name: 'Publishing Help', icon: BookOpen },
    { id: 'writing' as ActiveTab, name: 'Writing Help', icon: PenTool },
    { id: 'tools' as ActiveTab, name: 'Editor Tools', icon: Cpu },
    { id: 'about' as ActiveTab, name: 'About', icon: Info },
    { id: 'contact' as ActiveTab, name: 'Contact', icon: Mail },
    { id: 'jobs' as ActiveTab, name: 'Job Help', icon: Briefcase },
    { id: 'admission' as ActiveTab, name: 'Admission Help', icon: GraduationCap },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            onClick={() => { setActiveTab('home'); setIsOpen(false); }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src="/Bedramake Main Logo (No BG).webp"
              alt="Nedraamke logo"
              className="w-18 h-18 object-contain"
            />
            
          </div>

          {/* Desktop Nav - visible on bigger screens */}
          <nav className="hidden lg:flex items-center gap-1 ml-auto mr-4 lg:mr-0">
            {menuItems.filter(item => item.id !== 'scholar' && item.id !== 'scholar-submission').map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'border border-slate-900 text-slate-900 bg-white shadow-sm font-bold'
                      : 'border border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {Icon && <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-900' : 'text-slate-400'}`} />}
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button - shows on phone and tablet (less than lg) */}
          <div className="flex lg:hidden">
            <button
               onClick={() => setIsOpen(!isOpen)}
               className="text-slate-500 hover:text-slate-700 p-2 cursor-pointer"
               aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer - visible on phone or tablet */}
      {isOpen && (
        <div className="lg:hidden border-b border-slate-100 bg-white/95 animate-fade-in divide-y divide-slate-50">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-2.5 w-full px-4 py-3 rounded-xl text-sm font-semibold text-left transition-all ${
                    isActive
                      ? 'border border-slate-900 text-slate-900 bg-white font-bold'
                      : 'border border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {Icon && <Icon className={`w-4 h-4 ${isActive ? 'text-slate-900' : 'text-slate-455'}`} />}
                  {item.name}
                </button>
              );
            })}
          </div>
          <div className="p-4 bg-slate-50">
            <div className="text-[10px] font-mono text-center text-slate-450 uppercase font-semibold">
              Committee on Publication Ethics Certified
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
