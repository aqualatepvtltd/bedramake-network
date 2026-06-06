import React, { useState, useEffect } from 'react';
import { ActiveTab } from '../types';
import { SECTORS, FAQ_ITEMS, EDITORIAL_BOARD, FOUNDERS } from '../data';
import { 
  BookOpen, Sparkles, Cpu, PenTool, ArrowRight, CheckCircle2, 
  Award, ShieldCheck, Zap, Users, ShieldAlert, BarChart3, ChevronRight,
  HelpCircle, ChevronDown, ChevronLeft
} from 'lucide-react';

const HUMANIZED_TESTIMONIALS = [
  {
    name: "Dr. Ishita Verma",
    comment: "Managing a heavy teaching load at DU while finishing my PhD was exhausting. The Bedramake writing desk took my raw lab notes and helped me draft a manuscript that actually got accepted by IEEE. They are lifesavers for Indian academics.",
    role: "Assistant Professor",
    affiliation: "University of Delhi"
  },
  {
    name: "Rahul Deshmukh",
    comment: "I was worried about the plagiarism threshold for my first review paper. The Turnitin verification and the sentence-level editing by the mentors here made all the difference. Seeing my work on the Scholar Index registry is a dream come true.",
    role: "Senior Research Fellow",
    affiliation: "IISc Bangalore"
  },
  {
    name: "Priya Sundaram",
    comment: "The transition from a technical draft to a polished publication is the hardest part. The double-blind review feedback was brutal but honest, and it pushed my research to a level I didn't think possible. Highly recommended for SRF scholars.",
    role: "JRF Candidate",
    affiliation: "Anna University"
  }
];

