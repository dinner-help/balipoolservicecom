# Pool Service Bali - Replit Agent Guide

## Overview

Pool Service Bali is a professional pool maintenance service website built as a marketing platform for a Bali-based pool service company. The application serves as a comprehensive digital presence showcasing services (cleaning, repair, construction), pricing packages, service areas, and customer contact capabilities. It's designed to build trust with international villa owners, property managers, and hospitality businesses through transparent pricing, professional presentation, and clear value propositions.

**Core Purpose**: Single-page marketing website with contact form functionality for lead generation in the pool service industry.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### October 14, 2025
- **Navigation optimization**: Reduced navigation height (56-64px), created animated logo with water droplet ripple effect, improved mobile responsiveness with visible theme toggle, added compact design with smaller buttons and tighter spacing
- **Visual enhancements**: Added 6 stock images across customer segments and services sections for better visual storytelling and engagement
- **Payment methods**: Added QR payment (QRIS, GoPay, OVO, Dana), cash payment, and online payment options display in pricing section
- **Pool Construction page**: Created dedicated `/pool-construction` page with comprehensive content including pool types, 6-step process, materials, benefits, pricing calculator, and FAQ
- **Legal pages**: Added 5 complete legal documentation pages (Terms of Service, Privacy Policy, Refund & Cancellation Policy, Cookie Policy, Accessibility Statement) with consistent contact information across all pages
- **Footer updates**: Enhanced footer with links to pool construction page and all legal pages in bottom bar

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript, using Vite as the build tool and development server.

**UI Component System**: 
- Implements shadcn/ui component library with Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- Component-based architecture with reusable UI elements in `client/src/components/ui/`
- Section-based page composition pattern (`client/src/components/sections/`)

**Routing**: 
- Wouter for client-side routing (lightweight alternative to React Router)
- Main pages: Home (`/`), Pool Construction (`/pool-construction`)
- Legal pages: Terms (`/terms`), Privacy (`/privacy`), Refund Policy (`/refund-policy`), Cookie Policy (`/cookie-policy`), Accessibility (`/accessibility`)
- 404 fallback for unmatched routes

**State Management**:
- React Query (TanStack Query) for server state management
- React Hook Form for form state with Zod validation
- Local React context for theme management (light/dark mode)

**Design System**:
- Custom color palette supporting light/dark themes via CSS variables
- Pool-themed professional aesthetics (blues, turquoise accents)
- Responsive design with mobile-first approach
- Trust-focused design principles per `design_guidelines.md`

### Backend Architecture

**Server Framework**: Express.js with TypeScript

**API Design**:
- RESTful endpoints under `/api` prefix
- Contact form submission endpoint (`POST /api/contact`)
- Admin endpoint for viewing submissions (`GET /api/contact`)

**Data Storage**:
- Currently using in-memory storage (`MemStorage` class in `server/storage.ts`)
- Prepared for PostgreSQL via Drizzle ORM (schema defined but database not actively connected)
- Schema includes users table and contact_submissions table

**Validation**: 
- Zod schemas for runtime type validation
- Shared schema definitions between client and server (`shared/schema.ts`)

**Development Setup**:
- Vite middleware integration for HMR in development
- Static file serving for production builds
- Request logging middleware for API endpoints

### Data Models

**Contact Submission Schema**:
```typescript
{
  id: uuid,
  name: string (min 2 chars),
  email: string (email format),
  phone: string (min 8 chars),
  propertyType: string,
  serviceArea: string,
  message: string (optional),
  createdAt: timestamp
}
```

**User Schema** (prepared for future auth):
```typescript
{
  id: uuid,
  username: string (unique),
  password: string
}
```

### Design Patterns

**Component Composition**: 
- Atomic design principles with UI primitives composed into sections
- Each section is self-contained and focuses on single responsibility
- Consistent use of Card components for visual hierarchy

**Form Handling**:
- React Hook Form with Zod resolver for type-safe validation
- Optimistic UI updates with React Query mutations
- Toast notifications for user feedback

**Theme Management**:
- CSS custom properties for dynamic theming
- Class-based theme switching via Tailwind's dark mode
- Persistent theme preference in localStorage

**Error Handling**:
- Centralized error middleware in Express
- Form-level validation errors with inline display
- Global toast system for user notifications

## External Dependencies

### Core Framework Dependencies
- **React 18**: UI framework
- **TypeScript**: Type safety across full stack
- **Vite**: Build tool and dev server
- **Express**: Backend HTTP server

### UI & Styling
- **Tailwind CSS**: Utility-first styling
- **shadcn/ui**: Pre-built accessible components via Radix UI
- **class-variance-authority**: Component variant management
- **Lucide React**: Icon library
- **React Icons**: Additional icons (WhatsApp, social media)

### Form & Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **@hookform/resolvers**: Integration between RHF and Zod

### State & Data Fetching
- **TanStack React Query**: Server state management
- **Wouter**: Lightweight client-side routing

### Database (Prepared, Not Active)
- **Drizzle ORM**: Type-safe PostgreSQL ORM
- **@neondatabase/serverless**: Serverless Postgres driver
- **drizzle-zod**: Generate Zod schemas from Drizzle tables

### Development Tools
- **@replit/vite-plugin-***: Replit-specific development enhancements
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Production build bundler for server

### Third-Party Services
- **WhatsApp Business**: Contact integration (+628113702343)
- **Font APIs**: Google Fonts (Inter, DM Sans, JetBrains Mono)

**Note**: The application is configured for PostgreSQL via Drizzle ORM but currently uses in-memory storage. Database URL environment variable required for production persistence.