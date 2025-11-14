import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Check, Clock, Gift } from "lucide-react";

const included = [
  "300+ Moldes de Feltro em Alta Qualidade",
  "Download Instantâneo em PDF",
  "Padrões Para Iniciantes e Experientes",
  "Instruções Claras e Fáceis de Seguir",
  "Moldes Prontos Para Imprimir",
];

const bonuses = [
  <>
    <strong>
      🎁 BÔNUS: Vídeo Aulas Exclusivas (
      <span className="line-through">R$ 97,00</span>)
    </strong>
  </>,
];

export default function CTASection() {
  return (
    <section
      id="oferta"
      className="py-20 px-4 bg-gradient-to-b from-red-50 to-green-50"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full mb-6">
            <Clock className="w-5 h-5" />
            <span>Oferta por Tempo Limitado!</span>
          </div>

          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Comece Hoje Mesmo!
          </h2>
          <p className="text-xl text-gray-600">
            Tudo o que você precisa em um único pacote
          </p>
        </div>

        <Card className="border-4 border-red-300 shadow-2xl">
          <CardContent className="p-8 md:p-12 space-y-8">
            <div className="text-center space-y-4">
              <div className="text-gray-500 line-through text-2xl">
                De R$ 49,90
              </div>
              <div className="text-5xl md:text-6xl text-red-600">R$ 14,90</div>
              <div className="text-gray-600">ou 3x de R$ 5,32</div>
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full">
                Economize R$ 35,00 hoje! 🎉
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl text-gray-900 flex items-center gap-2">
                <Check className="w-6 h-6 text-green-600" />O que está incluído:
              </h3>
              <div className="grid gap-3">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 bg-yellow-50 p-6 rounded-xl border-2 border-yellow-200">
              <h3 className="text-2xl text-gray-900 flex items-center gap-2 font-bold">
                <Gift className="w-6 h-6 text-red-600" />
                Bônus Exclusivos:
              </h3>
              <div className="space-y-2">
                {bonuses.map((bonus, index) => (
                  <div key={index} className="text-gray-700">
                    {bonus}
                  </div>
                ))}
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-red-600 hover:bg-red-700 text-xl py-8"
            >
              <a
                href="https://pay.kiwify.com.br/zvXvH87"
                target="_blank"
                rel="noopener noreferrer"
              >
                Garantir Meu E-book Agora! 🎄
              </a>
            </Button>

            <div className="text-center space-y-2 pt-4">
              <div className="flex items-center justify-center gap-2 text-green-600">
                <Check className="w-5 h-5" />
                <span>Acesso Imediato após o Pagamento</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-green-600">
                <Check className="w-5 h-5" />
                <span>Garantia de 7 Dias</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-green-600">
                <Check className="w-5 h-5" />
                <span>Pagamento 100% Seguro</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            ⚠️ Essa oferta especial expira em:{" "}
            <span className="text-red-600">23:47:32</span>
          </p>
        </div>
      </div>
    </section>
  );
}
