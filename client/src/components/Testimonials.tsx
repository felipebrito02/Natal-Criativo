import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo, SP",
      text: "Comecei como hobby e hoje vendo 50+ peças por mês! Os moldes são perfeitos e fáceis de seguir.",
      rating: 5,
      revenue: "R$ 2.200/mês",
    },
    {
      name: "Ana Costa",
      location: "Rio de Janeiro, RJ",
      text: "Nunca tinha trabalhado com feltro antes. Com os tutoriais, em 1 semana já estava fazendo enfeites lindos!",
      rating: 5,
      revenue: "Iniciante",
    },
    {
      name: "Juliana Santos",
      location: "Belo Horizonte, MG",
      text: "Amei! E-book bem organizado e prático, me ajudou a produzir peças de feltro incríveis",
      rating: 5,
      revenue: "R$ 1.600/mês",
    },
    {
      name: "Carla Mendes",
      location: "Curitiba, PR",
      text: "Os moldes são super variados. Consigo atender todos os pedidos dos meus clientes. Vale muito a pena!",
      rating: 5,
      revenue: "R$ 1.100/mês",
    },
  ];

  return (
    <section className="mt-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
          O que nossas alunas dizem
        </h2>
        <p className="text-xl text-gray-600">
          Mais de 5.000 artesãs transformando feltro em sucesso
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-2">
            <CardContent className="p-6 space-y-4">
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>

              <div className="flex justify-between items-center pt-4 border-t">
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
                <div className="text-right">
                  <div className="text-green-600">{testimonial.revenue}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
