import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  title: string;
  category:
    | "Mobile Application"
    | "Web Application"
    | "Desktop Application"
    | "Mobile & Web Application";
  date?: string;
  description: string;
  technologies: string[];
  mainImage: StaticImageData | string;
  images: StaticImageData[] | string[];
  appStoreLink?: string;
  playStoreLink?: string;
  driveLink?: string;
  keywords?: string;
}
