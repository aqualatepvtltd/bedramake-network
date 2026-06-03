import React from 'react';
import { Award, ShieldCheck, HelpCircle, Check, BookOpen, UserCheck, CheckSquare, AlertCircle } from 'lucide-react';

interface CopeComplianceProps {
  setActiveTab?: (tab: any) => void;
}

export default function CopeCompliance({ setActiveTab }: CopeComplianceProps) {
  const lastUpdated = "June 3, 2026";

  const corePillars = [
    {
      title: "Allegations of Misconduct",
      desc: "Our board immediately takes action on allegations of plagiarism, duplicate submissions, data manipulation, or citation manipulation. All claims undergo blind audits by our Ethics Subcommittee."
    },
    {
      title: "Authorship & Contribution",
      desc: "Every listed author must have contributed substantially to the concepts, analysis, drafting, or validation of the 5-page paper. Ghost or honorary authorship constitutes a major violation."
    },
    {
      title: "Conflicts of Interest",
      desc: "Authors must declare all funding sources, institutional ties, or economic associations that could potentially bias the empirical review. Reviews are assigned to advisors with zero affiliations."
    },
    {
      title: "Intellectual Property Protection",
      desc: "All cooperative submissions respect pre-printed and indexed works. We defend academic research priority right from the submission timestamp."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/25 via-slate-900 to-indigo-950/25" />
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4 relative z-10 animate-fade-in">
          <span className="bg-indigo-500/10 text-indigo-400 text-xs font-mono px-3 py-1 rounded-full border border-indigo-500/20 font-bold uppercase tracking-wider">
            COPE CORE PRACTICES
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            COPE Compliance
          </h1>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto font-medium">
            Our alignment with the Committee on Publication Ethics (COPE) core practices for editors, reviewers, and scientific cooperative sandboxes.
          </p>
          <div className="text-[11px] font-mono text-slate-500">
            Last modified: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 mt-12 space-y-8 animate-slide-in">
        
        {/* Intro */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-10 shadow-sm space-y-10">
          
          <div className="flex gap-4 p-5 bg-indigo-50/50 border border-indigo-100 rounded-2xl">
            <ShieldCheck className="w-6 h-6 text-indigo-600 shrink-0 mt-0.5" />
            <div className="space-y-1.5">
              <h3 className="font-bold text-xs text-indigo-900 uppercase font-mono tracking-wider">Publication Ethics Charter</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Bedramake Network is committed to absolute academic integrity. We design our double-blind reviewing, metadata registry, and open review feedback systems to support COPE standards.
              </p>
            </div>
          </div>

          {/* Pillars List */}
          <div className="space-y-6">
            <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <BookOpen className="text-indigo-600 w-5 h-5" />
              Core Academic Practices
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {corePillars.map((pillar, idx) => (
                <div key={idx} className="border border-slate-150 rounded-2xl p-5 space-y-2 hover:border-indigo-200 transition-colors bg-slate-50/40">
                  <span className="text-[10px] bg-slate-100 border border-slate-200 text-slate-500 font-bold px-2 py-0.5 rounded font-mono">
                    RULE 0{idx + 1}
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-xs pt-1">{pillar.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-sans font-normal">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Peer Review & AI Policy Detail */}
          <div className="space-y-6 border-t border-slate-150 pt-8">
            <div className="space-y-3">
              <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <UserCheck className="text-emerald-600 w-5 h-5" />
                Reviewer & Editor Mandates
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed font-sans font-normal">
                Reviewers have an absolute obligation to maintain confidentiality. Under no circumstances should reviewers share, download, compile, or utilize copy drafts before official registration.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-5 flex gap-3 text-xs text-amber-900">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-bold text-slate-900">AI and Large Language Model Policy</span>
                <p className="text-slate-700 leading-relaxed font-sans font-normal">
                  In compliance with modern COPE guidelines, AI tools used to translate, format, spelling-check, or assist in structuring scientific drafts must be declared inside the paper's acknowledgment. AI cannot be credited as an author.
                </p>
              </div>
            </div>
          </div>

          {/* Ethics Board contacts */}
          <div className="border-t border-slate-150 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="space-y-1">
              <h3 className="font-bold text-xs text-slate-900">Ethics Advisory Board</h3>
              <p className="text-[11px] text-slate-500">Overseen by Dr. Kenji Tanaka, Head of Scientific Ethics.</p>
            </div>
            
            {setActiveTab && (
              <button
                onClick={() => setActiveTab('contact')}
                className="bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold px-5 py-3 rounded-xl transition-all cursor-pointer shadow-sm w-full sm:w-auto text-center"
              >
                Inquire or File a Concern
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
