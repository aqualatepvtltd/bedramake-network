import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Clock, Globe } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('publishing');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
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
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
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
              </div>
            </div>

            {/* Branches Card */}
            <div className="bg-slate-900 text-white p-6 rounded-3xl space-y-6 border border-slate-800">
              <div className="space-y-1">
                <span className="text-xs uppercase font-mono tracking-wider text-indigo-400 font-bold block">
                  Locations
                </span>
                <h3 className="font-extrabold text-lg text-slate-100 tracking-tight">Physical Study Desks</h3>
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
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-mono tracking-wider text-indigo-600 font-bold block">
                    Contact Form
                  </span>
                  <h2 className="text-xl md:text-2xl font-extrabold text-slate-950 tracking-tight">
                    File a Consultation Ticket
                  </h2>
                  <p className="text-xs text-slate-400">
                    Your inquiry is kept fully confidential in our system logs in accordance with author privacy covenants.
                  </p>
                </div>

                <div className="h-px bg-slate-100" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.55">
                    <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block">
                      Your Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Dr. Emily Carter"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white"
                    />
                  </div>

                  <div className="space-y-1.55">
                    <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block">
                      Scholarly Email *
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. e.carter@oxford.ac.uk"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1.55">
                  <label className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold block">
                    Inquiry Area *
                  </label>
                  <select 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
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
                    rows={5}
                    required
                    placeholder="Express your specific queries, manuscript status, target timelines or reference concerns..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium p-3 rounded-2xl text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  Dispatch Communication Ticket
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
                    Hello <span className="font-semibold text-slate-800">{name}</span>, your ticket has been successfully registered. A regional scholar coordinator is reviewing your details.
                  </p>
                  <p className="text-xs text-slate-400 mt-2">
                    Response email will go to: <span className="font-semibold text-slate-700">{email}</span>
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
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
