import React from "react";
import {
  Instagram,
  Github,
  Linkedin,
  TwitterIcon,
  CopyrightIcon,
  Youtube,
} from "lucide-react";
const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      link: "https://github.com/pixonoids",
      icon: <Github size={24} />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/pixonoids/mycompany/",
      icon: <Linkedin size={24} />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/pixonoids/",
      icon: <Instagram size={24} />,
    },
    {
      name: "Twitter",
      link: "https://x.com/Pixonoids",
      icon: <TwitterIcon size={24} />,
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/@pixonoids",
      icon: <Youtube size={24} />,
    },
  ];
  return (
    <div className=" py-4 text-center">
      <div className="flex justify-center space-x-4">
        {socialLinks.map((link) => (
          <SocialLink key={link.name} href={link.link}>
            {link.icon}
          </SocialLink>
        ))}
      </div>
      <p className="mt-2 flex items-center justify-center gap-2">
        <CopyrightIcon size={14} /> 2024 Pixonoids
      </p>
    </div>
  );
};

export default Footer;

const SocialLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="  rounded-full hover:bg-color-1 p-2 transition-all"
      target="_blank"
    >
      {children}
    </a>
  );
};
