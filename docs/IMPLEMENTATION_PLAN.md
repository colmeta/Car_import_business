# AJ2 MOTORS UG LIMITED - Fortune 500 Implementation Plan

## Executive Overview

Transform AJ2 MOTORS from a car import business into **Africa's premier automotive marketplace platform** - a Fortune 500-caliber solution that rivals Airbnb in user experience and Tesla in technology sophistication.

**Core Objective:** Build a platform that C-suite executives at Fortune 500 companies would confidently use to procure fleet vehicles.

---

## User Review Required

> [!IMPORTANT]
> **Strategic Decision Points**
> 
> 1. **Brand Name:** Should we proceed with "AJ2 MOTORS UG LIMITED" or create a more premium brand identity (e.g., "Apex Motors Africa", "Prime Auto Global")?
> 2. **Primary Market:** Focus exclusively on Uganda initially or launch as multi-country from day 1?
> 3. **Technology Bet:** Implement blockchain escrow (cutting-edge but complex) in Phase 1 or Phase 2?
> 4. **Revenue Priority:** Direct sales focus or build platform for other importers to use (marketplace model)?

> [!WARNING]
> **Technical Constraints**
> 
> - Render free tier (512MB RAM) limits backend complexity
> - May need to upgrade to paid tier ($7-$25/month) for production workload
> - Alternative: Use Vercel's serverless functions for backend to stay within free tier

> [!CAUTION]
> **Resource Requirements**
> 
> - **Development Time:** 4-6 months for MVP → Fortune 500 level: 12-18 months
> - **Team Size:** Minimum 3-5 developers for aggressive timeline
> - **Investment:** $50K-$150K for development, infrastructure, and initial operations
> - **Third-party Costs:** APIs, databases, hosting: $500-$2,000/month

---

## Proposed Changes

### Core Platform Architecture

We will build an enterprise-grade automotive marketplace with three distinct portals:

1. **Customer Portal** - Premium buying experience
2. **Corporate Portal** - Enterprise fleet procurement
3. **Admin Portal** - Operations & analytics

---

### Phase 1: Foundation (Weeks 1-8)

#### Frontend Application

##### [NEW] [package.json](file:///c:/Users/LENOVO/Desktop/car_import_business/package.json)

```json
{
  "name": "aj2-motors-platform",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^15.0.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@supabase/supabase-js": "^2.45.0",
    "@supabase/auth-helpers-nextjs": "^0.10.0",
    "framer-motion": "^11.5.0",
    "@react-three/fiber": "^8.17.0",
    "@react-three/drei": "^9.111.0",
    "three": "^0.169.0",
    "zustand": "^4.5.5",
    "react-hook-form": "^7.53.0",
    "zod": "^3.23.8",
    "@hookform/resolvers": "^3.9.0",
    "date-fns": "^4.1.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.4",
    "lucide-react": "^0.453.0",
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-dropdown-menu": "^2.1.2",
    "@radix-ui/react-select": "^2.1.2",
    "@radix-ui/react-tabs": "^1.1.1",
    "@radix-ui/react-toast": "^1.2.2",
    "@radix-ui/react-tooltip": "^1.1.4",
    "embla-carousel-react": "^8.3.1",
    "recharts": "^2.13.3",
    "react-intersection-observer": "^9.13.1",
    "sharp": "^0.33.5"
  },
  "devDependencies": {
    "typescript": "^5.6.3",
    "@types/node": "^22.8.7",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@types/three": "^0.169.0",
    "tailwindcss": "^3.4.14",
    "postcss": "^8.4.47",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.14.0",
    "eslint-config-next": "^15.0.3"
  }
}
```

##### [NEW] [next.config.ts](file:///c:/Users/LENOVO/Desktop/car_import_business/next.config.ts)

```typescript
import type { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  
  images: {
    domains: [
      'your-supabase-project.supabase.co',
      'cloudflare-r2-bucket.your-domain.com'
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    minimumCacheTTL: 60,
  },
  
  experimental: {
    optimizePackageImports: ['lucide-react', 'recharts', 'framer-motion'],
  },
  
  // Vercel Analytics
  env: {
    NEXT_PUBLIC_APP_NAME: 'AJ2 Motors',
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'https://aj2motors.com',
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default config;
```

