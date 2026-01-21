export const REACT = [
  {
    topic: "Virtual DOM",
    problem: "How do we update the UI efficiently?",
    concepts: ["diffing algorithm", "reconciliation", "when it's slow"],
  },
  {
    topic: "Reconciliation",
    problem: "How does React determine what changed?",
    concepts: ["element type", "keys", "Fiber architecture"],
  },
  {
    topic: "React Keys",
    problem: "How do we help React identify elements?",
    concepts: ["index as key problem", "stable identifiers"],
  },
  {
    topic: "useState",
    problem: "How do we add state to functional components?",
    concepts: ["state updates", "batching", "functional updates"],
  },
  {
    topic: "useEffect",
    problem: "How do we synchronize with external systems?",
    concepts: ["dependency array", "cleanup", "execution timing"],
  },
  {
    topic: "useCallback",
    problem: "How do we memoize functions?",
    concepts: ["referential equality", "when to use", "dependencies"],
  },
  {
    topic: "useMemo",
    problem: "How do we memoize expensive calculations?",
    concepts: ["vs useCallback", "when to use", "optimization"],
  },
  {
    topic: "useRef",
    problem: "How do we persist values without re-renders?",
    concepts: ["DOM access", "mutable values", "vs state"],
  },
  {
    topic: "Custom Hooks",
    problem: "How do we reuse stateful logic?",
    concepts: ["composition", "rules of hooks", "naming"],
  },
  {
    topic: "Context API",
    problem: "How do we avoid prop drilling?",
    concepts: ["Provider/Consumer", "when to use", "performance"],
  },
  {
    topic: "React.memo",
    problem: "How do we prevent unnecessary re-renders?",
    concepts: ["shallow comparison", "when to use", "custom comparison"],
  },
  {
    topic: "Controlled vs Uncontrolled",
    problem: "Where should form state live?",
    concepts: ["controlled inputs", "refs", "trade-offs"],
  },
  {
    topic: "Lifting State Up",
    problem: "How do we share state between components?",
    concepts: ["common ancestor", "single source of truth"],
  },
  {
    topic: "Composition vs Inheritance",
    problem: "How should we build component hierarchies?",
    concepts: ["children prop", "containment", "specialization"],
  },
  {
    topic: "Error Boundaries",
    problem: "How do we handle component errors gracefully?",
    concepts: ["componentDidCatch", "fallback UI", "limitations"],
  },
  {
    topic: "React Fiber",
    problem: "How does React prioritize work?",
    concepts: ["time slicing", "incremental rendering", "priority"],
  },
  {
    topic: "Suspense",
    problem: "How do we handle async rendering?",
    concepts: ["lazy loading", "data fetching", "fallback"],
  },
];
