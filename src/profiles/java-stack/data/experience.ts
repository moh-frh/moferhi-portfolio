export interface Achievement {
  text: string;
}

export interface Skill {
  name: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isRemote?: boolean;
  achievements: Achievement[];
  skills: Skill[];
}

export const experiences: Experience[] = [
  {
    title: "Senior Java Developer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    startDate: "January 2023",
    endDate: "Present",
    isRemote: true,
    achievements: [
      {
        text: "Led the development of a microservices-based e-commerce platform using Spring Boot and Spring Cloud, resulting in a 40% improvement in system performance."
      },
      {
        text: "Designed and implemented RESTful APIs following best practices, improving API response times by 35% through optimization and caching strategies."
      },
      {
        text: "Mentored junior developers in clean code practices, design patterns, and test-driven development (TDD)."
      }
    ],
    skills: [
      { name: "Java 17" },
      { name: "Spring Boot" },
      { name: "Microservices" },
      { name: "Docker" },
      { name: "Kubernetes" }
    ]
  },
  {
    title: "Backend Developer",
    company: "Digital Innovations LLC",
    location: "New York, NY",
    startDate: "March 2020",
    endDate: "December 2022",
    achievements: [
      {
        text: "Developed and maintained high-performance backend services using Java and Spring Framework, handling over 10,000 requests per second."
      },
      {
        text: "Implemented event-driven architecture using Apache Kafka, reducing system coupling and improving scalability."
      },
      {
        text: "Collaborated with cross-functional teams to design and implement new features, following Agile/Scrum methodologies."
      }
    ],
    skills: [
      { name: "Java 11" },
      { name: "Spring Framework" },
      { name: "Kafka" },
      { name: "PostgreSQL" },
      { name: "JUnit 5" }
    ]
  },
  {
    title: "Java Developer",
    company: "Enterprise Systems Corp",
    location: "Boston, MA",
    startDate: "June 2018",
    endDate: "February 2020",
    achievements: [
      {
        text: "Developed and maintained enterprise applications using Java EE and Hibernate, improving system stability and performance."
      },
      {
        text: "Participated in code reviews and contributed to establishing coding standards and best practices within the team."
      },
      {
        text: "Assisted in the migration of legacy applications to modern Spring Boot microservices."
      }
    ],
    skills: [
      { name: "Java 8" },
      { name: "Spring Boot" },
      { name: "Hibernate" },
      { name: "Oracle" },
      { name: "Maven" }
    ]
  }
];
