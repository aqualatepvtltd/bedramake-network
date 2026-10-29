## Run Locally
**Prerequisites:**  Node.js
1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`
# bedramake-network






      {/* Meet Our Founders Section */}
      <section id="founders-section" className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Meet Our Founders
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              The architects who engineered our scientific cooperative sandbox and established our peer-to-peer open access program.
            </p>
          </div>

          {/* Render 1 card at a time on mobile, or 4 grid cards on desktop based on current view size */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUNDERS.map((founder, idx) => {
              const isVisibleOnDesktop = idx >= founderIndex && idx < founderIndex + 4;
              const isVisibleOnMobile = idx === founderIndex ;
              return (
                <div 
                  key={founder.name} 
                  id={`founder-card-${founder.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 animate-slide-in ${
                    isVisibleOnMobile ? 'block' : 'hidden'
                  } ${
                    isVisibleOnDesktop ? 'sm:flex' : 'sm:hidden'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-sm bg-slate-100">
                      <img 
                        src={founder.avatar} 
                        alt={founder.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-slate-900 text-base tracking-tight leading-tight">
                        {founder.name}
                      </h3>
                      <p className="text-xs font-semibold text-emerald-600">
                        {founder.role}
                      </p>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans font-normal">
                      {founder.bio}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active indicator limit logic for Founders */}
          {(() => {
            const maxFounderIdx = isMobile ? FOUNDERS.length - 1 : Math.max(0, FOUNDERS.length - 4);
            const dotCount = isMobile ? FOUNDERS.length : Math.max(1, FOUNDERS.length - 3);
            const showFounderControls = maxFounderIdx > 0;

            if (!showFounderControls) return null;
            
            return (
              <div className="flex justify-center items-center gap-3 pt-10">
                <button
                  id="founder-prev-btn"
                  onClick={() => setFounderIndex(prev => Math.max(0, prev - 1))}
                  disabled={founderIndex === 0}
                  className={`p-3 rounded-full border transition-all cursor-pointer ${
                    founderIndex === 0 
                      ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-slate-100' 
                      : 'border-slate-300 text-slate-700 bg-white hover:border-slate-400 hover:bg-slate-50 shadow-sm'
                  }`}
                  title="Previous Founders"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-1.5">
                  {Array.from({ length: dotCount }).map((_, stepIdx) => (
                    <span 
                      key={stepIdx} 
                      className={`h-2 rounded-full transition-all ${
                        founderIndex === stepIdx ? 'bg-indigo-600 w-6' : 'bg-slate-400 w-2'
                      }`}
                    />
                  ))}
                </div>
                <button
                  id="founder-next-btn"
                  onClick={() => setFounderIndex(prev => Math.min(maxFounderIdx, prev + 1))}
                  disabled={founderIndex >= maxFounderIdx}
                  className={`p-3 rounded-full border transition-all cursor-pointer ${
                    founderIndex >= maxFounderIdx 
                      ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-slate-100' 
                      : 'border-slate-300 text-slate-700 bg-white hover:border-slate-400 hover:bg-slate-50 shadow-sm'
                  }`}
                  title="Next Founders"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            );
          })()}
        </div>
      </section>

