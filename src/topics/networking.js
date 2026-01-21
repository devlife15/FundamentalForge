export const NETWORKING = [
  {
    topic: "TCP vs UDP",
    problem: "When do we need reliability vs speed?",
    concepts: ["connection-oriented", "packet loss", "use cases"],
  },
  {
    topic: "HTTP Methods",
    problem: "How do we describe the intent of our requests?",
    concepts: ["GET/POST/PUT/DELETE", "idempotency", "safe methods"],
  },
  {
    topic: "HTTP Status Codes",
    problem: "How do we communicate the result of operations?",
    concepts: ["2xx/3xx/4xx/5xx", "common codes", "when to use what"],
  },
  {
    topic: "HTTP Headers",
    problem: "How do we send metadata with requests/responses?",
    concepts: ["Content-Type", "Authorization", "Cache-Control"],
  },
  {
    topic: "HTTPS & TLS",
    problem: "How do we secure communication over networks?",
    concepts: ["encryption", "certificates", "handshake process"],
  },
  {
    topic: "DNS Resolution",
    problem: "How do domain names become IP addresses?",
    concepts: ["DNS hierarchy", "caching", "A/CNAME records"],
  },
  {
    topic: "Three-Way Handshake",
    problem: "How do TCP connections get established?",
    concepts: ["SYN/SYN-ACK/ACK", "connection state", "why three steps"],
  },
  {
    topic: "Cookies vs Sessions",
    problem: "How do we maintain state in stateless HTTP?",
    concepts: ["client vs server storage", "security", "session management"],
  },
  {
    topic: "CORS",
    problem: "How do we enable cross-origin requests safely?",
    concepts: ["same-origin policy", "preflight requests", "headers"],
  },
  {
    topic: "WebSockets",
    problem: "How do we enable real-time bidirectional communication?",
    concepts: ["vs HTTP", "upgrade handshake", "when to use"],
  },
  {
    topic: "REST Principles",
    problem: "How do we design clean, predictable APIs?",
    concepts: ["statelessness", "resource-based URLs", "HATEOAS"],
  },
  {
    topic: "Load Balancing",
    problem: "How do we distribute traffic across servers?",
    concepts: ["round-robin", "least connections", "health checks"],
  },
  {
    topic: "CDN",
    problem: "How do we serve static content fast globally?",
    concepts: ["edge servers", "caching", "when to use"],
  },
  {
    topic: "OSI Model",
    problem: "How do network protocols layer and interact?",
    concepts: ["7 layers", "encapsulation", "real-world mapping"],
  },
];
