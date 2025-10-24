import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Seu shopping da beleza</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 animate-fade-in">
            Malú
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Proporcione a melhor experiência de compra no segmento de beleza com variedades e preços acessíveis
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in">
            Desde 2017 levando beleza, autoestima e cuidado para cada cliente em Carinhanha, Bahia
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Button asChild size="lg" variant="default">
              <a
                href="https://wa.me/5577998709254"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
                Fale conosco no WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/60 hover:bg-white border-primary/30 hover:border-primary"
            >
              <a href="https://v4.egestor.com.br/vitrine/?s=flavialelis" target="_blank" rel="noopener noreferrer">Conheça nossos produtos</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
