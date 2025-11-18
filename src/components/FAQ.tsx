import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como o bellas! se conecta ao meu WhatsApp?",
      answer:
        "O bellas! se integra de forma mágica à sua conta comercial do WhatsApp. Nossa inteligência artificial atende todas as mensagens 24 horas por dia, fazendo com que suas clientes sintam que estão conversando diretamente com você, com todo o carinho e atenção.",
    },
    {
      question: "O bellas! pode cometer erros nos agendamentos?",
      answer:
        "De jeito nenhum! O bellas! é treinado com todo o cuidado para studios de beleza, como o seu. Ele consulta sua agenda em tempo real e só confirma horários que realmente estão disponíveis. Você mantém o controle total e pode revisar tudo, sempre com a certeza de um serviço impecável.",
    },
    {
      question: "Preciso ser expert em tecnologia para usar o bellas!?",
      answer:
        "Absolutamente não! Usar o bellas! é tão fácil e intuitivo quanto enviar uma mensagem no WhatsApp. Em poucos minutos, você configura seu studio, cadastra suas profissionais e serviços através de uma interface pensada para você. Simples assim, pronto para encantar!",
    },
    {
      question: "E se a cliente preferir falar comigo pessoalmente?",
      answer:
        "Sempre que precisar, você pode assumir a conversa. O bellas! é inteligente e percebe quando é o momento ideal para te passar o atendimento, transferindo a conversa automaticamente. Você está sempre no comando, com a liberdade de dar seu toque pessoal.",
    },
    {
      question: "Posso personalizar as respostas do bellas!?",
      answer:
        "Claro que sim! Você define o tom de voz, as informações exclusivas do seu studio, as políticas de cancelamento e cada detalhe. O bellas! aprende o jeitinho do seu negócio e responde exatamente como você gostaria, mantendo a sua essência em cada interação.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Suas dúvidas, nossas respostas</h2>
          <p className="text-muted-foreground text-lg">
            Desvende o universo bellas! e veja como ele se encaixa perfeitamente no seu studio.
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