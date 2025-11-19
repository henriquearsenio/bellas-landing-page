import { Check } from "lucide-react";

const Benefits = () => {
  const benefits = [
    "Atendimento impecável 24h por dia no WhatsApp",
    "Consulta sua agenda em tempo real, sem conflitos",
    "Detalha seus serviços e preços com clareza",
    "Apresenta suas Profissionais com carinho",
    "Agenda seus atendimentos automaticamente",
    "Confirma horários e envia lembretes",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-secondary/50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              O que o <em>bellas!</em> pode fazer pelo seu Studio?
            </h2>
            <p className="text-muted-foreground text-lg">
              Mais do que um assistente, o <em>bellas!</em> é a sua parceira de sucesso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
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