const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    title:
      "How to use LangChain to integrate LLM's into your applications",
    image: "/images/langchain.png",
    link: "https://docs.langchain.com/build-overview",
  },
  {
    id: 2,
    title: "Teaching free AI models to create free agents",
    image: "/images/unsloth.svg",
    link: "https://unsloth.ai/docs",
  },
  {
    id: 3,
    title: "Creating a free AI agent with Hermes",
    image: "/images/hermes.png",
    link: "https://hermes-agent.nousresearch.com/docs",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS","GSAP", "React Three Fiber"],
  },
  {
    category: "Backend",
    items: ["Express", "Node.js", "Rest API"],
  },
  {
    category: "Database",
    items: ["MongoDB","PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#24292E",
    link: "https://github.com/StolasRyan",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "www.linkedin.com/in/stolas-ryan",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/blog1.png",
  },
  {
    id: 2,
    img: "/images/blog2.png",
  },
  {
    id: 3,
    img: "/images/blog3.png",
  },
  {
    id: 5,
    img: "/images/hermes.png",
  },
  {
    id: 6,
    img: "/images/langchain.png",
  },
  {
    id: 7,
    img: "/images/unsloth.svg",
  },
  {
    id: 8,
    img: "/images/figma.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "GTA VI website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "GTA VI website.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "GTA VI analog website is a cutting-edge online store that replicates the iconic look and feel of the popular game Grand Theft Auto V.",
            "It features a sleek and modern design, with a focus on clean aesthetics and a modern look.",
            "The website is built with React.js and Tailwind, ensuring fast performance, and a clean, premium look.",
            "Used GSAP for smooth animations and scroll effects.",
          ],
        },
        {
          id: 2,
          name: "gta-vi.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://gta-vi-puce.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "gta6.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project1.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "AI Room Visualizer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "AI Room Visualizer Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "AI Resume Analyzer is a smart tool that helps make 3D visualization of your draft flat or room render plan.",
            "It's working with a help of Puter cloud service to have free connection to the best AI models.",
            "It's work with React-Router V7 to make a nice navigation.",
            "You can not register at the cloud service it will give you a free demo account.",
            "For test, I provided draft plan of flat called (room-example.jpeg). Just download it on your device, follow the link and paste it in th app."
          ],
        },
        {
          id: 2,
          name: "ai-roomai-visualizer.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://puter.com/app/roomai",
          position: "top-20 left-20",
        },
        {
          id: 3,
          name: "room-example.jpeg",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-80 left-40",
          imageUrl: "/images/room.jpeg",
        },
        {
          id: 4,
          name: "ai-roomai-visualizer.com",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/roomai.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Car Rental App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-90",
      windowPosition: "top-[45vh] left-7",
      children: [
        {
          id: 1,
          name: "Car Rental App Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "AI powered Car Rental App with 3D scenes and animations.",
            "You can search for cars by brand, model, and location.",
            "This demo app is built with React, and React Three Fiber, so it runs fast, looks professional, and works seamlessly desktop and tablet devices.",
            "Used GSAP for smooth animations and scroll effects. AI assistant integrated for explain the needed car details.",
          ],
        },
        {
          id: 2,
          name: "rentify.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://rentify-stolasryan.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "rentify.app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/rentify.png",
        },
      ],
    },
    // ▶ Project 4
    {
      id: 8,
      name: "Quick Dine App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-18 left-50",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Table Reservation App.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "My Table Reservation App is a fast and convenient way to order tables in your favorite restaurants.",
            "Instead of making calls or waiting in line, you can browse places, customize time, or manage your's reservations.",
            "It's work instantly as for user that want to make a reservation also as for restraunt owner.",
            "It’s built with React and Express, so it works smoothly on any device.",
            "To test it for any kind of user, use this logins and passwords:",
            "For admin: admin@example.com ",
            "Password: admin123",
            "For user: user@example.com",
            "Password: user123",
            "For owner: owner@example.com",
            "Password: owner123",
          ],
        },
        {
          id: 2,
          name: "quick-dine.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://quick-dine-jet.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "quick-dine.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/quickdine.png",
        },
      ],
    },
    // ▶ Project 5
    {
      id: 9,
      name: "Chat Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-55 left-70",
      windowPosition: "top-[55vh] left-10",
      children: [
        {
          id: 1,
          name: "iMessage App Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Simple chat application for builded with React and Express.",
            "Here used Socket.io for real-time communication and imagekit.io for image and video uploading.",
            "Realized PWA and basic JWT authentication with Clerk and adding new users in database via webhook.",
            "For testing better to Sign-up via Google, GitHub or Apple and find your companion in global Users search.",
          ],
        },
        {
          id: 2,
          name: "imessage.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://imessage-bayc.onrender.com",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "imessage.app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/imessage.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/pavel.png",
    },
    {
      id: 3,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      //image: "/images/",
      description: [
        "Hey! I’m Pavel 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js. And I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed.",
        "If you have any questions or just want to chat, don't hesitate to reach out! I'm always open to new opportunities and collaborations.",
        "Let's build something awesome together! 🚀",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/cat.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };