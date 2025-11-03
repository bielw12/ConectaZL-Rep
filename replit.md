# Conecta ZL - Community News Platform

## Overview

Conecta ZL is a community-focused news and social platform designed for the Zona Leste (East Zone) region of São Paulo, Brazil. The application serves as a local news aggregator and social network where community members can share updates, news, alerts, and cultural events relevant to their neighborhoods. The platform features news feeds, highlighted stories, missing person alerts, and community-generated content with a focus on connecting residents of the Zona Leste region.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React with TypeScript**: Modern component-based UI using React 18+ with full TypeScript support for type safety
- **Vite**: Fast build tool and development server with hot module replacement (HMR)
- **Wouter**: Lightweight client-side routing library chosen over React Router for minimal bundle size
- **TanStack Query (React Query)**: Server state management for data fetching, caching, and synchronization

**UI Component System**
- **shadcn/ui**: Accessible component library built on Radix UI primitives with Tailwind CSS
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives (dialogs, dropdowns, tooltips, etc.)
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens for consistent theming
- **Design System**: Custom color palette centered around primary purple (#4c2165) and beige background (#efede3) for brand identity

**State Management Pattern**
- Server state managed through React Query with custom query functions
- Local UI state handled via React hooks (useState, useContext)
- Form state managed through React Hook Form with Zod validation
- Toast notifications for user feedback via custom toast hook

### Backend Architecture

**Server Framework**
- **Express.js**: Minimal Node.js web framework for REST API endpoints
- **TypeScript**: Full type safety across server codebase
- **ES Modules**: Modern module system (type: "module" in package.json)

**Development & Production Setup**
- Development uses tsx for TypeScript execution with hot reload
- Production build uses esbuild for fast bundling
- Vite integration for seamless SPA serving in development
- Middleware-based architecture for request logging and error handling

**Storage Layer**
- **In-Memory Storage**: Default implementation using Map-based storage (MemStorage class)
- **Drizzle ORM**: Type-safe ORM configured for PostgreSQL migration path
- **Neon Database Driver**: Serverless PostgreSQL driver (@neondatabase/serverless) for production
- **Storage Interface Pattern**: Abstract IStorage interface allows swapping storage implementations without changing business logic

**API Design**
- RESTful endpoint structure with /api prefix
- JSON request/response format
- Centralized error handling middleware
- Request logging with duration tracking for /api routes

### Database Schema

**Users Table**
- Primary entity for authentication and user management
- Fields: id (UUID primary key), username (unique text), password (hashed text)
- Drizzle schema with Zod validation for type-safe inserts
- PostgreSQL dialect configured but system supports in-memory fallback

**Migration Strategy**
- Drizzle Kit for schema migrations (migrations/ directory)
- Schema definitions in shared/schema.ts for client-server sharing
- Push-based deployment via npm run db:push

### External Dependencies

**Database & Infrastructure**
- **Neon Database**: Serverless PostgreSQL platform for production database hosting
- **PostgreSQL**: Relational database (via DATABASE_URL environment variable)
- **connect-pg-simple**: PostgreSQL session store for Express sessions (configured but not yet implemented)

**UI & Design Libraries**
- **Google Fonts**: Almarai, DM Sans, Fira Code, Geist Mono, Architects Daughter font families
- **Lucide React**: Icon library for consistent iconography throughout the app

**Development Tools**
- **Replit Plugins**: Custom Vite plugins for development experience
  - @replit/vite-plugin-runtime-error-modal: Runtime error overlay
  - @replit/vite-plugin-cartographer: Development navigation
  - @replit/vite-plugin-dev-banner: Development mode indicator

**Build & Validation**
- **Zod**: Runtime type validation and schema parsing
- **drizzle-zod**: Bridge between Drizzle ORM schemas and Zod validation
- **React Hook Form**: Form validation and state management with Zod resolver integration
- **class-variance-authority**: Type-safe variant API for component styling
- **clsx & tailwind-merge**: Utility for merging Tailwind classes

**Third-Party Component Dependencies**
- **cmdk**: Command palette component library
- **embla-carousel-react**: Carousel/slider component
- **date-fns**: Date manipulation and formatting
- **vaul**: Drawer component for mobile interfaces
- **react-day-picker**: Calendar/date picker component
- **input-otp**: OTP input field component
- **recharts**: Charting library (configured but not yet used)

### Project Structure

**Monorepo Layout**
- `/client`: Frontend React application
  - `/src/pages`: Page components (Inicio, Destaques, Noticias, NotFound)
  - `/src/components`: Reusable UI components including Header
  - `/src/components/ui`: shadcn/ui component library
  - `/src/hooks`: Custom React hooks
  - `/src/lib`: Utility functions and query client configuration
- `/server`: Backend Express application
  - `routes.ts`: API route registration
  - `storage.ts`: Storage interface and in-memory implementation
  - `vite.ts`: Vite middleware and development server setup
- `/shared`: Code shared between client and server (schema definitions, types)
- `/migrations`: Database migration files (Drizzle)

**Path Aliases**
- `@/`: Maps to client/src/
- `@shared/`: Maps to shared/
- `@assets/`: Maps to attached_assets/

**Configuration Files**
- TypeScript: Strict mode enabled with ESNext module system
- Tailwind: Custom theme with CSS variables for color system
- PostCSS: Autoprefixer and Tailwind processing
- Drizzle: PostgreSQL dialect with migrations output directory