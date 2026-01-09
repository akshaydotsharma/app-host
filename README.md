# App Host - Portfolio Website

A clean, modern portfolio website showcasing apps built by Akshay Sharma. Built with TypeScript, Vite, and vanilla CSS for optimal performance and developer experience.

## Features

- **TypeScript** - Type-safe code with full IntelliSense support
- **Vite** - Lightning-fast development server with HMR
- **Responsive Design** - Mobile-first approach, beautiful on all devices
- **Accessible** - Semantic HTML, ARIA labels, keyboard navigation
- **Modern CSS** - CSS variables, flexbox, grid, smooth animations
- **Easy to Extend** - Simple data structure for adding new apps

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The site will open at `http://localhost:3000`

### Building for Production

Build the optimized production bundle:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Type Checking

Run TypeScript type checking without building:

```bash
npm run type-check
```

## Project Structure

```
app-host/
├── src/
│   ├── main.ts          # Application entry point
│   ├── data.ts          # Apps data array
│   ├── types.ts         # TypeScript type definitions
│   ├── renderer.ts      # App card rendering logic
│   ├── utils.ts         # Utility functions
│   └── style.css        # All styles
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project metadata and scripts
```

## Adding New Apps

To add a new app to your portfolio:

1. Open [src/data.ts](src/data.ts)
2. Add a new object to the `apps` array:

```typescript
{
  name: "Your App Name",
  tagline: "A short, catchy tagline",
  url: "https://your-app-url.com",
  description: "A detailed description explaining what your app does, who it's for, and why it's useful. 2-4 sentences work best.",
  techStack: "React, Node.js, PostgreSQL, deployed on Vercel"
}
```

3. Save the file - the dev server will automatically reload

## Customization

### Colors

Edit CSS variables in [src/style.css](src/style.css):

```css
:root {
  --primary-color: #2563eb;      /* Main accent color */
  --primary-hover: #1d4ed8;      /* Hover state */
  --text-primary: #1f2937;       /* Main text */
  --text-secondary: #6b7280;     /* Secondary text */
}
```

### Content

- **Hero Section**: Edit the HTML in [index.html](index.html)
- **Footer Links**: Update the footer in [index.html](index.html)
- **Apps Data**: Modify [src/data.ts](src/data.ts)

### Styling

All styles are in [src/style.css](src/style.css). The design uses:
- Mobile-first responsive approach
- CSS Grid for app cards layout
- Flexbox for component layouts
- CSS custom properties for theming

## Technologies

- **TypeScript 5.3+** - Type-safe JavaScript
- **Vite 5** - Next-generation frontend tooling
- **Vanilla CSS** - No framework overhead, pure CSS with modern features
- **ES Modules** - Modern JavaScript module system

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT

## Author

Akshay Sharma
