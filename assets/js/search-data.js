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
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-presentations",
          title: "presentations",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/presentations/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "You access the full cv in pdf by clicking the icon on the right",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "news-i-defended-my-general-examination-i-m-a-phd-candidate-now",
          title: 'I defended my General Examination. I’m a PhD Candidate now!',
          description: "",
          section: "News",},{id: "news-presented-my-work-on-the-acoustics-of-performed-sexual-orientation-in-thai-at-nwav-ap-8-in-singapore-it-was-a-lot-of-fun",
          title: 'Presented my work on the acoustics of performed sexual orientation in Thai at...',
          description: "",
          section: "News",},{id: "news-1-paper-accepted-to-emnlp-2025-main-see-you-in-suzhou",
          title: '1 paper accepted to EMNLP 2025 (main). See you in Suzhou!',
          description: "",
          section: "News",},{id: "news-i-will-be-visiting-the-altae-lab-at-université-paris-cité-from-november-to-december-2025-feel-free-to-reach-out",
          title: 'I will be visiting the ALTAE lab at Université Paris Cité from November...',
          description: "",
          section: "News",},{id: "news-our-paper-on-sub-token-level-disparity-in-multilingual-speech-recognition-models-was-awarded-an-sac-highlight-at-emnlp-2025",
          title: '🧨 Our paper on sub-token level disparity in multilingual speech recognition models was...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%69%61%6E%67%73%79 %61%74 %75%77.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/siyuliang", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/siyu-liang-98599312a", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=1Yig2jQAAAAJ", "_blank");
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
