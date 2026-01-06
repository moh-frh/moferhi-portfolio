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
    name: "IBM Data Analytics",
    image: "/certifications/ibm-logo.png",
    link: "https://www.credly.com/badges/be3d0312-a49e-44f2-958b-9a3c62802940/public_url",
    issuedBy: "IBM",
    issuedDate: "2024",
  },
  {
    name: "SAS Programming",
    image: "/certifications/sas-logo.png",
    link: "https://www.credly.com/badges/182452db-cb80-4feb-9db6-ad591b4d8946/public_url",
    issuedBy: "SAS Institute",
    issuedDate: "2024",
  },
  {
    name: "Agile with Atlassian Jira",
    image: "/certifications/atlassian-logo.png",
    link: "https://coursera.org/share/434f89bd94c94cd386ab77d83c2ca55a",
    issuedBy: "Atlassian",
    issuedDate: "2024",
  },
  {
    name: "Kaggle for Data Science",
    image: "/certifications/kaggle-logo.png",
    link: "https://www.kaggle.com/learn/certification/mohamedfouaz/intro-to-programming",
    issuedBy: "Kaggle",
    issuedDate: "2024",
  },
  {
    name: "Unit Testing",
    image: "/certifications/testing-logo.png",
    link: "https://coursera.org/share/c045f719aeb09bc0b72b34f45159274b",
    issuedBy: "Various",
    issuedDate: "2024",
  },
  {
    name: "Python Data Structure",
    image: "/certifications/python-logo.png",
    link: "https://coursera.org/share/7a602a87a408ffe23e339434bc84b2b9",
    issuedBy: "Various",
    issuedDate: "2024",
  },
  {
    name: "CISCO CCNA",
    image: "/certifications/cisco-logo.png",
    link: "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html",
    issuedBy: "Cisco",
    issuedDate: "2024",
  },
];
