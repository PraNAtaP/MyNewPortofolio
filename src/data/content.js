export const portfolioData = {
  personal: {
    name: "Pranata Putrandana",
    role: "Full Stack Developer | Mobile Developer",
    campus: "Politeknik Negeri Malang",
    currentJob: "Front-End Dev @ Pro Bros Providore",
    level: 50,
    class: "Full Stack Dev | Mobile Dev",
    stats: {
      hp: 100,
      mp: 50,
    },
  },
  about: {
    title: "THE DETECTIVE",
    narrative: [
      "For me, software development is not just writing code — it is an investigation. Like solving a mystery case, I thrive on the challenge of tracing root causes, assembling complex logic, and discovering the most efficient solution.",
      "I am a fast learner with an insatiable hunger for new technology. My current focus is diving deep into the Go (Golang) ecosystem and Google Cloud Platform to expand my capabilities in building scalable and reliable systems.",
    ],
  },
  goals: {
    title: "MISSION OBJECTIVE",
    description:
      "My ambition is to step onto the global stage, with a dedicated focus on contributing to Australia's IT industry. I am committed to delivering international-standard code quality — clean, well-structured, and performant.",
  },
  experience: [
    {
      id: 1,
      company: "Pro Bros Providore",
      role: "Front-End Developer",
      duration: "Current",
      type: "MAIN QUEST",
      image: "/probros.png",
      description:
        "Leading client-side feature development for the Pro Bros Delivery App.",
      tech: "React Native, Client-Side Logic, Laravel, React",
      details: [
        "Building the Pro Bros Delivery App using React Native.",
        "Managing the CRM for streamlined business operations.",
        "Ensuring stable and responsive app performance on the client side.",
      ],
    },
    {
      id: 2,
      company: "JuaraGCP",
      role: "Participant",
      duration: "Current",
      type: "SIDE QUEST",
      image: "/juaragcp.png",
      description:
        "Completed multiple Google Cloud skill badges, gaining hands-on experience with cloud infrastructure and services.",
      tech: "Google Cloud Platform",
      details: [
        "Earned skill badges in core GCP services and architecture.",
        "Explored cloud computing fundamentals including Compute Engine, Cloud Storage, and IAM.",
        "Applied best practices for building and deploying cloud-native applications.",
      ],
    },
    {
      id: 3,
      company: "Politeknik Negeri Malang",
      role: "Information Technology Student",
      duration: "In Progress",
      type: "TRAINING ARC",
      image: "/polinema.png",
      description:
        "Pursuing a degree in Information Technology with a focus on practical, industry-ready software development.",
      tech: "Java, PHP, Laravel, Flutter, React",
      details: [
        "Building a solid foundation in algorithms, data structures, and OOP.",
        "Developing full-stack web and mobile applications as academic projects.",
        "Gaining exposure to database design, networking, and software engineering principles.",
      ],
    },
  ],
  skills: {
    core: [
      { name: "React Native", exp: 90 },
      { name: "Flutter", exp: 80 },
      { name: "Laravel", exp: 60 },
      { name: "Go (Golang)", exp: 40 },
    ],
    web: [
      { name: "CSS / Modern UI", exp: 90 },
      { name: "Tailwind CSS", exp: 80 },
      { name: "PHP", exp: 85 },
      { name: "Java GUI", exp: 70 },
    ],
    tools: [
      { name: "VS Code", exp: 100 },
      { name: "Git", exp: 90 },
      { name: "Google Cloud", exp: 50 },
    ],
  },
  products: [
    {
      id: 1,
      name: "Pro Bros Delivery App",
      platform: "MOBILE",
      image: "/deliveryapp.png",
      description:
        "A delivery management app built for Pro Bros Providore, handling driver workflows, QR attendance, and real-time order tracking.",
      tech: ["React Native", "REST API", "QR Code"],
      link: "",
    },
    {
      id: 2,
      name: "Pro Bros CRM",
      platform: "WEB",
      image: "/crmweb.png",
      description:
        "A full-featured CRM dashboard for managing sales pipelines, contacts, deals, commissions, and activity logs.",
      tech: ["React", "Vite", "Laravel", "Tailwind CSS"],
      link: "",
    },
    {
      id: 3,
      name: "Restaurant App",
      platform: "MOBILE",
      image: "/restaurantapp.png",
      description:
        "A restaurant discovery app with search, reviews, favorites, and dark mode — built with clean architecture and Provider state management.",
      tech: ["Flutter", "Dart", "Provider", "REST API"],
      link: "",
    },
    {
      id: 4,
      name: "Retro Portfolio",
      platform: "WEB",
      image: "/retroweb.png",
      description:
        "This very site! A retro game-themed portfolio with GameBoy and Arcade visual modes, pixel-art UI, and 8-bit sound effects.",
      tech: ["React", "Vite", "CSS Pixel Art"],
      link: "",
    },
    {
      id: 5,
      name: "InLET Website Project",
      platform: "WEB",
      image: "/inletweb.png",
      description:
        "A website for InLET, a Lab in Politeknik Negeri Malang that provides services in the field of information technology and learning.",
      tech: ["HTML", "CSS", "PHP", "Java Script"],
      link: "",
    },
  ],
  contact: {
    email: "pranatapu08@gmail.com",
    social: {
      github: "https://github.com/PraNAtaP",
      linkedin: "https://www.linkedin.com/in/pranatap/",
      instagram: "https://www.instagram.com/naprana_/",
    },
  },
};
