import { Sector, EditorialMember, Founder, EditorTool, PublishPackage, Testimonial, FaqItem, ScholarPaper } from './types';

export const SECTORS: Sector[] = [
  {
    id: 'publishing',
    title: 'Bedramake Network Publishing',
    tagline: 'Submission & Global Indexing Help',
    shortDesc: 'We take your manuscript or rough research notes and help you successfully publish in top indexed channels.',
    description: 'From formatting and layout proofing to direct submission management with peer-reviewed networks. We take your hard work and execute all publishing processes end-to-end.',
    iconName: 'BookOpen',
    colorClass: 'slate'
  },
  {
    id: 'writing',
    title: 'Bedramake Network Writing Help',
    tagline: 'Complete Content Creation & Drafting',
    shortDesc: 'We write for you from scratch—creating robust, high-quality academic and technical manuscripts, reviews, or chapters.',
    description: 'Struggling to draft your research? Our writing desk takes your research data, lab sheets, or outlined topics and drafts comprehensive, sophisticated text ready for journal inspection.',
    iconName: 'PenTool',
    colorClass: 'indigo'
  },
  {
    id: 'tools',
    title: 'Bedramake Network Editor Tools',
    tagline: 'Handpicked Compilation & Utilities',
    shortDesc: 'A curated suite of robust PDF tools, reference managers, plagiarism checker links, and handbook guidelines.',
    description: 'A structural directory of certified websites, free utilities, and handbook guides carefully selected to automate your research bibliography and formatting workflow.',
    iconName: 'Cpu',
    colorClass: 'slate'
  }
];

export const EDITORIAL_BOARD: EditorialMember[] = [
  {
    name: 'Siddharth Kowsik',
    role: 'Editor-in-Chief',
    institution: 'SIET, India',
    avatar: '/siddharth-kowsik.webp'
  },
  {
    name: 'Dr. Rajesh Iyer',
    role: 'Senior Peer Reviewer',
    institution: 'IIT Bombay',
    avatar: 'https://i.pravatar.cc/150?u=rajesh'
  },
  {
    name: 'Dr. Sunita Deshmukh',
    role: 'Scientific Editor',
    institution: 'IISc Bangalore',
    avatar: 'https://i.pravatar.cc/150?u=sunita'
  },
  {
    name: 'Dr. Amitav Das',
    role: 'Data Science Consultant',
    institution: 'NIT Trichy',
    avatar: 'https://i.pravatar.cc/150?u=amitav'
  },
  {
    name: 'Dr. Lakshmi Menon',
    role: 'Ethics & Compliance Lead',
    institution: 'JNU Delhi',
    avatar: 'https://i.pravatar.cc/150?u=lakshmi'
  },
  {
    name: 'Dr. Vikram Seth',
    role: 'Statistical Analysis Head',
    institution: 'BITS Pilani',
    avatar: 'https://i.pravatar.cc/150?u=vikram'
  },
];

export const FOUNDERS: Founder[] = [
  {
    name: 'Siddharth Kowsik',
    role: 'Founder & President',
    bio: 'Siddharth Kowsik is a visionary founder, educator, and pharmaceutical professional dedicated to innovation, education, and social impact. With a strong foundation in pharmacy and academic leadership, he believes in empowering minds, creating opportunities, and transforming ideas into meaningful progress.',
    avatar: '/siddharth-kowsik.webp'
  },
  {
    name: 'Dr. Ananya Sharma',
    role: 'Co-Founder & CEO',
    bio: 'Ananya is passionate about making high-quality research accessible to every Indian scholar through digital innovation and academic mentorship.',
    avatar: 'https://i.pravatar.cc/150?u=ananya'
  },
  {
    name: 'Rohan Malhotra',
    role: 'Co-Founder & CTO',
    bio: 'A software architect dedicated to building secure, scalable platforms for academic data management and peer-to-peer open access programs.',
    avatar: 'https://i.pravatar.cc/150?u=rohan'
  },
  {
    name: 'Priyanka Reddy',
    role: 'Co-Founder & Operations',
    bio: 'Focused on building global partnerships and expanding the reach of the Bedramake network to underrepresented research communities.',
    avatar: 'https://i.pravatar.cc/150?u=priyanka'
  },
  {
    name: 'Dr. Karthik Subramanian',
    role: 'Co-Founder & Chief Scientist',
    bio: 'Expert in empirical research methodology with a mission to elevate the quality of Indian manuscripts through rigorous double-blind reviews.',
    avatar: 'https://i.pravatar.cc/150?u=karthik'
  },
  {
    name: 'Sandeep Gupta',
    role: 'Co-Founder & Advisor',
    bio: 'Ensuring the sustainability and ethical growth of our scientific cooperative sandbox through strategic financial planning.',
    avatar: 'https://i.pravatar.cc/150?u=sandeep'
  },
];

