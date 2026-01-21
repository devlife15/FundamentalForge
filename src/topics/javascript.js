export const CORE_JAVASCRIPT = [
  {
    topic: "Closures",
    problem: "How do functions remember their creation scope?",
    concepts: ["lexical scope", "private variables", "factory functions"],
  },
  {
    topic: "this Binding",
    problem: "How does 'this' get determined in different contexts?",
    concepts: [
      "implicit/explicit binding",
      "arrow functions",
      "call/apply/bind",
    ],
  },
  {
    topic: "Prototypes",
    problem: "How does JavaScript implement inheritance without classes?",
    concepts: ["prototype chain", "__proto__ vs prototype", "Object.create"],
  },
  {
    topic: "Event Loop",
    problem:
      "How does JavaScript handle async operations while being single-threaded?",
    concepts: ["call stack", "task queue", "microtasks vs macrotasks"],
  },
  {
    topic: "Promises",
    problem: "How do we handle async operations better than callbacks?",
    concepts: ["states", "chaining", "error propagation", "Promise.all/race"],
  },
  {
    topic: "Async/Await",
    problem: "How do we write async code that looks synchronous?",
    concepts: ["syntactic sugar", "error handling", "parallel execution"],
  },
  {
    topic: "Hoisting",
    problem: "Why can we use variables/functions before declaration?",
    concepts: [
      "var/let/const",
      "temporal dead zone",
      "function vs variable hoisting",
    ],
  },
  {
    topic: "Scope Chain",
    problem: "How does JavaScript resolve variable names?",
    concepts: ["lexical scope", "scope lookup", "global vs local"],
  },
  {
    topic: "Execution Context",
    problem: "How does JavaScript track what code is running?",
    concepts: ["creation phase", "execution phase", "scope chain creation"],
  },
  {
    topic: "Coercion",
    problem: "How does JavaScript convert types implicitly?",
    concepts: ["== vs ===", "truthy/falsy", "type conversion rules"],
  },
  {
    topic: "Destructuring",
    problem: "How do we extract values from objects/arrays cleanly?",
    concepts: ["object destructuring", "array destructuring", "default values"],
  },
  {
    topic: "Spread/Rest Operators",
    problem: "How do we work with variable arguments and copy collections?",
    concepts: ["...syntax", "array copying", "function parameters"],
  },
  {
    topic: "Module Systems",
    problem: "How do we organize code into reusable pieces?",
    concepts: ["CommonJS vs ES6", "import/export", "module scope"],
  },
  {
    topic: "map/filter/reduce",
    problem: "How do we transform arrays functionally?",
    concepts: ["higher-order functions", "immutability", "chaining"],
  },
  {
    topic: "Event Delegation",
    problem: "How do we handle events efficiently on many elements?",
    concepts: ["bubbling", "capturing", "event.target vs currentTarget"],
  },
  {
    topic: "== vs ===",
    problem: "Why strict equality matters",
    concepts: [
      "type coercion rules",
      "when == is dangerous",
      "object comparison",
    ],
  },
  {
    topic: "Truthy vs Falsy",
    problem: "What evaluates to false?",
    concepts: ["6 falsy values", "empty string vs empty array", "0 vs '0'"],
  },
  {
    topic: "null vs undefined",
    problem: "What's the difference?",
    concepts: ["typeof null bug", "when each appears", "default parameters"],
  },
  {
    topic: "var vs let vs const",
    problem: "Why var is broken",
    concepts: [
      "block scope",
      "temporal dead zone",
      "hoisting differences",
      "const with objects",
    ],
  },
  {
    topic: "Arrow Functions vs Regular",
    problem: "When arrow functions break things",
    concepts: [
      "this binding",
      "no arguments object",
      "can't be constructors",
      "implicit return",
    ],
  },
  {
    topic: "Array Methods",
    problem: "map vs forEach vs for...of",
    concepts: ["return values", "when to use which", "performance", "chaining"],
  },
  {
    topic: "Object Methods",
    problem: "Object.create vs Object.assign vs spread",
    concepts: ["shallow vs deep copy", "prototype chain", "when to use which"],
  },
  {
    topic: "String Methods",
    problem: "Common gotchas",
    concepts: [
      "immutability",
      "substring vs slice",
      "indexOf vs includes",
      "template literals",
    ],
  },
  {
    topic: "Type Conversion",
    problem: "Implicit vs explicit",
    concepts: ["String()/Number()/Boolean()", "parseInt gotchas", "unary plus"],
  },
  {
    topic: "Short-circuit Evaluation",
    problem: "How && and || really work",
    concepts: [
      "returning values not booleans",
      "default values",
      "optional chaining",
    ],
  },
  {
    topic: "IIFE",
    problem: "Why wrap in parentheses?",
    concepts: ["creating scope", "module pattern", "avoiding global pollution"],
  },
  {
    topic: "Callback Hell",
    problem: "Why nested callbacks are bad",
    concepts: ["pyramid of doom", "error handling", "solutions (Promises)"],
  },
  {
    topic: "Promise Methods",
    problem: "Promise.all vs race vs allSettled",
    concepts: ["when each fails", "use cases", "parallel vs sequential"],
  },
  {
    topic: "Generator Functions",
    problem: "What are yield and function*?",
    concepts: ["lazy evaluation", "iterator protocol", "async generators"],
  },
  {
    topic: "Symbols",
    problem: "What problem do they solve?",
    concepts: ["unique keys", "well-known symbols", "privacy"],
  },
  {
    topic: "Proxy and Reflect",
    problem: "How do we intercept operations?",
    concepts: ["traps", "metaprogramming", "validation use case"],
  },
  {
    topic: "WeakMap vs Map",
    problem: "When do we need weak references?",
    concepts: ["garbage collection", "no iteration", "private data pattern"],
  },
  {
    topic: "Set vs Array",
    problem: "When to use which?",
    concepts: ["uniqueness", "has() vs includes()", "performance"],
  },
  {
    topic: "Object Property Descriptors",
    problem: "What's writable/enumerable/configurable?",
    concepts: ["Object.defineProperty", "getters/setters", "freezing objects"],
  },
  {
    topic: "Object.freeze vs seal",
    problem: "Levels of immutability",
    concepts: ["what each allows", "shallow freeze", "deep freeze"],
  },
  {
    topic: "class Syntax",
    problem: "Syntactic sugar over prototypes",
    concepts: ["constructor", "methods vs properties", "static", "extends"],
  },
  {
    topic: "super Keyword",
    problem: "How does it work in classes?",
    concepts: ["calling parent constructor", "method override", "gotchas"],
  },
  {
    topic: "new Keyword",
    problem: "What actually happens?",
    concepts: ["4 steps", "returning objects", "constructor function"],
  },
  {
    topic: "Function Currying",
    problem: "Partial application pattern",
    concepts: ["closures", "bind", "use cases"],
  },
  {
    topic: "Memoization",
    problem: "Caching function results",
    concepts: ["pure functions", "closure caching", "when to use"],
  },
];
