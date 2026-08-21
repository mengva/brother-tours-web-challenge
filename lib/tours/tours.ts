import { cache } from 'react';
import { tours } from '@/data/tour';

// Cache for Next.js Request Memoization
export const getTourBySlug = cache(async (slug: string) => {
    return tours.find(
        (tour) => tour.id === slug || tour.title === slug
    );
});