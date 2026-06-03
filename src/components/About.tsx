import React from 'react';
import { Shield, Users, Target, BookOpen, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Academic Integrity',
      desc: 'We operate strictly under COPE (Committee on Publication Ethics) advisory standards. All reviews and formatting are designed to maintain full scholastic transparency.',
    },
    {
      icon: Users,
      title: 'Double-Blind Network',
      desc: 'Our board isolates reviewer identity to eliminate institutional bias and focus purely on the empirical rigor of submitted datasets.',
    },
    {
      icon: Target,
      title: 'Precision Editing',
      desc: 'No generic suggestions. Our editorial mentors analyze manuscripts sentence-by-sentence to map semantic logic and structural flow.',
    },
  ];

  const milestones = [
    { year: '2019', title: 'The Sandbox Foundation', desc: 'Started as a peer network for graduate scholars in South Asia.' },
    { year: '2021', title: 'COPE Alignment', desc: 'Officially adapted worldwide Committee on Publication Ethics guidelines.' },
    { year: '2023', title: 'Repository Indexing', desc: 'Partnered with Crossref to issue permanent DOI identifier links smoothly.' },
    { year: '2025', title: '4,500+ Papers Served', desc: 'Achieved a major milestone in aiding high-impact research publications globally.' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-12 md:py-16 border-b border-slate-800 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            About Bedramake Network
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-normal">
            A cooperative academic network built to elevate scientific writing, coordinate peer reviews, and secure high-impact journal indexing.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Mission Statement */}
        <div className="bg-white border border-slate-150 rounded-3xl p-8 md:p-12 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-4">
            <span className="text-xs uppercase font-mono tracking-wider text-indigo-600 font-bold block">
              Our Scholarly Purpose
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 tracking-tight">
              Eradicating bias, enhancing scholarship, and simplifying academic publication.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Bedramake Network was co-founded by researchers who felt the standard modern publishing system is unnecessarily complex and carries deep geographical and institutional bias. 
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We developed this cooperative academic sandbox as a safe, ethical space for graduate, postgraduate, and professional authors to prepare manuscripts to meet the absolute highest peer standards.
            </p>
          </div>
          <div className="md:col-span-4 bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center space-y-2">
            <div className="text-4xl font-black text-indigo-600 font-mono">Q1-Q4</div>
            <div className="text-xs font-bold text-slate-800 uppercase tracking-wide">Publishing Indexing</div>
            <p className="text-[11px] text-slate-400">
              Assisting scholars to successfully align their manuscripts into premium indexed journals.
            </p>
          </div>
        </div>

        {/* Our Values Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-mono tracking-wider text-indigo-600 font-bold">
              Our Pillars
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Values That Drive Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-white border border-slate-150 p-6 rounded-2xl shadow-sm space-y-4 hover:border-indigo-200 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900">{v.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Journey */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 space-y-8 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase font-mono tracking-wider text-indigo-400 font-bold block">
              The Journey
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Our Scientific Milestone Timeline
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {milestones.map((m, i) => (
              <div key={i} className="border-l-2 border-indigo-500 pl-4 space-y-1.5 py-1">
                <span className="text-indigo-400 font-mono font-bold text-sm tracking-tight block">
                  {m.year}
                </span>
                <h4 className="font-bold text-xs text-slate-100">{m.title}</h4>
                <p className="text-[11px] text-slate-400 leading-snug">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Compliance Callout */}
        <div className="bg-white border border-slate-150 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-indigo-600 shrink-0" />
            <div>
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Ethics Compliance Safeguards</h4>
              <p className="text-[11px] text-slate-500">
                All editorial board activities follow COPE-recommended workflows for peer dispute checks and absolute research integrity.
              </p>
            </div>
          </div>
          <span className="bg-slate-100 text-slate-800 text-[9px] font-mono font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-slate-200">
            COPE Certified
          </span>
        </div>

      </div>
    </div>
  );
}
