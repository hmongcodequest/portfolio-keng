# Modern React Portfolio

A sophisticated web portfolio built with [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), and [Vite](https://vitejs.dev/), leveraging modern web development practices and tooling for optimal performance and developer experience. The project demonstrates advanced React patterns and TypeScript best practices while maintaining a clean, maintainable codebase.

## Technical Implementation

- [React 18](https://react.dev/) features including:
  - [Concurrent Rendering](https://react.dev/blog/2022/03/29/react-v18#what-is-concurrent-react) for improved UI responsiveness
  - [Automatic Batching](https://react.dev/blog/2022/03/29/react-v18#what-is-automatic-batching) for better performance
  - [Suspense](https://react.dev/reference/react/Suspense) for component-level code splitting
- [TypeScript](https://www.typescriptlang.org/) with strict type checking and comprehensive ESLint rules
- [Vite](https://vitejs.dev/) build system featuring:
  - [Hot Module Replacement (HMR)](https://vitejs.dev/guide/features.html#hot-module-replacement)
  - Optimized production builds with automatic code splitting
  - Fast refresh development experience
- Modern CSS implementation using:
  - [CSS Modules](https://github.com/css-modules/css-modules) for scoped styling
  - [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) for scroll-based animations
  - [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) for dynamic theming

## Core Dependencies

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) - Babel-based React refresh integration
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) - Enforces React Hooks best practices
- [typescript-eslint](https://typescript-eslint.io/) - TypeScript-specific linting rules
- [React Router](https://reactrouter.com/) - Client-side routing with TypeScript support
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework

## Project Structure

```
Frontend/
├── public/           # Static assets and entry HTML
├── src/
│   ├── assets/       # Project media and resources
│   ├── components/   # Reusable React components
│   ├── pages/        # Route-level page components
│   └── router.tsx    # Application routing configuration
├── vite.config.ts    # Vite configuration
└── tsconfig.json     # TypeScript configuration
```

### Key Directories

- [`src/components/`](./src/components/) - Houses reusable UI components following atomic design principles
- [`src/pages/`](./src/pages/) - Contains route-level components with their specific business logic
- [`src/assets/`](./src/assets/) - Manages static resources including images, fonts, and global styles

## Development Tools

- [ESLint](https://eslint.org/) with TypeScript and React-specific rules
- [Prettier](https://prettier.io/) for consistent code formatting
- [TypeScript](https://www.typescriptlang.org/) compiler with strict mode enabled
- [Vite](https://vitejs.dev/) development server with HMR
