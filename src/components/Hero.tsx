import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  const registerUrl = "https://bellas-agenda-bellas.hu6h7e.easypanel.host/register";

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[hsl(290,60%,55%)] to-[hsl(300,65%,65%)] pt-20 pb-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXrulem9kZCI+PGcgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ij48cGF0aCBkPSJNMzYgMzR2Mi1oMnYtMmgwem0wIDR2Mmgydi0yaC0yem0tMiAyvjJoMnYtMmgwem0wLTR2Mmgydi0iaC0yem0yLTJ2LTJoLTJ2Mmgyem0wLTRWMzBoLTJ2Mmgyem00LTJ2Mmgydi0iaC0yem0wIDR2Mmgydi0iaC0yem0yIDJ2Mmgydi0iaC0yem0wLTR2Mmgydi0iaC0yem0tMi0ydi0iaDJ2LTJoLTJ2Mmgyem0tNCAwdi0iaC0ydjJoMnptLTQtMnYtMmgtMnYiaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-white space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              <span>⭐⭐⭐⭐⭐ Avaliado por profissionais da beleza</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              ✨ Transforme seu Studio com IA
            </h1>
            
            <p className="text-xl text-white/90 max-w-xl">
              Atendimento inteligente e automatizado via WhatsApp. Suas clientes agendam horários, consultam serviços e escolhem profissionais a qualquer hora, todos os dias — tudo de forma prática e rápida.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-lg" onClick={() => window.location.href = registerUrl}>
                Começar grátis
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => window.location.href = registerUrl}>
                Ver demonstração
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white"></div>
              </div>
              <p className="text-sm text-white/80">Mais de 500+ studios já usam</p>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-2xl">
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-2 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTAgMGgyMHYyMEgwVjB6bTIwIDIwaDIwdjIwSDIwVjIweiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
                <div className="relative z-10 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                  <p className="text-white/80 text-sm">Vídeo em breve</p>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-center gap-6 text-xs text-white/60 pb-2">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  WhatsApp
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Agendamento IA
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  24/7
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;