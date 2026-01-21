export const LINUX_CONCEPTS = [
  {
    topic: "File System Hierarchy",
    problem: "How is Linux organized?",
    concepts: ["/etc /var /home", "FHS", "mount points"],
  },
  {
    topic: "File Permissions",
    problem: "How do we control access to files?",
    concepts: ["rwx", "chmod/chown", "umask"],
  },
  {
    topic: "Processes",
    problem: "How does Linux manage running programs?",
    concepts: ["PID", "ps/top", "signals", "parent/child"],
  },
  {
    topic: "Process Management",
    problem: "How do we control processes?",
    concepts: ["kill", "jobs", "fg/bg", "nohup"],
  },
  {
    topic: "Package Managers",
    problem: "How do we install software?",
    concepts: ["apt/yum/dnf", "repositories", "dependencies"],
  },
  {
    topic: "Pipes and Redirection",
    problem: "How do we chain commands together?",
    concepts: ["stdin/stdout/stderr", "| > >>", "command composition"],
  },
  {
    topic: "Environment Variables",
    problem: "How do we configure the shell?",
    concepts: ["PATH", "export", ".bashrc/.zshrc"],
  },
  {
    topic: "Systemd Services",
    problem: "How do we manage long-running services?",
    concepts: ["systemctl", "units", "service management"],
  },
  {
    topic: "Logs and Journaling",
    problem: "How do we track system events?",
    concepts: ["journalctl", "/var/log", "log rotation"],
  },
  {
    topic: "SSH",
    problem: "How do we securely access remote machines?",
    concepts: ["key-based auth", "ssh-keygen", "config file"],
  },
  {
    topic: "Cron Jobs",
    problem: "How do we schedule recurring tasks?",
    concepts: ["crontab syntax", "scheduling", "automation"],
  },
  {
    topic: "Shell Scripting Basics",
    problem: "How do we automate repetitive tasks?",
    concepts: ["bash syntax", "variables", "control flow"],
  },
];
