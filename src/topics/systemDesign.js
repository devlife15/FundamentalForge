export const SYSTEM_DESIGN = [
  {
    topic: "Horizontal vs Vertical Scaling",
    problem: "How do we handle increasing load?",
    concepts: ["scale out vs up", "stateless services", "cost"],
  },
  {
    topic: "Load Balancer",
    problem: "How do we distribute traffic?",
    concepts: ["algorithms", "health checks", "layer 4 vs 7"],
  },
  {
    topic: "Caching Strategies",
    problem: "How do we reduce database load?",
    concepts: ["cache-aside", "write-through", "write-back", "eviction"],
  },
  {
    topic: "CDN",
    problem: "How do we serve static content fast globally?",
    concepts: ["edge locations", "cache invalidation", "when to use"],
  },
  {
    topic: "Database Replication",
    problem: "How do we ensure availability and performance?",
    concepts: ["master-slave", "master-master", "eventual consistency"],
  },
  {
    topic: "Database Sharding",
    problem: "How do we partition data across servers?",
    concepts: ["shard key", "range vs hash", "resharding"],
  },
  {
    topic: "Message Queues",
    problem: "How do we decouple services?",
    concepts: ["async processing", "buffering", "at-least-once delivery"],
  },
  {
    topic: "Microservices vs Monolith",
    problem: "How should we structure our application?",
    concepts: ["trade-offs", "when to split", "communication"],
  },
  {
    topic: "API Gateway",
    problem: "How do we manage API requests?",
    concepts: ["routing", "authentication", "rate limiting", "aggregation"],
  },
  {
    topic: "Rate Limiting",
    problem: "How do we prevent abuse?",
    concepts: ["token bucket", "leaky bucket", "sliding window"],
  },
  {
    topic: "Consistent Hashing",
    problem: "How do we distribute data evenly while minimizing reshuffling?",
    concepts: ["hash ring", "virtual nodes", "use cases"],
  },
  {
    topic: "WebSockets vs Polling",
    problem: "How do we implement real-time features?",
    concepts: ["long polling", "server-sent events", "trade-offs"],
  },
  {
    topic: "Session Management",
    problem: "How do we maintain user state across requests?",
    concepts: ["sticky sessions", "session store", "JWT"],
  },
  {
    topic: "Database Indexing at Scale",
    problem: "How do indexes affect write performance?",
    concepts: ["read/write trade-off", "covering indexes"],
  },
  {
    topic: "Designing a URL Shortener",
    problem: "How do we generate unique short URLs?",
    concepts: ["base62 encoding", "counter", "hash collisions"],
  },
  {
    topic: "Designing a Rate Limiter",
    problem: "How do we implement rate limiting?",
    concepts: ["per user vs global", "distributed", "Redis"],
  },
];
