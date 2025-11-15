import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import SalePopup from "@/components/SalePopUp";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VideoSection />
      <CTASection />
      <Testimonials />
      <GallerySection />
      <SalePopup />
      <Footer />
    </div>
  );
}
