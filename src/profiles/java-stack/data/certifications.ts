export interface EarlyAdopterBadge {
  name: string;
  image: string;
  link: string;
  issuedDate: string;
}

export interface Certification {
  name: string;
  image: string;
  link: string;
  issuedBy: string;
  issuedDate: string;
  earlyAdopterBadge?: EarlyAdopterBadge;
}

export const certifications: Certification[] = [
  {
    name: "Oracle Certified Professional: Java SE 17 Developer",
    image: "/certifications/oracle-logo.png",
    link: "#",
    issuedBy: "Oracle",
    issuedDate: "2023",
    earlyAdopterBadge: {
      name: "Java 17 Early Adopter",
      image: "/certifications/oracle-ea-badge.png",
      link: "#",
      issuedDate: "2022"
    }
  },
  {
    name: "AWS Certified Developer - Associate",
    image: "/certifications/aws-logo.png",
    link: "#",
    issuedBy: "Amazon Web Services",
    issuedDate: "2023"
  },
  {
    name: "Spring Professional",
    image: "/certifications/spring-logo.png",
    link: "#",
    issuedBy: "VMware",
    issuedDate: "2023"
  },
  {
    name: "Kubernetes Application Developer (CKAD)",
    image: "/certifications/cncf-logo.png",
    link: "#",
    issuedBy: "Cloud Native Computing Foundation",
    issuedDate: "2022"
  },
  {
    name: "Professional Scrum Developer I (PSD I)",
    image: "/certifications/scrum-org-logo.png",
    link: "#",
    issuedBy: "Scrum.org",
    issuedDate: "2022"
  },
  {
    name: "Google Cloud Professional Cloud Architect",
    image: "/certifications/gcp-logo.png",
    link: "#",
    issuedBy: "Google Cloud",
    issuedDate: "2021"
  }
];