##### [NEW] [tailwind.config.ts](file:///c:/Users/LENOVO/Desktop/car_import_business/tailwind.config.ts)

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - Premium Fortune 500 Palette
        brand: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#B8DBFF',
          300: '#7CB8FF',
          400: '#3B82F6', // Primary
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#1E293B',
        },
        accent: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#F59E0B', // Accent/Energy
          500: '#D97706',
          600: '#B45309',
          700: '#92400E',
          800: '#78350F',
          900: '#451A03',
        },
        success: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981', // Success Green
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        // Glass effect colors
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          dark: 'rgba(15, 23, 42, 0.6)',
          border: 'rgba(255, 255, 255, 0.2)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-space-grotesk)', 'monospace'],
      },
      fontSize: {
        display: 'clamp(3rem, 6vw, 5rem)',
        h1: 'clamp(2.5rem, 5vw, 4rem)',
        h2: 'clamp(2rem, 4vw, 3rem)',
        h3: 'clamp(1.5rem, 3vw, 2rem)',
        h4: 'clamp(1.25rem, 2.5vw, 1.5rem)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glass-lg': '0 20px 60px 0 rgba(31, 38, 135, 0.25)',
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(60px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-60px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

export default config;
```

---

#### Backend Architecture (Optimized for Render 512MB)

##### [NEW] [backend/package.json](file:///c:/Users/LENOVO/Desktop/car_import_business/backend/package.json)

```json
{
  "name": "aj2-motors-backend",
  "version": "1.0.0",
  "main": "dist/index.js",
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "migration:run": "tsx src/db/migrate.ts"
  },
  "dependencies": {
    "express": "^4.21.1",
    "cors": "^2.8.5",
    "helmet": "^8.0.0",
    "compression": "^1.7.5",
    "@supabase/supabase-js": "^2.45.0",
    "zod": "^3.23.8",
    "dotenv": "^16.4.5",
    "rate-limiter-flexible": "^5.0.3",
    "node-cache": "^5.1.2"
  },
  "devDependencies": {
    "@types/node": "^22.8.7",
    "@types/express": "^5.0.0",
    "@types/cors": "^2.8.17",
    "@types/compression": "^1.7.5",
    "tsx": "^4.19.2",
    "typescript": "^5.6.3"
  }
}
```

**Why this approach:**
- Lightweight Express server (< 50MB base memory)
- Supabase handles database + auth + storage (no heavy ORM)
- In-memory caching (node-cache) instead of Redis (saves 50-100MB)
- Stateless design (scales horizontally on Render)

---

### Database Schema (Supabase PostgreSQL)

##### [NEW] [supabase/migrations/001_initial_schema.sql](file:///c:/Users/LENOVO/Desktop/car_import_business/supabase/migrations/001_initial_schema.sql)

```sql
-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm"; -- For fuzzy search

-- =============================================
-- USERS & AUTHENTICATION (Managed by Supabase Auth)
-- =============================================

CREATE TYPE user_role AS ENUM ('customer', 'admin', 'sales_agent', 'corporate');

CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  phone TEXT,
  role user_role DEFAULT 'customer',
  company_name TEXT,
  avatar_url TEXT,
  location TEXT,
  preferences JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- VEHICLES
-- =============================================

CREATE TYPE vehicle_status AS ENUM (
  'in_stock_kampala',
  'in_stock_dubai',
  'reserved',
  'in_transit',
  'sold',
  'unavailable'
);

CREATE TYPE vehicle_location AS ENUM ('kampala', 'dubai', 'mombasa', 'in_transit');
CREATE TYPE transmission AS ENUM ('automatic', 'manual');
CREATE TYPE fuel_type AS ENUM ('petrol', 'diesel', 'hybrid', 'electric');
CREATE TYPE body_type AS ENUM ('sedan', 'suv', 'hatchback', 'coupe', 'wagon', 'van', 'pickup');

CREATE TABLE vehicles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  
  -- Basic Info
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  year INTEGER NOT NULL CHECK (year >= 1990 AND year <= EXTRACT(YEAR FROM CURRENT_DATE) + 1),
  vin TEXT UNIQUE,
  
  -- Specifications
  mileage INTEGER NOT NULL CHECK (mileage >= 0),
  engine_size DECIMAL(3,1) CHECK (engine_size > 0),
  transmission transmission NOT NULL,
  fuel_type fuel_type NOT NULL,
  body_type body_type NOT NULL,
  color TEXT NOT NULL,
  seats INTEGER DEFAULT 5,
  doors INTEGER DEFAULT 4,
  
  -- Pricing (in UGX)
  dubai_price DECIMAL(15,2) NOT NULL,
  shipping_cost DECIMAL(15,2) NOT NULL,
  customs_duty DECIMAL(15,2) NOT NULL,
  other_fees DECIMAL(15,2) DEFAULT 0,
  total_landed_cost DECIMAL(15,2) GENERATED ALWAYS AS (
    dubai_price + shipping_cost + customs_duty + other_fees
  ) STORED,
  selling_price DECIMAL(15,2) NOT NULL,
  
  -- Location & Status
  location vehicle_location NOT NULL DEFAULT 'dubai',
  status vehicle_status NOT NULL DEFAULT 'in_stock_dubai',
  
  -- Features
  features TEXT[] DEFAULT '{}',
  description TEXT,
  
  -- Inspection
  inspection_report_url TEXT,
  inspection_date DATE,
  inspected_by TEXT,
  
  -- SEO
  meta_title TEXT,
  meta_description TEXT,
  
  -- Analytics
  view_count INTEGER DEFAULT 0,
  inquiry_count INTEGER DEFAULT 0,
  
  -- Timestamps
  arrived_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Indexes for performance
  CONSTRAINT valid_selling_price CHECK (selling_price > total_landed_cost)
);

