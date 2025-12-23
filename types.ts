
export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
}

export interface Education {
  achievement: string;
  stream: string;
  college: string;
  university: string;
  year: string;
}

export interface Project {
  title: string;
  url: string;
  image: string;
  tags: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  objective: string;
  profileImage: string;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  certifications: Certification[];
  personalInfo: {
    dob: string;
    languages: string[];
    hobbies: string[];
  };
}
