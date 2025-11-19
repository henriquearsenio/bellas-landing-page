import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const registerUrl = "https://bellas-agenda-bellas.hu6h7e.easypanel.host/register";

  const plans = [
    {
      name: "Individual",
      price: "R$39,90",
      period: "/mês (nos 3 primeiros meses, depois R$69,90)",
      features: [
        "Comece com 7 dias grátis", // Novo benefício
        "Agendamento automático via WhatsApp",
        "Painel administrativo com faturamento",
        "Relatórios básicos de agendamentos",
        "Ideal para profissionais independentes",
      ],
      cta: "Começar teste grátis",
      popular: false,
    },
    {
      name: "Studio",
      price: "R$69,90",
      period: "/mês (nos 3 primeiros meses, depois R$99,90)",
      features: [
        "Comece com 7 dias grátis", // Novo benefício
        "Tudo do plano Individual",
        "Gestão de vários profissionais",
        "Relatórios avançados por equipe",
        "Suporte prioritário",
        "Ideal para studios com mais de um designer",
      ],
      cta: "Assinar Studio",
      popular: true,
    },
  ];

  // Função auxiliar para dividir a string do período
  const getPeriodParts = (fullPeriod: string | undefined) => {
    if (!fullPeriod) {
      return { short: '', long: '' };
    }
    const match = fullPeriod.match(/^(\/mês)\s*(.*)$/);
    if (match) {
      return { short: match[1], long: match[2] };
    }
    return { short: '', long: fullPeriod }; // Fallback se o formato não for o esperado
  };

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Planos que cabem no seu bolso
          </h2>
          <p className="text-muted-foreground text-lg">
            Experimente o bellas! por 7 dias grátis, sem compromisso. Cancele a qualquer momento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const { short: shortPeriod, long: longPeriod } = getPeriodParts(plan.period);

            return (
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
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-card-foreground">{plan.price}</span>
                    {shortPeriod && (
                      <span className="text-card-foreground text-xl">{shortPeriod}</span>
                    )}
                  </div>
                  {longPeriod && (
                    <p className="text-muted-foreground text-sm mt-1">{longPeriod}</p>
                  )}
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
                  onClick={() => window.location.href = registerUrl}
                >
                  {plan.cta}
                </Button>
              </div>
            );
          })}
        </div>
        <p className="text-center text-muted-foreground mt-12 text-sm">
          7 dias grátis para testar sem compromisso. Cancele a qualquer momento.
        </p>
      </div>
    </section>
  );
};

export default Pricing;