export const APIs = [
  {
    topic: "REST vs GraphQL",
    problem: "When do we want flexible queries vs fixed endpoints?",
    concepts: ["over-fetching", "n+1 problem", "caching"],
  },
  {
    topic: "API Versioning",
    problem: "How do we evolve APIs without breaking clients?",
    concepts: ["URL vs header versioning", "deprecation strategies"],
  },
  {
    topic: "Rate Limiting",
    problem: "How do we prevent API abuse?",
    concepts: ["token bucket", "sliding window", "headers"],
  },
  {
    topic: "Authentication vs Authorization",
    problem: "How do we verify identity vs permissions?",
    concepts: ["who you are vs what you can do"],
  },
  {
    topic: "JWT",
    problem: "How do we authenticate stateless requests?",
    concepts: ["token structure", "signing", "refresh tokens"],
  },
  {
    topic: "OAuth 2.0",
    problem: "How do we grant third-party access safely?",
    concepts: ["authorization code flow", "scopes", "tokens"],
  },
  {
    topic: "API Pagination",
    problem: "How do we return large datasets efficiently?",
    concepts: ["offset vs cursor", "page size", "performance"],
  },
  {
    topic: "Idempotency",
    problem: "How do we make retry-safe operations?",
    concepts: ["idempotency keys", "safe methods", "PUT vs POST"],
  },
  {
    topic: "API Error Handling",
    problem: "How do we communicate errors clearly?",
    concepts: ["error codes", "error payloads", "consistency"],
  },
  {
    topic: "API Documentation",
    problem: "How do we describe our API to consumers?",
    concepts: ["OpenAPI/Swagger", "examples", "versioning"],
  },
  {
    topic: "Webhooks",
    problem: "How do we notify clients of events?",
    concepts: ["vs polling", "retry logic", "security"],
  },
  {
    topic: "API Gateway",
    problem: "How do we centralize API management?",
    concepts: ["routing", "authentication", "rate limiting"],
  },
  {
    topic: "Life of an API Request",
    problem: "Trace the network journey from fetch() to response.",
    concepts: [
      "DNS Lookup",
      "TCP 3-way Handshake",
      "TLS Handshake",
      "Request/Response cycle",
    ],
  },
];
