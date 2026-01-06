import { Cloud, Code, Terminal, Server, Database } from "lucide-react";
import type { ElementType } from "react";

export interface SkillCategory {
  name: string;
  Icon: ElementType;
  skills: string[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Java Development",
    Icon: Code,
    color: "bg-red-500/10 text-red-500",
    skills: [
      "Java 8-17",
      "Spring Boot",
      "Spring Framework",
      "Hibernate/JPA",
      "Maven/Gradle",
      "JUnit 5",
      "Mockito",
      "Design Patterns"
    ],
  },
  {
    name: "Backend Development",
    Icon: Server,
    color: "bg-blue-500/10 text-blue-500",
    skills: [
      "RESTful APIs",
      "Microservices",
      "Spring Cloud",
      "Docker",
      "Kubernetes",
      "Message Queues (RabbitMQ, Kafka)",
      "OAuth2/JWT"
    ],
  },
  {
    name: "Databases & ORM",
    Icon: Database,
    color: "bg-green-500/10 text-green-500",
    skills: [
      "SQL (PostgreSQL, MySQL, Oracle)",
      "NoSQL (MongoDB, Redis)",
      "Hibernate",
      "JPA",
      "Liquibase/Flyway",
      "Query Optimization"
    ],
  },
  {
    name: "DevOps & Cloud",
    Icon: Cloud,
    color: "bg-orange-500/10 text-orange-500",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS/Azure/GCP",
      "CI/CD (Jenkins, GitHub Actions)",
      "Terraform",
      "Prometheus/Grafana"
    ],
  },
  {
    name: "Tools & Methodologies",
    Icon: Terminal,
    color: "bg-purple-500/10 text-purple-500",
    skills: [
      "Git",
      "Agile/Scrum",
      "Test-Driven Development (TDD)",
      "Domain-Driven Design (DDD)",
      "Clean Code",
      "SOLID Principles"
    ],
  },
];
