import {
  BiLogoLinkedin,
  BiLogoStackOverflow,
  BiLogoGithub,
  BiLogoBehance,
  BiLogoFacebook,
  BiLogoGoogle,
} from "react-icons/bi";

import { HeroLink } from "@/app/types/heroLink";

export const heroLinks: HeroLink[] = [
  {
    icon: BiLogoLinkedin,
    href: "https://www.linkedin.com/in/mahmoud-al-bndkji-619a14241",
    color: "#0077b5",
  },
  {
    icon: BiLogoStackOverflow,
    href: "https://stackoverflow.com/users/19486739/mahmoud-al-bndkji",
    color: "#ef8236",
  },
  {
    icon: BiLogoGithub,
    href: "https://github.com/MahmoudALBndkji",
    color: "#333",
  },
  {
    icon: BiLogoBehance,
    href: "https://www.behance.net/mahmoudal-bndk1",
    color: "#053eff",
  },
  {
    icon: BiLogoFacebook,
    href: "https://www.facebook.com/MahmoudALBndkji",
    color: "#1877f2",
  },
  {
    icon: BiLogoGoogle,
    href: "mailto:mahmoudalbndkji@gmail.com",
    color: "#ea4335",
  },
];
