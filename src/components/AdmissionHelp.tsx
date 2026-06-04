import React, { useState } from 'react';
import { GraduationCap, ArrowRight, ClipboardCheck, Sparkles, Send, Check, Milestone, BookOpen, Award, RefreshCw, AlertCircle } from 'lucide-react';

export default function AdmissionHelp() {
  // Checklist States
  const [proposalReady, setProposalReady] = useState(false);
  const [sopDrafted, setSopDrafted] = useState(false);
  const [cvAcademic, setCvAcademic] = useState(false);
  const [advisorList, setAdvisorList] = useState(false);
  const [greToeflPassed, setGreToeflPassed] = useState(false);

  // Form States
  const [formData, setFormData] = useState({
    studentName: '',
    studentEmail: '',
    targetDegree: 'phd',
    majorField: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const calculateReadinessScore = () => {
    let score = 0;
    if (proposalReady) score += 25;
    if (sopDrafted) score += 20;
    if (cvAcademic) score += 20;
    if (advisorList) score += 15;
    if (greToeflPassed) score += 20;
    return score;
  };

  const readinessScore = calculateReadinessScore();

  const getReadinessLabel = (score: number) => {
    if (score === 100) return { label: 'Fully Prepared', color: 'text-emerald-600 bg-emerald-50 border-emerald-100', desc: 'Excellent! Your academic package is complete. Our coordinators can immediately match you with peer review mentors to check specific proposal flaws.' };
    if (score >= 60) return { label: 'Intermediate Structure', color: 'text-indigo-600 bg-indigo-50 border-indigo-100', desc: 'Good progress. Your core components are shaped but need alignment. We suggest prioritizing the Literature Review mapping in your proposal before launching outreach.' };
    return { label: 'Conceptual / Early Stage', color: 'text-amber-700 bg-amber-55 border-amber-100', desc: 'You are in the exploratory phase. Focus on setting a clean, focused Research Question. Reach out to our admission coaches to structure a high-yield workflow.' };
  };

  const statusInfo = getReadinessLabel(readinessScore);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);

    const payload = {
      ...formData,
      readiness_score: `${readinessScore}%`,
      proposal_ready: proposalReady ? 'Yes' : 'No',
      sop_drafted: sopDrafted ? 'Yes' : 'No',
      cv_academic: cvAcademic ? 'Yes' : 'No',
      advisor_list_ready: advisorList ? 'Yes' : 'No',
      gre_toefl_passed: greToeflPassed ? 'Yes' : 'No',
      access_key: "ea758345-9811-42db-9445-96a78c92360a",
      from_name: "Bedramake Admission Help",
      subject_line: `Admission Consultation: ${formData.majorField}`
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (result.success) {
        setRequestSubmitted(true);
      } else {
        setSubmitError("Failed to send message. Please try again later.");
      }
    } catch (error) {
      setSubmitError("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const phases = [
    {
      num: '01',
      title: 'Research Proposal Structuring',
      desc: 'Refining the empirical premise, hypothesis formulation, and scoping the scientific methodology.',
      metric: 'Crucial for PhD & Research Masters'
    },
    {
      num: '02',
      title: 'Academic SOP & CV Refinement',
      desc: 'Transforming industrial CVs into rigorous academic formats showcasing citations, preprints, and research projects.',
      metric: 'Key for scholarship screening'
    },
    {
      num: '03',
      title: 'Advisor Outreach Strategy',
      desc: 'Structuring short, impactful pitch emails containing research updates to secure affirmative professor consent.',
      metric: 'Reduces email rejection rates'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-12 md:py-16 border-b border-slate-800 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Academic Admission Help
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-normal">
            Secure scholarship entries and advisor approvals. Work with verified peer mentors to structure PhD research proposals and Statement of Purpose portfolios.
          </p>
        </div>
      </section>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel - Advisory Pillars & Checkbox Tool (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Application Readiness Checker */}
            <div className="bg-white border border-slate-150 p-6 md:p-8 rounded-3xl shadow-sm space-y-6">
              <div className="space-y-1">
                <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                  <ClipboardCheck className="w-5.5 h-5.5 text-indigo-600" />
                  Admission Readiness Assessment
                </h2>
                <p className="text-xs text-slate-500">
                  Check individual items below to compute your overall research package ready-weight index.
                </p>
              </div>

              <div className="h-px bg-slate-100" />

              <div className="space-y-3">
                {[
                  { state: proposalReady, setState: setProposalReady, title: 'Drafted Research Proposal with citations (~1,200 words)', weight: '25%' },
                  { state: sopDrafted, setState: setSopDrafted, title: 'Statement of Purpose custom-aligned to target university', weight: '20%' },
                  { state: cvAcademic, setState: setCvAcademic, title: 'Academic Curriculum Vitae highlighting publication citations', weight: '20%' },
                  { state: advisorList, setState: setAdvisorList, title: 'Shortlist of 5 target advisors matching your field keywords', weight: '15%' },
                  { state: greToeflPassed, setState: setGreToeflPassed, title: 'Qualified CGPA metrics + TOEFL/IELTS/GRE score logs', weight: '20%' },
                ].map((item, idx) => (
                  <label key={idx} className="flex items-center justify-between p-3.5 border border-slate-150 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer select-none">
                    <div className="flex items-center gap-3 pr-4">
                      <input 
                        type="checkbox" 
                        checked={item.state} 
                        onChange={(e) => item.setState(e.target.checked)}
                        className="h-4 w-4 rounded text-indigo-600 border-slate-300 focus:ring-indigo-500 cursor-pointer accent-indigo-600"
                      />
                      <span className="text-xs md:text-sm font-semibold text-slate-700">{item.title}</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">
                      {item.weight} wt
                    </span>
                  </label>
                ))}
              </div>

              {/* Score bar */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-slate-550 uppercase tracking-wider font-semibold">Ready Index Score:</span>
                  <span className="font-extrabold text-indigo-650 font-mono text-sm">{readinessScore}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-lg overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg transition-all duration-500"
                    style={{ width: `${readinessScore}%` }}
                  />
                </div>
              </div>

              {/* Recommendations Box based on Score */}
              <div className={`p-4 rounded-2xl border transition-colors ${statusInfo.color} space-y-1.5`}>
                <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wide">
                  <Sparkles className="w-4 h-4 shrink-0 animate-pulse" />
                  Diagnosis: {statusInfo.label}
                </div>
                <p className="text-xs leading-relaxed opacity-90">{statusInfo.desc}</p>
              </div>

            </div>

            {/* Structured Support Phases */}
            <div className="space-y-4">
              <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider font-bold block pt-2">Guiding Modules</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {phases.map((ph, pi) => (
                  <div key={pi} className="bg-white border border-slate-150 p-5 rounded-2xl shadow-sm flex flex-col justify-between hover:border-slate-305 transition-colors">
                    <div className="space-y-2">
                      <span className="text-xl font-mono font-black text-slate-300 block">{ph.num}</span>
                      <h4 className="font-bold text-xs text-slate-900 leading-tight">{ph.title}</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-sans">{ph.desc}</p>
                    </div>
                    <div className="text-[10px] font-mono text-indigo-600 font-bold border-t border-slate-50 pt-3 mt-3">
                      {ph.metric}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right panel - Advisory Form Submission (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border border-slate-150 p-6 md:p-8 rounded-3xl shadow-sm">
              {!requestSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs uppercase font-mono tracking-wider text-indigo-600 font-bold block">
                      Mentorship Outreach
                    </span>
                    <h2 className="text-xl font-bold font-sans text-slate-950 tracking-tight">
                      Schedule Advisory Call
                    </h2>
                    <p className="text-xs text-slate-400">
                      Submit details of your targeted degree and major field coordinates.
                    </p>
                  </div>

                  <div className="h-px bg-slate-105" />

                  {submitError && (
                    <div className="p-4 bg-rose-50 border border-rose-100 text-rose-600 rounded-xl text-xs font-bold flex items-center gap-3">
                      <AlertCircle className="w-4 h-4" />
                      {submitError}
                    </div>
                  )}

                  {/* Form fields */}
                  <div className="space-y-3.5">
                    <div>
                      <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block mb-1">
                        Aspiring Candidate Name *
                      </label>
                      <input 
                        type="text" 
                        name="studentName"
                        required
                        placeholder="Aditi Sharma"
                        value={formData.studentName}
                        onChange={handleInputChange}
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block mb-1">
                        Professional Email *
                      </label>
                      <input 
                        type="email" 
                        name="studentEmail"
                        required
                        placeholder="a.sharma@du.ac.in"
                        value={formData.studentEmail}
                        onChange={handleInputChange}
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block mb-1">
                        Target Scholarly Degree *
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'phd', label: 'PhD' },
                          { id: 'ms', label: 'MS Thesis' },
                          { id: 'postdoc', label: 'Postdoc' }
                        ].map((deg) => (
                          <button
                            key={deg.id}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, targetDegree: deg.id }))}
                            className={`p-2 text-center rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                              formData.targetDegree === deg.id 
                                ? 'border-slate-900 bg-slate-900 text-white' 
                                : 'border-slate-150 hover:bg-slate-50 text-slate-650'
                            }`}
                          >
                            {deg.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block mb-1">
                        Research Area of Interest *
                      </label>
                      <input 
                        type="text" 
                        name="majorField"
                        required
                        placeholder="Nanophysics, Computational Genomics, Big Data NLP, etc."
                        value={formData.majorField}
                        onChange={handleInputChange}
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium p-3 rounded-2xl text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Send className="w-3.5 h-3.5" />
                    )}
                    {isLoading ? 'Processing...' : 'Request Consultation Scheduling'}
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4 animate-fade-in">
                  <div className="mx-auto h-12 w-12 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <Check className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-900 text-base">Advisory Request Dispatched</h3>
                    <p className="text-xs text-slate-500 leading-normal">
                      Excellent choice, <span className="font-semibold text-slate-800">{formData.studentName}</span>. Your target focus on <span className="font-semibold">{formData.majorField}</span> has been routed to our admission panels.
                    </p>
                    <p className="text-xs text-indigo-600">
                      We will reach out at <span className="font-semibold">{formData.studentEmail}</span> to coordinate a direct Zoom/Meet matching slot within 24 hours.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setRequestSubmitted(false);
                      setFormData({ studentName: '', studentEmail: '', targetDegree: 'phd', majorField: '' });
                      setSubmitError(null);
                    }}
                    className="text-xs text-indigo-600 hover:text-indigo-700 font-bold"
                  >
                    Send another consultation schedule
                  </button>
                </div>
              )}
            </div>

            {/* Testimonial snippet */}
            <div className="bg-slate-900 text-white p-6 rounded-3xl space-y-4 border border-slate-800 shadow-sm">
              <span className="text-[10px] uppercase font-mono tracking-wider text-indigo-400 font-bold block">
                Mentorship Success Spotlights
              </span>
              <p className="text-xs text-slate-350 italic leading-relaxed">
                "Finding the right research question was the hardest part of my PhD path. The Bedramake Network mentors reviewed my literature draft and completely aligned my proposals which resulted in 3 advisor calls and a fully-funded PhD offer in Bio-Engineering."
              </p>
              <div className="flex items-center gap-2">
                <div className="text-xs font-bold text-slate-200">Devyani Sen, PhD</div>
                <div className="text-[10px] text-slate-500 font-mono uppercase">• IISc Graduate, now at TU Delft</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
