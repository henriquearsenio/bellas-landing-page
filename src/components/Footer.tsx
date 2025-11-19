import logoMenor from "@/assets/logo-menor.png"; // Import the logo

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <img 
            src={logoMenor} 
            alt="bellas!" 
            className="h-8 mx-auto" // Centraliza a logo
          />
        </div>
        <p className="text-muted-foreground text-sm mb-2 leading-relaxed">
          Automatize seu Studio de beleza com Inteligência Artificial.
        </p>
        <p className="text-muted-foreground text-xs">
          &copy; 2025 bellas! Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;