import { Button } from "@/components/ui/button";
import logoMenor from "@/assets/logo-menor.png"; // Changed to logo-menor
import icone from "@/assets/icone.png"; // Still needed for favicon, but not directly used here for display

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src={logoMenor} // Using logoMenor for desktop
              alt="bellas!" 
              className="h-8 hidden sm:block"
            />
            <img 
              src={logoMenor} // Using logoMenor for mobile
              alt="bellas!" 
              className="h-8 sm:hidden"
            />
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              CRIAR CONTA
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;