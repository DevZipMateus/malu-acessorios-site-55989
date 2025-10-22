import { Heart, Target, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Missão",
      description: "Proporcionar aos nossos clientes a melhor experiência de compra no segmento de beleza, oferecendo variedades com preços acessíveis!",
    },
    {
      icon: Target,
      title: "Visão",
      description: "Ser referência na região, na mente e no coração dos nossos clientes, atuando de forma moderna e inovadora.",
    },
    {
      icon: Award,
      title: "Valores",
      description: "Respeito e dedicação às pessoas, time vencedor e comprometido, foco em resultados, paixão por nosso negócio, assertividade, segurança e transparência.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossa história
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            A Malu Acessórios nasceu em 2017, quando deixei Belo Horizonte e voltei para Carinhanha, trazendo comigo o sonho de empreender. Começamos pequenos, com uma loja simples vendendo apenas bijuterias, brincos, pulseiras e acessórios femininos.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Com o tempo, o cuidado e a dedicação fizeram a loja crescer. O mix de produtos foi se ampliando: chegaram as maquiagens, os itens profissionais de estética, depilação, unhas e autocuidado. A procura só aumentava, e a Malu Acessórios chegou a ter duas filiais, mostrando a força do trabalho e da confiança das clientes.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Os desafios da pandemia e a situação econômica do país exigiram adaptações, e hoje seguimos firmes com uma unidade em Carinhanha, Bahia. Tenho muito orgulho do que construí, das dificuldades que superei e da história que continua sendo escrita.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <Card key={index} className="border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
