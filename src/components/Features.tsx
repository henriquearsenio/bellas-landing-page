import { MessageSquare, Calendar, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Recebe a mensagem",
      description: "Cliente envia mensagem no WhatsApp perguntando sobre serviços, preços, disponibilidade ou querendo agendar.",
    },
    {
      icon: Sparkles,
      title: "Agente IA responde",
      description: "Nossa IA entende o pedido, consulta sua agenda em tempo real, informa disponibilidade e ajuda o cliente.",
    },
    {
      icon: Calendar,
      title: "Agenda e confirma",
      description: "Agendamento confirmado automaticamente. Cliente e profissional recebem notificação. Tudo sincronizado.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Como funciona</h2>
          <p className="text-muted-foreground text-lg">Simples, rápido e 100% automatizado</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 h-full">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
              {index < features.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
