import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Clock, Globe, AlertCircle, RefreshCw } from 'lucide-react';
import SEO from './SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'publishing',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);

    const payload = {
      ...formData,
      access_key: "ea758345-9811-42db-9445-96a78c92360a",
      from_name: "Bedramake Network Contact Hub",
      subject_line: `New Inquiry: ${formData.subject}`
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
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

  const offices = [
    {
      city: 'Kolkata, India',
      role: 'Core Administrative & Editing Desk',
      address: 'Salt Lake Sector V, Block EP & GP, Kolkata, WB 700091',
      phone: '+91 33 2357 5002',
    },
    {
      city: 'New South Wales, Australia',
      role: 'Review Committee Hub',
      address: 'University Terraces, UNSW Sydney, NSW 2052',
      phone: '+61 2 9385 1000',
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-12 md:py-16 border-b border-slate-800 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Contact Academic Offices
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-normal">
            Have questions about indexing, manuscript criteria, or reviewer vacancies? Reach out directly to our coordinators.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel - Office coordinates & contacts (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-150 p-6 rounded-3xl shadow-sm space-y-6">
              <div className="space-y-1">
                <h2 className="text-lg font-bold text-slate-950 tracking-tight">
                  Direct Inquiries
                </h2>
                <p className="text-xs text-slate-400">
                  Prefer direct emails? Send manuscript briefs to respective desk heads.
                </p>
              </div>

              <div className="h-px bg-slate-100" />

              <div className="space-y-4">
                <a 
                  href="mailto:coordination@bedramake.org"
                  className="flex gap-3 items-center p-3 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold block">
                      General & Processing Help
                    </span>
                    <span className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      coordination@bedramake.org
                    </span>
                  </div>
                </a>

                <a 
                  href="mailto:review.board@bedramake.org"
                  className="flex gap-3 items-center p-3 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold block">
                      Peer Review Board
                    </span>
                    <span className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      review.board@bedramake.org
                    </span>
                  </div>
                </a>

                <a 
                  href="mailto:teambedr@gmail.com"
                  className="flex gap-3 items-center p-3 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold block">
                      Team Bedr Support
                    </span>
                    <span className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      teambedr@gmail.com
                    </span>
                  </div>
                </a>

                <div 
                  className="flex gap-3 items-center p-3 border border-slate-100 rounded-xl bg-slate-50/50"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold block">
                      Coordinator Desk Hours
                    </span>
                    <span className="text-xs font-bold text-slate-900">
                      Mon - Sat • 09:30 AM - 06:30 PM (IST)
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 items-center p-3 border border-slate-100 rounded-xl bg-slate-50/50">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold block">
                      Team Bedr Phone
                    </span>
                    <span className="text-xs font-bold text-slate-900">
                      +91 6307595827
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Branches Card */}
            <div className="bg-slate-900 text-white p-6 rounded-3xl space-y-6 border border-slate-800">
              <div className="space-y-1">
                <span className="text-xs uppercase font-mono tracking-wider text-indigo-400 font-bold block">
                  Locations
                </span>
                <h3 className="font-bold text-lg text-slate-100 tracking-tight">Physical Study Desks</h3>
              </div>
              
              <div className="space-y-6">
                {offices.map((off, idx) => (
                  <div key={idx} className="space-y-2 border-l-2 border-slate-700 pl-4 py-0.5">
                    <span className="text-[10.5px] uppercase font-mono tracking-wider text-indigo-400 font-bold block">
                      {off.city}
                    </span>
                    <h4 className="text-xs font-bold text-slate-200">{off.role}</h4>
                    <p className="text-[11px] text-slate-400 flex items-start gap-1">
                      <MapPin className="w-3.5 h-3.5 mt-0.5 text-slate-500 shrink-0" />
                      <span>{off.address}</span>
                    </p>
                    <p className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>{off.phone}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel - Dynamic Message board (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-150 p-6 md:p-8 rounded-3xl shadow-sm">
            <SEO 
              title="Contact Academic Offices" 
              description="Have questions about indexing, manuscript criteria, or reviewer vacancies? Reach out directly to our coordinators."
              keywords={['contact', 'support', 'academic publishing', 'help desk']}
            />
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-mono tracking-wider text-indigo-600 font-bold block">
                    Contact Form
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-950 tracking-tight">
                    File a Consultation Ticket
                  </h2>
                  <p className="text-xs text-slate-400">
                    Your inquiry is kept fully confidential in our system logs in accordance with author privacy covenants.
                  </p>
                </div>

                <div className="h-px bg-slate-100" />

                {submitError && (
                  <div className="p-4 bg-rose-50 border border-rose-100 text-rose-600 rounded-xl text-xs font-bold flex items-center gap-3">
                    <AlertCircle className="w-4 h-4" />
                    {submitError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.55">
                    <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block">
                      Your Name *
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="e.g. Dr. Vikram Iyer"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white"
                    />
                  </div>

                  <div className="space-y-1.55">
                    <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block">
                      Scholarly Email *
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="e.g. vikram.iyer@bits-pilani.ac.in"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1.55">
                  <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block">
                    Inquiry Area *
                  </label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white cursor-pointer"
                  >
                    <option value="publishing">Publishing Services Indian/Global Journals</option>
                    <option value="editing">Grammar Correction & Submissions Help</option>
                    <option value="jobs">Job Help (Reviewer, Writer, Academic Coach vacancies)</option>
                    <option value="admissions">Admission Help (Advisory and PhD proposal drafting)</option>
                    <option value="other">Other general queries</option>
                  </select>
                </div>

                <div className="space-y-1.55">
                  <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block">
                    Detailed Message *
                  </label>
                  <textarea 
                    name="message"
                    rows={5}
                    required
                    placeholder="Express your specific queries, manuscript status, target timelines or reference concerns..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium p-3 rounded-2xl text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Send className="w-3.5 h-3.5" />
                  )}
                  {isLoading ? 'Processing...' : 'Dispatch Communication Ticket'}
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="mx-auto h-12 w-12 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <Check className="w-6 h-6" />
                </div>
                <div className="space-y-1 max-w-sm mx-auto">
                  <h3 className="font-bold text-slate-900 text-lg">Inquiry Ticket Submitted</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Hello <span className="font-semibold text-slate-800">{formData.name}</span>, your ticket has been successfully registered. A regional scholar coordinator is reviewing your details.
                  </p>
                  <p className="text-xs text-slate-400 mt-2">
                    Response email will go to: <span className="font-semibold text-slate-700">{formData.email}</span>
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'publishing', message: '' });
                    setSubmitError(null);
                  }}
                  className="text-xs text-indigo-600 hover:text-indigo-700 font-bold border border-indigo-200 hover:border-indigo-350 px-4 py-2 rounded-xl transition-all cursor-pointer"
                >
                  File another ticket
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
