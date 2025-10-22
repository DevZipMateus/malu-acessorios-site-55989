import { MapPin, Clock, Phone, Mail, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua dois de julho 431, Carinhanha - BA",
    },
    {
      icon: Clock,
      title: "Horário de funcionamento",
      content: (
        <>
          Seg a sex: 8h às 18h (não fechamos para almoço)
          <br />
          Sábado: 8h às 13h
        </>
      ),
    },
    {
      icon: Phone,
      title: "Telefone",
      content: (
        <a
          href="https://wa.me/5577999952030"
          className="hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          (77) 99995-2030
        </a>
      ),
    },
    {
      icon: Mail,
      title: "E-mail",
      content: (
        <a
          href="mailto:lojacarinhanha@gmail.com"
          className="hover:text-primary transition-colors"
        >
          lojacarinhanha@gmail.com
        </a>
      ),
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: (
        <a
          href="https://instagram.com/malu.acess"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          @malu.acess
        </a>
      ),
    },
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em contato
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para atendê-la e ajudar você a encontrar tudo que precisa para sua beleza
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {contactInfo.map((info, index) => {
            const isInstagram = info.title === "Instagram";
            const CardWrapper = isInstagram ? "a" : "div";
            const wrapperProps = isInstagram
              ? {
                  href: "https://instagram.com/malu.acess",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "block"
                }
              : {};

            return (
              <CardWrapper key={index} {...wrapperProps}>
                <Card className="border-2 border-border hover:border-primary transition-all duration-300">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                          <info.icon size={24} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-sm text-muted-foreground">{info.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardWrapper>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="default">
            <a
              href="https://wa.me/5577999952030"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
              Fale conosco pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
