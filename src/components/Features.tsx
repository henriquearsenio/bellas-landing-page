import { MessageSquare, Calendar, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Sua cliente envia um 'oi' no WhatsApp",
      description: "Seja para agendar, tirar dúvidas sobre serviços ou preços, o bellas! está sempre pronto para atender.",
    },
    {
      icon: Sparkles,
      title: "O bellas! responde com seu toque de exclusividade",
      description: "Nossa inteligência artificial entende cada pedido, consulta sua agenda em tempo real e guia a cliente com carinho e eficiência.",
    },
    {
      icon: Calendar,
      title: "Agendamento confirmado, seu tempo livre!",
      description: "Com o bellas!, o agendamento é confirmado automaticamente, e você e sua cliente recebem a notificação. Tudo sincronizado, sem preocupações.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">A magia do <em>bellas!</em> em 3 passos</h2>
          <p className="text-muted-foreground text-lg">Conecte-se, encante suas clientes e liberte seu tempo.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <div className="bg-card border border-border rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{feature.title.replace(/bellas!/g, '<em>bellas!</em>')}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description.replace(/bellas!/g, '<em>bellas!</em>')}</p>
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