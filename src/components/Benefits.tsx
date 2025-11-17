import { Check } from "lucide-react";

const Benefits = () => {
  const benefits = [
    "Atendimento 24/7 pelo WhatsApp",
    "IA consulta sua agenda em tempo real",
    "Informações sobre serviços e preços",
    "Conhece todos os profissionais do studio",
    "Agenda automaticamente sem erros",
    "Confirma horários instantaneamente",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-secondary/50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              O que seu agente de IA pode fazer?
            </h2>
            <p className="text-muted-foreground text-lg">
              Tudo que você precisaria fazer manualmente, agora automatizado
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <p className="text-card-foreground font-medium pt-1">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
