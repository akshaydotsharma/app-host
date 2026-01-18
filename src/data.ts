import type { App } from './types';

/**
 * Portfolio apps data
 * Add new apps to this array to display them on the site
 */
export const apps: App[] = [
  {
    name: "Personal Dashboard",
    tagline: "Organize your life with natural language",
    url: "https://personal-dashboard-7yub.onrender.com/",
    description: "A flexible workspace for managing tasks, lists, and notes. Just type what you need—like 'Create a packing list for my Bali trip'—and it organizes everything automatically.",
    techStack: "JavaScript SPA deployed on Render"
  },
  {
    name: "Meal Planner",
    tagline: "Plan your meals with ease",
    url: "https://meal-planner-g4wy.onrender.com",
    description: "A simple tool to plan your weekly meals, manage recipes, and organize your grocery shopping. Takes the stress out of deciding what to eat.",
    techStack: "JavaScript SPA deployed on Render"
  },
  {
    name: "Movie Recommendation",
    tagline: "Discover your next favorite film",
    url: "https://movie-recommendation-8szt.onrender.com",
    description: "Get personalized movie suggestions based on your mood, genre preferences, and viewing history. Powered by TMDB with watchlists and ratings.",
    techStack: "Next.js 15, TypeScript, PostgreSQL, Prisma, TMDB API"
  },
  {
    name: "Web Scrape",
    tagline: "Extract website intelligence for risk assessment",
    url: "https://website-risk.onrender.com",
    description: "Scan websites to extract contact details, social links, and other data points for risk assessment. Maintains scan history with rescan capability.",
    techStack: "Next.js 16, TypeScript, Prisma, SQLite, OpenAI API"
  }
  // Add more apps here:
  // {
  //   name: "App Name",
  //   tagline: "Short tagline here",
  //   url: "https://example.com",
  //   description: "1-2 short sentences max...",
  //   techStack: "Tech stack details"
  // }
];
