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
    title: "Data Scientist / AI Specialist",
    company: "Outlier AI",
    location: "Remote",
    startDate: "November 2024",
    endDate: "Present",
    isRemote: true,
    achievements: [
      {
        text: "Developed interactive dashboards to monitor key performance indicators (KPIs), uncover reward usage trends, and provide actionable insights to stakeholders.",
      },
      {
        text: "Applied NLP techniques on user feedback data to extract sentiment and refine reward strategies.",
      },
      {
        text: "Leveraged Amplitude and Segment to track behavioral data, leading to measurable improvements in user activation and retention.",
      },
      {
        text: "Built predictive models to identify reward structures that maximized user engagement and redemption rates.",
      },
    ],
    skills: [
      { name: "Data Science" },
      { name: "AI/ML" },
      { name: "NLP" },
      { name: "Python" },
      { name: "Amplitude" },
      { name: "Segment" },
      { name: "Predictive Modeling" },
    ],
  },
  {
    title: "Data Analyst",
    company: "El Djazair Information Technology",
    location: "Algeria",
    startDate: "November 2020",
    endDate: "August 2023",
    achievements: [
      {
        text: "Performed statistical analysis and data modeling using SAS, leading to a 20% improvement in operational forecasting accuracy.",
      },
      {
        text: "Streamlined data retrieval by optimizing SQL query performance, leading to a 25% reduction in execution times and enhancing reporting efficiency for 155 agencies.",
      },
      {
        text: "Redesigned PostgreSQL database architecture, resulting in a 25% efficiency increase and 15% storage savings.",
      },
      {
        text: "Collaborated with clients to enhance user experiences for 155 agencies through geolocation features using Google Maps API.",
      },
      {
        text: "Contributed to the timely delivery of three major projects by participating in Agile/Scrum ceremonies while meeting all stakeholder requirements.",
      },
    ],
    skills: [
      { name: "SAS" },
      { name: "SQL" },
      { name: "PostgreSQL" },
      { name: "Statistical Analysis" },
      { name: "Data Modeling" },
      { name: "Google Maps API" },
      { name: "Agile/Scrum" },
    ],
  },
  {
    title: "Data Engineer",
    company: "National Meteorological Office",
    location: "Algeria",
    startDate: "September 2019",
    endDate: "November 2020",
    achievements: [
      {
        text: "Developed and maintained robust data pipelines using Python and SAS, accelerating data processing speed by 20% and supporting comprehensive business analysis.",
      },
      {
        text: "Developed an in-house real-time meteorological monitoring application using Python and SNMP, generating an annual cost savings of $10,490 for the organization.",
      },
      {
        text: "Managed data governance for three key projects, ensuring data quality and compliance.",
      },
      {
        text: "Mentored two junior developers, strengthening the team's technical capabilities and overall project delivery.",
      },
    ],
    skills: [
      { name: "Python" },
      { name: "SAS" },
      { name: "Data Pipelines" },
      { name: "SNMP" },
      { name: "Data Governance" },
      { name: "Mentoring" },
    ],
  },
];