CREATE INDEX idx_vehicles_make_model_year ON vehicles(make, model, year);
CREATE INDEX idx_vehicles_status_location ON vehicles(status, location);
CREATE INDEX idx_vehicles_price_range ON vehicles(selling_price);
CREATE INDEX idx_vehicles_slug ON vehicles(slug);
CREATE INDEX idx_vehicles_search ON vehicles USING gin(to_tsvector('english', make || ' ' || model || ' ' || description));

-- =============================================
-- VEHICLE IMAGES
-- =============================================

CREATE TABLE vehicle_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  vehicle_id UUID NOT NULL REFERENCES vehicles(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  alt TEXT,
  display_order INTEGER DEFAULT 0,
  is_primary BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_vehicle_images_vehicle ON vehicle_images(vehicle_id);

-- =============================================
-- ORDERS & PAYMENTS
-- =============================================

CREATE TYPE order_status AS ENUM (
  'inquiry',
  'quoted',
  'deposit_pending',
  'deposit_paid',
  'in_escrow',
  'vehicle_ordered',
  'in_transit',
  'arrived_kampala',
  'ready_for_inspection',
  'inspection_approved',
  'final_payment_pending',
  'final_payment_paid',
  'completed',
  'cancelled',
  'refunded'
);

CREATE TYPE order_type AS ENUM ('retail', 'pre_order', 'corporate');

CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_number TEXT UNIQUE NOT NULL,
  
  -- Relationships
  user_id UUID NOT NULL REFERENCES profiles(id),
  vehicle_id UUID NOT NULL REFERENCES vehicles(id),
  
  -- Order Details
  type order_type DEFAULT 'retail',
  status order_status DEFAULT 'inquiry',
  
  -- Pricing
  vehicle_price DECIMAL(15,2) NOT NULL,
  deposit_amount DECIMAL(15,2) NOT NULL,
  final_amount DECIMAL(15,2) NOT NULL,
  total_amount DECIMAL(15,2) NOT NULL,
  
  -- Timeline
  deposit_paid_at TIMESTAMPTZ,
  final_paid_at TIMESTAMPTZ,
  estimated_delivery DATE,
  actual_delivery DATE,
  
  -- Documents
  invoice_url TEXT,
  contract_url TEXT,
  
  -- Notes
  customer_notes TEXT,
  internal_notes TEXT,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_number ON orders(order_number);

-- =============================================
-- ESCROW SYSTEM (Fortune 500 Feature!)
-- =============================================

CREATE TYPE escrow_status AS ENUM (
  'pending',
  'deposited',
  'vehicle_received',
  'inspection_passed',
  'released',
  'refunded'
);

CREATE TABLE escrow (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID UNIQUE NOT NULL REFERENCES orders(id),
  
  -- Lawyer Details
  lawyer_name TEXT NOT NULL,
  lawyer_email TEXT NOT NULL,
  lawyer_phone TEXT NOT NULL,
  law_firm TEXT NOT NULL,
  
  -- Escrow Account
  account_number TEXT NOT NULL,
  bank_name TEXT NOT NULL,
  
  -- Amount
  amount DECIMAL(15,2) NOT NULL,
  currency TEXT DEFAULT 'UGX',
  
  -- Status
  status escrow_status DEFAULT 'pending',
  
  -- Timeline
  deposited_at TIMESTAMPTZ,
  released_at TIMESTAMPTZ,
  
  -- Documents
  agreement_url TEXT,
  release_form_url TEXT,
  
  -- Notes
  notes TEXT,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- ANALYTICS & TRACKING
-- =============================================

CREATE TABLE page_views (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  path TEXT NOT NULL,
  user_agent TEXT,
  referrer TEXT,
  country TEXT,
  city TEXT,
  user_id UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_page_views_path_date ON page_views(path, created_at);

-- =============================================
-- ROW LEVEL SECURITY (RLS)
-- =============================================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE escrow ENABLE ROW LEVEL SECURITY;

-- Users can read their own profile
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Everyone can view published vehicles
CREATE POLICY "Public vehicles are viewable" ON vehicles
  FOR SELECT USING (status != 'unavailable');

-- Only admins can modify vehicles
CREATE POLICY "Admins can modify vehicles" ON vehicles
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role IN ('admin', 'sales_agent')
    )
  );

-- Users can view their own orders
CREATE POLICY "Users can view own orders" ON orders
  FOR SELECT USING (
    user_id = auth.uid() OR
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role IN ('admin', 'sales_agent')
    )
  );
