import Footer from "./_components/layout/Footer";
import Navbar from "./_components/layout/Navbar";
import Explore from "./_components/shared/Explore";
import FAQ from "./_components/widgets/FAQ";
import FeaturedProperties from "./_components/widgets/FeaturedProperties";
import HeroSection from "./_components/widgets/Hero";
import Testimonials from "./_components/widgets/Testimonials";
export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProperties />
      <Testimonials />
      <FAQ />
      <Explore />
    </>
  );
}
