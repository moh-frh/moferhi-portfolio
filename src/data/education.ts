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
  degree: "Master of Computer Science - Software Engineering and Information Processing",
  school: "",
  location: "Algeria",
  startDate: "September 2017",
  endDate: "June 2019",
  gpa: "N/A",
  honors: [],
  activities: [],
};
