import { DestinationDto } from "@/types/destination";

export const destinations: DestinationDto[] = [
  {
    slug: "laos",
    name: "Laos",
    tagline: "Land of a Million Elephants",
    description:
      "Experience serene river cruises, ancient Buddhist temples, and untouched waterfalls across Luang Prabang, Vang Vieng, and Vientiane.",
    heroImage:
      "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?auto=format&fit=crop&w=1600&q=80",
    popularSpots: ["Luang Prabang", "Vang Vieng", "Vientiane", "Champasak"],
    tourCount: 10,
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    tagline: "Timeless Charm & Vibrant Landscapes",
    description:
      "From the emerald waters of Ha Long Bay to the lantern-lit streets of Hoi An, discover rich culture and breathtaking natural beauty.",
    heroImage:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1600&q=80",
    popularSpots: ["Hanoi", "Ha Long Bay", "Hoi An", "Mekong Delta"],
    tourCount: 8,
  },
  {
    slug: "thailand",
    name: "Thailand",
    tagline: "The Land of Smiles",
    description:
      "Explore ornate temples, bustling night markets, and paradise beaches from Chiang Mai in the north to the southern islands.",
    heroImage:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=80",
    popularSpots: ["Bangkok", "Chiang Mai", "Phuket", "Ayutthaya"],
    tourCount: 5,
  },
  {
    slug: "cambodia",
    name: "Cambodia",
    tagline: "Kingdom of Wonder",
    description:
      "Marvel at the grand temples of Angkor Wat, immerse yourself in Khmer history, and explore tranquil countryside life.",
    heroImage:
      "https://images.unsplash.com/photo-1553618670-15c803f66e29?auto=format&fit=crop&w=800&q=80",
    popularSpots: ["Siem Reap", "Angkor Wat", "Phnom Penh", "Battambang"],
    tourCount: 3,
  },
]