import React from 'react';
import { ShieldAlert, Fingerprint, EyeOff, Key, Database, ArrowRight } from 'lucide-react';

interface PrivacyPolicyProps {
  setActiveTab?: (tab: any) => void;
}

export default function PrivacyPolicy({ setActiveTab }: PrivacyPolicyProps) {

  const points = [
    {
      icon: Fingerprint,
      title: "Double-Blind Anonymity Protocols",
      desc: "To sustain empirical fairness, all review submissions go through strict double-blind protocols. During editing steps, author metadata (names, emails, institutional affiliations) is completely decoupled from manuscript review documents viewed by the review board."
    },
    {
      icon: Database,
      title: "Data We Safe-keep and Collect",
      desc: "We collect submission data including your name, email address, ORCID iD, discipline inputs, and uploaded manuscript files. This data is leveraged strictly to index your scholar articles, compute citation networks, and communicate editorial outcomes."
    },
    {
      icon: EyeOff,
      title: "No-Sell Guarantee and Ads Policy",
      desc: "Bedramake Network is a scientific sandbox and open-access cooperative. We NEVER sell, license, or monetize your analytical records, research drafts, email lists, or contact info to third-party advertisers, predatory publishers, or commercial entities."
    },
    {
      icon: Key,
      title: "Security and Cloud Ingestion Protection",
      desc: "All document files linked via Google Forms, Drive uploads, and external sandbox APIs are hosted in secure, isolated containers with authorized role-level encryption. Access is restricted to designated editorial guardians during validation phases."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/25 via-slate-900 to-indigo-950/25" />
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4 relative z-10 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto font-medium">
            How we process your manuscript records, secure double-blind protocols, and safe-keep scientific contributions.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 mt-12 space-y-8 animate-slide-in">
        
        {/* Core Principles */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-10 shadow-sm space-y-8">
          
          <div className="flex gap-4 p-5 bg-emerald-50/50 border border-emerald-100 rounded-2xl">
            <ShieldAlert className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-1.5">
              <h3 className="font-bold text-xs text-emerald-900 uppercase font-mono tracking-wider">Our Privacy Mandate</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Academic research requires solid confidence. We secure intellectual properties from raw draft files to published digital object identifiers (DOIs) based on transparency rules.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div key={idx} className="space-y-3 p-1">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center border border-slate-200 shadow-xs">
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm tracking-tight">{pt.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans font-normal">
                    {pt.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Detailed Paragraph Sections */}
          <div className="border-t border-slate-150 pt-8 space-y-6">
            <div className="space-y-2">
              <h4 className="font-bold text-sm text-slate-900">1. Data Retention Policy</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-sans font-normal">
                Approved reviews and publications reside permanently in our indexed databases to maintain citation references and registered DOIs. Submissions that do not pass editor review checks are completely expunged from all backend environments within 30 business days.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-sm text-slate-900">2. Cookies and Regional Storage</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-sans font-normal">
                Our application stores only essential functional state within your browser session (such as navigation history configuration) to maintain responsiveness. We bypass heavy cookie trackers.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-150 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="space-y-1">
              <h3 className="font-bold text-xs text-slate-900 font-sans">Contacting the Privacy Board</h3>
              <p className="text-[11px] text-slate-500">Inquire about your stored indexes or request a manuscript removal.</p>
            </div>
            
            {setActiveTab && (
              <button
                onClick={() => setActiveTab('contact')}
                className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-3 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-sm w-full sm:w-auto justify-center"
              >
                Inquire <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
