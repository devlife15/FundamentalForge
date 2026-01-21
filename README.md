# FundamentalForge 🔨

> A smart daily revision tool for junior developers preparing for technical interviews. Study 150+ CS fundamentals through randomized spaced repetition over 150 days.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-18.0+-61DAFB.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

## 🎯 Why This Exists

You're grinding LeetCode every morning. You're building projects by following tutorials. You're watching system design lectures. But at the end of the day, you still feel like you haven't really progressed.

**The problem?** Interview preparation requires systematic coverage of fundamentals, not just random learning. You need to understand closures, TCP handshakes, database isolation levels, React reconciliation, and hundreds of other concepts that interviewers assume you know.

**FundamentalForge solves this** by ensuring you touch everything systematically through smart randomization and spaced repetition—without the boredom of linear study.

## ✨ Features

- 📚 **150+ Curated Fundamentals** - Carefully selected topics across 15 domains
- 🎲 **Smart Randomization** - Avoids repeating your last 15 studied topics
- 📊 **Visual Progress Tracking** - See your completion rate per domain
- ⏱️ **150-Day Timeline** - Auto-calculated daily targets to hit your deadline
- 🧠 **Problem-Focused Learning** - Every topic answers "What problem does this solve?"
- ✅ **Study/Skip Workflow** - Mark topics as studied or skip for later
- 🎓 **Interview-Ready Depth** - Covers tricky parts that actually appear in coding interviews
- 🔄 **Spaced Repetition** - Built-in algorithm prevents recent topic repetition

## 📚 Covered Domains

- **Core Java & OOP** - Classes, inheritance, collections, streams
- **Core JavaScript** - Closures, promises, event loop, prototypes
- **Networking** - TCP/UDP, HTTP, DNS, WebSockets, REST
- **APIs** - REST vs GraphQL, authentication, rate limiting, pagination
- **Modern Web** - Rendering pipeline, web vitals, service workers, security
- **React** - Hooks, reconciliation, performance, context, fiber
- **Node.js & Express** - Event loop, streams, middleware, clustering
- **DBMS** - ACID, normalization, indexes, transactions, joins
- **MongoDB & Mongoose** - Document model, aggregation, sharding, indexing
- **Data Structures & Algorithms** - Arrays, trees, graphs, DP, sorting
- **System Design (SDE-1)** - Scaling, caching, load balancing, microservices
- **Browser** - Rendering, event loop, storage, DevTools, performance
- **Basic Cloud Concepts** - IaaS/PaaS/SaaS, auto-scaling, serverless, VPC
- **Basic Docker Concepts** - Containers, images, volumes, compose, multi-stage builds
- **Linux Concepts** - File system, permissions, processes, SSH, shell scripting

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/fundamental-forge.git

# Navigate to project directory
cd fundamental-forge

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

## 📖 How to Use

### Daily Study Routine (30 minutes)

1. **Click "Pick Random Fundamental"** - Get your daily topic
2. **Read the problem it solves** - Understand the "why" first
3. **Study for 30 minutes** using this breakdown:
   - **Minutes 0-10:** Read and take notes in your own words
   - **Minutes 10-20:** Close everything and explain to your rubber duck
   - **Minutes 20-28:** Write code example OR draw a diagram
   - **Minutes 28-30:** Write one sentence connecting it to a previous topic
4. **Mark as Studied** or **Skip** - Track your progress
5. **Repeat daily** until interview-ready

### Study Philosophy

**Spaced Repetition > Cramming**  
Random daily practice with built-in spacing is scientifically proven to build long-term retention better than linear study.

**Problem-First Learning**  
Every fundamental includes "What problem does this solve?" because senior engineers don't just memorize—they understand the _why_.

**Active Recall**  
The 30-minute template forces you to explain, code, and connect concepts rather than passively reading.

## 🎯 150-Day Strategy

### Phase 1: Days 1-60 (First Pass)

- **Target:** 2-3 topics per day
- **Goal:** Touch everything once, build broad awareness
- **Focus:** Understanding "what problem does this solve?"

### Phase 2: Days 61-120 (Deep Dive)

- **Target:** 2 topics per day
- **Goal:** Revisit weak areas, go deeper
- **Focus:** Can you explain without notes?

### Phase 3: Days 121-150 (Interview Ready)

- **Target:** 1-2 topics per day
- **Goal:** Polish, teach, connect concepts
- **Focus:** Mock interviews on random fundamentals

## 🏆 Progress Tracking

The dashboard shows:

- **Days Remaining** - Live countdown to your deadline
- **Overall Progress** - X/154 fundamentals studied
- **Daily Target** - Auto-calculates topics needed per day
- **Milestone Tracker** - Achievement levels as you progress
- **Domain Breakdown** - Visual progress per subject area

## 🛠️ Tech Stack

- **React 18+** - UI framework
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Local Storage** - Progress persistence (coming soon)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Adding New Fundamentals

Each fundamental should include:

1. **Topic name** - Clear and concise
2. **Problem it solves** - The "why" behind the concept
3. **Key concepts** - 3-5 specific things to explore

Example:

```javascript
{
  topic: "Closures",
  problem: "How do functions remember their creation scope?",
  concepts: ["lexical scope", "private variables", "factory functions"]
}
```

### Improvement Ideas

- [ ] Add difficulty levels (Beginner/Intermediate/Advanced)
- [ ] Export study history as CSV
- [ ] Add "Notes" section per topic
- [ ] Integration with Notion/Obsidian
- [ ] Mobile app version
- [ ] Social features (study groups, leaderboards)
- [ ] Spaced repetition algorithm (resurface topics after X days)

## 📝 License

MIT License - feel free to use this for your own interview prep or modify as needed.

## 🙏 Acknowledgments

Inspired by the daily grind of junior developers everywhere who know they need to study fundamentals but struggle with consistency and structure.

Built for anyone preparing for technical interviews at Google, Meta, Amazon, Anthropic, Jane Street, and other top-tier companies.

## ⭐ Show Your Support

If this helped your interview prep, give it a star! ⭐

## 📬 Contact

Have suggestions or found a bug? Open an issue or reach out!

---

**Remember:** Consistency beats intensity. 30 minutes daily for 150 days will transform your fundamental knowledge more than 10-hour weekend cramming sessions ever could.

Happy forging! 🔨
