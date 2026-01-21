export const NODE_AND_EXPRESS = [
  {
    topic: "Event Loop in Node",
    problem: "How does Node handle async I/O?",
    concepts: ["phases", "libuv", "vs browser event loop"],
  },
  {
    topic: "Streams",
    problem: "How do we process large data efficiently?",
    concepts: ["readable/writable", "piping", "backpressure"],
  },
  {
    topic: "Buffer",
    problem: "How do we work with binary data?",
    concepts: ["vs string", "encoding", "memory"],
  },
  {
    topic: "Middleware",
    problem: "How do we intercept and process requests?",
    concepts: ["next()", "order matters", "error handling"],
  },
  {
    topic: "Express Routing",
    problem: "How do we map URLs to handlers?",
    concepts: ["route parameters", "route methods", "Router"],
  },
  {
    topic: "Error Handling Middleware",
    problem: "How do we catch and handle errors centrally?",
    concepts: ["4 parameters", "async errors", "next(err)"],
  },
  {
    topic: "CORS Middleware",
    problem: "How do we enable cross-origin requests?",
    concepts: ["preflight", "credentials", "headers"],
  },
  {
    topic: "Body Parsing",
    problem: "How do we extract data from requests?",
    concepts: ["express.json()", "express.urlencoded()", "limits"],
  },
  {
    topic: "Module System",
    problem: "How does Node organize code?",
    concepts: ["require vs import", "module.exports", "caching"],
  },
  {
    topic: "Process & Child Processes",
    problem: "How do we run external programs?",
    concepts: ["spawn/exec/fork", "IPC", "process object"],
  },
  {
    topic: "Cluster Module",
    problem: "How do we utilize multiple CPU cores?",
    concepts: ["worker processes", "load balancing", "PM2"],
  },
  {
    topic: "Environment Variables",
    problem: "How do we configure apps for different environments?",
    concepts: ["process.env", "dotenv", "secrets management"],
  },
  {
    topic: "JWT in Node",
    problem: "How do we implement token-based auth?",
    concepts: ["signing", "verification", "middleware"],
  },
  {
    topic: "File System Operations",
    problem: "How do we read/write files?",
    concepts: ["fs module", "sync vs async", "streams"],
  },
];
