// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects-and-publications",
          title: "projects and publications",
          description: "A growing collection of some things I have worked on in industry, academia, or as a hobby.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-resume",
          title: "resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-soft-robots-in-extreme-environments",
          title: 'Soft Robots in Extreme Environments',
          description: "First author publication on the performance and appliations of soft robots under harsh conditions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/deas_extreme_environments/";
            },},{id: "projects-electroadhesion-pads",
          title: 'Electroadhesion Pads',
          description: "Designing and testing the effectiveness of various materials for electroadhesion",
          section: "Projects",handler: () => {
              window.location.href = "/projects/electroadhesion_pads/";
            },},{id: "projects-quadcopter-drone",
          title: 'Quadcopter Drone',
          description: "Designing and prototyping a custom quadcopter",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fan_blade_cfd/";
            },},{id: "projects-game-controller-design",
          title: 'Game Controller Design',
          description: "Designing a custom game controller using CAD",
          section: "Projects",handler: () => {
              window.location.href = "/projects/game_controller/";
            },},{id: "projects-soft-end-effector-gripper-system",
          title: 'Soft End Effector Gripper System',
          description: "Using dielectric elastomer actuators as a soft gripper",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gripper_system/";
            },},{id: "projects-rpi-heatsink-thermal-analysis",
          title: 'RPi Heatsink Thermal Analysis',
          description: "Designing a heatsink for a Rasperry Pi and validating its performance via thermal FEA and CFD",
          section: "Projects",handler: () => {
              window.location.href = "/projects/heatsink_fea/";
            },},{id: "projects-high-altitude-balloon-payload",
          title: 'High Altitude Balloon Payload',
          description: "Designing and constructing a 3U payload for the stratosphere",
          section: "Projects",handler: () => {
              window.location.href = "/projects/high_altitude_balloon/";
            },},{id: "projects-ratchet-wrench-analysis",
          title: 'Ratchet Wrench Analysis',
          description: "Conducting FEA structural simulation on a ratchet wrench using Ansys",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ratchet_fea/";
            },},{id: "projects-robotic-arm",
          title: 'Robotic Arm',
          description: "Designing a 6 DOF robotic arm and its assembly",
          section: "Projects",handler: () => {
              window.location.href = "/projects/robot_arm/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%69%72%74%68.%74%68%61%6B%61%72%31%37%34@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/tirththakar", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/tirth-thakar", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
