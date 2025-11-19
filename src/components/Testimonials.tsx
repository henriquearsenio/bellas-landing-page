import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carla Mendes",
      role: "Nail Designer",
      content: "Antes eu perdia muito tempo respondendo mensagens fora do horário. Agora minhas clientes conseguem marcar sozinhas, e eu só vejo a agenda pronta no dia seguinte.",
      rating: 5,
    },
    {
      name: "Tatiane Rocha",
      role: "Lash Designer",
      content: "Eu não imaginava que seria tão fácil. Configurei em poucos minutos e já no primeiro dia tive cliente marcando horário sem precisar falar comigo.",
      rating: 5,
    },
    {
      name: "Luana Ribeiro",
      role: "Nail Designer",
      content: "O que mais gosto é que minhas clientes elogiam a rapidez. Elas mandam mensagem e já recebem resposta, sem esperar eu estar online.",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Histórias de sucesso que inspiram
          </h2>
          <p className="text-muted-foreground text-lg">
            Descubra como o <em>bellas!</em> transformou a rotina de Designers como você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto justify-center">
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