```

---

### Premium Design System

#### [NEW] [src/app/globals.css](file:///c:/Users/LENOVO/Desktop/car_import_business/src/app/globals.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* =============================================
   PREMIUM GLASSMORPHISM COMPONENTS
   ============================================= */

@layer components {
  /* Glass Card - Fortune 500 Premium Feel */
  .glass-card {
    @apply relative overflow-hidden rounded-2xl border border-white/10;
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .glass-card:hover {
    @apply border-brand-400/50;
    background: rgba(15, 23, 42, 0.8);
    transform: translateY(-4px);
    box-shadow: 0 20px 60px rgba(59, 130, 246, 0.3);
  }
  
  /* Glass Button */
  .glass-button {
    @apply relative overflow-hidden rounded-xl border border-brand-400/30 px-8 py-4;
    @apply font-semibold text-white transition-all duration-300;
    background: rgba(59, 130, 246, 0.2);
    backdrop-filter: blur(8px);
  }
  
  .glass-button:hover {
    @apply border-brand-400/60;
    background: rgba(59, 130, 246, 0.4);
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  }
  
  /* Premium Gradient Text */
  .gradient-text {
    @apply bg-gradient-to-r from-brand-400 to-accent-400;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  /* Executive Dashboard Card */
  .dashboard-card {
    @apply glass-card p-6;
    @apply transition-transform duration-300 hover:scale-105;
  }
  
  /* Premium Input */
  .premium-input {
    @apply w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3;
    @apply text-white placeholder-white/50;
    @apply backdrop-blur-sm transition-all;
    @apply focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/50;
  }
}

/* =============================================
   CUSTOM ANIMATIONS
   ============================================= */

@layer utilities {
  .animate-shimmer {
    animation: shimmer 2s linear infinite;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
  }
  
  .perspective-1000 {
    perspective: 1000px;
  }
  
  .preserve-3d {
    transform-style: preserve-3d;
  }
}

/* =============================================
   TYPOGRAPHY - Fortune 500 Level
   ============================================= */

@layer base {
  h1 {
    @apply text-h1 font-heading font-bold tracking-tight;
  }
  
  h2 {
    @apply text-h2 font-heading font-bold tracking-tight;
  }
  
  h3 {
    @apply text-h3 font-heading font-semibold;
  }
  
  p {
    @apply text-base leading-relaxed;
  }
}

/* Dark mode optimizations */
@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 15, 23, 42;
    --background-end-rgb: 0, 0, 0;
  }
}

/* Loading States */
.skeleton {
  @apply animate-pulse bg-gradient-to-r from-gray-800 to-gray-700;
}
```

