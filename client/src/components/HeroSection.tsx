import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@assets/generated_images/Christmas_felt_crafts_hero_image_d3ecafa3.png";

export default function HeroSection() {
  const scrollToContent = () => {
    const contentSection = document.getElementById("conteudo-principal");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          300 Moldes de Natal em Feltro
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed drop-shadow-md max-w-3xl mx-auto">
          Transforme seu Natal com criações artesanais únicas. Padrões exclusivos para todos os níveis de habilidade.
        </p>
        <Button
          size="lg"
          onClick={scrollToContent}
          data-testid="button-scroll-content"
          className="text-lg px-12 py-6 bg-primary/90 hover:bg-primary backdrop-blur-sm border border-primary-border"
        >
          Ver os Moldes
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-white/70" />
      </div>
    </section>
  );
}
