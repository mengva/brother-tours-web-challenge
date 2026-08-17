
import HeroSectionPage from '@/components/home/HeroSection';
import FeaturesPage from '@/components/home/Features';
import FeaturesTourPage from '@/components/home/FeaturesTour';
import CtaPage from '@/components/home/CTA';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* 1. HERO SECTION */}
      <HeroSectionPage />

      {/* 2. WHY CHOOSE US */}
      <FeaturesPage />

      {/* 3. FEATURED TOURS */}
      <FeaturesTourPage />

      {/* 4. CALL TO ACTION (CTA) */}
      <CtaPage />

    </div>
  );
}