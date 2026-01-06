import type { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "E-Commerce Microservices Platform",
    description: "A scalable e-commerce platform built with microservices architecture using Spring Boot and Spring Cloud. The system includes services for product catalog, order management, payment processing, and user authentication. Features include distributed tracing with Spring Cloud Sleuth, API Gateway with Spring Cloud Gateway, and event-driven communication using Apache Kafka.",
    image: "/projects/ecommerce.png",
    technologies: ["Java 17", "Spring Boot", "Spring Cloud", "Docker", "Kubernetes", "Kafka", "PostgreSQL", "Redis", "JUnit 5", "Mockito", "Prometheus", "Grafana"],
    category: "Backend Development",
    links: {
      github: "#",
      demo: "#"
    },
    featured: true
  },
  {
    id: "2",
    title: "Banking API",
    description: "A secure RESTful banking API that handles account management, fund transfers, and transaction history. Implemented with Spring Security, JWT authentication, and role-based access control. The system includes comprehensive test coverage, API documentation with Swagger/OpenAPI, and follows domain-driven design principles.",
    image: "/projects/banking.png",
    technologies: ["Java 17", "Spring Boot", "Spring Security", "JWT", "Spring Data JPA", "H2", "Lombok", "MapStruct", "TestContainers", "JUnit 5", "Mockito"],
    category: "API Development",
    links: {
      github: "#",
      demo: "#"
    },
    featured: true
  },
  {
    id: "3",
    title: "Task Management System",
    description: "A collaborative task management application built with Spring Boot and React. Features include real-time updates with WebSocket, file attachments, task assignments, and progress tracking. The backend follows clean architecture principles and includes comprehensive unit and integration tests.",
    image: "/projects/task-management.png",
    technologies: ["Java 17", "Spring Boot", "Spring WebFlux", "WebSocket", "MongoDB", "React", "Redux", "Jest", "Docker"],
    category: "Full Stack Development",
    links: {
      github: "#",
      demo: "#"
    },
    featured: true
  },
  {
    id: "4",
    title: "Inventory Management System",
    description: "An enterprise-grade inventory management system with features for product tracking, supplier management, and reporting. The application includes batch processing for inventory updates, PDF/Excel export functionality, and role-based dashboards. Built with Spring Boot and Thymeleaf for server-side rendering.",
    image: "/projects/inventory.png",
    technologies: ["Java 11", "Spring Boot", "Spring Data JPA", "Hibernate", "Thymeleaf", "MySQL", "Bootstrap", "jQuery", "Spring Batch", "iText"],
    category: "Enterprise Application",
    links: {
      github: "#"
    },
    featured: false
  },
  {
    id: "5",
    title: "API Gateway & Service Discovery",
    description: "A cloud-native API Gateway implementation using Spring Cloud Gateway with service discovery using Netflix Eureka. The project demonstrates patterns like circuit breaking with Resilience4j, rate limiting, request/response modification, and centralized logging with ELK stack.",
    image: "/projects/api-gateway.png",
    technologies: ["Java 17", "Spring Cloud Gateway", "Netflix Eureka", "Resilience4j", "ELK Stack", "Docker", "Kubernetes", "Prometheus"],
    category: "Cloud Architecture",
    links: {
      github: "#"
    },
    featured: true
  },
  {
    id: "6",
    title: "Event Sourcing with Axon Framework",
    description: "A proof-of-concept implementation of Event Sourcing and CQRS patterns using Axon Framework. The project demonstrates how to build scalable, event-driven microservices with event sourcing, command handling, and event replay capabilities.",
    image: "/projects/event-sourcing.png",
    technologies: ["Java 17", "Axon Framework", "Spring Boot", "MongoDB", "Docker", "Kubernetes", "JUnit 5", "TestContainers"],
    category: "Distributed Systems",
    links: {
      github: "#"
    },
    featured: false
  },
  {
    id: "7",
    title: "Spring Boot Starter Library",
    description: "A custom Spring Boot Starter that provides auto-configuration for common cross-cutting concerns like logging, metrics, and security. The library includes auto-configuration classes, custom properties, and starter POM for easy integration into other projects.",
    image: "/projects/spring-starter.png",
    technologies: ["Java 17", "Spring Boot", "Maven", "Auto-configuration", "Spring Boot Starters", "JUnit 5", "Mockito"],
    category: "Open Source",
    links: {
      github: "#"
    },
    featured: false
  }
];
