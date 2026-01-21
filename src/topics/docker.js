export const BASIC_DOCKER_CONCEPTS = [
  {
    topic: "Containers vs VMs",
    problem: "How do containers provide isolation differently?",
    concepts: ["OS-level virtualization", "shared kernel", "resource usage"],
  },
  {
    topic: "Docker Images",
    problem: "How do we package applications?",
    concepts: ["layers", "base image", "Dockerfile"],
  },
  {
    topic: "Dockerfile",
    problem: "How do we define container builds?",
    concepts: ["FROM/RUN/COPY/CMD", "layer caching", "best practices"],
  },
  {
    topic: "Docker Volumes",
    problem: "How do we persist data?",
    concepts: ["vs bind mounts", "named volumes", "data persistence"],
  },
  {
    topic: "Docker Networks",
    problem: "How do containers communicate?",
    concepts: ["bridge/host/none", "container linking", "port mapping"],
  },
  {
    topic: "Docker Compose",
    problem: "How do we manage multi-container apps?",
    concepts: ["docker-compose.yml", "services", "orchestration"],
  },
  {
    topic: "Container Orchestration",
    problem: "How do we manage containers at scale?",
    concepts: ["Kubernetes basics", "why orchestration", "Docker Swarm"],
  },
  {
    topic: "Image Layers",
    problem: "How does Docker optimize storage?",
    concepts: ["layer reuse", "cache invalidation", "build optimization"],
  },
  {
    topic: "Container Lifecycle",
    problem: "What are the states of a container?",
    concepts: ["created/running/stopped", "docker start/stop/rm"],
  },
  {
    topic: "Docker Registry",
    problem: "How do we share images?",
    concepts: ["Docker Hub", "private registry", "pull/push"],
  },
  {
    topic: "Environment Variables",
    problem: "How do we configure containers?",
    concepts: ["-e flag", "docker-compose env", "secrets"],
  },
  {
    topic: "Multi-stage Builds",
    problem: "How do we create smaller images?",
    concepts: ["build vs runtime", "COPY --from", "size optimization"],
  },
];
