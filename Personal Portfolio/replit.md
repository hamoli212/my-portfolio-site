# Portfolio Website - Muhammad Hammad Khan

## Overview

This is a full-stack portfolio website built for Muhammad Hammad Khan, an Electrical Engineering graduate specializing in Power Systems. The application features a modern, responsive design showcasing professional experience, education, skills, projects, and certifications with a contact form for inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: React Query (TanStack Query) for server state
- **Routing**: Wouter for client-side routing
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: Built-in memory storage with fallback to PostgreSQL
- **Static Assets**: Served through Express with Vite integration

### Database Schema
- **contacts**: Stores contact form submissions (id, name, email, subject, message, createdAt)
- **users**: Basic user management (id, username, password) - appears unused in current implementation

## Key Components

### Frontend Components
- **Navigation**: Smooth scrolling navigation with active section highlighting
- **Hero Section**: Main landing area with call-to-action buttons
- **About Section**: Personal information and statistics
- **Experience Section**: Professional work history with timeline design
- **Education Section**: Academic background and achievements
- **Skills Section**: Technical skills organized by category with progress bars
- **Projects Section**: Engineering projects with descriptions and tech tags
- **Certifications Section**: Professional certifications with icons and details
- **Contact Section**: Form for visitor inquiries with validation
- **Footer**: Social links and contact information

### Backend Components
- **Storage Layer**: Abstracted storage interface with memory-based implementation
- **API Routes**: RESTful endpoints for contact form and CV download
- **Error Handling**: Centralized error handling with appropriate HTTP status codes
- **Development Tools**: Vite integration for hot module replacement

## Data Flow

### Contact Form Submission
1. User fills out contact form with validation
2. Frontend sends POST request to `/api/contact`
3. Backend validates data using Zod schema
4. Data is stored in contacts table
5. Success/error response sent back to frontend
6. Toast notification shown to user

### CV Download
1. User clicks download CV button
2. Frontend makes GET request to `/api/cv/download`
3. Backend serves PDF file from attached_assets directory
4. File is downloaded with user-friendly filename

### Admin Data Access
- GET `/api/contacts` endpoint available for retrieving all contact submissions
- Currently no authentication implemented for admin access

## External Dependencies

### Frontend Dependencies
- **UI Components**: Extensive use of Radix UI primitives via shadcn/ui
- **Icons**: Lucide React for consistent iconography
- **Forms**: React Hook Form with Zod resolver for validation
- **Animations**: CSS-based animations with Tailwind utilities
- **Date Handling**: date-fns for date formatting

### Backend Dependencies
- **Database**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod for schema validation
- **Session Storage**: connect-pg-simple for PostgreSQL session store
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Replit Integration**: Vite plugins for Replit-specific features
- **Error Overlay**: Runtime error modal for development
- **Hot Reloading**: Vite HMR for fast development iterations

## Deployment Strategy

### Production Build
- Frontend: Vite builds optimized static assets to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- Single process deployment with static file serving

### Environment Configuration
- Database URL required via `DATABASE_URL` environment variable
- Production/development mode controlled by `NODE_ENV`
- Drizzle migrations stored in `./migrations` directory

### Database Setup
- Schema defined in `shared/schema.ts`
- Database push command: `npm run db:push`
- Migrations managed through Drizzle Kit

### Static Assets
- CV file stored in `attached_assets` directory
- Vite alias configured for asset imports
- Express serves static files in production

### Development Workflow
- `npm run dev`: Start development server with hot reloading
- `npm run build`: Build production assets
- `npm run start`: Start production server
- `npm run check`: TypeScript type checking

The application is designed as a professional portfolio with a clean, modern interface that effectively showcases electrical engineering expertise while providing easy contact mechanisms for potential opportunities.