---

## Fortune 500-Level Features

### 1. AI-Powered Vehicle Recommendations

##### [NEW] [src/lib/ai/recommendation-engine.ts](file:///c:/Users/LENOVO/Desktop/car_import_business/src/lib/ai/recommendation-engine.ts)

```typescript
/**
 * AI Recommendation Engine
 * Uses collaborative filtering + content-based filtering
 * Fortune 500-level personalization
 */

import { Vehicle, UserPreferences } from '@/types';

export class RecommendationEngine {
  /**
   * Generate personalized vehicle recommendations
   */
  async getRecommendations(
    userId: string,
    userPreferences: UserPreferences,
    limit: number = 10
  ): Promise<Vehicle[]> {
    // 1. Analyze user behavior (view history, saved vehicles)
    const userBehavior = await this.analyzeUserBehavior(userId);
    
    // 2. Content-based filtering (match features)
    const contentScore = this.calculateContentScore(userPreferences);
    
    // 3. Collaborative filtering (similar users liked...)
    const collaborativeScore = await this.calculateCollaborativeScore(userId);
    
    // 4. Combine scores with weights
    const finalScores = this.combineScores({
      content: contentScore,
      collaborative: collaborativeScore,
      trending: await this.getTrendingScore(),
      availability: this.getAvailabilityBoost(),
    });
    
    // 5. Return top N recommendations
    return this.rankAndReturn(finalScores, limit);
  }
  
  /**
   * Predict likelihood of purchase
   * Executive-level analytics
   */
  async predictPurchaseProbability(
    userId: string,
    vehicleId: string
  ): Promise<number> {
    const factors = {
      viewDuration: await this.getAverageViewDuration(userId, vehicleId),
      priceAffinity: this.calculatePriceMatch(userId, vehicleId),
      featureMatch: this.calculateFeatureMatch(userId, vehicleId),
      urgency: this.calculateUrgencyScore(vehicleId),
    };
    
    // ML model would go here
    // For now, weighted average
    return (
      factors.viewDuration * 0.3 +
      factors.priceAffinity * 0.3 +
      factors.featureMatch * 0.25 +
      factors.urgency * 0.15
    );
  }
  
  private async analyzeUserBehavior(userId: string) {
    // Implementation: Query page views, saved vehicles, orders
    return {};
  }
  
  private calculateContentScore(preferences: UserPreferences) {
    // Implementation: Match user preferences to vehicle features
    return new Map<string, number>();
  }
  
  private async calculateCollaborative Score(userId: string) {
    // Implementation: Find similar users, aggregate their preferences
    return new Map<string, number>();
  }
  
  private async getTrendingScore() {
    // Implementation: Popular vehicles in last 7 days
    return new Map<string, number>();
  }
  
  private getAvailabilityBoost() {
    // Boost in-stock vehicles
    return new Map<string, number>();
  }
  
  private combineScores(scores: Record<string, Map<string, number>>) {
    // Implementation: Weighted combination
    return new Map<string, number>();
  }
  
  private rankAndReturn(scores: Map<string, number>, limit: number): Promise<Vehicle[]> {
    // Implementation: Sort and fetch top vehicles
    return Promise.resolve([]);
  }
  
  private async getAverageViewDuration(userId: string, vehicleId: string): Promise<number> {
    return 0.5; // Placeholder
  }
  
  private calculatePriceMatch(userId: string, vehicleId: string): number {
    return 0.7; // Placeholder
  }
  
  private calculateFeatureMatch(userId: string, vehicleId: string): number {
    return 0.8; // Placeholder
  }
  
  private calculateUrgencyScore(vehicleId: string): number {
    return 0.6; // Placeholder
  }
}
```

