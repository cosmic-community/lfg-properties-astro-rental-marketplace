# 🏠 Test Branch Update

A modern, fast property rental marketplace built with Astro and powered by [Cosmic](https://www.cosmicjs.com). Experience lightning-fast page loads and seamless content management for your vacation rental business.

## ✨ Features

- 🚀 **Ultra-fast performance** with Astro's static site generation
- 🏠 **Property listings** with detailed information and image galleries
- 📍 **Location-based browsing** across different cities
- 🏷️ **Category filtering** (Entire Home, Private Room)
- 👤 **Host profiles** with verification badges
- ⭐ **Guest reviews** and ratings system
- 📅 **Booking management** with status tracking
- 📱 **Fully responsive** design with Tailwind CSS
- 🌐 **SEO optimized** with proper meta tags and structured data

## Clone this Bucket

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket to get started instantly:

[![Clone this Bucket](https://img.shields.io/badge/Clone%20this%20Bucket-4F46E5?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=lfg-production)

## 🛠️ Technologies Used

- [Astro](https://astro.build) - Static site generator
- [Cosmic](https://www.cosmicjs.com) - Headless CMS
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- [Cosmic SDK](https://www.cosmicjs.com/docs) - Content management

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the LFG Properties bucket

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd lfg-properties-astro
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Update `.env` with your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

5. Start the development server:
```bash
bun run dev
```

## 📚 Cosmic SDK Examples

### Fetching Properties with Related Data
```typescript
const properties = await cosmic.objects
  .find({ type: 'properties' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

### Getting Property by Slug
```typescript
const property = await cosmic.objects.findOne({
  type: 'properties',
  slug: propertySlug
}).depth(1);
```

### Filtering by Location
```typescript
const locationProperties = await cosmic.objects
  .find({ 
    type: 'properties',
    'metadata.location': locationId 
  })
  .depth(1);
```

## 🌐 Cosmic CMS Integration

This application leverages the following Cosmic object types:

- **Properties** - Main rental listings with images, pricing, and details
- **Hosts** - Property owner profiles with verification status
- **Locations** - Geographic areas (cities/regions)
- **Categories** - Property types (Entire Home, Private Room)
- **Reviews** - Guest feedback and ratings
- **Bookings** - Reservation management with status tracking

Each object type includes rich metadata and relationships, providing a complete content management solution for rental marketplaces.

## 🚀 Deployment Options

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy with automatic builds on git push

### Netlify
1. Connect repository to Netlify
2. Configure build settings: `bun run build`
3. Set environment variables in Netlify dashboard

### Other Static Hosts
Since this is an Astro static site, it can be deployed to any static hosting provider including GitHub Pages, Cloudflare Pages, or AWS S3.

For production deployment, ensure you set the required environment variables in your hosting platform's dashboard.
<!-- README_END -->