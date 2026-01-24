export interface Project {
  id: string;
  title: string;
  category: "Mobile Application" | "Web Application" | "Desktop Application" | "Mobile & Web Application";
  date?: string;
  description: string;
  technologies: string[];
  mainImage: string;
  images: string[];
  appStoreLink?: string;
  playStoreLink?: string;
  keywords?: string;
}