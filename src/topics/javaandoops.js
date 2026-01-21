export const Core_JAVA_OOP = [
  {
    topic: "Classes vs Objects",
    problem: "How do we model real-world entities in code?",
    concepts: ["instantiation", "state vs behavior"],
  },
  {
    topic: "Encapsulation",
    problem:
      "How do we hide implementation details and protect data integrity?",
    concepts: ["private/public", "getters/setters", "information hiding"],
  },
  {
    topic: "Inheritance",
    problem: "How do we reuse code and create hierarchical relationships?",
    concepts: ["is-a relationship", "method overriding", "super keyword"],
  },
  {
    topic: "Polymorphism",
    problem: "How do we write code that works with multiple types?",
    concepts: [
      "method overloading",
      "runtime polymorphism",
      "interface implementation",
    ],
  },
  {
    topic: "Abstraction",
    problem: "How do we define contracts without implementation?",
    concepts: ["abstract classes", "interfaces", "hiding complexity"],
  },
  {
    topic: "Interface vs Abstract Class",
    problem: "When should we use contracts vs partial implementations?",
    concepts: ["multiple inheritance", "default methods", "design patterns"],
  },
  {
    topic: "Static vs Instance",
    problem: "When should data/methods belong to the class vs object?",
    concepts: ["class variables", "static methods", "utility classes"],
  },
  {
    topic: "Final keyword",
    problem: "How do we create immutable constants and prevent extension?",
    concepts: ["final variables", "final methods", "final classes"],
  },
  {
    topic: "Java Memory Model",
    problem: "Where do objects and primitives live?",
    concepts: ["stack vs heap", "garbage collection", "pass-by-value"],
  },
  {
    topic: "Exception Handling",
    problem: "How do we handle and recover from errors gracefully?",
    concepts: [
      "try-catch-finally",
      "checked vs unchecked",
      "custom exceptions",
    ],
  },
  {
    topic: "Collections Framework",
    problem: "How do we store and manipulate groups of objects efficiently?",
    concepts: ["List/Set/Map", "ArrayList vs LinkedList", "when to use what"],
  },
  {
    topic: "Generics",
    problem: "How do we write type-safe reusable code?",
    concepts: ["type parameters", "type erasure", "bounded types"],
  },
  {
    topic: "Equals and HashCode",
    problem:
      "How do we define object equality and use objects in hash-based collections?",
    concepts: ["contract between equals/hashCode", "HashMap internals"],
  },
  {
    topic: "Immutability",
    problem: "How do we create objects that can't be modified after creation?",
    concepts: ["final fields", "defensive copying", "String immutability"],
  },
  {
    topic: "Streams API",
    problem: "How do we process collections in a functional, declarative way?",
    concepts: ["map/filter/reduce", "lazy evaluation", "terminal operations"],
  },
  {
    topic: "Pass by Value vs Pass by Reference",
    problem: "Why does Java confuse people about this?",
    concepts: [
      "object references are passed by value",
      "primitive vs reference behavior",
      "common misconceptions",
    ],
  },
  {
    topic: "JDK vs JRE vs JVM",
    problem: "What's the difference and why does it matter?",
    concepts: [
      "development vs runtime",
      "compilation vs execution",
      "class loading",
    ],
  },
  {
    topic: "String Pool & Interning",
    problem: "Why are Strings special in Java?",
    concepts: [
      "string immutability",
      "intern() method",
      "memory optimization",
      "== vs equals",
    ],
  },
  {
    topic: "Wrapper Classes & Autoboxing",
    problem: "How do primitives become objects?",
    concepts: [
      "boxing/unboxing",
      "Integer cache (-128 to 127)",
      "null pointer traps",
    ],
  },
  {
    topic: "Method Overloading vs Overriding",
    problem: "What's the difference and tricky cases?",
    concepts: [
      "compile-time vs runtime",
      "covariant return types",
      "overloading with primitives vs wrappers",
    ],
  },
  {
    topic: "Constructor Chaining",
    problem: "How do constructors call each other?",
    concepts: ["this() vs super()", "initialization order", "calling rules"],
  },
  {
    topic: "Shallow Copy vs Deep Copy",
    problem: "How do we duplicate objects?",
    concepts: [
      "clone()",
      "Cloneable interface",
      "copy constructors",
      "serialization trick",
    ],
  },
  {
    topic: "Comparable vs Comparator",
    problem: "How do we define sorting?",
    concepts: ["natural ordering", "custom sorting", "when to use which"],
  },
  {
    topic: "fail-fast vs fail-safe Iterators",
    problem: "What happens when we modify during iteration?",
    concepts: [
      "ConcurrentModificationException",
      "CopyOnWriteArrayList",
      "thread safety",
    ],
  },
  {
    topic: "ArrayList vs LinkedList",
    problem: "When to use which?",
    concepts: [
      "random access vs insertion",
      "memory overhead",
      "iterator performance",
    ],
  },
  {
    topic: "HashMap Internals",
    problem: "How does it achieve O(1)?",
    concepts: [
      "hash function",
      "bucket array",
      "load factor 0.75",
      "rehashing",
      "Java 8 tree nodes",
    ],
  },
  {
    topic: "TreeMap vs HashMap",
    problem: "Sorted vs unsorted?",
    concepts: ["Red-Black tree", "O(log n) vs O(1)", "natural ordering"],
  },
  {
    topic: "HashSet vs TreeSet",
    problem: "How are they implemented?",
    concepts: ["backed by HashMap/TreeMap", "when to use which"],
  },
  {
    topic: "Serialization",
    problem: "How do we save object state?",
    concepts: [
      "Serializable interface",
      "serialVersionUID",
      "transient keyword",
      "security issues",
    ],
  },
  {
    topic: "Reflection API",
    problem: "How do we inspect classes at runtime?",
    concepts: [
      "Class object",
      "getDeclaredMethods",
      "breaking encapsulation",
      "performance cost",
    ],
  },
  {
    topic: "Annotations",
    problem: "How do we add metadata?",
    concepts: [
      "@Override",
      "@Deprecated",
      "custom annotations",
      "retention policy",
    ],
  },
  {
    topic: "Enums",
    problem: "How are they better than constants?",
    concepts: [
      "type safety",
      "methods in enums",
      "EnumSet/EnumMap",
      "singleton pattern",
    ],
  },
  {
    topic: "Nested Classes",
    problem: "When do we use inner classes?",
    concepts: [
      "static vs non-static",
      "anonymous classes",
      "lambda alternative",
    ],
  },
  {
    topic: "Default Methods in Interfaces",
    problem: "How did Java 8 change interfaces?",
    concepts: ["backward compatibility", "diamond problem", "static methods"],
  },
  {
    topic: "Optional Class",
    problem: "How do we avoid null checks?",
    concepts: [
      "orElse vs orElseGet",
      "ifPresent",
      "map/flatMap",
      "anti-patterns",
    ],
  },
  {
    topic: "Threads vs Runnable",
    problem: "How do we create threads?",
    concepts: [
      "Thread class vs Runnable interface",
      "why Runnable is better",
      "lambda syntax",
    ],
  },
  {
    topic: "synchronized keyword",
    problem: "How do we handle concurrent access?",
    concepts: ["method vs block", "intrinsic lock", "when it's not enough"],
  },
  {
    topic: "volatile keyword",
    problem: "What does it guarantee?",
    concepts: ["visibility", "happens-before", "not atomic", "vs synchronized"],
  },
  {
    topic: "ThreadLocal",
    problem: "How do we store thread-specific data?",
    concepts: ["use cases", "memory leaks", "InheritableThreadLocal"],
  },
  {
    topic: "Executor Framework",
    problem: "How do we manage thread pools?",
    concepts: [
      "ExecutorService",
      "FixedThreadPool",
      "CachedThreadPool",
      "shutdown",
    ],
  },
];
