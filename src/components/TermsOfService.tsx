import React from 'react';
import { Shield, FileText, ArrowRight, CheckCircle, Flame, Scale } from 'lucide-react';

interface TermsOfServiceProps {
  setActiveTab?: (tab: any) => void;
}

export default function TermsOfService({ setActiveTab }: TermsOfServiceProps) {
  
  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Cooperative Terms",
      content: "By accessing, indexing, downloading, hosting, or submitting manuscripts to the Bedramake Network Scientific Sandbox and Cooperative Portal (under active indexing registers), you agree to be bound by these Terms of Service. If you do not agree to these terms, you must cease all activities in this sandbox immediately."
    },
    {
      id: "deposit",
      title: "2. Cooperative Metadata & Paper Depositing",
      content: "All reviews, five-page empirical articles, projects, or draft datasets deposited through the Scholar Submission dispatch systems are licensed under Creative Commons Attribution 4.0 International (CC BY 4.0). Authors maintain ultimate moral copyright of their intellectual assets while continuously granting Bedramake Network a non-exclusive, perpetual, global license to compile, index, and archive materials."
    },
    {
      id: "peer-rules",
      title: "3. Double-Blind and Community Review Mandate",
      content: "Users participating as peer reviewers, comments providers, or editorial adjudicators agree to uphold complete impartiality. All review logs, comment evaluations, and validation scores must be submitted based purely on scholarly, statistical, and empirical merit, free from conflicts of interest."
    },
    {
      id: "prohibitions",
      title: "4. Conduct and Prohibited Scholarly Work",
      content: "You are strictly prohibited from depositing plagiarized findings, fabricated data formulas, or AI-generated material that is unverified or misleading. All work must correspond with strict academic honesty rules, referencing authentic source materials and maintaining full citation integrity."
    },
    {
      id: "limitation",
      title: "5. Disclaimers and Limitation of Liability",
      content: "Bedramake Network provides an open access sandbox cooperative of academic publishing. Materials are indexed 'as is' without warranty of any kind. Bedramake Network, its founders, and editorial advisors will not be liable for any damage under academic disputes, intellectual priority claims, or repository system failures."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/25 via-slate-900 to-indigo-950/25" />
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4 relative z-10 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Terms of Service
          </h1>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto font-medium">
            Please read these terms carefully before accessing or submitting to our cooperative scientific repository.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-10 shadow-sm space-y-8 animate-slide-in">
          
          {/* Introductory block */}
          <div className="flex gap-4 p-5 bg-indigo-50/50 border border-indigo-100 rounded-2xl">
            <Scale className="w-6 h-6 text-indigo-600 shrink-0 mt-0.5" />
            <div className="space-y-1.5">
              <h3 className="font-bold text-xs text-indigo-900 uppercase font-mono tracking-wider">Cooperative Agreement</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                These terms govern the Bedramake Network scientific repository, academic registry access, indexing tools, and the submission pipelines. By participating in our peer-to-peer verification, you join an open-access scientific sandbox.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {sections.map((sec) => (
              <div key={sec.id} className="space-y-3">
                <h2 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                  <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  {sec.title}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed font-sans pl-6.5 font-normal">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-155 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="space-y-1">
              <h3 className="font-bold text-xs text-slate-900">Have questions about these terms?</h3>
              <p className="text-[11px] text-slate-500">Please contact our Compliance and Ethics Committee directly.</p>
            </div>
            
            {setActiveTab && (
              <button
                onClick={() => setActiveTab('contact')}
                className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-3 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-sm w-full sm:w-auto justify-center"
              >
                Reach compliance <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
