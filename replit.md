# Bali Pool Service - Replit Agent Guide

## Overview

Bali Pool Service is a professional pool maintenance service website built as a marketing platform for a Bali-based pool service company. The application serves as a comprehensive digital presence showcasing services (cleaning, repair, construction), pricing packages, service areas, and customer contact capabilities. It's designed to build trust with international villa owners, property managers, and hospitality businesses through transparent pricing, professional presentation, and clear value propositions.

**Core Purpose**: Single-page marketing website with contact form functionality for lead generation in the pool service industry.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### March 2026 (Session 6) — Full SEO Optimization
- **Comprehensive SEO Overhaul**: Optimized all page titles, meta descriptions, H1s, and H2s across the entire site (~60+ pages)
  - **Home page**: New title, meta desc, keyword list, H1, and all 7 H2 section headings rewritten with target keywords
  - **Core service pages**: pool-cleaning-service-bali, weekly-pool-maintenance-bali, villa-pool-service-bali, hotel-resort-pool-service-bali, emergency-pool-repair-bali, green-pool-cleaning-bali — all titles, meta descs, and H1s rewritten
  - **Construction & specialty**: pool-construction-bali, cold-plunge-bali, pool-renovation-bali, saltwater-pool-maintenance-bali — all updated
  - **Secondary service pages**: All 12 secondary pages (pump repair, filter, tile cleaning, acid wash, equipment, lighting, skimmer, vacuuming, water testing, chemical balancing, etc.) updated
  - **All 12 location pages**: Seminyak, Canggu, Ubud, Kuta, Nusa Dua, Jimbaran, Uluwatu, Denpasar, Kerobokan, Legian, Sanur, Pererenan — all titles, meta descs, and H1s rewritten
  - **Blog pages**: All 3 blog posts updated with stronger keyword-focused titles and meta descriptions
  - **Pricing & About pages**: Updated with more specific, keyword-rich titles and descriptions
- **Canonical URLs fixed**: All ~50+ canonical URLs now correctly point to `https://balipoolservice.com` (was incorrectly using `balipool.services` and `poolservicebali.com`)
- **Sitemap fixed**: Rebuilt to only contain valid URLs matching actual routes, correct domain (balipoolservice.com), no XML comments, no future dates, correct slugs (e.g., `/location-nusa-dua` not `/pool-cleaning-nusa-dua`)
- **Keyword strategy**: Primary keywords: `pool cleaning Bali`, `pool service Bali`, `pool maintenance Bali`. Location: `pool cleaning [area]`. High-intent: `villa pool service Bali`, `hotel pool service Bali`, `emergency pool repair Bali`. Long-tail: pricing, frequency, construction queries

### November 27, 2025 (Session 4)
- **Pricing Restructure**: Updated all maintenance package pricing and naming:
  - Silver Package: IDR 800,000/month (1 visit/week, 4/month) - For private villas & homes
  - Gold Package: IDR 1,500,000/month (2 visits/week, 8/month) - Most Popular, for rental villas & luxury homes
  - Platinum Package: IDR 2,800,000/month (4 visits/week, 16/month) - For estates & boutique hotels
  - Replaced old naming (Basic Villa/Premium Villa/Boutique Resort) with Silver/Gold/Platinum tiers
  - Updated all pages: home.tsx, pool-cleaner.tsx, service-pricing.tsx, pricing.tsx, small-homes.tsx, and all location pages
  - Note: One-time service fees (green pool cleaning, tile cleaning, repairs) are separate from maintenance packages

### November 26, 2025 (Session 3)
- **Price Increase 25%**: Updated one-time service pricing across the entire website
  - Green Pool Recovery (Light): IDR 1,875,000
  - Green Pool Recovery (Heavy): IDR 3,750,000
  - Deep Cleaning: IDR 1,125,000
  - All service pages, location pages, and Indonesian pages updated
- **New Pool Construction Page**: Created comprehensive `/pool-construction-bali` landing page with:
  - 10 pool types (villa, resort, infinity, plunge, saltwater, etc.)
  - 10-step construction process
  - Pricing table (IDR 70M-350M range)
  - All inclusions and service areas
- **New Cold Plunge Page**: Created comprehensive `/cold-plunge-bali` landing page with:
  - 7 cold plunge types (stainless steel, concrete, commercial)
  - Full installation inclusions (cooling, insulation, filtration)
  - Pricing table (IDR 14M-85M range)
  - Tropical climate optimization features
