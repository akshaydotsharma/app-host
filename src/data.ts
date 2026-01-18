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
