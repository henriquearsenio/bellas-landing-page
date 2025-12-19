import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import React, { useState } from "react"; // Import useState

const Pricing = () => {
  const registerUrl = "https://app.bellas.ia.br/register";
  const [selectedPeriod, setSelectedPeriod] = useState<"monthly" | "annual">("monthly");

  const plans = [
    {
      name: "Individual",
      monthly: {
        price: "R$39,90",
        period: "/mês",
        description: "(nos 3 primeiros meses, depois R$69,90)",
      },
      annual: {
        price: "R$478,80",
        period: "/ano",
        description: "(de R$838,80)",
        oldPrice: "R$838,80",
      },
      features: [
        "Agendamento automático via WhatsApp",
        "Painel administrativo com faturamento",
        "Relatórios básicos de agendamentos",
        "Ideal para profissionais independentes",
        "Comece com 7 dias grátis",
      ],
      cta: "TRABALHO SOZINHA",
      popular: false,
    },
    {
      name: "Studio",
      monthly: {
        price: "R$69,90",
        period: "/mês",
        description: "(nos 3 primeiros meses, depois R$99,90)",
      },
      annual: {
        price: "R$838,80",
        period: "/ano",
        description: "(de R$1.198,80)",
        oldPrice: "R$1.198,80",
      },
      features: [
        "Tudo do plano Individual",
        "Gestão de vários profissionais",
        "Relatórios avançados por equipe",
        "Suporte prioritário",
        "Ideal para Studios com mais de um profissional",
        "Comece com 7 dias grátis",
      ],
      cta: "PARA EQUIPE",
      popular: true,
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Planos que cabem no seu bolso
          </h2>
          <p className="text-muted-foreground text-lg">
            Experimente o <em>bellas!</em> por 7 dias grátis, sem compromisso. Cancele a qualquer momento.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center rounded-full bg-muted p-1">
            <Button
              variant={selectedPeriod === "monthly" ? "default" : "ghost"}
              onClick={() => setSelectedPeriod("monthly")}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                selectedPeriod === "monthly" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted/50"
              }`}
            >
              Mensal
            </Button>
            <Button
              variant={selectedPeriod === "annual" ? "default" : "ghost"}
              onClick={() => setSelectedPeriod("annual")}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                selectedPeriod === "annual" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted/50"
              }`}
            >
              Anual
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const currentPricing = plan[selectedPeriod];

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
                    <span className="text-5xl font-bold text-card-foreground">{currentPricing.price}</span>
                    {currentPricing.period && (
                      <span className="text-card-foreground text-xl">{currentPricing.period}</span>
                    )}
                  </div>
                  {currentPricing.description && (
                    <p className="text-muted-foreground text-sm mt-1">
                      {selectedPeriod === "annual" && currentPricing.oldPrice ? (
                        <>
                          <span className="line-through mr-1">de {currentPricing.oldPrice}</span>
                          {currentPricing.description.replace(`(de ${currentPricing.oldPrice})`, '')}
                        </>
                      ) : (
                        currentPricing.description
                      )}
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-card-foreground">
                        {feature.split('Comece com 7 dias grátis').map((part, idx, arr) => (
                          <React.Fragment key={idx}>
                            {part}
                            {idx < arr.length - 1 && <strong>Comece com 7 dias grátis</strong>}
                          </React.Fragment>
                        ))}
                      </span>
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