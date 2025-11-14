import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import SalePopup from "@/components/SalePopUp";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VideoSection />
      <GallerySection />
      <CTASection />
      <SalePopup />
    </div>
  );
}
