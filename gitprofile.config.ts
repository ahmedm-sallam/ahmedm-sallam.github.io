// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ahmedm-sallam', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/Sallam-Portfolio/', // Update this to match your deployment URL, e.g., '/<REPO_NAME>/'
  projects: {
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Al-Maqraa',
          description:
            'Al-Maqraa aims to bridge the gap by providing a technologically advanced solution that utilizes speech recognition and analysis to objectively evaluate Quranic recitations.',
          imageUrl: '/Sallam-Portfolio/Al-Maqraa.png', // Prepend the base URL
          link: 'https://al-maqraa.onrender.com/home',
        },
      ],
    },
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
  },
  seo: {
    title: 'Portfolio of Ahmed Mohamed Sallam ',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'ahmedm-sallam',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'ahmedm.sallamibrahim',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '+201093854620',
    email: 'AhmedM.SallamIbrahim@Gmail.com',
  },
  resume: {
    fileUrl: '/Sallam-Portfolio/Ahmed_Sallam.pdf', // Replace <your-deployed-domain> with your actual domain
  },
  skills: [
    'C++',
    'Python',
    'Java',
    'JavaScript',
    'HTML',
    'CSS',
    'Spring Boot',
    'FastAPI',
    'Flask',
    'MS SQL',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'PyTorch',
    'TensorFlow',
    'NumPy',
    'Pandas',
    'Matplotlib',
    'Seaborn',
    'Scikit-learn',
    'OpenCV',
    'Nltk',
    'spaCy',
    'Azure',
    'Hugging Face',
    'Docker',
    'Git',
    'GitHub',
    'CI/CD',
    'Agile',
  ],
  experiences: [
    {
      company: 'Worex Techology',
      position: 'System engineer',
      from: 'September 2024',
      to: 'Present',
      companyLink: 'https://www.worex.com/',
    },
  ],
  educations: [
    {
      institution: 'Cairo University - Faculty of Computers and Artificial Intelligence',
      degree: 'Bachelor of Computer Science',
      from: 'September 2021',
      to: 'May 2024',
    },
  ],
  blog: {
    source: 'medium', // medium | dev
    username: 'ahmedm.sallamibrahim', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    disableSwitch: false,

    respectPrefersColorScheme: false,

    displayAvatarRing: true,

    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  enablePWA: false,
};

export default CONFIG;
