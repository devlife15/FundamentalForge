export const MODERN_WEB = [
  {
    topic: "Critical Rendering Path",
    problem: "How does the browser turn HTML into pixels?",
    concepts: ["DOM/CSSOM", "render tree", "layout/paint"],
  },
  {
    topic: "Reflow vs Repaint",
    problem: "What triggers expensive browser operations?",
    concepts: ["layout thrashing", "optimization", "will-change"],
  },
  {
    topic: "Web Vitals",
    problem: "How do we measure user experience?",
    concepts: ["LCP/FID/CLS", "performance budgets"],
  },
  {
    topic: "Service Workers",
    problem: "How do we enable offline functionality?",
    concepts: ["caching strategies", "background sync", "lifecycle"],
  },
  {
    topic: "Web Storage",
    problem: "How do we store data client-side?",
    concepts: ["localStorage vs sessionStorage", "IndexedDB", "size limits"],
  },
  {
    topic: "Same-Origin Policy",
    problem: "How do we prevent malicious cross-site access?",
    concepts: ["origin definition", "CORS", "security implications"],
  },
  {
    topic: "XSS Prevention",
    problem: "How do we prevent code injection attacks?",
    concepts: ["sanitization", "CSP", "escaping"],
  },
  {
    topic: "CSRF Protection",
    problem: "How do we prevent unauthorized actions?",
    concepts: ["CSRF tokens", "SameSite cookies"],
  },
  {
    topic: "Progressive Enhancement",
    problem: "How do we build for all capabilities?",
    concepts: ["baseline functionality", "feature detection"],
  },
  {
    topic: "Responsive Design",
    problem: "How do we adapt to different screen sizes?",
    concepts: ["media queries", "fluid layouts", "viewport"],
  },
  {
    topic: "Lazy Loading",
    problem: "How do we defer loading until needed?",
    concepts: ["images", "code splitting", "intersection observer"],
  },
  {
    topic: "Code Splitting",
    problem: "How do we reduce initial bundle size?",
    concepts: ["dynamic imports", "route-based splitting"],
  },
  {
    topic: "Tree Shaking",
    problem: "How do we eliminate dead code?",
    concepts: ["ES6 modules", "side effects", "optimization"],
  },
];
