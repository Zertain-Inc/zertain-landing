import Navigation from '@/components/sections/navigation';
import HeroSection from '@/components/sections/hero';
import { FeaturesSection } from '@/components/sections/features';
import { StatisticsSection } from '@/components/sections/stats';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { Footer } from '@/components/sections/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3B1D6B] to-[#4A6CF7]">
      <Navigation />
      <main className="relative">
        <HeroSection />
        <FeaturesSection />
        {/* <StatisticsSection />        */}
      </main>
      <Footer />
    </div>
  );
}