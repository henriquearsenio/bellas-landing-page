import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Grátis",
      price: "R$0",
      period: "",
      features: [
        "50 conversas por mês",
        "1 profissional",
        "Atendimento básico de IA",
        "Agendamentos automáticos",
      ],
      cta: "Começar grátis",
      popular: false,
    },
    {
      name: "Premium",
      price: "R$79,90",
      period: "/mês",
      features: [
        "Conversas ilimitadas",
        "Profissionais ilimitados",
        "IA avançada personalizada",
        "Agendamentos ilimitados",
        "Relatórios e analytics",
        "Suporte prioritário",
        "Integração completa",
        "Lembretes automáticos",
      ],
      cta: "Assinar Premium",
      popular: true,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Planos que cabem no seu bolso
          </h2>
          <p className="text-muted-foreground text-lg">
            Comece grátis e escale quando precisar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card border rounded-3xl p-8 ${
                plan.popular
                  ? "border-primary shadow-xl scale-105"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-6 py-1 rounded-full text-sm font-medium">
                  Mais popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-card-foreground">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
