import React from "react";
import {
  Instagram,
  Github,
  Linkedin,
  TwitterIcon,
  CopyrightIcon,
} from "lucide-react";
const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      link: "",
      icon: <Github size={24} />,
    },
    {
      name: "LinkedIn",
      link: "",
      icon: <Linkedin size={24} />,
    },
    {
      name: "Instagram",
      link: "",
      icon: <Instagram size={24} />,
    },
    {
      name: "Twitter",
      link: "",
      icon: <TwitterIcon size={24} />,
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
        <CopyrightIcon size={14} /> 2024 Freshman Interviews
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
    >
      {children}
    </a>
  );
};
