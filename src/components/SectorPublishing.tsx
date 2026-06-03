import React, { useState } from 'react';
import { BookOpen, HelpCircle, Check, Send, Sparkles, ShieldCheck, Mail, Calendar, HelpCircle as HelpIcon } from 'lucide-react';

export default function SectorPublishing() {
  // Calculator States
  const [docType, setDocType] = useState<'thesis' | 'article' | 'review'>('article');
  const [pageCount, setPageCount] = useState<number>(15);
  const [indexingNeeded, setIndexingNeeded] = useState<boolean>(true);
  const [fastTrack, setFastTrack] = useState<boolean>(false);
  const [hardcopyCover, setHardcopyCover] = useState<boolean>(false);

  // Contact States
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactInst, setContactInst] = useState('');
  const [manuscriptTitle, setManuscriptTitle] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Estimate computation
  const calculateCost = () => {
    let baseRate = 0;
    if (docType === 'thesis') baseRate = 2500; // INR
    else if (docType === 'article') baseRate = 1800;
    else baseRate = 1200;

    let total = baseRate + pageCount * 45; // Rs. 45 per page
    if (indexingNeeded) total += 999;
    if (fastTrack) total += 1500;
    if (hardcopyCover) total += 1200;

    return {
      inr: total,
      usd: Math.round(total / 83.5)
    };
  };

  const cost = calculateCost();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Sector Header */}
      <section className="bg-slate-900 text-white py-12 md:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Bedramake Network Publishing
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-normal">
            End-to-end publication support for researchers, PhD candidates, and postgraduates. Handled under rigorous double-blind evaluation standards.
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
                <BookOpen className="w-5.5 h-5.5 text-emerald-600" />
                Publishing Price Estimator
              </h2>
              <p className="text-xs text-slate-500">
                Configure your manuscript complexity metrics below to obtain an immediate full start-to-end fee projection.
              </p>
            </div>

            <div className="h-px bg-slate-100" />

            {/* Document Type Selection */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-550 block">
                1. Manuscript Format
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'thesis', title: 'Thesis / Dissertation', desc: 'Detailed multi-chapter' },
                  { id: 'article', title: 'Research Article', desc: 'Standard technical paper' },
                  { id: 'review', title: 'Review / Case Study', desc: 'Shorter overview paper' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setDocType(item.id as any)}
                    className={`p-3.5 border text-left rounded-xl transition-all cursor-pointer ${
                      docType === item.id
                        ? 'border-emerald-600 bg-emerald-50/20 ring-1 ring-emerald-600'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-bold text-xs text-slate-900 block">{item.title}</span>
                    <span className="text-[10px] text-slate-400 mt-1 block leading-tight">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Page Count Slider */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-550">
                  2. Approximate Page Length
                </label>
                <span className="bg-slate-100 text-slate-800 text-xs px-2.5 py-1 rounded-md font-mono font-bold">
                  {pageCount} Pages
                </span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="250" 
                value={pageCount}
                onChange={(e) => setPageCount(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>Min: 5 pages</span>
                <span>Max: 250 pages</span>
              </div>
            </div>

            {/* Subscriptions / Value Adds */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-550 block">
                3. Additional Processing Integrations
              </label>
              <div className="space-y-2.5">
                {[
                  {
                    checked: indexingNeeded,
                    onChange: setIndexingNeeded,
                    title: 'DOI Assignment & Global Repository Indexing',
                    desc: 'Assigns permanent Crossref DOI index identifier links and includes global backup archives.',
                    badge: 'Recommended'
                  },
                  {
                    checked: fastTrack,
                    onChange: setFastTrack,
                    title: 'Fast-Track Peer Response (Review within 72 hrs)',
                    desc: 'Escalates peer review board assignment prioritizations for critical submissions.',
                    badge: 'Urgent'
                  },
                  {
                    checked: hardcopyCover,
                    onChange: setHardcopyCover,
                    title: 'Gold Hardcopy Printed Certificate & Cover Book',
                    desc: 'High-quality certificate plaque with a bound proof copy dispatched via mail.',
                    badge: 'Upgrade'
                  }
                ].map((addon, index) => (
                  <label key={index} className="flex gap-3 p-3 border border-slate-150 rounded-xl cursor-pointer hover:bg-slate-50/50 transition-colors">
                    <input 
                      type="checkbox" 
                      checked={addon.checked} 
                      onChange={(e) => addon.onChange(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300 accent-emerald-600"
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

            {/* Calculations Display */}
            <div className="bg-slate-950 text-white rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="space-y-0.5 text-center md:text-left">
                <span className="text-slate-400 text-xs font-mono uppercase tracking-wider">
                  Aggregated Quote Estimate
                </span>
                <p className="text-[10px] text-slate-500 italic font-mono leading-none">
                  *Varies slightly depending on editor peer feedback and revision weight.
                </p>
              </div>
              <div className="text-center md:text-right">
                <span className="text-3xl font-extrabold tracking-tight text-emerald-400 font-sans block">
                  ₹{cost.inr.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  ~ ${cost.usd} USD (taxes included)
                </span>
              </div>
            </div>
          </div>

          {/* Contact Option form (Right Panel - 5cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Form Card */}
            <div className="bg-white border border-slate-150 p-6 md:p-8 rounded-3xl shadow-sm">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs uppercase font-mono tracking-widest text-emerald-600 font-bold block">
                      Consultation Request
                    </span>
                    <h2 className="text-xl font-bold font-sans text-slate-950 tracking-tight">
                      Begin Start-to-End Publishing
                    </h2>
                    <p className="text-xs text-slate-400">
                      Submit details for a comprehensive consultation matching your goals.
                    </p>
                  </div>

                  <div className="h-px bg-slate-105" />

                  {/* Form fields */}
                  <div className="space-y-3">
                    <div>
                      <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold block mb-1">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Dr. Rajesh Patel"
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold block mb-1">
                        Professional Email *
                      </label>
                      <input 
                        type="email" 
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="r.patel@iit.edu"
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold block mb-1">
                        University or Institution
                      </label>
                      <input 
                        type="text" 
                        value={contactInst}
                        onChange={(e) => setContactInst(e.target.value)}
                        placeholder="Indian Institute of Technology, Kharagpur"
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold block mb-1">
                        Manuscript Working Title
                      </label>
                      <input 
                        type="text" 
                        value={manuscriptTitle}
                        onChange={(e) => setManuscriptTitle(e.target.value)}
                        placeholder="Analysis of Deep Learning Node Pruning in Edge Devices"
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold block mb-1">
                        Brief Outline or Special Instructions
                      </label>
                      <textarea 
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Target journal: Springer JCS. Plagiarism threshold requested: <10%."
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:bg-white resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium p-3 rounded-2xl text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Submit Request for Proposal
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="mx-auto h-12 w-12 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <Check className="w-6 h-6 animate-bounce" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-900 text-lg">Proposal Initiated Successfully</h3>
                    <p className="text-xs text-slate-400">
                      Our board editorial coordinators will respond with a full technical mapping timeline at <span className="font-semibold text-slate-700">{contactEmail}</span> within 18 hours.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl text-left border border-slate-100 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      Next Milestones:
                    </div>
                    <ol className="text-[11px] space-y-1.5 list-decimal list-inside text-slate-500 font-sans">
                      <li>Pre-checks for layout, format, and scoping indices.</li>
                      <li>Double-blind coordinator assignment.</li>
                      <li>Draft review feedback dispatch.</li>
                    </ol>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setContactName('');
                      setContactEmail('');
                      setManuscriptTitle('');
                      setMessage('');
                    }}
                    className="text-xs text-emerald-600 hover:text-emerald-700 font-semibold"
                  >
                    Submit another consultation card
                  </button>
                </div>
              )}
            </div>

            {/* Quick Benefits Sidebar Card */}
            <div className="bg-slate-900 text-white p-6 rounded-3xl space-y-4 shadow-sm border border-slate-850">
              <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 font-bold block">
                Ethical Safeguards
              </span>
              <ul className="space-y-3 text-xs leading-normal text-slate-350">
                <li className="flex gap-2.5 items-start">
                  <ShieldCheck className="w-4.5 h-4.5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Double-blind reviewers evaluate without institutional name bias.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <ShieldCheck className="w-4.5 h-4.5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Plagiarism check utilizes premium licensed Turnitin engines.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <ShieldCheck className="w-4.5 h-4.5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Permanent indexing via Crossref ensuring high scholarly citations.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
