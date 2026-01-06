export interface Honor {
  name: string;
}

export interface Activity {
  name: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
  honors: Honor[];
  activities: Activity[];
}

export const education: Education = {
  degree: "Master of Computer Science - Software Engineering",
  school: "University of Technology",
  location: "New York, USA",
  startDate: "September 2017",
  endDate: "June 2019",
  gpa: "3.8/4.0",
  honors: [
    { name: "Summa Cum Laude" },
    { name: "Dean's List All Semesters" },
    { name: "Outstanding Graduate Student in Computer Science" }
  ],
  activities: [
    { name: "President, Computer Science Graduate Student Association" },
    { name: "Software Development Club - Core Member" },
    { name: "Hackathon Winner - Spring 2019" },
    { name: "Teaching Assistant - Advanced Java Programming" }
  ]
};
