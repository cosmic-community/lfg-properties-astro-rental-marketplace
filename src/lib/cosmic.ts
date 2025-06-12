import { createBucketClient } from '@cosmicjs/sdk';
import type { Property, Host, Location, Category, Review, Booking, CosmicResponse } from '@/types';

if (!import.meta.env.COSMIC_BUCKET_SLUG) {
  throw new Error('COSMIC_BUCKET_SLUG environment variable is required');
}

if (!import.meta.env.COSMIC_READ_KEY) {
  throw new Error('COSMIC_READ_KEY environment variable is required');
}

export const cosmic = createBucketClient({
  bucketSlug: import.meta.env.COSMIC_BUCKET_SLUG,
  readKey: import.meta.env.COSMIC_READ_KEY,
  writeKey: import.meta.env.COSMIC_WRITE_KEY,
  apiEnvironment: "staging"
});

// Properties API functions
export async function getProperties(): Promise<Property[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'properties' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Property[];
  } catch (error) {
    if (error.status === 404) {
      return [];
    }
    console.error('Error fetching properties:', error);
    throw new Error('Failed to fetch properties');
  }
}

export async function getPropertyBySlug(slug: string): Promise<Property | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'properties',
      slug
    }).depth(1);
    
    const property = response.object as Property;
    
    if (!property || !property.metadata) {
      return null;
    }
    
    return property;
  } catch (error) {
    if (error.status === 404) {
      return null;
    }
    console.error('Error fetching property:', error);
    throw new Error('Failed to fetch property');
  }
}

export async function getPropertiesByLocation(locationId: string): Promise<Property[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'properties',
        'metadata.location': locationId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Property[];
  } catch (error) {
    if (error.status === 404) {
      return [];
    }
    console.error('Error fetching properties by location:', error);
    throw new Error('Failed to fetch properties by location');
  }
}

export async function getPropertiesByCategory(categoryId: string): Promise<Property[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'properties',
        'metadata.category': categoryId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Property[];
  } catch (error) {
    if (error.status === 404) {
      return [];
    }
    console.error('Error fetching properties by category:', error);
    throw new Error('Failed to fetch properties by category');
  }
}

// Locations API functions
export async function getLocations(): Promise<Location[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'locations' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects as Location[];
  } catch (error) {
    if (error.status === 404) {
      return [];
    }
    console.error('Error fetching locations:', error);
    throw new Error('Failed to fetch locations');
  }
}

export async function getLocationBySlug(slug: string): Promise<Location | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'locations',
      slug
    });
    
    return response.object as Location || null;
  } catch (error) {
    if (error.status === 404) {
      return null;
    }
    console.error('Error fetching location:', error);
    throw new Error('Failed to fetch location');
  }
}

// Categories API functions
export async function getCategories(): Promise<Category[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'categories' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects as Category[];
  } catch (error) {
    if (error.status === 404) {
      return [];
    }
    console.error('Error fetching categories:', error);
    throw new Error('Failed to fetch categories');
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'categories',
      slug
    });
    
    return response.object as Category || null;
  } catch (error) {
    if (error.status === 404) {
      return null;
    }
    console.error('Error fetching category:', error);
    throw new Error('Failed to fetch category');
  }
}

// Hosts API functions
export async function getHosts(): Promise<Host[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'hosts' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects as Host[];
  } catch (error) {
    if (error.status === 404) {
      return [];
    }
    console.error('Error fetching hosts:', error);
    throw new Error('Failed to fetch hosts');
  }
}

export async function getHostBySlug(slug: string): Promise<Host | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'hosts',
      slug
    });
    
    return response.object as Host || null;
  } catch (error) {
    if (error.status === 404) {
      return null;
    }
    console.error('Error fetching host:', error);
    throw new Error('Failed to fetch host');
  }
}

// Reviews API functions
export async function getReviews(): Promise<Review[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'reviews' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Review[];
  } catch (error) {
    if (error.status === 404) {
      return [];
    }
    console.error('Error fetching reviews:', error);
    throw new Error('Failed to fetch reviews');
  }
}

export async function getReviewsForProperty(propertyId: string): Promise<Review[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'reviews',
        'metadata.property': propertyId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Review[];
  } catch (error) {
    if (error.status === 404) {
      return [];
    }
    console.error('Error fetching reviews for property:', error);
    throw new Error('Failed to fetch reviews for property');
  }
}

// Bookings API functions
export async function getBookings(): Promise<Booking[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'bookings' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Booking[];
  } catch (error) {
    if (error.status === 404) {
      return [];
    }
    console.error('Error fetching bookings:', error);
    throw new Error('Failed to fetch bookings');
  }
}