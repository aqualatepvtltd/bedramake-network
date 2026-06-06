import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { ActiveTab } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';

// Dynamic lazy imports of secondary modules for maximum core bundle weight reduction
const SectorPublishing = lazy(() => import('./components/SectorPublishing'));
const SectorWriting = lazy(() => import('./components/SectorWriting'));
const SectorEditorTools = lazy(() => import('./components/SectorEditorTools'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const JobHelp = lazy(() => import('./components/JobHelp'));
const AdmissionHelp = lazy(() => import('./components/AdmissionHelp'));
const SectorScholar = lazy(() => import('./components/SectorScholar'));
const ScholarSubmission = lazy(() => import('./components/ScholarSubmission'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const CopeCompliance = lazy(() => import('./components/CopeCompliance'));

// Highly optimized, theme-appropriate Loader indicator
const Loader = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 py-20 px-4">
    <div className="relative w-10 h-10 select-none">
      <div className="absolute inset-0 rounded-full border-4 border-slate-100" />
      <div className="absolute inset-0 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin" />
    </div>
    <span className="text-[11px] text-slate-400 font-mono uppercase tracking-wider animate-pulse">
      Loading...
    </span>
  </div>
);

// Highly optimized SEO parameters configuration catalog for every page view segment
const SEO_CONFIG: Record<ActiveTab, { title: string; description: string; keywords: string[]; schema?: any }> = {
  home: {
    title: "Bedramake Network - Redefining Academic Publishing",
    description: "Bedramake Network is a state-of-the-art open access cooperative repository & scientific sandbox. Bypass predatory journal walls with double-blind peer validation and global registers.",
    keywords: ["academic network", "open access scientific repository", "bedramake sandbox", "double blind peer review", "doi indexer"],
    schema: {
      "@type": "WebSite",
      "name": "Bedramake Network",
      "alternateName": "Bedramake Network",
      "description": "Empowering academic authorship and reliable collaborative open-access research sandbox with professional publishing pipelines."
    }
  },
  publishing: {
    title: "Bedramake - Academic Monograph & Scientific Book Publishing",
    description: "Publish your scholarly books, research monographs, and corporate thesis chapters with full DOI indexing registers, meta compilation, and database archiving support.",
    keywords: ["academic book publishing", "monograph layout design", "scientific book registry", "global ISSN register"]
  },
  writing: {
    title: "Bedramake - Thesis, Research Proposal & Academic Writing Mentorship",
    description: "Professional research writing assistance for master theses, synopsis compilations, doctoral research proposals, and empirical paper structures in full ethics alignment.",
    keywords: ["phd research writing", "synopsis formatting check", "thesis structure help", "scholarly drafting guidance"]
  },
  tools: {
    title: "Bedramake - Scholarly Research & Editorial Validation Utilities",
    description: "Utilize our collaborative workbench suite: dynamic bibliography generator, PDF size compress files, co-author registry searches, and COPE compliance checkers.",
    keywords: ["bibliography creator", "shrink library pdf", "coauthor alignment search", "academic checking tools"]
  },
  about: {
    title: "Bedramake - About Our Cooperative Sandbox Mission",
    description: "Learn about Bedramake Network's non-profit core mission: transforming the science dissemination landscape through community-led archives and free research access.",
    keywords: ["academic mission portal", "marcus bedra provost", "clara vance core database", "nonprofit publishing sandbox"]
  },
  contact: {
    title: "Bedramake - Contact the Editorial Board & Advisors Cell",
    description: "Connect with the Bedramake Network submission help team, file ethical complaints, request index registrations, or contact technical sandbox support directly.",
    keywords: ["contact scholar board", "editorial committee contact", "manuscript help cell"]
  },
  jobs: {
    title: "Bedramake - Academic Placement Support & Doctoral Level Vacancies",
    description: "Find your next tenure track placement, postdoctoral fellowship role, junior research vacancy, or laboratory associate position within our curated network.",
    keywords: ["academic postdoc jobs", "junior researcher vacancy", "university tenure path", "fellowship job boards"]
  },
  admission: {
    title: "Bedramake - Top-Tier Master & PhD Admissions Advisory",
    description: "In-depth counseling for elite global graduate programs. Expert proposal crafting, motivation letter critiques, and university scholarship selection support.",
    keywords: ["phd program admissions advice", "scholarly application mentoring", "motivation letter advisor"]
  },
  scholar: {
    title: "Bedramake - Scholarly Journal Index & Published Papers Database",
    description: "Explore hundreds of verified open-access articles, DOI indexed empirical results, and community verified manuscript journals in the Bedramake Network library database.",
    keywords: ["search scientific journals", "indexed scholar database", "verified research database", "doi portal"]
  },
  'scholar-submission': {
    title: "Bedramake - Submit Manuscript - Double-Blind Integrity Route",
    description: "Deposit your verified five-page empirical papers or thesis synopsis into our peer-reviewed indexing framework. Gain immediate DOI allocation.",
    keywords: ["submit empirical draft", "author journal submission", "register scientific doi", "manuscript uploading link"]
  },
  terms: {
    title: "Bedramake - Cooperative Terms of Service & Legal Framework",
    description: "Discover the guidelines regulating the Bedramake Network scientific repository, academic registry access, and Creative Commons open access licensing codes.",
    keywords: ["terms of service", "user scholar licensing", "academic copyright contracts", "creative commons rules"]
  },
  privacy: {
    title: "Bedramake - Privacy Policy & Double-Blind Anonymity Mandate",
    description: "How Bedramake Network ensures strict privacy for double-blind peer audits, metadata protection, and no ads or tracker networks on your scholarly papers feed.",
    keywords: ["privacy policy", "anonymity protocols", "scholar account security", "metadata safety logs"]
  },
  cope: {
    title: "Bedramake - Committee on Publication Ethics Compliance Charter",
    description: "Review our deep alignment with COPE standards regarding peer reviews, co-authorship guidelines, conflict declarations, and digital object protections.",
    keywords: ["COPE code of conduct", "publication ethics compliance", "plagiarism screening audits"]
  }
};

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  // Map path to ActiveTab for Navbar active indicator
  const getActiveTab = (): ActiveTab => {
    const path = location.pathname;
    if (path === '/publishing') return 'publishing';
    if (path === '/writing') return 'writing';
    if (path === '/tools') return 'tools';
    if (path === '/about') return 'about';
    if (path === '/contact') return 'contact';
    if (path === '/jobs') return 'jobs';
    if (path === '/admission') return 'admission';
    if (path === '/scholar') return 'scholar';
    if (path === '/scholar-submission') return 'scholar-submission';
    if (path === '/terms') return 'terms';
    if (path === '/privacy') return 'privacy';
    if (path === '/cope') return 'cope';
    return 'home';
  };

  const activeTab = getActiveTab();
  const seoData = SEO_CONFIG[activeTab] || SEO_CONFIG.home;

  const handleTabChange = (tab: ActiveTab) => {
    if (tab === 'home') {
      navigate('/');
    } else {
      navigate(`/${tab}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-slate-900 selection:text-white">
      <SEO {...seoData} />
      <ScrollToTop />
      {/* Navigation Header */}
      <Navbar activeTab={getActiveTab()} setActiveTab={handleTabChange} />

      {/* Main Core Section */}
      <main className="flex-grow">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<LandingPage setActiveTab={handleTabChange} />} />
            <Route path="/publishing" element={<SectorPublishing />} />
            <Route path="/writing" element={<SectorWriting />} />
            <Route path="/tools" element={<SectorEditorTools />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/jobs" element={<JobHelp />} />
            <Route path="/admission" element={<AdmissionHelp />} />
            <Route path="/scholar" element={<SectorScholar setActiveTab={handleTabChange} />} />
            <Route path="/scholar-submission" element={<ScholarSubmission setActiveTab={handleTabChange} />} />
            <Route path="/terms" element={<TermsOfService setActiveTab={handleTabChange} />} />
            <Route path="/privacy" element={<PrivacyPolicy setActiveTab={handleTabChange} />} />
            <Route path="/cope" element={<CopeCompliance setActiveTab={handleTabChange} />} />
            <Route path="*" element={<LandingPage setActiveTab={handleTabChange} />} />
          </Routes>
        </Suspense>
      </main>

      {/* Corporate Footnotes & Guidelines */}
      <Footer setActiveTab={handleTabChange} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
      <Analytics />
    </BrowserRouter>
  );
}
