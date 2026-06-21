// Edit everything here to personalize your portfolio.

// ── Contact form: paste your Formspree endpoint here ──────────────
// 1. Go to https://formspree.io and create a free form.
// 2. Copy the endpoint (looks like https://formspree.io/f/abcdwxyz).
// 3. Paste it below. Until then the form runs in "demo" mode.
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjgqbjve' // e.g. 'https://formspree.io/f/xxxxxxx'

export const PROFILE = {
  name: 'Keshav Dahal',
  firstName: 'Keshav',
  role: 'Flutter Developer',
  // Rotating titles for the animated typing effect in the hero
  roles: [
    'Flutter Developer',
    'Mobile App Engineer',
    'Cross-Platform Developer',
    'Dart Enthusiast',
  ],
  tagline:
    'I build beautiful, high-performance cross-platform apps with Flutter & Dart. Currently crafting YatraX — an eco-based trails app for exploring Nepal.',
  location: 'Lalitpur-Nepal',
  availability: 'Flutter Developer @ Neutrotex',
  email: 'keshabdahal008@gmail.com',
  phone: '',
  github: 'https://github.com/Ksub2',
  linkedin: 'https://www.linkedin.com/in/keshab-dahal2/',
  twitter: 'https://x.com/Keshab_Dahal2',
  facebook: 'https://www.facebook.com/keshab.yo/',
  instagram: 'https://www.instagram.com/keshab_yo/',
  resume: '/keshab_resume.pdf', // add your resume to the public folder and update the path
  about:
    "I'm a Flutter developer at Neutrotex, where I'm currently building YatraX — an eco-based trails app that helps people discover and explore Nepal's natural routes. I love turning ideas into polished, production-ready apps that ship on iOS and Android from a single codebase. From clean architecture and smooth animations to scalable state management, I care about the details that make apps feel effortless.",
  stats: [
    { value: 15, suffix: '+', label: 'Apps Built' },
    { value: 1, suffix: '+', label: 'Years with Flutter' },
    { value: 20, suffix: '+', label: 'Packages Used' },
    { value: 100, suffix: '%', label: 'Cross-Platform' },
  ],
}

// Categorized tech stack
export const STACK = [
  {
    group: 'Languages',
    items: ['Dart', 'Kotlin', 'Swift', 'JavaScript','Python','React', 'Node.js'],
  },
  {
    group: 'Mobile',
    items: ['Flutter', 'Riverpod', 'Bloc', 'GetX', 'Provider', 'Material 3', 'Cupertino', 'Animations', 'GoRouter'],
  },
  {
    group: 'Backend & Data',
    items: ['Firebase', 'REST APIs', 'SQLite', 'Hive', 'Supabase', 'MongoDB'],
  },
  {
    group: 'Tooling',
    items: ['Git', 'CI/CD', 'Codemagic', 'Figma', 'Postman', 'VS Code', 'Android Studio', 'Xcode'],
  },
]

export const SKILL_STRIP = [
  'Flutter', 'Dart', 'Riverpod', 'Bloc', 'GetX', 'Provider', 'Firebase',
  'REST API', 'SQLite', 'Hive', 'Google Maps', 'CI/CD', 'Codemagic', 'Figma',
  'Material 3', 'Cupertino', 'Animations', 'GoRouter', 'Supabase', 'Clean Architecture',
]

// Services / what I do
export const SERVICES = [
  {
    icon: 'mobile',
    title: 'Cross-Platform Apps',
    desc: 'Beautiful Flutter apps that feel native on both iOS and Android — built from a single, maintainable codebase.',
  },
  {
    icon: 'layout',
    title: 'Pixel-Perfect UI',
    desc: 'Smooth animations, custom widgets, and faithful Figma-to-Flutter implementations.',
  },
  {
    icon: 'server',
    title: 'APIs & Backend',
    desc: 'Firebase, REST integration, offline-first storage, and reliable data syncing across devices.',
  },
  {
    icon: 'cpu',
    title: 'Architecture & CI/CD',
    desc: 'Scalable state management, clean architecture, and automated builds & releases with Codemagic.',
  },
]

