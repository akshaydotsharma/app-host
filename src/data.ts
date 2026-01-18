import type { App } from './types';

/**
 * Portfolio apps data
 * Add new apps to this array to display them on the site
 */
export const apps: App[] = [
  {
    id: 'personal-dashboard',
    name: 'Personal Dashboard',
    tagline: 'Organize your life with natural language',
    url: 'https://personal-dashboard-7yub.onrender.com/',
    description:
      'A flexible workspace for tasks, lists, and notes. Type naturally and it organizes everything for you.',
    techStack: ['JavaScript', 'SPA', 'Render'],
    icon: 'layout-dashboard',
    gradient: 'purple-blue',
    category: 'Productivity',
  },
  {
    id: 'meal-planner',
    name: 'Meal Planner',
    tagline: 'Plan your meals with ease',
    url: 'https://meal-planner-g4wy.onrender.com',
    description:
      'A simple tool to plan your weekly meals, manage recipes, and organize your grocery shopping. Takes the stress out of deciding what to eat.',
    techStack: ['JavaScript', 'SPA', 'Render'],
    icon: 'utensils',
    gradient: 'orange-pink',
    category: 'Lifestyle',
  },
  {
    id: 'movie-recommendation',
    name: 'Movie Recommendation',
    tagline: 'Discover your next favorite film',
    url: 'https://movie-recommendation-8szt.onrender.com',
    description:
      'Get personalized movie suggestions based on your mood, genre preferences, and viewing history. Powered by TMDB with watchlists and ratings.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'TMDB'],
    icon: 'film',
    gradient: 'indigo-purple',
    category: 'Entertainment',
  },
  {
    id: 'web-scrape',
    name: 'Web Scrape',
    tagline: 'Extract website intelligence for risk assessment',
    url: 'https://website-risk.onrender.com',
    description:
      'Scan websites to extract contact details, social links, and other data points for risk assessment. Maintains scan history with rescan capability.',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'SQLite', 'OpenAI'],
    icon: 'globe-scan',
    gradient: 'teal-cyan',
    category: 'Tools',
  },
];

/**
 * Site configuration
 */
export const siteConfig = {
  title: 'My Apps',
  subtitle: 'Small, focused tools to make workflows easier.',
  github: 'https://github.com/akshaydotsharma',
  email: 'sharma.akshay.mi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sharmaakshay22/',
  instagram: 'https://www.instagram.com/_khromatic/',
  brand: 'Akshay Sharma',
};