export const EDITOR_TOOLS: EditorTool[] = [
  // PDF Tools
  {
    category: 'pdf',
    name: 'iLovePDF',
    description: 'Merge, split, compress, and convert PDF files online in seconds. Super easy to compress research items.',
    link: 'https://www.ilovepdf.com/',
    badge: 'Popular & Free'
  },
  {
    category: 'pdf',
    name: 'TinyWow PDF suite',
    description: 'Incredible collection of security, parsing, splitting, and conversion tools for standard digital materials.',
    link: 'https://tinywow.com/',
    badge: 'No Limits'
  },
  {
    category: 'pdf',
    name: 'PDF2Go',
    description: 'Premium PDF editor supporting optical character recognition (OCR) online for scanned documents.',
    link: 'https://www.pdf2go.com/',
    badge: 'OCR Support'
  },

  // Plagiarism
  {
    category: 'plagiarism',
    name: 'Grammarly Plagiarism Checker',
    description: 'Compare academic compositions against billions of public archives and ProQuest publications.',
    link: 'https://www.grammarly.com/plagiarism-checker',
    badge: 'Free Review'
  },
  {
    category: 'plagiarism',
    name: 'DupliChecker',
    description: 'Popular alternative for rapid thesis chapter checks, supporting multiple document uploads.',
    link: 'https://www.duplichecker.com/',
    badge: 'Ad-Supported'
  },
  {
    category: 'plagiarism',
    name: 'PapersOwl Free Tool',
    description: 'Quick online scanning engine validating percentage matrices of unique textual nodes.',
    link: 'https://papersowl.com/free-plagiarism-checker',
    badge: 'Fast Scan'
  },

  // Software
  {
    category: 'software',
    name: 'Mendeley Reference Manager',
    description: 'Downloadable academic program that compiles references, generates citations, and manages annotations.',
    link: 'https://www.mendeley.com/',
    badge: 'Desktop App'
  },
  {
    category: 'software',
    name: 'Zotero Citation Hub',
    description: 'Open-source personal assistant for bibliographic collection, auto-detecting web records instantly.',
    link: 'https://www.zotero.org/',
    badge: 'Open-Source'
  },
  {
    category: 'software',
    name: 'Overleaf LaTeX Studio',
    description: 'The standard collaborative writing software. Synchronized compilation with prebuilt journal templates.',
    link: 'https://www.overleaf.com/',
    badge: 'Highly Recommended'
  },

  // Websites
  {
    category: 'websites',
    name: 'Connected Papers',
    description: 'Visual map creation service linking related publications based on co-citation proximity. Essential for reviews.',
    link: 'https://www.connectedpapers.com/',
    badge: 'Visual Engine'
  },
  {
    category: 'websites',
    name: 'SCImago Journal Rank',
    description: 'Public scientific rankings of active serial journals. Easily check tier grades (Q1, Q2, Q3, Q4).',
    link: 'https://www.scimagojr.com/',
    badge: 'Indexing lookup'
  },
  {
    category: 'websites',
    name: 'ResearchGate network',
    description: 'The primary researcher forum to request non-public PDF drafts directly from corresponding authors.',
    link: 'https://www.researchgate.net/',
    badge: 'Social System'
  },

  // Reference Books
  {
    category: 'reference',
    name: 'Chicago Manual of Style Online',
    description: 'A key reference manual for editing and publishing. The absolute gold standard for editorial syntax.',
    link: 'https://www.chicagomanualofstyle.org/home.html',
    badge: 'Official Manual'
  },
  {
    category: 'reference',
    name: 'Academic Writing Guide (Springer)',
    description: 'Springer Nature publication outlining exact protocols for structuring introductions, methods, and results.',
    link: 'https://www.springer.com/gp/authors-editors/journal-author',
    badge: 'Free Book Resource'
  },
  {
    category: 'reference',
    name: 'IEEE Author Center Guides',
    description: 'Explicit typographic requirements and mathematical rules for engineering and computer science journals.',
    link: 'https://ieeeauthorcenter.ieee.org/',
    badge: 'Technical Reference'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Professor Aris Thorne',
    role: 'Associate Professor of Computer Science',
    affiliation: 'Kyoto Institute of Technology',
    comment: 'Bedramake Network turned what used to be a grueling six-month publishing drag into a streamlined, high-quality review loop. Their formatting templates saved my postgrads weeks.'
  },
  {
    name: 'Meera Deshmukh',
    role: 'Master of Technology Candidate',
    affiliation: 'IIT Madras',
    comment: 'I was looking for professional drafting support for my review paper. Bedramake Network Writing Help assisted me in putting together a fully robust, indexed manuscript.'
  },
  {
    name: 'Dr. Raymond Zhao',
    role: 'Senior Researcher (Biomedical)',
    affiliation: 'National University of Singapore',
    comment: 'Their proofreaders are clearly peer-level experts. The manuscript correction process for our Nature submissions was accurate, fast, and remarkably responsive.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Who can use the Bedramake Network platform?",
    answer: "Our cooperative scientific sandbox is optimized for graduate students, postgraduates, academic researchers, and professional authors seeking to structure, refine, copyedit, and successfully publish high-impact scientific manuscripts."
  },
  {
    question: "Are your editing and writing services compliant with university ethics policies?",
    answer: "Absolutely. Bedramake Network strictly complies with the Committee on Publication Ethics (COPE) code of standards. All writing help, structural formatting, syntactic refinement, and citation alignment are done to support authors' original thoughts and datasets, strictly avoiding any forms of academic dishonesty, plagiarism, or standard ghostwriting."
  },
  {
    question: "How does the double-blind review process operate?",
    answer: "All manuscript submissions are entirely anonymized by our platform's review systems. Any author metadata, institutional affiliations, or contact details are stripped prior to forwarding copies to peer-level board reviewers within our extensive academic networks, ensuring complete feedback objectivity."
  },
  {
    question: "How do I check a target journal's indexing tier rankings (Q1-Q4)?",
    answer: "You can use the SCImago Journal Rank lookup tool directly inside our 'Editor Tools' tab. Our academic coaches are also available through our publishing program to recommend the best fit for your manuscript's scope."
  },
  {
    question: "Are the tools and guidance assets on Bedramake Network free?",
    answer: "Yes! Our entire handpicked 'Editor Tools' catalog provides direct, high-quality reference links and guidelines for free digital utilities, standard reference managers (such as Mendeley and Zotero), LaTeX template editors, and global style guidelines."
  }
];

