import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Evans Abraham",
  initials: "J",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://maps.app.goo.gl/yDth4zFE8LgPte9NA",
  description:
    "I'm a passionate Computer Science student who loves building real-world projects that solve practical problems.",
  summary:
    "I’m a cs graduate who is obsessed with PC but works in MacBook. I love to build realtime solution and also spends my time leisure time watching Japanese anime or American cartoons",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "React Native",
    "Next.js",
    "Javascript",
    "Typescript",
    "Node.js",
    "RESTful API",
    "Tailwind CSS",
    "Python",
    "Django",
    "Flask",
    "MySQL",
    "MongoDB",
    "Linux",
    "Postman",
    "Docker",
    "AWS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "evansabrahamj@gmail.com",
    tel: "+919344323215",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/EvansAbraham",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/evansabraham/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/EvansAbraham_J",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:evansabrahamj@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Xrosstalk",
      href: "https://www.xrosstalk.com/",
      badges: [],
      location: "Remote",
      title: "React Native Intern",
      logoUrl: "/xrosstalk.png",
      start: "June 2022",
      end: "July 2022",
      description:
        "Built and integrated user interfaces for the Xrosstalk application according to design specifications provided by the design team, using React Native.\n Participated in testing and debugging efforts, and contributed to code reviews within an agile development environment.",
    }
  ],
  education: [
    {
      school: "SSM Institute of Engineering and Technology",
      href: "https://ssmiet.ac.in/",
      degree: "B.E Computer Science and Engineering",
      logoUrl: "/ssm.jpeg",
      start: "2020",
      end: "2024",
    }
  ],
  projects: [
    {
      title: "Syncsphere",
      href: "https://chatcollect.com",
      dates: "Sep 2024 - Sep 2024",
      active: true,
      description:
        "SyncSphere integrates collaborative workflows with the Gemini API for seamless synchronization of tasks and data. Streamline project management, enhance team coordination, and unify diverse data sources in one dynamic platform.",
      technologies: [
        "Next.js",
        "Typescript",
        "Firebase",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://syncsphereai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/EvansAbraham/SyncSphere",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.postimg.cc/63RmVfVj/Screen-Shot-Tool-20241017142810.png",
      video:
        "",
    },
    {
      title: "Vercel Clone API",
      href: "https://github.com/EvansAbraham/Vercel-Clone",
      dates: "July 2024 - October 2024",
      active: true,
      description:
        "Vercel clone API designed to streamline the deployment process for web applications. Built with Node.js and JavaScript, it integrates various AWS services, including S3 for storage, ECR for container image management, and ECS for orchestration.",
      technologies: [
        "Node.js",
        "Javascript",
        "AWS",
        "ECS",
        "ECR",
        "S3",
        "Bash",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/EvansAbraham/Vercel-Clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.postimg.cc/fW8x20HB/Screen-Shot-Tool-20241017143701.png",
      video: "",
    },
    {
      title: "Blog API",
      href: "hhttps://github.com/EvansAbraham/REST-API",
      dates: "July 2024 - July 2024",
      active: true,
      description:
        "Blog API A user-friendly REST API for managing blog posts built using Django RestFramework.",
      technologies: [
        "Python",
        "Django RestFramework",
        "JWT",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/EvansAbraham/REST-API",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.postimg.cc/WzxtRjqb/Screen-Shot-Tool-20241017144147.png",
      video: "",
    },
    {
      title: "News Website",
      href: "https://github.com/EvansAbraham/newsapp-angular",
      dates: "February 2023 - February 2023",
      active: true,
      description:
        "Created a responsive news website using AngularJS and Bootstrap, integrated with NEWSAPI for real-time news updates. Designed a user-friendly interface for easy navigation across categories, enhancing accessibility to the latest headlines.",
      technologies: [
        "Angular.js",
        "Bootstrap",
        "NEWSAPI"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/EvansAbraham/newsapp-angular",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.postimg.cc/QNSdcQ6x/Screen-Shot-Tool-20241017150415.png",
      video:
        "",
    },
  ],
  workshop: [
    {
      title: "Peer-to-Peer Learning Program",
      dates: "November 18, 2023 & November 20 2023",
      location: "SSMIET, Dindigul",
      description:
        "In the workshop, I taught juniors how to write effective prompts for AI models like ChatGPT, DALL-E, and Stable Diffusion. They learned to utilize these tools in their college work and enhance creativity by generating stories in their favorite genres. On day two, participants transformed their stories into comic books, maintaining character consistency in each frame and building their own AI-powered comics.",
      image:
        "/ssm.jpeg",
      links: [
        {
          title: "LinkedIn",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/evansabraham_aieducation-promptengineering-workshopsuccess-activity-7132357120645091329-5kKD?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
  ],
} as const;
