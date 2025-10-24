import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import whatsappIcon from "@/assets/whatsapp-icon.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background/80 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Malu Acessórios" className="h-36 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors font-medium">
                  Início
                </button>
                <button onClick={() => scrollToSection("sobre")} className="text-foreground hover:text-primary transition-colors font-medium">
                  Sobre
                </button>
                <button onClick={() => scrollToSection("produtos")} className="text-foreground hover:text-primary transition-colors font-medium">
                  Produtos
                </button>
                <a href="https://v4.egestor.com.br/vitrine/?s=flavialelis" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors font-medium">
                  Vitrine
                </a>
                <button onClick={() => scrollToSection("contato")} className="text-foreground hover:text-primary transition-colors font-medium">
                  Contato
                </button>
              </>
            ) : (
              <>
                <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
                  Início
                </Link>
                <a href="https://v4.egestor.com.br/vitrine/?s=flavialelis" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors font-medium">
                  Vitrine
                </a>
              </>
            )}
            <Button asChild variant="default" size="sm">
              <a href="https://wa.me/5577998709254" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4" />
                Fale conosco
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <nav className="md:hidden pb-4 space-y-3 border-t border-border mt-2 pt-4">
            {isHomePage ? (
              <>
                <button onClick={() => scrollToSection("home")} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2">
                  Início
                </button>
                <button onClick={() => scrollToSection("sobre")} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2">
                  Sobre
                </button>
                <button onClick={() => scrollToSection("produtos")} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2">
                  Produtos
                </button>
                <a href="https://v4.egestor.com.br/vitrine/?s=flavialelis" target="_blank" rel="noopener noreferrer" className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Vitrine
                </a>
                <button onClick={() => scrollToSection("contato")} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2">
                  Contato
                </button>
              </>
            ) : (
              <>
                <Link to="/" className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Início
                </Link>
                <a href="https://v4.egestor.com.br/vitrine/?s=flavialelis" target="_blank" rel="noopener noreferrer" className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Vitrine
                </a>
              </>
            )}
            <Button asChild variant="default" className="w-full">
              <a href="https://wa.me/5577998709254" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center">
                <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4" />
                Fale conosco
              </a>
            </Button>
          </nav>}
      </div>
    </header>;
};
export default Header;