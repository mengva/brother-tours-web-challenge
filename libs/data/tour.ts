import { TourDto } from "@/types/tour"
import { Award, HeartHandshake, ShieldCheck } from "lucide-react"

export const tours: TourDto[] = [
    {
        id: 'a1b2c3d4-0001-4e5f-8a9b-1234567890ab',
        title: '10-Day Laos Cultural Discovery',
        image: 'https://images.unsplash.com/photo-1540611025311-01df3cef54b5?auto=format&fit=crop&w=800&q=80',
        location: 'Luang Prabang, Vang Vieng, Vientiane',
        duration: '10 Days',
        rating: 4.9,
        reviews: 128,
        price: '$1,250',
        description: 'Immerse yourself in the rich culture, stunning limestone karsts, and ancient temples of Laos across three iconic cities.',
        highlights: [
            'Morning Alms Giving ceremony in Luang Prabang',
            'Kuang Si Waterfalls & Bear Sanctuary',
            'Sunset Mekong River cruise',
            'Nam Song River kayaking in Vang Vieng'
        ],
        itinerary: [
            { day: 1, title: 'Arrival in Luang Prabang & Night Market' },
            { day: 2, title: 'Kuang Si Falls & Mount Phousi Sunset' },
            { day: 3, title: 'Pak Ou Caves & Speed Train to Vang Vieng' },
            { day: 4, title: 'Vang Vieng Lagoon & Karst Explorations' },
            { day: 5, title: 'Travel to Vientiane & Pha That Luang' }
        ]
    },
    {
        id: 'a1b2c3d4-0002-4e5f-8a9b-1234567890ab',
        title: 'Vang Vieng Adventure & Nature Escape',
        image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80',
        location: 'Vang Vieng, Laos',
        duration: '4 Days',
        rating: 4.8,
        reviews: 86,
        price: '$450',
        description: 'Experience an action-packed getaway through Vang Vieng’s famous turquoise lagoons, limestone caves, and scenic riverways.',
        highlights: [
            'Hot air balloon ride over Vang Vieng karsts',
            'Kayaking & tubing along Nam Song River',
            'Exploring Blue Lagoon 1 & Tham Phu Kham Cave',
            'Hiking up Nam Xay Viewpoint'
        ],
        itinerary: [
            { day: 1, title: 'Arrival & Nam Song River Sunset Kayaking' },
            { day: 2, title: 'Nam Xay Viewpoint & Blue Lagoon 1' },
            { day: 3, title: 'Tham Chang Cave & Hot Air Balloon Ride' },
            { day: 4, title: 'Morning Local Market & Departure' }
        ]
    },
    {
        id: 'a1b2c3d4-0003-4e5f-8a9b-1234567890ab',
        title: 'Southern Laos & 4,000 Islands Heritage',
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
        location: 'Pakse, Champasak, Don Det',
        duration: '6 Days',
        rating: 5.0,
        reviews: 42,
        price: '$790',
        description: 'Discover the peaceful beauty of Southern Laos, from the lush Bolaven Plateau waterfalls to the serene islands of the Mekong River.',
        highlights: [
            'Wat Phou UNESCO World Heritage Site',
            'Khone Phapheng Waterfalls',
            'Coffee tasting at Bolaven Plateau',
            'Dolphin watching & relaxing on Don Det'
        ],
        itinerary: [
            { day: 1, title: 'Arrival in Pakse & Bolaven Plateau Waterfalls' },
            { day: 2, title: 'Wat Phou Temple Exploration in Champasak' },
            { day: 3, title: 'Ferry to 4,000 Islands (Si Phan Don)' },
            { day: 4, title: 'Khone Phapheng Falls & Bicycle Tour on Don Det' },
            { day: 5, title: 'Mekong River Sunset & Irrawaddy Dolphin Spotting' },
            { day: 6, title: 'Return to Pakse for Departure' }
        ]
    },
    {
        id: 'a1b2c3d4-0004-4e5f-8a9b-1234567890ab',
        title: 'Hanoi & Ha Long Bay Explorer',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
        location: 'Hanoi, Ha Long Bay, Vietnam',
        duration: '5 Days',
        rating: 4.7,
        reviews: 203,
        price: '$620',
        description: 'Combine the vibrant street life and rich history of Hanoi with an unforgettable overnight cruise through the emerald waters of Ha Long Bay.',
        highlights: [
            'Overnight luxury cruise in Ha Long Bay',
            'Hanoi Old Quarter street food walking tour',
            'Kayaking through Luon Cave',
            'Visiting Ho Chi Minh Mausoleum & Temple of Literature'
        ],
        itinerary: [
            { day: 1, title: 'Arrival in Hanoi & Old Quarter Food Tour' },
            { day: 2, title: 'Transfer to Ha Long Bay & Board Overnight Cruise' },
            { day: 3, title: 'Sung Sot Cave Kayaking & Return to Hanoi' },
            { day: 4, title: 'Hanoi City Highlights & Water Puppet Show' },
            { day: 5, title: 'Morning Coffee at Train Street & Departure' }
        ]
    },
    {
        id: 'a1b2c3d4-0005-4e5f-8a9b-1234567890ab',
        title: 'Chiang Mai Hilltribe & Elephant Sanctuary',
        image: 'https://images.unsplash.com/photo-1598935898639-81586f7d2129?auto=format&fit=crop&w=800&q=80',
        location: 'Chiang Mai, Thailand',
        duration: '3 Days',
        rating: 4.9,
        reviews: 157,
        price: '$310',
        description: 'Escape into northern Thailand’s misty mountains to interact ethically with rescued elephants and learn about indigenous hilltribe culture.',
        highlights: [
            'Ethical Elephant Nature Sanctuary visit & bathing',
            'Doi Suthep Temple at sunrise',
            'Local Karen Hilltribe village homestay',
            'Chiang Mai Night Bazaar exploration'
        ],
        itinerary: [
            { day: 1, title: 'Arrival & Wat Phra That Doi Suthep Visit' },
            { day: 2, title: 'Full Day Ethical Elephant Sanctuary & River Bathing' },
            { day: 3, title: 'Local Craft Village Tour & Departure' }
        ]
    },
    {
        id: 'a1b2c3d4-0006-4e5f-8a9b-1234567890ab',
        title: 'Angkor Wat Temple Explorer',
        image: 'https://images.unsplash.com/photo-1553618670-15c803f66e29?auto=format&fit=crop&w=800&q=80',
        location: 'Siem Reap, Cambodia',
        duration: '3 Days',
        rating: 4.9,
        reviews: 312,
        price: '$280',
        description: 'Uncover the wonders of the ancient Khmer Empire with a deep dive into Siem Reap’s famous temple complexes.',
        highlights: [
            'Sunrise at iconic Angkor Wat',
            'Exploring the roots of Ta Prohm (Tomb Raider Temple)',
            'Giant stone faces of Bayon Temple',
            'Tonle Sap Floating Village boat tour'
        ],
        itinerary: [
            { day: 1, title: 'Arrival in Siem Reap & Pub Street Market' },
            { day: 2, title: 'Angkor Wat Sunrise, Bayon & Ta Prohm Tour' },
            { day: 3, title: 'Tonle Sap Lake Kampong Phluk & Departure' }
        ]
    },
    {
        id: 'a1b2c3d4-0007-4e5f-8a9b-1234567890ab',
        title: 'Mekong Delta River Odyssey',
        image: 'https://images.unsplash.com/photo-1509923043586-71026f8c5c8f?auto=format&fit=crop&w=800&q=80',
        location: 'Can Tho, Vietnam',
        duration: '7 Days',
        rating: 4.6,
        reviews: 74,
        price: '$980',
        description: 'Travel along the fertile waterways of Vietnam’s Mekong Delta, visiting floating markets, tropical orchards, and riverside villages.',
        highlights: [
            'Cai Rang Floating Market early morning boat trip',
            'Cycling through coconut groves in Ben Tre',
            'Sampan ride in Tra Su Cajuput Forest',
            'Homestay experience with local fruit farmers'
        ],
        itinerary: [
            { day: 1, title: 'Ho Chi Minh City to Ben Tre Riverside' },
            { day: 2, title: 'Coconut Workshops & Travel to Can Tho' },
            { day: 3, title: 'Cai Rang Floating Market & Fruit Orchards' },
            { day: 4, title: 'Chau Doc Border Town & Tra Su Forest' },
            { day: 5, title: 'Sam Mountain Sunset & River Cruising' },
            { day: 6, title: 'Local Cooking Class & Craft Workshops' },
            { day: 7, title: 'Return Journey & Departure' }
        ]
    },
    {
        id: 'a1b2c3d4-0008-4e5f-8a9b-1234567890ab',
        title: 'Bangkok to Phnom Penh Grand Loop',
        image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
        location: 'Bangkok, Phnom Penh',
        duration: '12 Days',
        rating: 4.8,
        reviews: 91,
        price: '$1,540',
        description: 'An epic cross-border journey connecting Thailand’s bustling capital, Cambodia’s ancient ruins, and the historic charm of Phnom Penh.',
        highlights: [
            'Bangkok Grand Palace & Wat Arun',
            'Border crossing to Siem Reap & Angkor Wat',
            'Phnom Penh Royal Palace & Tuol Sleng Museum',
            'Mekong River Sunset Dinner Cruise'
        ],
        itinerary: [
            { day: 1, title: 'Arrival in Bangkok & River Ferry Tour' },
            { day: 2, title: 'Grand Palace & Wat Pho Giant Reclining Buddha' },
            { day: 3, title: 'Overland Journey to Siem Reap, Cambodia' },
            { day: 4, title: 'Angkor Complex Full Day Exploration' },
            { day: 5, title: 'Banteay Srei & Cambodian Cultural Village' },
            { day: 6, title: 'Travel to Phnom Penh along the Mekong' },
            { day: 7, title: 'Phnom Penh Royal Palace & Silver Pagoda' },
            { day: 8, title: 'National Museum & Central Market Shopping' },
            { day: 9, title: 'Silk Island Cycling & Sunset Cruise' },
            { day: 10, title: 'Historical Heritage Tour & Killing Fields' },
            { day: 11, title: 'Leisure Day & Evening Khmer Dining' },
            { day: 12, title: 'Final Souvenir Shopping & Departure' }
        ]
    }
];

export const features = [
    {
        icon: Award,
        title: 'Expert Local Guides',
        desc: 'Our local guides bring history, culture, and hidden gems to life for an unforgettable journey.'
    },
    {
        icon: ShieldCheck,
        title: 'Tailor-Made Experience',
        desc: 'Customized itineraries designed around your preferences, group size, and travel pace.'
    },
    {
        icon: HeartHandshake,
        title: 'Sustainable Tourism',
        desc: 'We support local communities and protect nature to preserve authentic beauty.'
    }
]