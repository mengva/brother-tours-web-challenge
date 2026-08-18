// export interface DestinationDto {
//   slug: string;
//   name: string;
//   image: string;
//   tourCount: number;
//   popularSpots: string;
// }

export interface DestinationDto {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  tourCount: number;
  popularSpots: string[];
}