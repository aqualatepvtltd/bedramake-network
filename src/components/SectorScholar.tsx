import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SCHOLAR_PAPERS } from '../data';
import { ScholarPaper } from '../types';
import { 
  Send, Eye, ShieldCheck, ExternalLink, 
  Search, BookOpen, X, ChevronRight, AlertCircle
} from 'lucide-react';

interface SectorScholarProps {
  // Navigation is now handled natively via the Router Link component
}

export default function SectorScholar() {
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
    window.open(url, '_blank', 'noopener,noreferrer');
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
            <Link
              to="/scholar-submission"
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-5 py-3 rounded-2xl flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              Publish To Us (Apply Now)
            </Link>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Published Scholar Papers Section */}
        <div id="registry-section" className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Peer-Approved Published Papers
              </h2>
              <p className="text-xs text-slate-500">
                Double-blind peer approved compositions compiled, formatted, and registered inside the Bedramake Network.
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
                <AlertCircle className="w-12 h-12 text-slate-400 mx-auto" />
                <h4 className="font-bold text-slate-800 text-base">No papers found</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try clearing your search filters or write to teambedr@gmail.com to register your upcoming manuscript.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Full Sheet Scholar Reader Overlay Modal */}
      {selectedPaper && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[100] flex justify-center items-end sm:items-center p-4 md:p-6 animate-fade-in">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-[calc(100vw-1.5rem)] sm:max-w-7xl h-[88vh] sm:h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200 animate-slide-up relative">
            
            {/* Paper Info Summary bar */}
            <div className="bg-white border-b border-slate-100 px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4 shrink-0">
              <div className="min-w-0 flex-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate leading-tight">
                  {selectedPaper.title}
                </h4>
                <p className="text-[10px] sm:text-xs text-slate-500 truncate mt-0.5">
                  {selectedPaper.authors.join(', ')}
                </p>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
                <button
                  onClick={() => handleOpenPaperInNewTab(selectedPaper.driveViewUrl)}
                  className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Open drive document in a separate browser window"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Drive Tab</span>
                </button>
                <button
                  onClick={() => setSelectedPaper(null)}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer transition-all"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
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
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

