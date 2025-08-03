# AIUB Rickshaw Guide

## Overview

AIUB Rickshaw Guide is a mobile-first Progressive Web App (PWA) designed to help AIUB university students estimate fair rickshaw fares between AIUB and nearby locations. The application provides a simple, accessible interface in both English and Bengali, with features including route selection, fare estimation, real-time location detection, dark mode support, and installable PWA capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Framework**: Tailwind CSS with shadcn/ui component library for consistent design
- **State Management**: React Context API for theme and language state management
- **Routing**: Wouter for lightweight client-side routing
- **Data Fetching**: TanStack Query (React Query) for server state management
- **PWA Features**: Service worker implementation with caching strategy for offline functionality

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API architecture with Express routes
- **Development**: Hot Module Replacement (HMR) with Vite integration in development mode

### Component Architecture
- **Design System**: Modular component structure using Radix UI primitives
- **Internationalization**: Custom hook-based language switching between English and Bengali
- **Theme System**: Dark/light mode toggle with CSS custom properties
- **Responsive Design**: Mobile-first approach with Tailwind CSS responsive utilities

### Data Management
- **Location Data**: Static location database with predefined AIUB area locations
- **Fare Calculation**: Algorithm-based fare estimation using distance and predefined rates
- **Geolocation**: Browser Geolocation API integration for current location detection
- **Caching**: Local storage for user preferences (theme, language)

### Progressive Web App Features
- **Offline Support**: Service worker caching for core application functionality
- **Installation**: Web app manifest for home screen installation
- **Performance**: Lazy loading and code splitting for optimal loading times
- **Accessibility**: ARIA compliance and keyboard navigation support

### Development Workflow
- **TypeScript**: Full type safety across frontend and backend
- **Code Quality**: ESLint and TypeScript compiler checks
- **Build Process**: Vite for frontend bundling, ESBuild for server bundling
- **Path Aliases**: Organized import structure with @ aliases for clean code organization

## External Dependencies

### Core Technologies
- **React Ecosystem**: React, React DOM, React Query for frontend framework
- **UI Libraries**: Radix UI primitives, Lucide React icons, shadcn/ui components
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer for styling and design system
- **Build Tools**: Vite, ESBuild, TypeScript for development and build processes

### Database and ORM
- **Database**: Neon Database (serverless PostgreSQL) for data persistence
- **ORM**: Drizzle ORM with Drizzle Kit for database schema management and migrations
- **Validation**: Zod schema validation integrated with Drizzle

### Maps and Location Services
- **Google Maps API**: For route calculation and map display functionality
- **Browser Geolocation**: Native browser API for current location detection

### Development and Deployment
- **Replit Integration**: Replit-specific plugins for development environment
- **Service Workers**: Custom service worker for PWA functionality and caching
- **Form Handling**: React Hook Form with Hookform Resolvers for form validation

### Third-party Integrations
- **Date Utilities**: date-fns for date formatting and manipulation
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Utility Libraries**: clsx, class-variance-authority for conditional styling
- **Development Tools**: Wouter for routing, cmdk for command interface