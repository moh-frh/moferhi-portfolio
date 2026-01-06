import { Brain, Cloud, Code, Terminal } from "lucide-react";
import type { ElementType } from "react";

export interface SkillCategory {
  name: string;
  Icon: ElementType;
  skills: string[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Data Analysis & Visualization",
    Icon: Brain,
    color: "bg-purple-500/10 text-purple-500",
    skills: [
      "Microsoft Power BI",
      "Tableau",
      "Seaborn",
      "Excel (Advanced Functions, Pivot Tables)",
      "SQL (Structured Query Language)",
      "SAS",
      "Python (Pandas, NumPy, Matplotlib)",
    ],
  },
  {
    name: "Data Engineering & Big Data",
    Icon: Cloud,
    color: "bg-blue-500/10 text-blue-500",
    skills: [
      "Snowflake",
      "Hadoop",
      "Spark",
      "Hive",
      "Cloudera",
      "Databricks",
      "Kafka",
      "Data Lakes",
      "ETL (Extract, Transform, Load) Pipeline Design",
    ],
  },
  {
    name: "Programming & Databases",
    Icon: Code,
    color: "bg-green-500/10 text-green-500",
    skills: [
      "Python (Pandas, NumPy, PySpark)",
      "SQL (MySQL, PostgreSQL, MS SQL)",
      "Java",
      "SAS",
      "Statistical Analysis",
      "Data Modeling",
    ],
  },
  {
    name: "Cloud & Tools",
    Icon: Terminal,
    color: "bg-orange-500/10 text-orange-500",
    skills: [
      "AWS (Glue, Lambda, Redshift, S3, CloudWatch)",
      "Azure Machine Learning",
      "Databricks",
      "Airflow",
      "Jenkins",
      "Docker",
      "Git",
      "GitLab",
      "Jira",
      "Google Maps API",
    ],
  },
  {
    name: "Methodologies & Concepts",
    Icon: Brain,
    color: "bg-indigo-500/10 text-indigo-500",
    skills: [
      "Data Governance",
      "Agile/Scrum",
      "Statistical Methodologies",
      "Data Cleaning and Preparation",
      "Data Validation",
      "KPI (Key Performance Indicator) Tracking",
      "Benchmarking",
      "NLP",
      "Machine Learning",
      "Predictive Modeling",
    ],
  },
];
