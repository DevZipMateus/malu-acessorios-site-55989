import { Sparkles, Palette, Scissors } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Products = () => {
  const categories = [
    {
      icon: Palette,
      title: "Maquiagens",
      description: "Ampla variedade de maquiagens para todos os estilos e ocasiões, de marcas renomadas com preços acessíveis.",
    },
    {
      icon: Sparkles,
      title: "Cosméticos",
      description: "Produtos de qualidade para cuidados com a pele, cabelo e corpo, trazendo beleza e autoestima.",
    },
    {
      icon: Scissors,
      title: "Profissionais",
      description: "Itens profissionais de estética, depilação, unhas e autocuidado para profissionais e uso pessoal.",
    },
  ];

  return (
    <section id="produtos" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos produtos
          </h2>
          <p className="text-lg text-muted-foreground">
            Atuamos no mercado de beleza trazendo não apenas produtos, mas autoestima, confiança e a valorização da mulher em todas as fases da vida.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <Card key={index} className="border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl bg-background">
              <CardContent className="pt-10 pb-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent text-white mb-6 shadow-lg">
                  <category.icon size={40} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{category.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
