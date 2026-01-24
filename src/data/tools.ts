import { ToolItem } from "@/app/types/tool";
import GitImg  from "@/../public/assets/icons/git.png";
import FigmaImg  from "@/../public/assets/icons/figma.png";
import AzureImg  from "@/../public/assets/icons/azure.png";
import ZeplinImg  from "@/../public/assets/icons/zeplin.svg";
import PostmanImg  from "@/../public/assets/icons/postman.png";
import DatabaseImg  from "@/../public/assets/icons/database.png";
import VsCodeImg  from "@/../public/assets/icons/visualStudioCode.png";
import VisualStudioImg  from "@/../public/assets/icons/visualStudio.png";
import AndroidStudioImg  from "@/../public/assets/icons/androidStudio.png";
import VisualParadigmImg  from "@/../public/assets/icons/visualParadigm.png";

export const tools: ToolItem[] = [
  {
    name: "Visual Studio",
    icon: VisualStudioImg,
    color: "#ab47bc",
    desc: "I worked with him so much For Developing Web Application and Desktop Application using C# .NET Framework",
  },
  {
    name: "Android Studio",
    icon: AndroidStudioImg,
    color: "#3ddc84",
    desc: "I used it so much For Developing Mobile Application",
  },
  {
    name: "Visual Studio Code",
    icon: VsCodeImg,
    color: "#0078d7",
    desc: "I worked with him for Build and Developing Websites and much more",
  },
  {
    name: "Git",
    icon: GitImg,
    color: "#f34f29",
    desc: "Tool used for source code management, Version control system (GitHub , GitLab)",
  },
  {
    name: "DB Management",
    icon: DatabaseImg,
    color: "#518fcb",
    desc: "Sql Server Managment Studio, MySql WorkBench Is used for Storing, and Managing Data in DB",
  },
  {
    name: "Azure",
    icon: AzureImg,
    color: "#4863a0",
    desc: "A Public Cloud Computing Platform with solutions including Infrastructure as a Service and Software as a Service",
  },
  {
    name: "Visual Paradigm",
    icon: VisualParadigmImg,
    color: "#cc3233",
    desc: "Supports Notation of UML models, as well as report generation and code Engineering Capabilities",
  },
  {
    name: "Postman",
    icon: PostmanImg,
    color: "#f36933",
    desc: "A Standalone Software Testing API platform to Build, Test, Design, Modify, and Document APIs",
  },
  {
    name: "Figma",
    icon: FigmaImg,
    color: "#333",
    desc: "A Powerful Web-based Design Tool that helps me Create Websites & Application and much more",
  },
  {
    name: "Zeplin",
    icon: ZeplinImg,
    color: "#fdbd39",
    desc: "I Deal with The Designs of Applications & Websites, With the Ability to Share Ideas with all members of the project",
  },
];
