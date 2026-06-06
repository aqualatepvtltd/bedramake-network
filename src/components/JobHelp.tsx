import React, { useState, useMemo } from 'react';
import { Briefcase, FileText, Send, Check, Search, Calendar, DollarSign, Award, ArrowUpRight, RefreshCw, AlertCircle } from 'lucide-react';

const JOBS_DATA = [
  {
    id: 'open-role',
    title: 'Open Position',
    type: 'Freelance / Remote / Hybrid',
    compensation: '₹30,000 - ₹50,000',
    department: 'All Departments',
    desc: 'We are continuously seeking talented copyeditors, statistical consultants, and peer reviewers across all scientific disciplines to join our global panel. If you have a strong academic background and a passion for research integrity, we encourage you to apply.',
    requirements: ['Master’s or PhD degree in any science or humanities branch.', 'Exceptional familiarity with AMA, APA, IEEE structure indices.', 'Prior copyediting history is a definite preference.'],
  },
];

export default function JobHelp() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    applicantName: '',
    applicantEmail: '',
    qualification: 'phd',
    experience: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);

    const payload = {
      ...formData,
      target_position: selectedJob || 'General Registry',
      access_key: "ea758345-9811-42db-9445-96a78c92360a",
      from_name: "Bedramake Careers Portal",
      subject_line: `Job Application: ${selectedJob || 'General'}`
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

  const filteredJobs = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return JOBS_DATA;
    return JOBS_DATA.filter(j => 
      j.title.toLowerCase().includes(term) ||
      j.department.toLowerCase().includes(term) ||
      j.desc.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const handleOpenApplyForm = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setSubmitted(false);
    // Smooth scroll down to apply form wrapper
    setTimeout(() => {
      document.getElementById('job-apply-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-12 md:py-16 border-b border-slate-800 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Job & Career Services
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-normal">
            Join the Bedramake Network peer panel. We recruit highly qualified copyeditors, statistical consultants, and peer reviewers from various academic sectors.
          </p>
        </div>
      </section>

      {/* Main Grid split */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel - Vacancy List (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Search filter */}
            <div className="bg-white border border-slate-150 p-4 rounded-2xl shadow-sm flex items-center gap-3">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input 
                type="text" 
                placeholder="Search active scholarly positions (e.g. editor, R)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-xs md:text-sm bg-transparent border-none focus:outline-none focus:ring-0 text-slate-800"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="text-xs hover:text-slate-900 text-slate-400 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* List of jobs */}
            <div className="space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <div 
                    key={job.id}
                    className="bg-white border border-slate-150 p-6 rounded-3xl shadow-sm space-y-4 hover:border-indigo-300 transition-all group"
                  >
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div className="space-y-1">
                        <span className="bg-indigo-50 text-indigo-700 text-[9px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-indigo-100/50">
                          {job.department}
                        </span>
                        <h3 className="text-base md:text-lg font-bold text-slate-900 tracking-tight mt-1 group-hover:text-indigo-650 transition-colors">
                          {job.title}
                        </h3>
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl">
                        {job.type}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {job.desc}
                    </p>

                    <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold block">Estimated Salary</span>
                        <span className="font-bold text-emerald-600 flex items-center gap-0.5">
                          
                          {job.compensation}
                        </span>
                      </div>
                      <button
                        onClick={() => handleOpenApplyForm(job.title)}
                        className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl font-bold transition-all text-xs flex items-center gap-1 cursor-pointer"
                      >
                        Apply For Position
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Requirements bullet items */}
                    <div className="space-y-2 pt-2">
                      <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Technical Profile Requirements:</h4>
                      <ul className="text-xs text-slate-505 space-y-1">
                        {job.requirements.map((req, rid) => (
                          <li key={rid} className="flex gap-2 items-start text-xs text-slate-600">
                            <span className="text-indigo-500 mt-1 shrink-0">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                ))
              ) : (
                <div className="bg-white border border-slate-150 p-12 rounded-3xl text-center space-y-3">
                  <Briefcase className="w-12 h-12 text-slate-350 mx-auto" />
                  <h4 className="font-bold text-slate-800">No vacancies match your keywords</h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Try searching for wider categories like "editor" or "reviewer", or write to us directly at peer.panel@bedramake.org or teambedr@gmail.com.
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* Right panel - Dynamic Apply Form (5 cols) */}
          <div id="job-apply-section" className="lg:col-span-5 space-y-6">
            
            {/* General Job Help / Application Submission */}
            <div className="bg-white border border-slate-150 p-6 md:p-8 rounded-3xl shadow-sm">
              {!submitted ? (
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs uppercase font-mono tracking-wider text-indigo-600 font-bold block">
                      Recruitment Portal
                    </span>
                    <h2 className="text-xl font-bold font-sans text-slate-950 tracking-tight">
                      Board Application Form
                    </h2>
                    <p className="text-xs text-slate-400">
                      If applying for a listed vacancy, or entering our general talent registry.
                    </p>
                  </div>

                  <div className="h-px bg-slate-110" />

                  {submitError && (
                    <div className="p-4 bg-rose-50 border border-rose-100 text-rose-600 rounded-xl text-xs font-bold flex items-center gap-3">
                      <AlertCircle className="w-4 h-4" />
                      {submitError}
                    </div>
                  )}

                  {/* Prepopulated or Selected Position Indicator */}
                  <div>
                    <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block mb-1">
                      Target Position *
                    </label>
                    <select
                      value={selectedJob || 'general'}
                      onChange={(e) => setSelectedJob(e.target.value === 'general' ? null : e.target.value)}
                      className="w-full text-xs p-2.5 bg-slate-55 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer"
                    >
                      <option value="general">General / Unspecified Area Candidate</option>
                      {JOBS_DATA.map((job) => (
                        <option key={job.id} value={job.title}>{job.title}</option>
                      ))}
                    </select>
                  </div>

                  {/* Form Inputs */}
                  <div className="space-y-3">
                    <div>
                      <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block mb-1">
                        Professional Name *
                      </label>
                      <input 
                        type="text" 
                        name="applicantName"
                        required
                        placeholder="Dr. Anirudh Sharma"
                        value={formData.applicantName}
                        onChange={handleInputChange}
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block mb-1">
                        Contact Email *
                      </label>
                      <input 
                        type="email" 
                        name="applicantEmail"
                        required
                        placeholder="anirudh.sharma@iitb.ac.in"
                        value={formData.applicantEmail}
                        onChange={handleInputChange}
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block mb-1">
                        Highest Academic Qualification *
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: 'phd', label: 'Doctor of Philosophy (PhD)' },
                          { id: 'master', label: 'Master of Science / Tech' },
                          { id: 'fellow', label: 'Postdoc Research Fellow' },
                          { id: 'other', label: 'Other Scholarly Title' },
                        ].map((q) => (
                          <button
                            key={q.id}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, qualification: q.id }))}
                            className={`p-2 border text-left rounded-xl transition-all text-[11px] font-semibold cursor-pointer ${
                              formData.qualification === q.id 
                                ? 'border-indigo-600 bg-indigo-50 text-indigo-950 font-bold' 
                                : 'border-slate-150 hover:bg-slate-50 text-slate-600'
                            }`}
                          >
                            {q.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block mb-1">
                        Academic background / Prior reviews / Publications *
                      </label>
                      <textarea 
                        rows={4}
                        name="experience"
                        required
                        placeholder="Briefly index your Google Scholar profile, citation index, publications or editorial experience..."
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white resize-none"
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
                    {isLoading ? 'Processing...' : 'Submit Panel Application'}
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="mx-auto h-12 w-12 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <Check className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-900 text-base">Application Received</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Dear <span className="font-semibold text-slate-800">{formData.applicantName}</span>, your panel review registration for <span className="font-semibold text-slate-800">{selectedJob || 'Scholarly Registry'}</span> is saved.
                    </p>
                    <p className="text-xs text-indigo-605">
                      Our board recruitment desk will analyze your Google Scholar metrics and reach out at <span className="font-semibold">{formData.applicantEmail}</span> within 72 hours.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ applicantName: '', applicantEmail: '', qualification: 'phd', experience: '' });
                      setSubmitError(null);
                    }}
                    className="text-xs text-indigo-600 hover:text-indigo-700 font-bold"
                  >
                    Enter additional candidacy
                  </button>
                </div>
              )}
            </div>

            {/* Ethic warning badge info */}
            <div className="bg-white border border-slate-150 p-6 rounded-3xl space-y-3.5">
              <span className="bg-amber-50 text-amber-800 text-[9px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-amber-100">
                Ethical Conduct Notice
              </span>
              <p className="text-xs text-slate-500 leading-relaxed">
                Bedramake Network strictly enforces absolute reviewer objectivity. Under no circumstances may panel reviewers interact directly with authors or solicit paper-trade services. Violations lead to immediate termination and blacklisting across cooperating index databases.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
