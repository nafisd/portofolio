const PROJECTS = {
  cafe: {
    category: 'Front End · Landing Page',
    title: 'Cafe Website',
    year: '2025',
    type: 'Landing Page',
    role: 'Full Developer',
    status: 'Completed',
    aboutTitle: 'A warm, immersive cafe experience online',
    aboutBody: [
      "The <strong>Cafe Website</strong> was built to give a local cafe a compelling digital presence. The goal was to mirror the warmth and atmosphere of the physical space through carefully chosen typography, warm color palettes, and fluid micro-interactions.",
      "Every section was crafted with storytelling in mind — from the hero with a parallax background to the menu cards with hover reveals. The site is fully responsive and scores high on Lighthouse performance metrics."
    ],
    stats: [
      { num: '98', label: 'Lighthouse Score' },
      { num: '100%', label: 'Mobile Ready' },
      { num: '2wk', label: 'Build Time' }
    ],
    stack: [
      { icon: '🌐', name: 'HTML5', role: 'Structure' },
      { icon: '🎨', name: 'CSS3', role: 'Styling & Animations' },
      { icon: '⚡', name: 'JavaScript', role: 'Interactivity' },
      { icon: '🔡', name: 'Google Fonts', role: 'Typography' }
    ],
    features: [
      { title: 'Parallax Hero', desc: 'Full-viewport hero with layered parallax scrolling for depth and immersion.' },
      { title: 'Animated Menu', desc: 'Menu cards with hover-reveal overlays showing descriptions and prices.' },
      { title: 'Mobile-first Layout', desc: 'Fluid grid that adapts seamlessly across all screen sizes.' },
      { title: 'Smooth Scroll Nav', desc: 'Sticky nav with smooth-scroll anchors and active section highlighting.' },
      { title: 'Photo Gallery', desc: 'Custom lightbox overlay for showcasing cafe ambiance photos.' },
      { title: 'Contact & Reservation', desc: 'Form with client-side validation and animated success state.' }
    ],
    demo: { url: 'cafe-demo.com', hasDemo: false, liveLink: '#', githubLink: '#' },
    screenshots: ['Main View', 'Menu Section', 'Gallery'],
    next: 'pos'
  },

  pos: {
    category: 'Web App · Business Tool',
    title: 'POS System',
    year: '2025',
    type: 'Web Application',
    role: 'Front End Dev',
    status: 'Completed',
    aboutTitle: 'Streamlined point-of-sale for modern retail',
    aboutBody: [
      "The <strong>POS System</strong> is a browser-based cashier application for small to mid-size retail businesses. It integrates with a USB barcode scanner and provides real-time inventory management directly in the browser.",
      "The interface was designed for speed — cashiers can process transactions in seconds with keyboard shortcuts, instant product search, and a minimal layout that reduces errors under pressure."
    ],
    stats: [
      { num: '<1s', label: 'Checkout Speed' },
      { num: '500+', label: 'SKUs Supported' },
      { num: '0', label: 'External Deps' }
    ],
    stack: [
      { icon: '⚛️', name: 'React', role: 'UI Components' },
      { icon: '🟢', name: 'Node.js', role: 'Backend API' },
      { icon: '🗄️', name: 'SQLite', role: 'Local Database' },
      { icon: '📡', name: 'WebSocket', role: 'Real-time Sync' }
    ],
    features: [
      { title: 'Barcode Scanner', desc: 'Plug-and-play USB scanner support that auto-populates product fields on scan.' },
      { title: 'Real-time Inventory', desc: 'Stock levels update instantly after each transaction with low-stock alerts.' },
      { title: 'Receipt Printing', desc: 'Generates formatted receipts for thermal printers via the browser print API.' },
      { title: 'Keyboard Shortcuts', desc: 'Full keyboard navigation — process entire transactions without touching the mouse.' },
      { title: 'Daily Reports', desc: 'End-of-day summary with transaction history, totals, and CSV export.' },
      { title: 'Offline Mode', desc: 'Core checkout works offline with local storage sync when connection restores.' }
    ],
    demo: { url: 'pos-system-demo.app', hasDemo: false, liveLink: '#', githubLink: '#' },
    screenshots: ['Dashboard', 'Cart Interface', 'Reports'],
    next: 'sibi'
  },

  sibi: {
    category: 'ML · Computer Vision',
    title: 'SIBI Recognition',
    year: '2025',
    type: 'ML Web App',
    role: 'Full Stack Dev',
    status: 'Completed',
    aboutTitle: 'Bridging communication through AI',
    aboutBody: [
      "The <strong>SIBI Recognition</strong> system uses a trained TensorFlow model to recognize Indonesian Sign Language (SIBI) hand gestures in real-time through a webcam feed and converts them to text.",
      "The model was trained on a custom SIBI dataset with <strong>95%+ accuracy</strong>. The React frontend handles the webcam stream, feeds frames to the model, and displays recognized characters live on screen."
    ],
    stats: [
      { num: '95%+', label: 'Model Accuracy' },
      { num: '26', label: 'Sign Classes' },
      { num: '30fps', label: 'Inference Speed' }
    ],
    stack: [
      { icon: '🐍', name: 'Python', role: 'Model Training' },
      { icon: '🧠', name: 'TensorFlow', role: 'ML Framework' },
      { icon: '⚛️', name: 'React', role: 'Frontend UI' },
      { icon: '📷', name: 'MediaPipe', role: 'Hand Landmarks' },
      { icon: '🔗', name: 'Flask', role: 'Model API' },
      { icon: '📊', name: 'NumPy', role: 'Data Processing' }
    ],
    features: [
      { title: 'Real-time Detection', desc: 'Processes webcam frames at 30fps with live bounding box visualization.' },
      { title: 'MediaPipe Landmarks', desc: 'Extracts 21 hand keypoints for precise gesture classification.' },
      { title: 'Confidence Display', desc: 'Shows real-time confidence percentage for each prediction.' },
      { title: 'Word Builder', desc: 'Strings recognized letters into words with smart debounce logic.' },
      { title: 'Custom Dataset', desc: 'Trained on a self-collected SIBI dataset with augmentation for lighting and angle variance.' },
      { title: 'Export to Text', desc: 'Copy recognized text to clipboard or export session log as plain text.' }
    ],
    demo: { url: 'sibi-recognition.vercel.app', hasDemo: false, liveLink: '#', githubLink: '#' },
    screenshots: ['Live Detection', 'Model Output', 'Word Builder'],
    next: 'translator'
  },

  translator: {
    category: 'Front End · API Integration',
    title: 'Translator Web',
    year: '2025',
    type: 'Web Tool',
    role: 'Frontend Developer',
    status: 'Completed',
    aboutTitle: 'Translate instantly, beautifully',
    aboutBody: [
      "The <strong>Translator Web</strong> app is a clean, fast language translation interface built around a public translation API. The focus was entirely on UX — making translation feel instant and frictionless.",
      "Features like auto-detect, swap button, character counter, and copy-to-clipboard were all designed with the \"one action, one click\" principle to minimize user effort."
    ],
    stats: [
      { num: '100+', label: 'Languages' },
      { num: '<300ms', label: 'API Response' },
      { num: '1-click', label: 'Copy to Clipboard' }
    ],
    stack: [
      { icon: '⚛️', name: 'React', role: 'UI Framework' },
      { icon: '🌍', name: 'LibreTranslate', role: 'Translation API' },
      { icon: '💅', name: 'CSS Modules', role: 'Scoped Styling' },
      { icon: '🔄', name: 'Axios', role: 'HTTP Client' }
    ],
    features: [
      { title: 'Auto Language Detection', desc: 'Automatically detects the source language as you type.' },
      { title: '100+ Languages', desc: 'Supports over 100 language pairs via the LibreTranslate API.' },
      { title: 'Swap Languages', desc: 'One-click swap with animated transition to reverse source and target.' },
      { title: 'Character Counter', desc: 'Live counter with visual indicator for approaching API limits.' },
      { title: 'Copy & Share', desc: 'One-click copy for both source and translated text with confirmation toast.' },
      { title: 'Translation History', desc: 'Recent translations stored in session for quick reference.' }
    ],
    demo: { url: 'translator-web.vercel.app', hasDemo: false, liveLink: '#', githubLink: '#' },
    screenshots: ['Main Interface', 'Language Selector', 'Mobile View'],
    next: 'tajwid'
  },

  tajwid: {
    category: 'Mobile · Education',
    title: 'Tajwidku App',
    year: '2025',
    type: 'Mobile App',
    role: 'Mobile Developer',
    status: 'Completed',
    aboutTitle: 'Making Quran learning accessible for everyone',
    aboutBody: [
      "<strong>Tajwidku</strong> is an educational mobile app built with React Native that guides users through the rules of Tajwid — the correct pronunciation of Arabic in Quranic recitation.",
      "The app features structured lessons with audio examples, interactive exercises, and a progress tracking system to help learners build their knowledge step by step at their own pace."
    ],
    stats: [
      { num: '30+', label: 'Lessons' },
      { num: '100%', label: 'Offline Ready' },
      { num: 'iOS+Android', label: 'Platform' }
    ],
    stack: [
      { icon: '📱', name: 'React Native', role: 'Cross-platform UI' },
      { icon: '🧭', name: 'Expo', role: 'Build & Deploy' },
      { icon: '🎵', name: 'Expo AV', role: 'Audio Playback' },
      { icon: '💾', name: 'AsyncStorage', role: 'Local Persistence' }
    ],
    features: [
      { title: 'Structured Lessons', desc: '30+ lessons organized from basic to advanced Tajwid rules with clear progression.' },
      { title: 'Audio Examples', desc: 'Native Arabic audio recordings for each rule and example verse.' },
      { title: 'Interactive Exercises', desc: 'Drag-and-drop and multiple-choice exercises after each lesson.' },
      { title: 'Progress Tracking', desc: 'Visual progress bars and completion badges to keep learners motivated.' },
      { title: 'Offline Support', desc: 'All lessons and audio bundled for full offline functionality.' },
      { title: 'Night Mode', desc: 'Dark and light theme toggle with persistent local preference.' }
    ],
    demo: { url: 'tajwidku.app', hasDemo: false, liveLink: '#', githubLink: '#' },
    screenshots: ['Home Screen', 'Lesson View', 'Progress'],
    next: 'cafe'
  }
};