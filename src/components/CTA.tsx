import { Button } from "@/components/ui/button";

const CTA = () => {
  const registerUrl = "https://bellas-agenda-bellas.hu6h7e.easypanel.host/register";

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-[hsl(290,60%,55%)] to-[hsl(300,65%,65%)] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bS0yIDJ2Mmgydi0iaC0yem0wLTR2Mmgydi0iaC0yem0yLTJ2LTJoLTJ2Mmgyem0wLTRWMzBoLTJ2Mmgyem00LTJ2Mmgydi0iaC0yem0wIDR2Mmgydi0iaC0yem0yIDJ2Mmgydi0iaC0yem0wLTR2Mmgydi0iaC0yem0tMi0ydi0iaDJ2LTJoLTJ2Mmgyem0tNCAwdi0iaC0ydjJoMnptLTQtMnYtMmgtMnYiaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Pronto para transformar seu studio?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Junte-se a centenas de profissionais que já automatizaram seus atendimentos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-xl" onClick={() => window.location.href = registerUrl}>
              Começar grátis agora
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => window.location.href = registerUrl}>
              Falar com especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;