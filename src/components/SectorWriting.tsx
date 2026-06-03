import React, { useState } from 'react';
import { PenTool, Check, Send, Calendar, ShieldCheck, HelpCircle, RefreshCw, FileText } from 'lucide-react';

export default function SectorWriting() {
  // Calculator States
  const [sourceType, setSourceType] = useState<'raw-notes' | 'rough-outline' | 'fresh-concept'>('rough-outline');
  const [wordCount, setWordCount] = useState<number>(5000);
  const [hasData, setHasData] = useState<boolean>(true);
  const [fastTrack, setFastTrack] = useState<boolean>(false);
  const [includeLitReview, setIncludeLitReview] = useState<boolean>(true);

  // Form States
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [academicField, setAcademicField] = useState('');
  const [projectTopic, setProjectTopic] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Estimate computation for Writing Help
  const calculateWritingCost = () => {
    let ratePerWord = 1.25; // Base Rate in INR
    if (sourceType === 'fresh-concept') ratePerWord = 1.95; // More effort needed for fresh concept
    else if (sourceType === 'raw-notes') ratePerWord = 1.55; // Compiling from lab notes

    let total = wordCount * ratePerWord;
    if (!hasData) total += 3500; // Extra work if data analysis/creation is needed
    if (includeLitReview) total += 1999; // Extensive bibliography creation
    if (fastTrack) total += 4000; // Expedited writer matching

    return {
      inr: Math.round(total),
      usd: Math.round(total / 83.5)
    };
  };

  const cost = calculateWritingCost();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !projectTopic) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Sector Header */}
      <section className="bg-slate-900 text-white py-12 md:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Bedramake Network Writing Desk
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-normal">
            Complete high-quality scientific and academic writing assistance. We draft your papers, format the arguments, and create structured manuscript content based on your core ideas.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Calculator (Left/Main Panel - 7cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-150 p-6 md:p-8 rounded-3xl shadow-sm space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <PenTool className="w-5.5 h-5.5 text-indigo-600" />
                Scientific Writing Estimator
              </h2>
              <p className="text-xs text-slate-500">
                Choose your source material level and document word target to map out an aggregated creation cost projection.
              </p>
            </div>

            <div className="h-px bg-slate-100" />

            {/* Base Materials selection */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-550 block">
                1. Standard Source Materials Available
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'fresh-concept', title: 'Conceptual Outline Only', desc: 'Starting from a single raw idea research question' },
                  { id: 'raw-notes', title: 'Data Sheets & Lab Notes', desc: 'Unstructured results and numeric tables provided' },
                  { id: 'rough-outline', title: 'Rough Chapter Drafts', desc: 'Partial drafts requiring comprehensive completion' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSourceType(item.id as any)}
                    className={`p-3.5 border text-left rounded-xl transition-all cursor-pointer ${
                      sourceType === item.id
                        ? 'border-indigo-600 bg-indigo-50/20 ring-1 ring-indigo-600'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-bold text-xs text-slate-900 block">{item.title}</span>
                    <span className="text-[10px] text-slate-400 mt-1 block leading-tight">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Target Words Slider */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-550">
                  2. Targeted Word Count
                </label>
                <span className="bg-slate-100 text-slate-800 text-xs px-2.5 py-1 rounded-md font-mono font-bold">
                  {wordCount.toLocaleString()} Words
                </span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="30000" 
                step="500"
                value={wordCount}
                onChange={(e) => setWordCount(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>Min: 1,000 words</span>
                <span>Max: 30,000 words</span>
              </div>
            </div>

            {/* Custom Addons for Content Writers */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-550 block">
                3. Additional Creation Elements
              </label>
              <div className="space-y-2.5">
                {[
                  {
                    checked: hasData,
                    onChange: (val: boolean) => setHasData(val),
                    title: 'Includes Valid Experimental Dataset',
                    desc: 'I have compiled numbers, metrics, or graphs. Disable if you require our research experts to structure logical simulation scenarios.',
                    badge: 'Highly Efficient'
                  },
                  {
                    checked: includeLitReview,
                    onChange: (val: boolean) => setIncludeLitReview(val),
                    title: 'Comprehensive Literature Survey Drafting',
                    desc: 'Perform a deep database search to integrate at least 25 standard peer-reviewed references in IEEE/APA guidelines.',
                    badge: 'Recommended'
                  },
                  {
                    checked: fastTrack,
                    onChange: (val: boolean) => setFastTrack(val),
                    title: 'Urgent Processing Block (Priority matching)',
                    desc: 'Instantly allocate a top research co-writer to begin drafting the first 2,000-word milestone block within 48 hours.',
                    badge: 'Express Delivery'
                  }
                ].map((addon, idx) => (
                  <label key={idx} className="flex gap-3 p-3 border border-slate-150 rounded-xl cursor-pointer hover:bg-slate-50/50 transition-colors">
                    <input 
                      type="checkbox" 
                      checked={addon.checked} 
                      onChange={(e) => addon.onChange(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded text-indigo-600 focus:ring-indigo-550 border-slate-300 accent-indigo-600"
                    />
                    <div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs font-bold text-slate-900">{addon.title}</span>
                        <span className="bg-slate-100 text-[9px] font-mono font-bold text-slate-500 px-1.5 py-0.5 rounded-full">
                          {addon.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{addon.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Calculations Banner */}
            <div className="bg-slate-950 text-white rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="space-y-0.5 text-center md:text-left">
                <span className="text-slate-400 text-xs font-mono uppercase tracking-wider">
                  Aggregated Draft Quote
                </span>
                <p className="text-[10px] text-slate-500 italic font-mono leading-none font-sans">
                  *Our estimates operate transparently. Full formatting compliance check is done free of cost.
                </p>
              </div>
              <div className="text-center md:text-right">
                <span className="text-3xl font-extrabold tracking-tight text-indigo-400 font-sans block">
                  ₹{cost.inr.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  ~ ${cost.usd} USD (Inclusive of initial formatting setup)
                </span>
              </div>
            </div>
          </div>

          {/* Contact Consultation Form (Right Panel - 5cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Consultation Inquiry block */}
            <div className="bg-white border border-slate-150 p-6 md:p-8 rounded-3xl shadow-sm">
              {!submitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs uppercase font-mono tracking-widest text-indigo-600 font-bold block">
                      Content Creation Desk
                    </span>
                    <h2 className="text-xl font-bold font-sans text-slate-950 tracking-tight">
                      Request Complete Writing Assistance
                    </h2>
                    <p className="text-xs text-slate-400">
                      Our desk will draft original, COPE-compliant academic manuscripts meticulously mapped to your guidelines.
                    </p>
                  </div>

                  <div className="h-px bg-slate-100" />

                  <div className="space-y-3">
                    <div>
                      <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold block mb-1">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="Dr. Samantha Cooper"
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold block mb-1">
                        Professional Email *
                      </label>
                      <input 
                        type="email" 
                        required
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="sam.cooper@university.org"
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold block mb-1">
                        Academic Field / Journal Target
                      </label>
                      <input 
                        type="text" 
                        value={academicField}
                        onChange={(e) => setAcademicField(e.target.value)}
                        placeholder="Renewable Energy Conversion, Springer Nature"
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold block mb-1">
                        Project Topic & Core Hypothesis *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={projectTopic}
                        onChange={(e) => setProjectTopic(e.target.value)}
                        placeholder="A comparative review of solid-state sodium battery membranes"
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold block mb-1">
                        Outline / Core Lab Notebook Summary
                      </label>
                      <textarea 
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="We have raw CSV files tracking voltage degradation over 50 hours of charge. We need introduction, literature review, methodology drafting and graph inclusion help."
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium p-3 rounded-2xl text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Submit Writing Request
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="mx-auto h-12 w-12 bg-indigo-50 border border-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                    <Check className="w-6 h-6 animate-bounce" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-900 text-lg">Inquiry Recorded</h3>
                    <p className="text-xs text-slate-400">
                      Our senior coordinating co-writer has received your concept notes and topic sheet. We will email you a complete structural breakdown with proposed milestones at <span className="font-semibold text-slate-700">{clientEmail}</span> within 12 hours.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl text-left border border-slate-100 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <Calendar className="w-4 h-4 text-indigo-600" />
                      Collaborative Creation Phases:
                    </div>
                    <ol className="text-[11px] space-y-1.5 list-decimal list-inside text-slate-500 font-sans">
                      <li>Outline proposal and references scope dispatch.</li>
                      <li>Drafting of methodology & structural chapters.</li>
                      <li>Final plagiarism validation and layout check.</li>
                    </ol>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setClientName('');
                      setClientEmail('');
                      setProjectTopic('');
                      setNotes('');
                    }}
                    className="text-xs text-indigo-600 hover:text-indigo-700 font-semibold"
                  >
                    Submit another manuscript writing inquiry
                  </button>
                </div>
              )}
            </div>

            {/* Ethical Safeguards Sidebar */}
            <div className="bg-slate-900 text-white p-6 rounded-3xl space-y-4 shadow-sm border border-slate-850">
              <span className="text-[10px] uppercase font-mono tracking-wider text-indigo-400 font-bold block">
                Plag-Free Guarantee
              </span>
              <ul className="space-y-3 text-xs leading-normal text-slate-350">
                <li className="flex gap-2.5 items-start">
                  <ShieldCheck className="w-4.5 h-4.5 text-indigo-400 mt-0.5 shrink-0" />
                  <span>100% human-expert drafted. No AI-synthetic hallucinated sentences or citations.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <ShieldCheck className="w-4.5 h-4.5 text-indigo-400 mt-0.5 shrink-0" />
                  <span>Rigorous verification against cross-referencing and database matching.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <ShieldCheck className="w-4.5 h-4.5 text-indigo-400 mt-0.5 shrink-0" />
                  <span>Interactive review iterations included to match original author tone.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
