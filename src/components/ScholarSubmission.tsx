import React, { useState } from 'react';
import { 
  GraduationCap, FileText, Send, Eye, ShieldCheck, 
  Sparkles, ExternalLink, FileCheck, AlertCircle
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
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Publish with Bedramake Network Scholar
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-normal">
            Submit your review papers, mini-theses, or research project drafts right here to enter our validation pipeline.
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
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
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
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <FileText className="text-emerald-500 w-5.5 h-5.5 shrink-0" />
                Submit the Form
              </h2>
              <p className="text-xs text-slate-500 max-w-xxl">
                Fill in all possible details about your review paper. This form links your manuscript files directly to our review board.
              </p>
            </div>
          </div>

          {/* Pre-submission Guide & External Gateway */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-10">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Pre-Submission Checklist</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <div className="bg-indigo-100 p-1.5 rounded-lg text-indigo-600 shrink-0">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <span className="font-bold text-slate-800">Manuscript Files:</span> Have your empirical review or research draft ready in <span className="font-mono text-xs font-bold text-indigo-600">.docx</span> or <span className="font-mono text-xs font-bold text-indigo-600">.pdf</span> format for upload.
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="bg-indigo-100 p-1.5 rounded-lg text-indigo-600 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <span className="font-bold text-slate-800">Payment Verification:</span> Have your phone ready to complete the submission amount verification as per the form instructions.
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="bg-indigo-100 p-1.5 rounded-lg text-indigo-600 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <span className="font-bold text-slate-800">Personal Metadata:</span> Ensure you have all personal details (Phone number, Scholarly Email, Affiliation) ready before starting.
                  </p>
                </li>
              </ul>
              <div className="flex items-center gap-2 text-[11px] text-amber-700 font-bold bg-amber-50 border border-amber-100 p-3 rounded-xl">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                Important: You must be signed into your Google Account to upload files to this gateway.
              </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-5 lg:border-l border-slate-200 lg:pl-10">
              <p className="text-xs md:text-sm text-slate-500 text-center max-w-xs leading-relaxed">
                Are you ready with your information and documents? Click the button below to launch the official Google Form gateway.
              </p>
              <a 
                href="https://forms.gle/GV3gfJxJmdXnxA1B6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md group cursor-pointer text-sm"
              >
                Proceed to Submission
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