export const SCHOLAR_PAPERS: ScholarPaper[] = [
  {
    id: "#bedramake2026001",
    title: "Artificial Intelligence in Pharmacovigilance: Revolutionizing Drug Safety Monitoring, Adverse Event Detection, and Proactive Risk Management in the Era of Big Data and Real-Time Analytics",
    authors: ["Siddharth Kowsik"],
    discipline: "Pharmacy",
    pages: 0,
    date: "June 2026",
    doi: "10.06017/bedramake.2026.001",
    abstract: "Artificial intelligence (AI) is revolutionizing pharmaceutical research by accelerating and refining drug discovery, development, and clinical practice. This review summarizes the role of AI across key stages of the pharmaceutical pipeline, including target identification and validation, virtual and high-throughput screening, de-novo drug design, structure- and ligand-based approaches, and drug repurposing. In preclinical research, AI enables predictive modeling of pharmacokinetic and pharmacodynamic parameters, toxicity and ADMET profiles, drug–target and drug–drug interactions, and biomarker-driven disease-pathway analysis. In formulation and manufacturing, AI supports rational formulation design, excipient and process-parameter optimization, predictive dissolution models, continuous manufacturing, and real-time release testing within quality-by-design frameworks.",
    driveViewUrl: "https://drive.google.com/file/d/11R7fHjbQmDnGuVC1M9e8CGKtrHW2jspP/preview?usp=embed"
  },
];