interface LandingPageProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function LandingPage({ setActiveTab }: LandingPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [founderIndex, setFounderIndex] = useState(0);
  const [editorialIndex, setEditorialIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      if (founderIndex > FOUNDERS.length - 4) {
        setFounderIndex(Math.max(0, FOUNDERS.length - 4));
      }
      if (editorialIndex > EDITORIAL_BOARD.length - 4) {
        setEditorialIndex(Math.max(0, EDITORIAL_BOARD.length - 4));
      }
    }
  }, [isMobile, founderIndex, editorialIndex]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stats = [
    { value: '43+', label: 'Papers Published', icon: BookOpen },
    { value: '20+', label: 'Academic Board Boarders', icon: Users },
    { value: '4.9/5.0', label: 'Satisfied Professors & Authors', icon: Award },
    { value: '100%', label: 'Turnitin Clean Reports', icon: ShieldCheck },
  ];

  const clientTypes = [
    {
      title: 'For Graduate Students & Postgraduates',
      desc: 'Seamlessly draft and archive your dissertation summaries, first publications, and research chapters. Get complete writing and layout formatting support.',
      list: ['Complete Writing Assistance', 'Compliance Formatting Wizard', 'Verified Publication Layouts']
    },
    {
      title: 'For Seasoned Researchers & Professors',
      desc: 'Launch peer-reviewed papers with expert publication help. Secure perfect layout matching, deep bibliography tuning, and rapid indexing feedback.',
      list: ['Academic Scoping & Matching', 'Deep Bibliography Tuning', 'End-to-End Submission Management']
    },
    {
      title: 'For Creative & Scientific Authors',
      desc: 'Transform raw datasets, outlined theories, or lab notebooks into pristine, structured academic manuscripts ready for international review.',
      list: ['Structural Writing & Drafting', 'Style Guide Calibration', 'Accuracy Optimization Loops']
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-36 md:py-36 border-b border-slate-100">
        {/* Abstract background blobs */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-indigo-50/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-slate-100/30 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 text-white rounded-full text-xs font-semibold tracking-wider uppercase font-mono shadow-sm">
              <Zap className="w-3.5 h-3.5 text-indigo-400" />
              Empowering Academic Authorship
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950">
                Redefining Academic Publishing.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              Professional, direct assistance in compiling academic text, polishing manuscript structures, and successfully submitting to top indexed global venues.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-4">
              
              <button
                onClick={() => setActiveTab('scholar-submission')}
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer text-sm"
              >
                Publish to Us
                <Sparkles className="w-4 h-4 text-emerald-200 animate-pulse" />
              </button>
              
              <button
                onClick={() => setActiveTab('scholar')}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-2xl transition-all flex items-center justify-center gap-2.5 cursor-pointer text-sm shadow-md hover:shadow-lg border-none"
                id="hero-view-scholar-btn"
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span>View Published Scholar Index</span>
              </button>
              
              <button
                onClick={() => setActiveTab('publishing')}
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-850 text-white font-semibold px-6 py-3.5 rounded-2xl transition-all flex items-center justify-center gap-2 group shadow-sm cursor-pointer text-sm"
              >
                Publishing Assistance
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Board */}
      <section className="bg-slate-950 py-10 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="p-4 flex flex-col items-center">
                  <div className="bg-slate-900 p-2.5 rounded-xl mb-3 text-slate-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold tracking-tight font-sans text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-mono uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The 4 Sectors Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Our Three Dedicated Sectors
          </h2>
          <p className="text-slate-600">
            Click into any core capability program below to explore individual workspaces, calculators, resource links, and student submission frames.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SECTORS.map((sector) => {
            // Pick corresponding icon
            const getIcon = (iconName: string) => {
              switch (iconName) {
                case 'BookOpen': return <BookOpen className="w-6 h-6 text-slate-800" />;
                case 'PenTool': return <PenTool className="w-6 h-6 text-indigo-600" />;
                case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-600" />;
                case 'Cpu': return <Cpu className="w-6 h-6 text-slate-700" />;
                default: return <BookOpen className="w-6 h-6 text-slate-600" />;
              }
            };

            const getColorClasses = (id: string) => {
              switch (id) {
                case 'publishing': return 'border-slate-200 hover:border-slate-400 bg-gradient-to-br from-white to-slate-50/10 hover:shadow-slate-50';
                case 'writing': return 'border-indigo-100 hover:border-indigo-300 bg-gradient-to-br from-white to-indigo-50/10 hover:shadow-indigo-50';
                case 'editing': return 'border-amber-100 hover:border-amber-300 bg-gradient-to-br from-white to-amber-50/10 hover:shadow-amber-50';
                case 'tools': return 'border-slate-200 hover:border-slate-350 bg-gradient-to-br from-white to-slate-50/10 hover:shadow-slate-50';
                default: return 'border-slate-100 bg-white';
              }
            };

            const getAccentBg = (id: string) => {
              switch (id) {
                case 'publishing': return 'bg-slate-100 text-slate-850';
                case 'writing': return 'bg-indigo-50 text-indigo-700';
                case 'editing': return 'bg-amber-50 text-amber-700';
                case 'tools': return 'bg-slate-100 text-slate-850';
                default: return 'bg-slate-100 text-slate-700';
              }
            };

            return (
              <div 
                key={sector.id}
                className={`border p-6 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between ${getColorClasses(sector.id)}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-2xl ${getAccentBg(sector.id)}`}>
                      {getIcon(sector.iconName)}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-sans text-slate-900 tracking-tight">
                    {sector.title}
                  </h3>
                  
                  <span className="text-xs font-medium text-slate-400 block mt-1 mb-3">
                    {sector.tagline}
                  </span>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {sector.shortDesc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-50">
                  <button
                    onClick={() => setActiveTab(sector.id as any)}
                    className="w-full flex items-center justify-between text-xs font-semibold text-slate-900 hover:text-indigo-600 transition-colors group cursor-pointer"
                  >
                    <span>Open Workspace</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Target Audiences Bento Grid */}
      <section className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">
              Who We Empower
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We tailored separate functional spaces tailored precisely to your status, ensuring quality metrics, academic speed, and custom structural indexing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTypes.map((client, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {client.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {client.desc}
                  </p>
                  <div className="h-px bg-slate-100" />
                  <ul className="space-y-2.5">
                    {client.list.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {idx === 0 ? (
                  <button
                    onClick={() => setActiveTab('writing')}
                    className="mt-8 w-full py-2.5 text-center text-xs font-semibold bg-indigo-50 text-indigo-700 rounded-xl hover:bg-indigo-100 transition-colors cursor-pointer"
                  >
                    Get Writing Assistance
                  </button>
                ) : idx === 1 ? (
                  <button
                    onClick={() => setActiveTab('publishing')}
                    className="mt-8 w-full py-2.5 text-center text-xs font-semibold bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all cursor-pointer"
                  >
                    View Publishing program
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveTab('tools')}
                    className="mt-8 w-full py-2.5 text-center text-xs font-semibold bg-slate-100 text-slate-800 rounded-xl hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    View Editor Tools
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Academic Ethics Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">
                Peer Review & Academic Integrity Assurance
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Bedramake Network strictly complies with the Committee on Publication Ethics (COPE) code of standards. All journals we edit or publish operate under rigorous double-blind, peer-evaluated standards, backed by certified Turnitin scanning and clear citation checks.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex gap-2.5 items-start">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">Double-blind review</span>
                </div>
                <div className="flex gap-2.5 items-start">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">Turnitin Verification</span>
                </div>
                <div className="flex gap-2.5 items-start">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">CrossRef DOI assigned</span>
                </div>
                <div className="flex gap-2.5 items-start">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">COPE compliant</span>
                </div>
              </div>
            </div>
            
            {/* Visual Process Flow */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 font-sans text-sm">
              <h4 className="text-xs font-mono tracking-wider uppercase text-emerald-400">
                Processing Milestones
              </h4>
              <div className="space-y-3.5">
                {[
                  { step: '01', title: 'Upload & Grammar Sanitization', desc: 'Syntax structuring and basic layouts.' },
                  { step: '02', title: 'Double-Blind Review Assignment', desc: 'Distributed anonymously to board reviewers.' },
                  { step: '03', title: 'Revision & Peer Response', desc: 'Authors update manuscript based on technical scores.' },
                  { step: '04', title: 'Plagiarism Audit & Index' , desc: 'Final scan, DOI allocation, and journal indexing.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="text-xs font-mono text-emerald-400 bg-white/10 h-7 w-7 rounded-lg flex items-center justify-center font-bold shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <h5 className="font-bold text-white text-xs tracking-tight">{item.title}</h5>
                      <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Board Section */}
      <section id="editorial-board-section" className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Our Editorial Board
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Distinguished professors, lead researchers, and science editors who ensure double-blind compliance, statistical validity, and rigorous COPE publishing standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {EDITORIAL_BOARD.map((member, idx) => {
              const isVisibleOnDesktop = idx >= editorialIndex && idx < editorialIndex + 4;
              const isVisibleOnMobile = idx === editorialIndex;
              const isVisible = isMobile ? isVisibleOnMobile : isVisibleOnDesktop;

              return (
                <div 
                  key={idx} 
                  id={`editorial-member-${idx}`}
                  className={`bg-slate-50 border border-slate-200/60 rounded-3xl p-6 text-center space-y-4 hover:shadow-md transition-shadow duration-300 ${
                    isVisible ? 'block animate-slide-in' : 'hidden'
                  }`}
                >
                  <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-indigo-100 shadow-sm">
                    <img 
                      src={member.avatar} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-900 text-base">{member.name}</h3>
                    <p className="text-xs font-semibold text-indigo-600">{member.role}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-200/50">
                    <span className="inline-block text-[11px] text-slate-500 font-medium">
                      {member.institution}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {(() => {
            const maxEditorialIdx = isMobile ? EDITORIAL_BOARD.length - 1 : Math.max(0, EDITORIAL_BOARD.length - 4);
            const dotCount = isMobile ? EDITORIAL_BOARD.length : Math.max(1, EDITORIAL_BOARD.length - 3);
            const showEditorialControls = maxEditorialIdx > 0;

            if (!showEditorialControls) return null;

            return (
              <div className="flex justify-center items-center gap-3 pt-8">
                <button
                  id="editorial-prev-btn"
                  onClick={() => setEditorialIndex(prev => Math.max(0, prev - 1))}
                  disabled={editorialIndex === 0}
                  className={`p-3 rounded-full border transition-all cursor-pointer ${
                    editorialIndex === 0 
                      ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-slate-50' 
                      : 'border-slate-300 text-slate-700 bg-white hover:border-slate-400 hover:bg-slate-50 shadow-sm'
                  }`}
                  title="Previous Editors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-1.5">
                  {Array.from({ length: dotCount }).map((_, stepIdx) => (
                    <span 
                      key={stepIdx} 
                      className={`h-2 rounded-full transition-all ${
                        editorialIndex === stepIdx ? 'bg-indigo-600 w-6' : 'bg-slate-300 w-2'
                      }`}
                    />
                  ))}
                </div>
                <button
                  id="editorial-next-btn"
                  onClick={() => setEditorialIndex(prev => Math.min(maxEditorialIdx, prev + 1))}
                  disabled={editorialIndex >= maxEditorialIdx}
                  className={`p-3 rounded-full border transition-all cursor-pointer ${
                    editorialIndex >= maxEditorialIdx 
                      ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-slate-50' 
                      : 'border-slate-300 text-slate-700 bg-white hover:border-slate-400 hover:bg-slate-50 shadow-sm'
                  }`}
                  title="Next Editors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            );
          })()}

        </div>
      </section>

      {/* Meet Our Founders Section */}
      <section id="founders-section" className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Meet Our Founders
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              The architects who engineered our scientific cooperative sandbox and established our peer-to-peer open access program.
            </p>
          </div>

          {/* Render 1 card at a time on mobile, or 4 grid cards on desktop based on current view size */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUNDERS.map((founder, idx) => {
              const isVisibleOnDesktop = idx >= founderIndex && idx < founderIndex + 4;
              const isVisibleOnMobile = idx === founderIndex ;
              return (
                <div 
                  key={founder.name} 
                  id={`founder-card-${founder.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 animate-slide-in ${
                    isVisibleOnMobile ? 'block' : 'hidden'
                  } ${
                    isVisibleOnDesktop ? 'sm:flex' : 'sm:hidden'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-sm bg-slate-100">
                      <img 
                        src={founder.avatar} 
                        alt={founder.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-slate-900 text-base tracking-tight leading-tight">
                        {founder.name}
                      </h3>
                      <p className="text-xs font-semibold text-emerald-600">
                        {founder.role}
                      </p>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans font-normal">
                      {founder.bio}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active indicator limit logic for Founders */}
          {(() => {
            const maxFounderIdx = isMobile ? FOUNDERS.length - 1 : Math.max(0, FOUNDERS.length - 4);
            const dotCount = isMobile ? FOUNDERS.length : Math.max(1, FOUNDERS.length - 3);
            const showFounderControls = maxFounderIdx > 0;

            if (!showFounderControls) return null;
            
            return (
              <div className="flex justify-center items-center gap-3 pt-10">
                <button
                  id="founder-prev-btn"
                  onClick={() => setFounderIndex(prev => Math.max(0, prev - 1))}
                  disabled={founderIndex === 0}
                  className={`p-3 rounded-full border transition-all cursor-pointer ${
                    founderIndex === 0 
                      ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-slate-100' 
                      : 'border-slate-300 text-slate-700 bg-white hover:border-slate-400 hover:bg-slate-50 shadow-sm'
                  }`}
                  title="Previous Founders"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-1.5">
                  {Array.from({ length: dotCount }).map((_, stepIdx) => (
                    <span 
                      key={stepIdx} 
                      className={`h-2 rounded-full transition-all ${
                        founderIndex === stepIdx ? 'bg-indigo-600 w-6' : 'bg-slate-400 w-2'
                      }`}
                    />
                  ))}
                </div>
                <button
                  id="founder-next-btn"
                  onClick={() => setFounderIndex(prev => Math.min(maxFounderIdx, prev + 1))}
                  disabled={founderIndex >= maxFounderIdx}
                  className={`p-3 rounded-full border transition-all cursor-pointer ${
                    founderIndex >= maxFounderIdx 
                      ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-slate-100' 
                      : 'border-slate-300 text-slate-700 bg-white hover:border-slate-400 hover:bg-slate-50 shadow-sm'
                  }`}
                  title="Next Founders"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Hear From Our Authors
            </h2>
            <p className="text-slate-600 text-sm">
              Helping scholars and students publish global theses since 2021.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HUMANIZED_TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between">
                <p className="text-sm italic text-slate-600 leading-relaxed mb-6">
                  "{t.comment}"
                </p>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 font-sans">
                    {t.name}
                  </h4>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    {t.role}, <span className="font-medium text-indigo-950">{t.affiliation}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-16 md:py-24 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Everything you need to know about our scientific cooperative, processing compliance, and editor services.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  id={`faq-item-${idx}`}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-slate-900 hover:text-indigo-600 transition-colors focus:outline-none cursor-pointer group"
                  >
                    <span className="flex items-center gap-3 pr-4 text-sm sm:text-base">
                      <HelpCircle className="w-5 h-5 text-indigo-500 shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-185 text-indigo-500' : ''
                      }`} 
                    />
                  </button>

                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[500px] border-t border-slate-100 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    } overflow-hidden`}
                  >
                    <div className="px-6 py-5 text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