### 2. Executive Dashboard Component

##### [NEW] [src/components/corporate/ExecutiveDashboard.tsx](file:///c:/Users/LENOVO/Desktop/car_import_business/src/components/corporate/ExecutiveDashboard.tsx)

```tsx
/**
 * Executive Dashboard
 * C-Suite level analytics and KPIs
 * Fortune 500 visual design
 */

'use client';

import { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, DollarSign, Package, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface DashboardMetrics {
  totalRevenue: number;
  vehiclesSold: number;
  activeLeads: number;
  averageDealSize: number;
  revenueGrowth: number;
  conversionRate: number;
}

export function ExecutiveDashboard() {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [timeframe, setTimeframe] = useState<'7d' | '30d' | '90d' | 'ytd'>('30d');
  
  useEffect(() => {
    // Fetch real-time metrics
    fetchDashboardMetrics(timeframe).then(setMetrics);
  }, [timeframe]);
  
  if (!metrics) {
    return <DashboardSkeleton />;
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="gradient-text text-4xl font-bold">Executive Command Center</h1>
          <p className="mt-2 text-slate-400">Real-time business intelligence</p>
        </div>
        
        {/* KPI Cards */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            label="Total Revenue"
            value={`UGX ${formatCurrency(metrics.totalRevenue)}`}
            change={metrics.revenueGrowth}
            icon={<DollarSign className="h-8 w-8" />}
            color="from-green-500 to-emerald-600"
          />
          <MetricCard
            label="Vehicles Sold"
            value={metrics.vehiclesSold}
            icon={<Package className="h-8 w-8" />}
            color="from-blue-500 to-cyan-600"
          />
          <MetricCard
            label="Active Leads"
            value={metrics.activeLeads}
            icon={<Users className="h-8 w-8" />}
            color="from-purple-500 to-pink-600"
          />
          <MetricCard
            label="Conversion Rate"
            value={`${(metrics.conversionRate * 100).toFixed(1)}%`}
            icon={<TrendingUp className="h-8 w-8" />}
            color="from-orange-500 to-red-600"
          />
        </div>
        
        {/* Charts */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ChartCard title="Revenue Trend">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={generateMockData()}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="date" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                  }}
                />
                <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
          
          <ChartCard title="Sales by Category">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={generateCategoryData()}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="category" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="sales" fill="#10B981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, change, icon, color }: any) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className="dashboard-card"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-400">{label}</p>
          <p className="mt-2 text-3xl font-bold text-white">{value}</p>
          {change !== undefined && (
            <p className={`mt-1 text-sm ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {change >= 0 ? '+' : ''}{change.toFixed(1)}% vs last period
            </p>
          )}
        </div>
        <div className={`rounded-xl bg-gradient-to-br p-3 ${color}`}>
          {icon}
        </div>
      </div>
    </motion.div>
  );
}

function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass-card p-6">
      <h3 className="mb-4 text-xl font-semibold text-white">{title}</h3>
      {children}
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="skeleton h-96 w-full rounded-2xl" />
    </div>
  );
}

// Helper functions
function fetchDashboardMetrics(timeframe: string): Promise<DashboardMetrics> {
  // In production, this would call your API
  return Promise.resolve({
    totalRevenue: 1250000000, // UGX 1.25 billion
    vehiclesSold: 47,
    activeLeads: 128,
    averageDealSize: 26595744,
    revenueGrowth: 23.5,
    conversionRate: 0.367,
  });
}

function formatCurrency(amount: number): string {
  return (amount / 1000000).toFixed(1) + 'M';
}

