import React, { useState } from 'react';
import { Send, Check, School, User, Trophy, RefreshCw, AlertCircle, Phone, Mail } from 'lucide-react';

export default function AdmissionHelp() {
  // Form States
  const [formData, setFormData] = useState({
    studentName: '',
    studentEmail: '',
    studentPhone: '',
    targetDegree: 'phd',
    majorField: '',
    likedUniversities: '',
    achievements: '',
    studentMessage: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);

    const payload = {
      ...formData,
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

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-12 md:py-16 border-b border-slate-800 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Current Admission Support
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-normal">
            Prepare your latest application cycle with up-to-date guidance, advisor matching, and research proposal support for graduate and scholarship submissions.
          </p>
        </div>
      </section>

      {/* Grid Layout */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="bg-white border border-slate-150 p-8 rounded-3xl shadow-sm">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-[10px] font-bold uppercase tracking-[.22em]">
                Admission Support
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Tell us about your admission goals
              </h2>
              <p className="text-sm text-slate-500 leading-6">
                Share your preferred universities and application priorities so we can help you prepare a strong admission package with the right college-specific guidance.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-150 p-8 rounded-3xl shadow-sm">
            {!requestSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">Student details</h3>
                  <p className="text-sm text-slate-500">We need the basics below to match you with the best admission strategy and campus options.</p>
                </div>

                {submitError && (
                  <div className="p-4 bg-rose-50 border border-rose-100 text-rose-600 rounded-xl text-xs font-bold flex items-center gap-3">
                    <AlertCircle className="w-4 h-4" />
                    {submitError}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block mb-1.5 flex items-center gap-1.5">
                      <User className="w-3 h-3" /> Full Name *
                    </label>
                    <input 
                      type="text" 
                      name="studentName"
                      required
                      placeholder="e.g. Aditi Sharma"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3 h-3" /> Email *
                    </label>
                    <input 
                      type="email" 
                      name="studentEmail"
                      required
                      placeholder="e.g. aditi.sharma@example.com"
                      value={formData.studentEmail}
                      onChange={handleInputChange}
                      className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3 h-3" /> Contact Number *
                    </label>
                    <input 
                      type="tel" 
                      name="studentPhone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.studentPhone}
                      onChange={handleInputChange}
                      className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block mb-1.5">
                      Target Degree *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'phd', label: 'PhD' },
                        { id: 'ms', label: 'MS / M.Tech' },
                        { id: 'other', label: 'UG / Other' }
                      ].map((deg) => (
                        <button
                          key={deg.id}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, targetDegree: deg.id }))}
                          className={`p-2 text-center rounded-xl text-[10px] font-bold border transition-colors cursor-pointer ${
                            formData.targetDegree === deg.id 
                              ? 'border-slate-900 bg-slate-900 text-white' 
                              : 'border-slate-150 hover:bg-slate-50 text-slate-600'
                          }`}
                        >
                          {deg.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block mb-1.5 flex items-center gap-1.5">
                    <School className="w-3 h-3" /> Preferred Universities / Colleges *
                  </label>
                  <input 
                    type="text" 
                    name="likedUniversities"
                    required
                    placeholder="e.g. IISc Bangalore, IIT Delhi, NIT Trichy"
                    value={formData.likedUniversities}
                    onChange={handleInputChange}
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block mb-1.5 flex items-center gap-1.5">
                    <School className="w-3 h-3" /> Major Field / Research Area *
                  </label>
                  <input 
                    type="text"
                    name="majorField"
                    required
                    placeholder="e.g. Data Science, Chemical Engineering"
                    value={formData.majorField}
                    onChange={handleInputChange}
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block mb-1.5 flex items-center gap-1.5">
                    <Trophy className="w-3 h-3" /> Certifications / Achievements
                  </label>
                  <textarea 
                    rows={4}
                    name="achievements"
                    placeholder="List research papers, internships, certifications, awards, or special projects."
                    value={formData.achievements}
                    onChange={handleInputChange}
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white resize-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block mb-1.5">
                    Additional message
                  </label>
                  <textarea
                    rows={5}
                    name="studentMessage"
                    placeholder="Tell us what you want us to know — application deadlines, scholarship goals, advisor preferences, or anything else."
                    value={formData.studentMessage}
                    onChange={handleInputChange}
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold p-4 rounded-2xl text-xs transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Send className="w-3.5 h-3.5" />
                  )}
                  {isLoading ? 'Sending request...' : 'Submit admission request'}
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4 animate-fade-in">
                <div className="mx-auto h-12 w-12 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <Check className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-base">Admission request sent</h3>
                  <p className="text-xs text-slate-500 leading-normal">
                    Excellent progress, <span className="font-semibold text-slate-800">{formData.studentName}</span>. Your application details have been shared with our admission support team.
                  </p>
                  <p className="text-xs text-indigo-600">
                    We will contact you at <span className="font-semibold">{formData.studentEmail}</span> to confirm next steps within 24 hours.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setRequestSubmitted(false);
                    setFormData({ studentName: '', studentEmail: '', studentPhone: '', targetDegree: 'phd', majorField: '', likedUniversities: '', achievements: '', studentMessage: '' });
                    setSubmitError(null);
                  }}
                  className="text-xs text-indigo-600 hover:text-indigo-700 font-bold"
                >
                  Submit another request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
