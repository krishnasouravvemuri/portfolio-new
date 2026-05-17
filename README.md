# Sourav V — Portfolio

Personal portfolio site. React + Vite + Tailwind + Framer Motion.

## Structure
```
portfolio/
├── frontend/         # React app (Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
│   ├── index.html
│   └── package.json
├── misc/             # Resume PDF, deploy notes
├── requirements.txt  # Python utility deps
└── .gitignore
```

## Dev
```bash
cd frontend
npm install
npm run dev          # http://localhost:5173
```

## Build
```bash
cd frontend
npm run build        # outputs frontend/dist/
npm run preview      # serve build locally
```

## Deploy to 23sou.xyz
See `misc/README.md`.

## Features
- Animated hero, gradient text, glowing journey flowchart, project cards, contact form.
- Resume button → Google Drive link.
- Contact page with both emails, phone, LinkedIn, copy-to-clipboard.