export const PROJECTS = [
  {
    title: 'YatraX',
    subtitle: 'Eco-based trails app for Nepal',
    desc: 'My current project at Neutrotex — an eco-tourism app that helps travelers discover, navigate, and explore Nepal\'s natural trails with maps, route details, and sustainable-travel insights.',
    tags: ['Flutter', 'Dart', 'Google Maps', 'Firebase'],
    accent: 'from-teal-600 to-emerald-600',
    icon: '🏔️',
    logo: '/yatrax.png', // small brand badge shown on the cover
    cover: '/yatrax-cover.jpg', // banner photo for the card
    featured: true,
    link: '#',
    repo: '',
  },
  {
    title: 'NEA-MD Meeting Schedule',
    subtitle: 'Meeting scheduling web app',
    desc: 'A full-stack web app for organizing and managing meeting schedules, with a React frontend and a Node.js + MongoDB backend.',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    accent: 'from-indigo-500 to-violet-500',
    icon: '📅',
    cover: '/nea.jpg', 
    logo: '/nealogo.jpg',  // add your image then uncomment
    repo: 'https://github.com/Ksub2/meeting-Schedule-project',
  },
  {
    title: 'Blood Bank',
    subtitle: 'Blood bank management',
    desc: 'A web app for managing blood bank inventory and donor information, built with a clean, responsive React interface.',
    tags: ['React', 'Tailwind CSS'],
    accent: 'from-rose-500 to-red-500',
    icon: '🩸',
    cover: '/blood.jpeg',
    logo: '/bloodlogo.jpeg',  // add your image then uncomment
    repo: 'https://github.com/Ksub2/blood_bank',
  },
  {
    title: 'Weather Forecast',
    subtitle: 'Live weather app',
    desc: 'A weather forecast app that fetches and displays real-time conditions, built with vanilla HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accent: 'from-sky-500 to-cyan-500',
    icon: '🌤️',
   cover: '/weather.jpeg',
   logo: '/weatherlogo.jpeg',  // add your image then uncomment
    repo: 'https://github.com/Ksub2/weather-app-using-js',
  },
  {
    title: 'Chat Bot',
    subtitle: 'Conversational assistant',
    desc: 'A chatbot application with a web interface, powered by Python on the backend and HTML/CSS for the frontend.',
    tags: ['Python', 'HTML', 'CSS'],
    accent: 'from-emerald-500 to-teal-500',
    icon: '🤖',
    cover: '/chatbot.webp',
    logo: '/chatbotlogo.webp',  // add your image then uncomment
    repo: 'https://github.com/Ksub2/chat_bot',
  },
  {
    title: 'Speech to Text Converter',
    subtitle: 'Audio transcription tool',
    desc: 'A Python tool that converts spoken audio into written text using speech-recognition libraries.',
    tags: ['Python'],
    accent: 'from-orange-500 to-amber-500',
    icon: '🎙️',
    cover: '/speech.png',
    logo: '/speechlogo.jpeg',  // add your image then uncomment
    repo: 'https://github.com/Ksub2/Speech_to_text',
  },
  {
    title: 'Semantic Search',
    subtitle: 'Meaning-based search engine',
    desc: 'A Python project that performs semantic search — retrieving results by meaning and context rather than exact keywords.',
    tags: ['Python'],
    accent: 'from-fuchsia-500 to-purple-500',
    icon: '🔍',
    cover: '/sementic.jpg',
    logo: '/sementiclogo.avif',  // add your image then uncomment
    repo: 'https://github.com/Ksub2/sementic_search',
  },
  {
    title: 'Phalcha — Hospitality Exchange',
    subtitle: 'Hospitality exchange system',
    desc: '"Phalcha" — a full-stack hospitality exchange platform connecting hosts and travelers, built with React, Node.js, and MongoDB.',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    accent: 'from-cyan-500 to-blue-500',
    icon: '🏨',
    featured: true,
    cover: '/hospitality.avif', 
    logo: '/hospitalitylogo.jpeg',
    repo: 'https://github.com/Ksub2/Hospitality-exchange-system',
  },
]

export const EXPERIENCE = [
  {
    role: 'Flutter Developer',
    company: 'Neutrotex',
    period: 'Present',
    points: [
      'Building YatraX — an eco-based trails app for exploring Nepal, from UI to integration.',
      'Developing cross-platform features with Flutter for both iOS and Android.',
      'Implementing maps, location services, and clean, scalable app architecture.',
    ],
  },
  {
    role: 'Front-end Developer',
    company: 'Nepal Electricity Authority',
    period: '2024 - 2025',
    points: [
      'Developed responsive web application for MD using React and Redux.',
      'Collaborated with design team to implement pixel-perfect UI components.',
      'Optimized application performance and improved user experience.',
    ],
  },
  {
    role: 'Flutter Developer',
    company: 'Freelance / Personal Projects',
    period: '2021-2022',
    points: [
      'Built and shipped multiple Flutter apps across utility, finance, and lifestyle categories.',
      'Focused on pixel-perfect UI, state management, and Firebase integrations.',
      'Optimized application performance and improved user experience.',
    ],
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'Keshav consistently ships clean, well-architected Flutter code and has a great eye for UI detail. A reliable teammate.',
    name: 'Team Lead',
    title: 'Neutrotex',
    avatar: 'NTX',
  },
  {
    quote:
      'Fast, communicative, and thoughtful about user experience. Our app feels noticeably more polished.',
    name: 'Product Manager',
    title: 'Neutrotex',
    avatar: 'NTX',
  },
  {
    quote:
      'Delivered exactly what we needed on time and was great to collaborate with throughout the project.',
    name: 'Binayak Karki',
    title: 'Kachuwa Technologies',
    avatar: 'KT',
  },
  {
    quote:
      'Delivered excellent work on time and was great to collaborate with throughout the project.',
    name: 'Managing Director',
    title: 'Nepal Electricity Authority',
    avatar: 'NEA',
  },
  {
    quote:
  'Demonstrated exceptional problem-solving skills and attention to detail. A reliable partner for any technical project.',
    name: 'Project Lead',
    title: 'Fuse-Innovations',
    avatar: 'FI',
  },
  {
    quote:
      'Professional approach, clear communication, and delivered beyond expectations. Highly recommend for future collaborations.',
        name: 'CTO',
        title: 'Kachuwa Technologies',
        avatar: 'KT',
  }
]
