import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como o bellas! se conecta ao seu WhatsApp?",
      answer:
        "Com o bellas!, suas clientes continuam usando o WhatsApp como sempre, mas recebem respostas rápidas e atenciosas. O sistema cuida dos agendamentos e confirmações, enquanto você dedica seu tempo ao que mais importa: atender e encantar suas clientes.",
    },
    {
      question: "O bellas! pode cometer erros nos agendamentos?",
      answer:
        "De jeito nenhum! O bellas! foi criado especialmente para Studios de beleza. Ele verifica sua agenda em tempo real e confirma apenas horários livres, garantindo tranquilidade para você e praticidade para suas clientes.",
    },
    {
      question: "Preciso ser expert em tecnologia para usar o bellas!?",
      answer:
        "Não! O bellas! é tão fácil quanto conversar no WhatsApp. Você configura seu Studio em minutos, organiza serviços e profissionais, e pronto: suas clientes já podem agendar sozinhas, enquanto você foca em deixá-las ainda mais lindas.",
    },
    {
      question: "E se a cliente preferir falar comigo pessoalmente?",
      answer:
        "Sempre que precisar, você pode assumir a conversa. O bellas! é inteligente e percebe quando é o momento ideal para te passar o atendimento, transferindo a conversa automaticamente. Você está sempre no comando, com a liberdade de dar seu toque pessoal.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Suas dúvidas, nossas respostas</h2>
          <p className="text-muted-foreground text-lg">
            Desvende o universo <em>bellas!</em> e veja como ele se encaixa perfeitamente no seu Studio.
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
                {faq.question.replace(/bellas!/g, '<em>bellas!</em>')}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer.replace(/bellas!/g, '<em>bellas!</em>')}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;