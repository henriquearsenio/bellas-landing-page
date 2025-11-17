import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Juliana Santos",
      role: "Nail Designer",
      content: "Revolucionou meu studio! Agora meus clientes agendam sozinhos pelo WhatsApp. Economizo horas todo dia e nunca mais tive conflito de agenda.",
      rating: 5,
    },
    {
      name: "Mariana Silva",
      role: "Lash Designer",
      content: "A IA atende melhor que eu! Responde na hora, não esquece detalhes e meus clientes adoram a praticidade. Não vivo mais sem.",
      rating: 5,
    },
    {
      name: "Patricia Lima",
      role: "Studio Owner",
      content: "Meu faturamento aumentou 40%! Com a IA atendendo 24/7, capturo clientes que antes desistiam por não ter resposta rápida.",
      rating: 5,
    },
    {
      name: "Amanda Costa",
      role: "Nail & Lash Artist",
      content: "Simples e poderoso. Configurei em minutos e já estava funcionando. Meus clientes elogiam o atendimento rápido pelo WhatsApp.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Não acredite apenas na nossa palavra
          </h2>
          <p className="text-muted-foreground text-lg">
            Veja o que profissionais da beleza estão dizendo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-card-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
