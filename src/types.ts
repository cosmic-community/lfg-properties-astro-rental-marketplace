// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type_slug: string;
  created_at: string;
  modified_at: string;
  status: string;
  thumbnail?: string;
  published_at: string;
}

// Property types with proper metadata structure
export interface Property extends CosmicObject {
  type_slug: 'properties';
  metadata: {
    property_name: string;
    description: string;
    price_per_night: number;
    max_guests: number;
    bedrooms: number;
    bathrooms: number;
    property_images: PropertyImage[];
    host?: Host;
    location?: Location;
    category?: Category;
    amenities: string[];
    available: boolean;
    rating?: number;
  };
}

export interface Host extends CosmicObject {
  type_slug: 'hosts';
  metadata: {
    host_name: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    } | null;
    bio: string;
    email: string;
    phone?: string;
    member_since: string;
    verified: boolean;
    response_rate?: number;
  };
}

export interface Location extends CosmicObject {
  type_slug: 'locations';
  metadata: {
    city: string;
    state: string;
    country: string;
    description?: string;
  };
}

export interface Category extends CosmicObject {
  type_slug: 'categories';
  metadata: {
    category_name: string;
    description?: string;
    icon?: string;
  };
}

export interface Review extends CosmicObject {
  type_slug: 'reviews';
  metadata: {
    property?: Property;
    guest_name: string;
    rating: number;
    review_text: string;
    stay_date: string;
  };
}

export interface Booking extends CosmicObject {
  type_slug: 'bookings';
  metadata: {
    property?: Property;
    guest_name: string;
    guest_email: string;
    checkin_date: string;
    checkout_date: string;
    number_of_guests: number;
    total_price: number;
    status: {
      key: BookingStatus;
      value: string;
    };
  };
}

// Type literals for select-dropdown values
export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

// Property image interface
export interface PropertyImage {
  url: string;
  imgix_url: string;
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Utility types
export type OptionalMetadata<T extends CosmicObject> = Partial<T['metadata']>;
export type CreatePropertyData = Omit<Property, 'id' | 'created_at' | 'modified_at' | 'status' | 'published_at'>;

// Type guards for runtime validation
export function isProperty(obj: CosmicObject): obj is Property {
  return obj.type_slug === 'properties';
}

export function isHost(obj: CosmicObject): obj is Host {
  return obj.type_slug === 'hosts';
}

export function isLocation(obj: CosmicObject): obj is Location {
  return obj.type_slug === 'locations';
}

export function isCategory(obj: CosmicObject): obj is Category {
  return obj.type_slug === 'categories';
}

export function isReview(obj: CosmicObject): obj is Review {
  return obj.type_slug === 'reviews';
}

export function isBooking(obj: CosmicObject): obj is Booking {
  return obj.type_slug === 'bookings';
}