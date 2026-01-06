export interface Hobby {
  name: string;
  emoji: string;
  description: string;
}

export const hobbies: Hobby[] = [
  {
    name: "Open Source",
    emoji: "🧩",
    description: "Contributing to libraries and tooling, and learning from real-world codebases",
  },
  {
    name: "System Design",
    emoji: "🗺️",
    description: "Enjoy building scalable architectures and exploring trade-offs",
  },
  {
    name: "Competitive Programming",
    emoji: "🧠",
    description: "Practicing algorithms and problem-solving to sharpen fundamentals",
  },
  {
    name: "Tech Blogging",
    emoji: "✍️",
    description: "Sharing learnings about Java, Spring, and backend engineering",
  },
  {
    name: "Hiking",
    emoji: "🥾",
    description: "Taking breaks outdoors to recharge and stay active",
  },
  {
    name: "Reading",
    emoji: "📚",
    description: "Books on software craftsmanship, distributed systems, and leadership",
  },
];
