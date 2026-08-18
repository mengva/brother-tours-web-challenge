export interface ItineraryItemDto {
  day: number;
  title: string;
  description?: string;
}

export interface TourDto {
  id: string;
  title: string;
  image: string;
  location: string;
  duration: string;
  rating: number;
  reviews: number;
  price: string;
  description?: string;
  highlights?: string[];
  itinerary?: ItineraryItemDto[];
}