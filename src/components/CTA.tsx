import { Button } from "@/components/ui/button";

const CTA = () => {
  const registerUrl = "https://app.bellas.ia.br/register";

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-[hsl(290,60%,55%)] to-[hsl(300,65%,65%)] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZ3dCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxn fGlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ij48cGF0aCBkPSJNMzYgMzR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0tMiAydjJoMnYtMmgwLTJ6bTAtNHYyaDJ2LTJoLTJ6bTItMnYtMmgtMnYyaDJ6bTAtNHYySDMwdi0yaDJ6bTQtMnYyaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bTItMnYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTItMnYtMmgydi0yaC0ydjJoMnptLTQgMHYtMmgtMnYyaDJ6bS00LTJ2LTJoLTJ2MmgyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Pronta para transformar seu Studio?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Descubra como a automação pode simplificar sua rotina e encantar suas clientes.
          </p>
          <div className="flex justify-center"> {/* Centraliza o botão */}
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-xl" onClick={() => window.location.href = registerUrl}>
              QUERO AUTOMATIZAR MEU STUDIO AGORA!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;