function generateMockData() {
  return [
    { date: 'Jan', revenue: 850000000 },
    { date: 'Feb', revenue: 920000000 },
    { date: 'Mar', revenue: 1100000000 },
    { date: 'Apr', revenue: 1250000000 },
  ];
}

function generateCategoryData() {
  return [
    { category: 'SUVs', sales: 28 },
    { category: 'Sedans', sales: 12 },
    { category: 'Pickups', sales: 7 },
  ];
}
```

---

## Verification Plan

### Automated Testing

#### Unit Tests
```bash
# Run after implementing each component
npm test

# Test coverage should be > 80%
npm run test:coverage
```

#### Integration Tests
```bash
# Test API endpoints
npm run test:integration

# Test database operations
npm run test:db
```

### Manual Testing Checklist

**Homepage:**
- [ ] Hero section loads with glassmorphism effect
- [ ] Page load time < 2 seconds
- [ ] All animations are smooth (60fps)
- [ ] Mobile responsive (test on iPhone/Android)

**Vehicle Listings:**
- [ ] Search returns results < 500ms
- [ ] Filters work correctly
- [ ] Images load progressively (blur-up effect)
- [ ] 3D viewer renders smoothly

**Corporate Portal:**
- [ ] Dashboard loads real-time metrics
- [ ] Charts render correctly
- [ ] Export functionality works (PDF/Excel)
- [ ] Permission-based access control works

**Payment Flow:**
- [ ] Flutterwave integration works
- [ ] Mobile money payment successful
- [ ] Email confirmations sent
- [ ] Escrow system creates records

### Performance Testing

```bash
# Lighthouse audit (target scores)
- Performance: > 95
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 95

# Load testing
npm run test:load

# Target: Handle 1000 concurrent users
```

### Security Testing

- [ ] SQL injection tests pass
- [ ] XSS protection verified
- [ ] CSRF tokens working
- [ ] Rate limiting active
- [ ] HTTPS enforced
- [ ] Supabase RLS policies enforced

---

## Deployment Strategy

### Vercel (Frontend)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod

# Environment variables (set in Vercel dashboard)
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

### Render (Backend - 512MB Instance)

**render.yaml:**
```yaml
services:
  - type: web
    name: aj2-motors-backend
    env: node
    region: frankfurt # or singapore (closer to Uganda)
    plan: free # 512MB RAM
    buildCommand: npm install && npm run build
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: DATABASE_URL
        sync: false
      - key: SUPABASE_URL
        sync: false
      - key: SUPABASE_SERVICE_KEY
        sync: false
```

**Memory Optimization Tips:**
- Use Node.js --max-old-space-size=460 flag
- Implement aggressive caching
- Offload heavy processing to Supabase functions
- Use serverless Vercel functions for non-critical APIs

---

## Success Criteria

### Phase 1 (MVP - 8 weeks)
- [ ] Platform loads < 2s globally
- [ ] 10+ vehicles listed with full details
- [ ] AI chatbot responds < 1s
- [ ] Mobile-responsive (100% pages)
- [ ] Payment integration working
- [ ] Admin panel functional

### Phase 2 (Growth - 16 weeks)
- [ ] 50+ vehicles in inventory
- [ ] Corporate portal live
- [ ] 5+ Fortune 500 companies signed up
- [ ] $1M+ in sales tracked
- [ ] Mobile apps published
- [ ] API for partners launched

### Fortune 500 Level (12 months)
- [  ] 1000+ vehicles/year throughput
- [ ] 99.99% uptime
- [ ] < 1.5s avg page load
- [ ] 70+ NPS score
- [ ] $10M+ annual revenue
- [ ] Multi-country operations live

---

## Next Steps

1. **Approve this plan** - Review and provide feedback
2. **Set up infrastructure** - Vercel + Render + Supabase accounts
3. **Begin Phase 1 development** - Start with core platform
4. **Weekly progress reviews** - Track against Fortune 500 benchmarks
5. **Launch in 8 weeks** - Ship MVP, iterate based on data

**The godfather has spoken. Time to build the future of African automotive commerce.** 🚗⚡
