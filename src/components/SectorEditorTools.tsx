import React, { useState, useMemo } from 'react';
import { EDITOR_TOOLS } from '../data';
import { Search, ExternalLink, ShieldCheck, Hammer } from 'lucide-react';

export default function SectorEditorTools() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const categories = useMemo(() => [
    { id: 'all', label: 'All Resources', count: EDITOR_TOOLS.length },
    { id: 'pdf', label: 'PDF Tools', count: EDITOR_TOOLS.filter(t => t.category === 'pdf').length },
    { id: 'plagiarism', label: 'Plagiarism Checker', count: EDITOR_TOOLS.filter(t => t.category === 'plagiarism').length },
    { id: 'software', label: 'Scholarly Software', count: EDITOR_TOOLS.filter(t => t.category === 'software').length },
    { id: 'websites', label: 'Academic Directories', count: EDITOR_TOOLS.filter(t => t.category === 'websites').length },
    { id: 'reference', label: 'Reference Handbooks', count: EDITOR_TOOLS.filter(t => t.category === 'reference').length },
  ], []);

  const filteredTools = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return EDITOR_TOOLS.filter(tool => {
      const matchesSearch = !term || 
                            tool.name.toLowerCase().includes(term) || 
                            tool.description.toLowerCase().includes(term);
      const matchesCategory = activeCategoryFilter === 'all' || tool.category === activeCategoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategoryFilter]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Sector Header */}
      <section className="bg-slate-900 text-white py-12 md:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Bedramake Network Editor Tools
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-normal">
            A hand-picked reference index of top-tier publishing software, PDF refitting bundles, plagiarism detection engines, and international style handbooks.
          </p>
        </div>
      </section>

      {/* Main Content & Repository Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        {/* Search and Category filters toolbar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white border border-slate-150 p-4 rounded-2xl shadow-sm">
          {/* Search bar */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search reference tools, compilers, manual books..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white"
            />
          </div>

          {/* Quick Stats bubble */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-500">
            <ShieldCheck className="w-4.5 h-4.5 text-emerald-500" />
            <span>All links are academically certified and malware tested.</span>
          </div>
        </div>

        {/* Categories Sidebar & Tool Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Filter Sidebar - Left Col */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white border border-slate-150 p-5 rounded-2xl shadow-sm space-y-3">
              <h3 className="text-xs uppercase font-mono tracking-wider text-slate-450 font-bold">
                Filter by Sector Topic
              </h3>
              <div className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategoryFilter(cat.id)}
                    className={`flex items-center justify-between text-xs font-medium px-3.5 py-2.5 rounded-xl cursor-pointer text-left shrink-0 lg:shrink-1 transition-all ${
                      activeCategoryFilter === cat.id
                        ? 'bg-slate-900 text-white font-bold animate-pulse-subtle'
                        : 'text-slate-650 hover:bg-slate-50'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`text-[10px] font-mono ml-4 rounded-full px-1.5 py-0.5 ${
                      activeCategoryFilter === cat.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Helper Banner */}
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-5 rounded-2xl shadow-sm space-y-3">
              <span className="text-[10px] font-mono tracking-wider text-indigo-300 font-bold block">
                Academic Advice
              </span>
              <p className="text-[11px] text-slate-350 leading-relaxed">
                Writing your first LaTeX draft? Overleaf remains the most reliable co-authoring engine for IEEE journal structures. Use it paired with Mendeley for citation generation.
              </p>
            </div>
          </div>

          {/* Cards Directory - Right Col (3cols) */}
          <div className="lg:col-span-3">
            {filteredTools.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools.map((tool, idx) => {
                  const getCategoryLabel = (category: string) => {
                    switch (category) {
                      case 'pdf': return 'PDF Tools';
                      case 'plagiarism': return 'Plagiarism Check';
                      case 'software': return 'Software / Compiler';
                      case 'websites': return 'Web Directory';
                      case 'reference': return 'Reference Guides';
                      default: return 'General Resource';
                    }
                  };

                  const getCategoryBg = (category: string) => {
                    switch (category) {
                      case 'pdf': return 'bg-emerald-50 text-emerald-800';
                      case 'plagiarism': return 'bg-rose-50 text-rose-800';
                      case 'software': return 'bg-indigo-50 text-indigo-800';
                      case 'websites': return 'bg-teal-50 text-teal-800';
                      case 'reference': return 'bg-amber-50 text-amber-800';
                      default: return 'bg-slate-50 text-slate-800';
                    }
                  };

                  return (
                    <div 
                      key={idx}
                      className="bg-white border border-slate-150 rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-shadow group"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-md font-bold ${getCategoryBg(tool.category)}`}>
                            {getCategoryLabel(tool.category)}
                          </span>
                          <span className="bg-slate-50 text-[10px] text-slate-500 px-1.5 py-0.5 rounded border border-slate-100 font-mono">
                            {tool.badge}
                          </span>
                        </div>

                        <h4 className="font-extrabold text-slate-900 tracking-tight text-sm font-sans flex items-center gap-1.5">
                          {tool.name}
                        </h4>

                        <p className="text-xs text-slate-550 leading-relaxed">
                          {tool.description}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-50">
                        <a 
                          href={tool.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center justify-between"
                        >
                          <span>Open Resource Site</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white border border-slate-150 rounded-2xl py-16 text-center space-y-4">
                <div className="mx-auto h-12 w-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
                  <Hammer className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900">No tools found matching "{searchTerm}"</h4>
                  <p className="text-xs text-slate-400">
                    Try switching category filters or simplifying your query search words.
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
