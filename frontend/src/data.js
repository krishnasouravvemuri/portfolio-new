export const RESUME_URL = 'https://drive.google.com/file/d/11MdKUfwEqXbwGnLdU9z0vyCcR6szzUJA/view?usp=drive_link'
export const LINKEDIN_URL = 'https://linkedin.com/in/sri-venkata-krishna-sourav-v'
export const GITHUB_URL = 'https://github.com/krishnasouravvemuri'
export const PAPERREPO_URL = 'https://github.com/krishnasouravvemuri/PaperRepo'
export const GITREPO_URL = 'https://github.com/krishnasouravvemuri/git_repo_rag'
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
  'Languages & Databases': ['Python', 'Java', 'SQL', 'MySQL', 'Postgres', 'Supabase'],
  'Backend, Web & Cloud': ['Django', 'DRF', 'React', 'REST APIs', 'JWT Auth', 'Docker', 'Kubernetes', 'AWS', 'Git', 'GitHub'],
  'AI, ML & Data': ['TensorFlow', 'Keras', 'Scikit-learn', 'LangChain', 'Librosa', 'NumPy', 'Pandas', 'RAG', 'LLMs', 'Vector Databases', 'Deep Learning', 'Power BI']
}

// floating skill icons (devicon CDN)
export const SKILL_ICONS = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#E76F00' },
  { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', color: '#0C4B33' },
  { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', color: '#013243' },
  { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', color: '#150458' },
  { name: 'scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', color: '#F7931E' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', color: '#FF9900' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#00618A' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '#ffffff', invert: true },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', color: '#FCC624' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg', color: '#CC2927' },
  { name: 'LangChain', icon: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4', color: '#1C3C3C' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: '#FF6F00' },
  { name: 'Keras', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg', color: '#D00000' },
  { name: 'Postgres', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#4169E1' },
  { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', color: '#3FCF8E' },
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
    blurb: 'Production REST APIs with DRF, ORM-heavy data models, auth & permissions, caching, and deployment. Powers PaperRepo and OCR backend services.',
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
    name: 'Git Repo Summarizer',
    subtitle: 'RAG-based Code Q&A',
    description:
      'Full-stack app that reads an entire code repository and answers questions about it in plain language. Repo files are chunked, embedded, and stored in a vector database; top matches are passed to an LLM for grounded answers.',
    stack: ['Python', 'LangChain', 'LLMs', 'Vector Database', 'React'],
    bullets: [
      'Splits repo files into 1,000+ text chunks stored in a vector DB for fast, relevant search.',
      'Pulls top matching code pieces into an LLM, cutting answer time to under 5s per question.',
      'Simple React UI — paste a repo link and start asking questions in 2 clicks.'
    ],
    thumbnails: [
      '/projects/gitsummarizer-1.svg',
      '/projects/gitsummarizer-2.svg',
      '/projects/gitsummarizer-3.svg'
    ],
    code: GITREPO_URL,
    live: null,
    accent: 'from-violet-500 to-fuchsia-500'
  },
  {
    name: 'Speech Emotion Recognition',
    subtitle: 'Deep Learning',
    description:
      'Deep learning model that reads human emotion from speech. Audio clips are converted to mel-spectrogram images and classified by a CNN into 7 emotion types.',
    stack: ['Python', 'PyTorch', 'Librosa', 'CNN', 'Mel-Spectrograms'],
    bullets: [
      'Trained on a labelled audio dataset of 1,400+ clips.',
      'Each clip turned into a mel-spectrogram image fed to the model.',
      'CNN sorts speech into 7 emotion types; ~80% test accuracy after tuning & balancing.'
    ],
    thumbnails: [
      '/projects/ser-1.svg',
      '/projects/ser-2.svg',
      '/projects/ser-3.svg'
    ],
    code: 'https://github.com/krishnasouravvemuri',
    live: null,
    accent: 'from-cyan-500 to-emerald-500'
  },
  {
    name: 'Chocolate Exports Analytics',
    subtitle: 'Power BI Dashboards',
    description:
      'Power BI analytics on a chocolate-exports dataset. Cleaned raw data and built interactive dashboards for sales, top markets, and export trends, filterable by country, year, and product.',
    stack: ['Power BI', 'Data Cleaning', 'Data Visualization'],
    bullets: [
      'Cleaned a raw dataset of 1,000+ rows, fixing missing values and wrong entries.',
      'Built 3 dashboards: sales, top markets, export trends over time.',
      'Linked charts and filters for one-click views by country, year, and product.'
    ],
    thumbnails: [
      '/projects/chocolate-1.svg',
      '/projects/chocolate-2.svg',
      '/projects/chocolate-3.svg'
    ],
    code: 'https://github.com/krishnasouravvemuri',
    live: null,
    accent: 'from-amber-500 to-orange-500'
  },
  {
    name: 'PaperRepo',
    subtitle: 'Academic Paper Repository',
    description:
      'Full-stack site where students upload, read, and download question papers, important questions, and study notes. Cookie-based JWT auth secures each user across 10+ API routes; material is organized by subject and semester.',
    stack: ['Django REST Framework', 'React', 'Supabase', 'JWT Auth'],
    bullets: [
      'Cookie-based JWT login/signup securing user access and uploads across 10+ API routes.',
      'Search and filters by subject and semester — find the right paper in under 3 clicks.',
      'Study material grouped by subject and semester; 100+ files easy to browse.'
    ],
    thumbnails: [
      '/projects/paperrepo-1.svg',
      '/projects/paperrepo-2.svg',
      '/projects/paperrepo-3.svg'
    ],
    code: PAPERREPO_URL,
    live: null,
    accent: 'from-emerald-500 to-teal-500'
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
