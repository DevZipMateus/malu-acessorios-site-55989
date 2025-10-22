import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
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
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Slogan */}
          <div className="space-y-4">
            <Link to="/">
              <img src={logo} alt="Malu Acessórios" className="h-24 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground italic">
              Malú, seu shopping da beleza
            </p>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <button onClick={() => scrollToSection("sobre")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("produtos")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Produtos
                </button>
              </li>
              <li>
                <Link to="/vitrine" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Vitrine
                </Link>
              </li>
              <li>
                <button onClick={() => scrollToSection("contato")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Informações de Contato */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Rua dois de julho 431, Carinhanha - BA</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="https://wa.me/5577999952030" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  (77) 99995-2030
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="mailto:lojacarinhanha@gmail.com" className="hover:text-primary transition-colors">
                  lojacarinhanha@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Horário e Redes Sociais */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Horário de funcionamento</h3>
            <div className="flex items-start gap-2 text-sm text-muted-foreground mb-4">
              <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
              <div>
                <p>Seg a sex: 8h às 18h</p>
                <p>Sábado: 8h às 13h</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-semibold text-foreground mb-3">Redes sociais</h3>
              <a 
                href="https://instagram.com/malu.acess" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @malu.acess
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Malu Acessórios Ltda. CNPJ: 32.748.502/0001-91. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
