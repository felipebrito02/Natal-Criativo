import { Button } from "@/components/ui/button";
import { Download, Shield, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Download,
    title: "Download Instantâneo",
    description: "Acesso imediato ao PDF após a compra",
  },
  {
    icon: Shield,
    title: "Pagamento Seguro",
    description: "Proteção total em sua transação",
  },
  {
    icon: Clock,
    title: "Acesso Vitalício",
    description: "Use os moldes sempre que quiser",
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Moldes profissionais e detalhados",
  },
];

export default function CTASection() {
  const handlePurchaseClick = () => {
    console.log("Botão de compra clicado");
    window.open("https://pay.kiwify.com.br/zvXvH87", "_blank");
  };

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground">
            Comece Hoje Mesmo
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Não perca a oportunidade de criar decorações natalinas únicas e
            especiais. Com 300 moldes exclusivos, as possibilidades são
            infinitas para tornar seu Natal mágico e memorável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-card"
              data-testid={`feature-${index}`}
            >
              <div className="p-3 rounded-full bg-accent/10 text-accent">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-6 pt-8">
          <div className="inline-block">
            <div className="text-center mb-4">
              <div className="text-sm text-muted-foreground line-through mb-1">
                De R$ 49,90
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary font-serif">
                R$ 14,90
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Oferta por tempo limitado
              </div>
            </div>
          </div>

          <Button
            size="lg"
            onClick={handlePurchaseClick}
            data-testid="button-purchase"
            className="text-xl px-16 py-8 rounded-full shadow-xl"
          >
            Adquirir Agora
          </Button>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4 text-accent" />
            <span>Compra 100% segura e garantida</span>
          </div>
        </div>
      </div>
    </section>
  );
}
