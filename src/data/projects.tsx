import React from 'react';
import { Code2, Layout, MessageSquare, Smartphone } from 'lucide-react';

export const projects = [
  {
    title: "Wework Roadmap",
    description: "Automation solution using BIM 360 API to efficiently manage project files, members, and account activities for streamlined project administration.",
    icon: <Code2 className="text-[#0a192f]" size={24} />,
    technologies: ["BIM460 API", "Automation Scripts", "Python", "REST APIs"]
  }, 
  {
    title: "CCT- IFC Viewer & Editor",
    description: "Developed automated conversion of IFC 3D models into optimized asset files for efficient rendering in a web-based IFC viewer.",
    icon: <Layout className="text-[#0a192f]" size={24} />,
    technologies: ["IFC", "JavaScript", "Web-Based IFC Viewer & Editor", "Python", ".NET", "C#", "Automation Scripting"]
  },
  {
    title: "Hexmail",
    description: "Discord bot which can connect with user's Gmail account for receiving and sending mails to/from discord with filtering.",
    icon: <MessageSquare className="text-[#0a192f]" size={24} />,
    link: "https://github.com/HarshitRaja1999/Hexmail",
    technologies: ["Node.js", "Javascript", "Python"]
  },
  {
    title: "Forge Viewer",
    description: "Developed a Forge Viewer application leveraging Autodesk APIs for efficient 3D model visualization and interaction.",
    icon: <Layout className="text-[#0a192f]" size={24} />,
    technologies: ["Autodesk Forge APIs", "Javascript", "NodeJS", "REST APIs", "HTML/CSS"]
  },
  {
    title: "Shopping App",
    description: "Android Application built for convinient online shopping as a learning assignment.",
    icon: <Smartphone className="text-[#0a192f]" size={24} />,
    technologies: ["Flutter", "Dart", "Android Studio"]
  },
  {
    title: "Clip Craft",
    description: "Developed a user-friendly GUI tool for batch video processing, enabling resolution reduction, bitrate adjustment, and video compression for videos.",
    icon: <Code2 className="text-[#0a192f]" size={24} />,
    link: "https://github.com/HarshitRaja1999/ClipCraft",
    technologies: ["Python", "FFMPEG"]
  },
  {
    title: "MY CRM",
    description: "Maintained CRM software with features like contact management, lead tracking, sales pipeline visualization, and analytics to enhance customer relationships and drive business growth.",
    icon: <Layout className="text-[#0a192f]" size={24} />,
    technologies: ["React", "C#", ".Net", "Angular"]
  },
  {
    title: "HRMS",
    description: "Maintained HRMS software with features like employee management, payroll processing, attendance tracking, and performance evaluation to streamline HR operations and improve efficiency.",
    icon: <Layout className="text-[#0a192f]" size={24} />,
    technologies: ["React", "C#", ".Net", "Angular"]
  },
  {
    title: "Image Analyzer",
    description: "Created an image analyzer application that compares two images, highlights differences, and helps architects by matching floor plans efficiently.",
    icon: <Code2 className="text-[#0a192f]" size={24} />,
    technologies: ["C#", ".Net", "WPF"]
  },
  {
    title: "Bim Manager",
    description: "Created a C# and .NET application to manage BIM Manager accounts, enabling efficient CRUD operations and improving data organization.",
    icon: <Code2 className="text-[#0a192f]" size={24} />,
    technologies: ["C#", ".Net", "Console App"]
  },
  {
    title: "Reels Downloader",
    description: "Developed an Android application, Reels Downloader, that allows users to download Instagram reels without watermarks or audio loss.",
    icon: <Smartphone className="text-[#0a192f]" size={24} />,
    technologies: ["Dart", "Flutter", "Android Studio"]
  }
];