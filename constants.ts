
import { PortfolioData } from './types';

export const INITIAL_DATA: PortfolioData = {
  name: "K. Manikanta Reddy",
  title: "Digital Marketing Analyst",
  email: "koyyamanikanta153@gmail.com",
  phone: "9703670090",
  address: "36-93-357/4, Javaharnal Nagar, Kancharapalem, Visakhapatnam, Andhra Pradesh, 530016",
  objective: "Digital marketing Analyst with 5+ years of experience, specialized in On-page SEO, Off-page SEO, Keyword Research, and analytics tools like Ahrefs and SEMrush. Committed to delivering high ROI through strategic digital campaigns.",
  profileImage: "https://picsum.photos/seed/profile/400/400",
  skills: [
    { name: "Search Engine Optimization (SEO)", level: 95 },
    { name: "Search Engine Marketing (SEM)", level: 90 },
    { name: "Google Analytics & Search Console", level: 88 },
    { name: "Content Auditing & Marketing", level: 85 },
    { name: "Social Media Marketing", level: 82 },
    { name: "WordPress Design", level: 75 },
    { name: "Photoshop & Illustrator", level: 70 },
    { name: "HTML/CSS", level: 65 }
  ],
  experience: [
    {
      company: "Beyond Technologies",
      role: "Digital Marketing Analyst",
      duration: "5+ Years",
      description: [
        "Responsible for On-page and Off-page optimization strategies.",
        "Perform deep competitive analysis and identify content gaps.",
        "Manage high-quality backlink generation using ethical techniques.",
        "Created tracking reports for traffic and keyword performance."
      ]
    },
    {
      company: "VYSYARAJU JEWELLERS",
      role: "Digital Marketer & Ecommerce Executive",
      duration: "Present",
      description: [
        "Managing digital presence for 14+ showrooms.",
        "Optimizing ecommerce funnels and conversion rates.",
        "Leading multi-channel social engagement strategies."
      ]
    }
  ],
  education: [
    {
      achievement: "Diploma in Electrical (EEE)",
      stream: "Electrical and Electronics",
      college: "Sai Ganapathi Engineering College",
      university: "JNTU University",
      year: "2018"
    },
    {
      achievement: "SSC",
      stream: "General",
      college: "Vivekananda Vidya Nilayam",
      university: "Secondary School Certificate",
      year: "2015"
    }
  ],
  projects: [
    { title: "Beyond Technologies", url: "https://bynd.co.in", image: "https://picsum.photos/seed/bynd/800/600", tags: ["Marketing", "SEO"] },
    { title: "Dr. Besant School", url: "https://drbesantschool.com", image: "https://picsum.photos/seed/school/800/600", tags: ["Web Design", "Local SEO"] },
    { title: "Gayatri Travels", url: "https://gayatritravelsvizag.com", image: "https://picsum.photos/seed/travel/800/600", tags: ["SEM", "Lead Gen"] },
    { title: "Shivani Developers", url: "https://sivanidevelopers.com", image: "https://picsum.photos/seed/dev/800/600", tags: ["Branding", "SEO"] },
    { title: "Leeway Space", url: "https://leewayspace.com", image: "https://picsum.photos/seed/space/800/600", tags: ["Audit", "Optimization"] },
    { title: "Hotel Sea Rock", url: "https://hotelsearockvizag.com", image: "https://picsum.photos/seed/hotel/800/600", tags: ["E-commerce", "Local SEO"] }
  ],
  certifications: [
    { name: "Google Ads Search Certification", issuer: "Google", date: "2023" },
    { name: "HubSpot Content Marketing", issuer: "HubSpot", date: "2022" },
    { name: "Advanced SEO Course", issuer: "SEMrush", date: "2021" }
  ],
  personalInfo: {
    dob: "18-01-1999",
    languages: ["English", "Hindi", "Telugu"],
    hobbies: ["Music", "Cricket", "Tech Exploration"]
  }
};
