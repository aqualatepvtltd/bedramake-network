import React, { useState, useMemo } from 'react';
import { SCHOLAR_PAPERS } from '../data';
import { ScholarPaper } from '../types';
import { 
  Send, Eye, ShieldCheck, ExternalLink, 
  Search, BookOpen, X, ChevronRight, AlertCircle
} from 'lucide-react';

interface SectorScholarProps {
  setActiveTab?: (tab: any) => void;
}

export default function SectorScholar({ setActiveTab }: SectorScholarProps) {
  const [selectedPaper, setSelectedPaper] = useState<ScholarPaper | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPapers = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return SCHOLAR_PAPERS;
    return SCHOLAR_PAPERS.filter(paper => 
      paper.title.toLowerCase().includes(query) || 
      paper.discipline.toLowerCase().includes(query) || 
      paper.authors.some(auth => auth.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const handleOpenPaperInNewTab = (url: string) => {
    // Satisfy specific user directive: "open a separet window which will iframe that paper form drive"
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-12 md:py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/20 via-slate-900 to-indigo-950/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Bedramake Network Scholar
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-normal">
            The peer-reviewed repository for scholastic mini-reviews, thesis drafts, and undergraduate-postgraduate peer-approved manuscripts.
          </p>
          <div className="pt-2 flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => {
                if (setActiveTab) setActiveTab('scholar-submission');
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-5 py-3 rounded-2xl flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              Publish To Us (Apply Now)
            </button>
            <a
              href="#registry-section"
              className="bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs font-bold px-5 py-3 rounded-2xl flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Browse Index Registry
            </a>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Published Scholar Papers Section */}
        <div id="registry-section" className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-1">
              <span className="text-xs uppercase font-mono tracking-wider text-indigo-600 font-bold block">
                Official Scholar Index
              </span>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Peer-Approved Published Papers
              </h2>
              <p className="text-xs text-slate-500">
                Double-blind peer approved compositions compiled, formatted, and registered inside the Bedramake Network database framework.
              </p>
            </div>

            {/* Instant Search filter */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input 
                type="text" 
                placeholder="Search by title, author, field..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 text-xs pl-9 pr-8 p-2.5 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2.5 text-xs text-slate-400 hover:text-slate-600 transition-colors font-semibold"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Grid list of cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {filteredPapers.map((paper) => (
              <div 
                key={paper.id}
                className="bg-white border border-slate-150 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:border-indigo-200 transition-all group"
              >
                <div className="space-y-4">
                  {/* Subject Tag & Pages */}
                  <div className="flex justify-between items-center">
                    <span className="bg-indigo-50 text-indigo-700 text-[10px] font-mono px-2.5 py-1 rounded-md font-bold tracking-tight border border-indigo-100">
                      {paper.discipline}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">
                      {paper.pages} Pages • Review
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug group-hover:text-indigo-600 transition-colors">
                    {paper.title}
                  </h3>

                  {/* Abstract */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-normal">
                    {paper.abstract}
                  </p>

                  {/* Authors */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Contributing Scholars:</div>
                    <div className="text-xs text-slate-800 font-bold flex flex-wrap gap-1 items-center">
                      {paper.authors.join(', ')}
                    </div>
                  </div>
                </div>

                {/* Footer specs */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col gap-3.5">
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                    <span>DOI: {paper.doi}</span>
                    <span>{paper.date}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {/* Select view inside local overlay/modal */}
                    <button
                      onClick={() => setSelectedPaper(paper)}
                      className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 p-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1 cursor-pointer transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      View Paper
                    </button>
                    {/* Launch in new separate window immediately */}
                    <button
                      onClick={() => handleOpenPaperInNewTab(paper.driveViewUrl)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1 cursor-pointer transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Drive Tab
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredPapers.length === 0 && (
              <div className="lg:col-span-3 bg-white border border-slate-200 rounded-3xl p-12 text-center space-y-3">
                <AlertCircle className="w-12 h-12 text-slate-350 mx-auto" />
                <h4 className="font-bold text-slate-800 text-base">No papers found</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try clearing your search filters or write to coordination@bedramake.org or teambedr@gmail.com to register your upcoming manuscript.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Full Sheet Scholar Reader Overlay Modal */}
      {selectedPaper && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex justify-center items-end sm:items-center p-4 animate-fade-in animate-duration-200">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-5xl h-[85vh] md:h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-slate-250 animate-slide-up">
            
            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-4 md:p-6 flex justify-between items-center shrink-0 border-b border-slate-800">
              <div className="space-y-1 select-none pr-4">
                <span className="bg-indigo-500/10 text-indigo-400 text-[10px] font-mono px-2.5 py-1 rounded border border-indigo-500/20 font-bold uppercase tracking-wider">
                  {selectedPaper.discipline} • DOI: {selectedPaper.doi}
                </span>
                <h3 className="text-sm md:text-base font-bold tracking-tight truncate max-w-md lg:max-w-2xl text-slate-100">
                  {selectedPaper.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleOpenPaperInNewTab(selectedPaper.driveViewUrl)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer shrink-0"
                  title="Open drive document in a separate browser window"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Separate Window</span>
                </button>
                <button
                  onClick={() => setSelectedPaper(null)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer transition-colors shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Paper Info Summary bar */}
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0 text-xs">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Authors / Contributors:</span>
                <p className="font-bold text-slate-800">{selectedPaper.authors.join(', ')}</p>
              </div>
              <div className="flex gap-4 font-mono text-slate-500">
                <div>Pages: <span className="font-bold text-slate-850">{selectedPaper.pages}</span></div>
                <div>Released: <span className="font-bold text-slate-850">{selectedPaper.date}</span></div>
              </div>
            </div>

            {/* PDF/Drive Embedded Area (or generic sandbox view) */}
            <div className="flex-1 bg-slate-100 relative">
              {/* PDF Document Frame */}
              <iframe
                src={selectedPaper.driveViewUrl}
                className="w-full h-full border-none"
                title={`${selectedPaper.title} Document Viewer`}
              >
                Browser does not support document iframes.
              </iframe>

              {/* Informative Floating Layer advising user of options */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 text-white p-3.5 rounded-2xl border border-slate-800 shadow-md flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm">
                <p className="opacity-90 leading-relaxed font-sans text-xs flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Looking for the authentic source file? You can read, print, and configure DOI trackers in Google Drive directly.</span>
                </p>
                <button
                  onClick={() => handleOpenPaperInNewTab(selectedPaper.driveViewUrl)}
                  className="bg-white text-slate-900 hover:bg-slate-100 text-[11px] font-bold px-3 py-1.5 rounded-xl cursor-pointer transition-colors shrink-0 flex items-center gap-1.5"
                >
                  Open in New Tab <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
