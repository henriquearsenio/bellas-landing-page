import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona a integração com WhatsApp?",
      answer:
        "Conectamos diretamente com sua conta comercial do WhatsApp. A IA atende automaticamente todas as mensagens, 24 horas por dia. Seus clientes conversam normalmente como se fosse você respondendo.",
    },
    {
      question: "A IA pode se confundir ou errar agendamentos?",
      answer:
        "Não! Nossa IA é treinada especificamente para studios de beleza. Ela consulta sua agenda em tempo real e só confirma horários disponíveis. Você tem total controle e pode revisar tudo.",
    },
    {
      question: "Preciso de conhecimento técnico para usar?",
      answer:
        "Zero! É tão simples quanto usar o WhatsApp. Você configura seu studio, profissionais e serviços em minutos através de uma interface intuitiva. Pronto para usar.",
    },
    {
      question: "E se o cliente quiser falar comigo diretamente?",
      answer:
        "A qualquer momento você pode assumir a conversa. A IA identifica quando é melhor passar para você e transfere automaticamente. Você tem controle total.",
    },
    {
      question: "Posso personalizar as respostas da IA?",
      answer:
        "Sim! Você define o tom de voz, informações do studio, políticas de cancelamento e tudo mais. A IA aprende o jeito do seu negócio e responde como você gostaria.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Perguntas frequentes</h2>
          <p className="text-muted-foreground text-lg">
            Tudo que você precisa saber sobre o bellas!
          </p>
        </div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6"
            >
              <AccordionTrigger className="text-left text-card-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
