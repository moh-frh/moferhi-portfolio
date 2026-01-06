export interface SkillCategory {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
  color: string;
  skills: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  isRemote: boolean;
  startDate: string;
  endDate: string;
  achievements: Array<{ text: string }>;
  skills: Array<{ name: string }>;
}

export interface Certification {
  name: string;
  image: string;
  link: string;
  issuedBy: string;
  issuedDate: string;
  earlyAdopterBadge?: {
    link: string;
    image: string;
  };
}

export interface Hobby {
  name: string;
  emoji: string;
  description: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
  honors: Array<{ name: string; date?: string }>;
  activities: Array<{ name: string; description?: string }>;
}
