import React, { useState } from 'react';
import { PenTool, Check, Send, Calendar, ShieldCheck, HelpCircle, RefreshCw, FileText, AlertCircle } from 'lucide-react';

export default function SectorPublishing() {
  // Calculator States
  const [sourceType, setSourceType] = useState<'raw-notes' | 'rough-outline' | 'fresh-concept'>('rough-outline');
  const [wordCount, setWordCount] = useState<number>(5000);
  const [hasData, setHasData] = useState<boolean>(true);
  const [fastTrack, setFastTrack] = useState<boolean>(false);
  const [includeLitReview, setIncludeLitReview] = useState<boolean>(true);

  // Form States
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    academicField: '',
    projectTopic: '',
    notes: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);

    const payload = {
      ...formData,
      source_material: sourceType,
      target_word_count: wordCount,
      has_experimental_dataset: hasData ? 'Yes' : 'No',
      literature_survey_needed: includeLitReview ? 'Yes' : 'No',
      urgent_processing: fastTrack ? 'Yes' : 'No',
      access_key: "ea758345-9811-42db-9445-96a78c92360a",
      from_name: "Bedramake Writing Desk",
      subject_line: `Writing Request: ${formData.projectTopic}`
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setSubmitError("Failed to send message. Please try again later.");
      }
    } catch (error) {
      setSubmitError("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
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
                Publishing Help
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

            {/* Contact Banner: we'll respond with quote via phone or email */}
            <div className="bg-slate-950 text-white rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="space-y-0.5 text-center md:text-left">
                <span className="text-slate-400 text-xs font-mono uppercase tracking-wider">
                  Quote Requests
                </span>
                <p className="text-[10px] text-slate-500 italic font-mono leading-none font-sans">
                  We'll contact you with a tailored quote on your phone or email shortly.
                </p>
              </div>
              <div className="text-center md:text-right">
                <span className="text-sm font-medium tracking-tight text-emerald-300 font-sans block">
                  Provide phone or email in the contact form
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

                  {submitError && (
                    <div className="p-4 bg-rose-50 border border-rose-100 text-rose-600 rounded-xl text-xs font-bold flex items-center gap-3">
                      <AlertCircle className="w-4 h-4" />
                      {submitError}
                    </div>
                  )}

                  <div className="space-y-3">
                    <div>
                      <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold block mb-1">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        name="clientName"
                        required
                        value={formData.clientName}
                        onChange={handleInputChange}
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
                        name="clientEmail"
                        required
                        value={formData.clientEmail}
                        onChange={handleInputChange}
                        placeholder="sam.cooper@university.org"
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold block mb-1">
                        Phone Number (WhatsApp/Call) *
                      </label>
                      <input
                        type="tel"
                        name="clientPhone"
                        required
                        value={formData.clientPhone}
                        onChange={handleInputChange}
                        placeholder="+91 98xxxxxxxx"
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold block mb-1">
                        Academic Field / Journal Target
                      </label>
                      <input 
                        type="text" 
                        name="academicField"
                        value={formData.academicField}
                        onChange={handleInputChange}
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
                        name="projectTopic"
                        required
                        value={formData.projectTopic}
                        onChange={handleInputChange}
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
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="We have raw CSV files tracking voltage degradation over 50 hours of charge. We need introduction, literature review, methodology drafting and graph inclusion help."
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium p-3 rounded-2xl text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Send className="w-3.5 h-3.5" />
                    )}
                    {isLoading ? 'Processing...' : 'Submit Writing Request'}
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
                      Thanks — our team will contact you at <span className="font-semibold text-slate-700">{formData.clientPhone || formData.clientEmail}</span> with a tailored quote within 12 hours.
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
                      setFormData({ clientName: '', clientEmail: '', clientPhone: '', academicField: '', projectTopic: '', notes: '' });
                      setSubmitError(null);
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
