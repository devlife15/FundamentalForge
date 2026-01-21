export const DBMS = [
  {
    topic: "ACID Properties",
    problem: "How do we ensure reliable transactions?",
    concepts: ["atomicity", "consistency", "isolation", "durability"],
  },
  {
    topic: "Normalization",
    problem: "How do we eliminate data redundancy?",
    concepts: ["1NF/2NF/3NF", "when to denormalize", "trade-offs"],
  },
  {
    topic: "Indexes",
    problem: "How do we speed up queries?",
    concepts: ["B-tree", "when they help/hurt", "composite indexes"],
  },
  {
    topic: "Primary vs Foreign Keys",
    problem: "How do we establish relationships?",
    concepts: ["constraints", "referential integrity", "cascading"],
  },
  {
    topic: "Joins",
    problem: "How do we combine data from multiple tables?",
    concepts: ["INNER/LEFT/RIGHT/FULL", "performance", "N+1 problem"],
  },
  {
    topic: "Transactions",
    problem: "How do we ensure data integrity across operations?",
    concepts: ["BEGIN/COMMIT/ROLLBACK", "isolation levels"],
  },
  {
    topic: "Isolation Levels",
    problem: "How do we balance consistency vs performance?",
    concepts: ["read uncommitted/committed", "repeatable read", "serializable"],
  },
  {
    topic: "Deadlocks",
    problem: "How do we handle circular wait conditions?",
    concepts: ["detection", "prevention", "recovery"],
  },
  {
    topic: "Query Optimization",
    problem: "How do we make queries faster?",
    concepts: ["EXPLAIN", "indexes", "query rewriting"],
  },
  {
    topic: "Triggers",
    problem: "How do we automate actions on data changes?",
    concepts: ["BEFORE/AFTER", "use cases", "performance impact"],
  },
  {
    topic: "Views",
    problem: "How do we create virtual tables?",
    concepts: ["security", "abstraction", "materialized views"],
  },
  {
    topic: "Stored Procedures",
    problem: "How do we encapsulate business logic in DB?",
    concepts: ["vs application logic", "performance", "maintainability"],
  },
  {
    topic: "CAP Theorem",
    problem: "What can distributed databases guarantee?",
    concepts: ["consistency/availability/partition tolerance", "trade-offs"],
  },
];