- **Homepage Updated**: Added Pool Construction and Cold Plunge service cards to services section
- **Navigation & Footer**: Added links to new pages throughout the site
- **Sitemap Updated**: Added new pages to sitemap.xml

### November 26, 2025 (Session 2)
- **Reusable Components Created**:
  - `WhatsAppCTA` component with 4 variants: hero, section, pricing, footer - for consistent CTAs across all pages
  - `TrustElements` component with 4 variants: compact, guarantees, safety, experience - for trust-building elements
  - `ServicePricing` component with standardized pricing display, 3 packages (Silver/Gold/Platinum), and location customization
- **Service Pages Optimized**:
  - Updated `pool-cleaning-service-bali.tsx` and `weekly-pool-maintenance-bali.tsx` with full keyword optimization, pricing visibility, multiple WhatsApp CTAs, and trust elements
- **Location Pages Enhanced**:
  - Updated Seminyak, Canggu, Ubud, Kuta pages with new components, local SEO keywords, pricing sections, FAQs, trust elements, and internal linking to related services
- **Sitemap Generated**:
  - Created comprehensive `public/sitemap.xml` with 50+ pages including all service pages, location pages, and Indonesian language pages

### November 26, 2025 (Session 1)
- **Major Homepage Redesign**: Rebuilt homepage as ultra-long 10-section conversion-focused landing page:
  1. Hero Section with trust badges
  2. Problem Section (why Bali pools need pro care)
  3. Service Packages Section (4 cards)
  4. Why Choose Us Section
  5. Before/After Results Section
  6. Service Areas Section (local SEO)
  7. How It Works (3 steps)
  8. Testimonials Section
  9. FAQ Section
  10. Final CTA Section with Pricing
- **Ultra-minimal Navigation**: Simplified to only 4 items: Home, Services (dropdown with 12+ services), Pricing, Contact/WhatsApp button
- **Comprehensive Footer**: 4-column SEO footer with Main Links (12 services), Service Areas (12 locations), Company Info (9 links), Help & Info (9 resources)
- **Sticky WhatsApp Button**: Added persistent bottom-right WhatsApp CTA with hover tooltip
- **New Location Pages**: Created location-uluwatu.tsx, location-kerobokan.tsx, location-pererenan.tsx with local SEO content
- **Route Consolidation**: Added /location-* routes for all 12 service areas for consistent internal linking

### October 14, 2025
- **Navigation optimization**: Reduced navigation height (56-64px), created animated logo with water droplet ripple effect, improved mobile responsiveness with visible theme toggle, added compact design with smaller buttons and tighter spacing
- **Visual enhancements**: Added 6 stock images across customer segments and services sections for better visual storytelling and engagement
- **Payment methods**: Added QR payment (QRIS, GoPay, OVO, Dana), cash payment, and online payment options display in pricing section
- **Pool Construction page**: Created dedicated `/pool-construction` page with comprehensive content including pool types, 6-step process, materials, benefits, pricing calculator, and FAQ
- **Legal pages**: Added 5 complete legal documentation pages (Terms of Service, Privacy Policy, Refund & Cancellation Policy, Cookie Policy, Accessibility Statement) with consistent contact information across all pages
- **Footer updates**: Enhanced footer with links to pool construction page and all legal pages in bottom bar
- **WhatsApp contact**: Updated WhatsApp number to +6282323011656 across entire website (all components, pages, legal pages, documentation)
- **Contact form**: Modified to send inquiries directly via WhatsApp with formatted message containing all form data
- **Chemical options clarity**: Updated chemical safety section to clearly differentiate between EU/USA/NSF International certified chemicals (recommended for 4-5 star hotels, properties with children, skin sensitivities) and Indonesian brand alternatives

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
- Main pages: Home (`/`), Pool Construction (`/pool-construction`), Pool Construction Bali (`/pool-construction-bali`), Cold Plunge Bali (`/cold-plunge-bali`)
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
- **WhatsApp Business**: Contact integration (+6282323011656)
- **Font APIs**: Google Fonts (Inter, DM Sans, JetBrains Mono)

**Note**: The application is configured for PostgreSQL via Drizzle ORM but currently uses in-memory storage. Database URL environment variable required for production persistence.