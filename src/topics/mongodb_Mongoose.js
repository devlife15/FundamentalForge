export const MONGODB_MONGOOSE = [
  {
    topic: "Document Model",
    problem: "How does schema-less storage work?",
    concepts: ["BSON", "flexible schema", "embedded vs referenced"],
  },
  {
    topic: "Schemas in Mongoose",
    problem: "How do we enforce structure in MongoDB?",
    concepts: ["SchemaTypes", "validation", "virtuals"],
  },
  {
    topic: "Indexing in MongoDB",
    problem: "How do we optimize queries in NoSQL?",
    concepts: ["single field", "compound", "text indexes"],
  },
  {
    topic: "Aggregation Pipeline",
    problem: "How do we process and transform documents?",
    concepts: ["$match/$group/$project", "stages", "performance"],
  },
  {
    topic: "Populate",
    problem: "How do we handle references between documents?",
    concepts: ["vs embedding", "performance", "deep populate"],
  },
  {
    topic: "Middleware (Hooks)",
    problem: "How do we run logic before/after operations?",
    concepts: ["pre/post", "document vs query", "this context"],
  },
  {
    topic: "Embedded vs Referenced",
    problem: "How should we model relationships?",
    concepts: ["one-to-many", "data duplication", "query patterns"],
  },
  {
    topic: "Transactions in MongoDB",
    problem: "How do we ensure atomicity across documents?",
    concepts: ["multi-document", "replica sets", "performance"],
  },
  {
    topic: "Sharding",
    problem: "How do we scale MongoDB horizontally?",
    concepts: ["shard key", "chunks", "balancing"],
  },
  {
    topic: "Replica Sets",
    problem: "How do we ensure high availability?",
    concepts: ["primary/secondary", "automatic failover", "read preference"],
  },
  {
    topic: "Virtual Properties",
    problem: "How do we compute fields without storing them?",
    concepts: ["getters", "vs stored fields", "use cases"],
  },
  {
    topic: "Query Performance",
    problem: "How do we optimize MongoDB queries?",
    concepts: ["explain()", "covered queries", "projection"],
  },
];
