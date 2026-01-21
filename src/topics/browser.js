export const BROWSER = [
  {
    topic: "How Browsers Work",
    problem: "What happens when you visit a URL?",
    concepts: ["DNS", "TCP", "HTTP", "rendering"],
  },
  {
    topic: "Rendering Pipeline",
    problem: "How does HTML become pixels?",
    concepts: ["parse", "style", "layout", "paint", "composite"],
  },
  {
    topic: "DOM vs CSSOM",
    problem: "How are HTML and CSS represented?",
    concepts: ["tree structures", "render tree construction"],
  },
  {
    topic: "JavaScript Engine",
    problem: "How does JS code execute?",
    concepts: ["V8", "JIT compilation", "optimization"],
  },
  {
    topic: "Event Loop (Browser)",
    problem: "How does the browser handle async?",
    concepts: ["macrotasks", "microtasks", "requestAnimationFrame"],
  },
  {
    topic: "Browser Caching",
    problem: "How do browsers cache resources?",
    concepts: ["Cache-Control", "ETag", "service workers"],
  },
  {
    topic: "Local Storage Mechanisms",
    problem: "How do we store data client-side?",
    concepts: ["localStorage", "sessionStorage", "IndexedDB", "cookies"],
  },
  {
    topic: "Web Workers",
    problem: "How do we run JS in background threads?",
    concepts: ["dedicated vs shared", "message passing", "use cases"],
  },
  {
    topic: "Browser Security Model",
    problem: "How do browsers protect users?",
    concepts: ["same-origin", "CSP", "sandboxing"],
  },
  {
    topic: "DevTools & Debugging",
    problem: "How do we debug web applications?",
    concepts: ["breakpoints", "network tab", "performance profiling"],
  },
  {
    topic: "Memory Leaks",
    problem: "How do we prevent unbounded memory growth?",
    concepts: ["detached DOM", "closures", "event listeners"],
  },
  {
    topic: "Performance Metrics",
    problem: "How do we measure page performance?",
    concepts: ["TTFB", "FCP", "TTI", "LCP"],
  },
];
