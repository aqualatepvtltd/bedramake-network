import React, { useState } from 'react';
import { 
  GraduationCap, FileText, Send, Eye, ShieldCheck, 
  Sparkles, ExternalLink, FileCheck, AlertCircle, RefreshCw 
} from 'lucide-react';

interface ScholarSubmissionProps {
  setActiveTab?: (tab: any) => void;
}

export default function ScholarSubmission({ setActiveTab }: ScholarSubmissionProps) {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  const workflowSteps = [
    {
      title: "1. Scholar Writing Submission",
      desc: "An author drafts an empirical review paper (e.g., 5 pages) and fills all required academic details in our secured dispatch gateway below.",
      badge: "Self Directed Step"
    },
    {
      title: "2. Editorial Validation & Double-Blind Review",
      desc: "Our resident board evaluates the statistical formulas, claims, and references, following the rigorous COPE principles.",
      badge: "72 Hour Turnaround"
    },
    {
      title: "3. Metadata Compilation & DOI Registration",
      desc: "We assign a registered digital identifier link and compile the final text ready for indexing distribution portals.",
      badge: "Automated Metadata"
    },
    {
      title: "4. Global Scholar Index Release",
      desc: "The manuscript is published on our official open-access registry, available for academic citations, downloads, and drives.",
      badge: "Live Portal Release"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-12 md:py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/20 via-slate-900 to-indigo-950/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">  
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Publish with Bedramake Network Scholar
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-normal">
            Submit your 5-page review papers, mini-theses, or research project drafts right here to enter our validation pipeline.
          </p>
          {setActiveTab && (
            <div className="pt-2">
              <button
                onClick={() => setActiveTab('scholar')}
                className="bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs font-bold px-5 py-3 rounded-2xl flex items-center gap-1.5 transition-all cursor-pointer mx-auto"
              >
                <Eye className="w-3.5 h-3.5" />
                View Published Scholar Index
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Interactive Process Flow Section */}
        <div className="bg-white border border-slate-150 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
          <div className="space-y-1">
            <span className="text-xs uppercase font-mono tracking-wider text-indigo-600 font-bold block">
              The Peer-Review Roadmap
            </span>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <GraduationCap className="text-indigo-600 w-6 h-6 shrink-0" />
              The Manuscript Publishing Pipeline
            </h2>
            <p className="text-xs text-slate-500 max-w-2xl">
              We accept brief review articles, reports, or full drafts. Once approved by editors, papers are uploaded to the public registry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4">
            {workflowSteps.map((step, s_idx) => (
              <div 
                key={s_idx}
                onClick={() => setActiveWorkflowStep(s_idx)}
                className={`p-5 border rounded-2xl transition-all cursor-pointer text-left space-y-3 select-none flex flex-col justify-between ${
                  activeWorkflowStep === s_idx 
                    ? 'border-indigo-600 bg-indigo-50/50 shadow-sm' 
                    : 'border-slate-150 bg-white hover:border-slate-300'
                }`}
              >
                <div className="space-y-1.5">
                  <span className={`text-[10px] font-mono uppercase tracking-widest font-bold ${
                    activeWorkflowStep === s_idx ? 'text-indigo-600' : 'text-slate-400'
                  }`}>
                    {step.badge}
                  </span>
                  <h3 className="font-bold text-xs text-slate-950 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-sans font-normal">
                    {step.desc}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-1 border-t border-slate-100/50">
                  <span className="text-[10px] font-mono text-slate-400">Step 0{s_idx + 1}</span>
                  {activeWorkflowStep === s_idx && (
                    <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Submission Gateway Section */}
        <div id="form-section" className="bg-white border border-slate-150 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <div className="space-y-1">
              <span className="text-xs uppercase font-mono tracking-wider text-emerald-600 font-bold block">
                Official Dispatch Gate
              </span>
              <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <FileText className="text-emerald-500 w-5.5 h-5.5 shrink-0" />
                Submit Your 5-Page Paper
              </h2>
              <p className="text-xs text-slate-500 max-w-xl">
                Fill in all possible details about your review paper. This form links your manuscript files directly to our review board.
              </p>
            </div>
          </div>

          {/* Note about iframe customization */}
          <div className="bg-slate-55 border border-slate-200 rounded-xl p-4 flex gap-3 text-xs text-slate-600">
            <AlertCircle className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold text-slate-900">Customization Guide for Administrators</span>
              <p>
                This iframe demonstrates the user's submission form. To link your live active Google Form, replace the <code>iframe src</code> attribute with your own Google Form sharing code.
              </p>
            </div>
          </div>

          {/* Google Form Iframe Container */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-slate-50 relative">
            <div className="bg-slate-100 px-4 py-2 flex items-center justify-between border-b border-slate-200 text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
                <span className="ml-2 font-mono truncate max-w-xs md:max-w-md">docs.google.com/forms/scholar-submission</span>
              </span>
              <button 
                onClick={() => {
                  const el = document.getElementById('scholar-google-form-iframe') as HTMLIFrameElement;
                  if (el) el.src = el.src;
                }}
                className="hover:text-indigo-600 transition-colors cursor-pointer flex items-center gap-1 font-bold uppercase text-[9px]"
              >
                <RefreshCw className="w-3 h-3" /> Refresh Frame
              </button>
            </div>

            <div className="w-full h-[650px] overflow-hidden bg-white">
              <iframe
                id="scholar-google-form-iframe"
                src="https://docs.google.com/forms/d/e/1FAIpQLSfD_Z6jWeU_wRjI08_Mep1VFrIUnSjG_eFv3lEeywU_4M8R4A/viewform?embedded=true"
                className="w-full h-full border-none"
                title="Bedramake Network Scholar Review Submission Form"
              >
                Loading submission frame...
              </iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
