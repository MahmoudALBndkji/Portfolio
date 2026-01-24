import { StaticImageData } from "next/image";

export interface ToolItem {
  name: string;
  icon: StaticImageData | string;
  color: string;
  desc: string;
}