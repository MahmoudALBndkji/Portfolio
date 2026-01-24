import { StaticImageData } from "next/image";

export interface Technique {
  name: string;
  img: StaticImageData | string;
}
