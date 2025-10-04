import { createHash } from "node:crypto";

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "MO FERHI",
    url: "https://www.linkedin.com/in/mohamedfrh213/",
    jobTitle: "Data Scientist & AI Specialist",
    description:
      "Results-driven Data Scientist with 6+ years of experience in data manipulation, business intelligence, and advanced analytics.",
    sameAs: [
      "https://www.linkedin.com/in/mohamedfrh213",
      "https://github.com/moh-frh",
    ],
    knowsAbout: [
      "Data Science",
      "Machine Learning",
      "Business Intelligence",
      "Advanced Analytics",
      "Python Programming",
      "SQL Database Management",
      "SAS Programming",
      "Power BI",
      "Tableau",
      "AWS Cloud Services",
      "Azure Machine Learning",
      "Data Visualization",
      "CI/CD & Infrastructure as Code",
      "Kubernetes & Docker",
      "Next.js & React Development",
      "Node.js Development",
      "Statistical Modeling",
      "Clustering & Dimensionality Reduction",
      "Innovation & Cloud Computing",
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MO FERHI - Portfolio",
    url: "https://www.linkedin.com/in/mohamedfrh213/",
    description:
      "Personal portfolio of MO FERHI, Data Scientist and AI Specialist with 6+ years of experience in data manipulation, business intelligence, and advanced analytics.",
    author: {
      "@type": "Person",
      name: "MO FERHI",
    },
  };
}

interface StructuredDataProps {
  type: "person" | "website" | "both";
}

// Memoize schema keys to avoid recalculating
const schemaKeyCache = new Map<string, string>();

const createSchemaKey = (schema: Record<string, unknown>): string => {
  const serialized = JSON.stringify(schema);
  
  if (schemaKeyCache.has(serialized)) {
    return schemaKeyCache.get(serialized)!;
  }
  
  const type = typeof schema["@type"] === "string" ? (schema["@type"] as string) : undefined;
  const name = typeof schema.name === "string" ? (schema.name as string) : undefined;
  const baseKey = [type, name].filter(Boolean).join("-");
  const digest = createHash("sha256").update(serialized).digest("hex").slice(0, 12);
  const key = baseKey ? `${baseKey}-${digest}` : digest;
  
  schemaKeyCache.set(serialized, key);
  return key;
};

export default function StructuredData({ type }: StructuredDataProps) {
  const schemas = [];

  if (type === "person" || type === "both") {
    schemas.push(generatePersonSchema());
  }

  if (type === "website" || type === "both") {
    schemas.push(generateWebsiteSchema());
  }

  return (
    <>
      {schemas.map((schema) => {
        const record = schema as Record<string, unknown>;
        return (
          <script key={createSchemaKey(record)} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        );
      })}
    </>
  );
}
