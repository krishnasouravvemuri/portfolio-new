export const RESUME_URL = 'https://drive.google.com/file/d/11MdKUfwEqXbwGnLdU9z0vyCcR6szzUJA/view?usp=drive_link'
export const LINKEDIN_URL = 'https://linkedin.com/in/sri-venkata-krishna-sourav-v'
export const GITHUB_URL = 'https://github.com/krishnavitap'
export const PAPERREPO_URL = 'https://github.com/krishnavitap/PaperRepo'
export const EVENTIFY_URL = 'https://github.com/krishnavitap/Eventify'
export const EMAILS = ['krishnavitap@gmail.com', 'sourav230505@gmail.com']
export const PHONE = '+91 9063183455'
export const LOCATION = 'Vijayawada, India'

export const PROFILE = {
  name: 'Sri Venkata Krishna Sourav V',
  short: 'Sourav',
  title: 'AI & Backend Developer',
  tagline: 'Python · Django REST · AI/ML · AWS',
  summary:
    'AI and backend-focused developer building scalable systems and integrating intelligent solutions into real-world applications. Hands-on with cloud platforms like AWS and production-grade backend services.'
}

export const SKILLS = {
  Languages: ['Python', 'Java', 'SQL'],
  'Frameworks / Libraries': ['Django', 'DRF', 'PyTorch', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
  'Cloud / DevOps': ['AWS', 'Docker', 'Kubernetes'],
  Tools: ['Git', 'GitHub', 'Postman', 'MySQL']
}

// floating skill icons (devicon CDN)
export const SKILL_ICONS = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#E76F00' },
  { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', color: '#0C4B33' },
  { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', color: '#EE4C2C' },
  { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', color: '#013243' },
  { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', color: '#150458' },
  { name: 'scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', color: '#F7931E' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', color: '#FF9900' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#00618A' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '#ffffff', invert: true },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', color: '#FF6C37' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', color: '#FCC624' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg', color: '#CC2927' },
  { name: 'LangChain', icon: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4', color: '#1C3C3C' },
  { name: 'RAG', icon: '', color: '#06b6d4', emoji: '🔎' }
]

export const SKILL_FOCUS = ['Python', 'Java', 'Django', 'Git', 'LangChain', 'RAG']

export const EXPERTISE = {
  Python: {
    level: 'Advanced · 4+ yrs',
    blurb: 'Daily-driver language. Backend APIs, AI/ML pipelines, automation scripts, data tooling. Comfortable with async, typing, and packaging.',
    tags: ['Async', 'Typing', 'Testing', 'Packaging']
  },
  Java: {
    level: 'Intermediate · 2 yrs',
    blurb: 'OOP fundamentals, DSA, and core JVM concepts. Used in academic projects and competitive programming. Some exposure to Spring basics.',
    tags: ['OOP', 'DSA', 'JVM', 'Spring']
  },
  Django: {
    level: 'Advanced · 3 yrs',
    blurb: 'Production REST APIs with DRF, ORM-heavy data models, auth & permissions, caching, and deployment. Powers both PaperRepo and Eventify.',
    tags: ['DRF', 'ORM', 'Auth', 'Caching']
  },
  Git: {
    level: 'Proficient · daily',
    blurb: 'Branching strategies, rebase/squash workflows, PR reviews, conflict resolution, and integrating with CI for automated testing & deploys.',
    tags: ['Branching', 'Rebase', 'PR Reviews', 'CI']
  },
  LangChain: {
    level: 'Hands-on · 1 yr',
    blurb: 'Building LLM-powered tools: agents, tool calling, output parsers, memory, and chains. Wiring chat models into backend APIs.',
    tags: ['Agents', 'Tools', 'Memory', 'Chains']
  },
  RAG: {
    level: 'Hands-on · production',
    blurb: 'End-to-end retrieval pipelines: chunking, embeddings, vector search, and grounded generation. Applied to OCR-extracted documents at work.',
    tags: ['Embeddings', 'Vector DB', 'Chunking', 'Re-ranking']
  }
}

export const EXPERIENCE = [
  {
    role: 'R&D Intern',
    company: 'Ninestars Information Technologies',
    period: 'Jan 2026 – Present',
    bullets: [
      'Developed and maintained 120+ REST APIs supporting AI-driven OCR workflows and document processing systems.',
      'Improved average API response time to 120ms via query optimization, caching, and request handling.',
      'Built backend pipelines for OCR: document ingestion, parsing, structured data extraction.',
      'Integrated AI models into backend services for automated data extraction and validation.'
    ]
  }
]

export const PROJECTS = [
  {
    name: 'PaperRepo',
    subtitle: 'Academic Paper Repository',
    description:
      'Full-stack platform for students and researchers to upload, search, and download academic papers. Built with Django + SQLite3, styled with Tailwind. Search/filter, tagging, and a performance-tuned dashboard.',
    stack: ['Django', 'SQLite3', 'Tailwind CSS', 'Python'],
    bullets: [
      '1,000+ students & researchers; 500+ papers uploaded.',
      '2,000+ downloads, 1,500+ active users via search/filter.',
      'Page load 1.5s → <1s for 50+ concurrent users.'
    ],
    thumbnails: [
      '/projects/paperrepo-1.svg',
      '/projects/paperrepo-2.svg',
      '/projects/paperrepo-3.svg'
    ],
    code: 'https://github.com/krishnavitap/PaperRepo',
    live: null,
    accent: 'from-violet-500 to-fuchsia-500'
  },
  {
    name: 'Eventify',
    subtitle: 'Event Management Platform',
    description:
      'Event management with authentication, role-based access, and dynamic listings. Deployed to AWS EC2 with sub-800ms dashboards. Students create, register, and manage events at scale.',
    stack: ['Django', 'SQLite3', 'Tailwind CSS', 'AWS EC2'],
    bullets: [
      'Auth + role-based access for event creation, registration, management.',
      'Dynamic listings with filter/search; 20+ events, 200+ registrations.',
      'Dashboard < 800ms. Deployed on AWS EC2.'
    ],
    thumbnails: [
      '/projects/eventify-1.svg',
      '/projects/eventify-2.svg',
      '/projects/eventify-3.svg'
    ],
    code: 'https://github.com/krishnavitap/Eventify',
    live: null,
    accent: 'from-cyan-500 to-emerald-500'
  }
]

export const CERTS = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    url: 'https://drive.google.com/file/d/1c89HMrAgktvAhU7ItLzVLNitCDvwen5L/view?usp=drivesdk',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    color: 'from-orange-500 to-amber-500'
  },
  {
    name: 'PCEP – Python Entry-Level Programmer',
    issuer: 'Python Institute',
    url: 'https://drive.google.com/file/d/1uYoUXC2rc17CRrgNasVvTjRSQ84wgYAb/view?usp=drivesdk',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: 'from-blue-500 to-yellow-400'
  },
  {
    name: 'Oracle GenAI Foundations',
    issuer: 'Oracle University',
    url: 'https://drive.google.com/file/d/1khQ2_kVFJlI1p4-koc4aV1242mYDFegR/view?usp=drivesdk',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
    color: 'from-red-600 to-rose-500'
  },
  {
    name: 'Postman API Fundamentals',
    issuer: 'Postman',
    url: 'https://drive.google.com/file/d/1OunxPDIL3IMoU_wkJbAsq96R-8IlwVZB/view?usp=drivesdk',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
    color: 'from-orange-600 to-pink-500'
  }
]

export const JOURNEY = [
  { year: '2011–2020', title: 'CBSE 10th', org: 'BVB SVV, Tirupati', score: '89.2%', icon: '🏫' },
  { year: '2020–2022', title: 'Intermediate (APSSEB)', org: 'Sri Chaitanya Jr. College, Vijayawada', score: '87.9%', icon: '📚' },
  { year: '2022–Present', title: 'B.Tech CSE (AI & ML)', org: 'VIT-AP, Amaravati', score: 'CGPA 8.21/10', icon: '🎓' },
  { year: 'Jan 2026 – Present', title: 'R&D Intern', org: 'Ninestars Information Technologies', score: 'AI · Backend · OCR', icon: '💼' }
]
