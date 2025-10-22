import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const Testimonials = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const testimonials = [
    {
      text: "Aquele produtinho que você me indicou para peles oleosa é maravilhoso, estou amando! E perfeito esse produto.",
      author: "Cliente satisfeita"
    },
    {
      text: "Estou encantada com os produtos, simplesmente amei. Não costumo me maquiar sempre, mas usei os produtos no sábado e ontem usei de novo porque gostei demais.",
      author: "Cliente feliz"
    },
    {
      text: "Tenho um desse e é perfeito pra delinear a sombracelha. Minha pele é oleosa e ele dura muito. É prático demais da conta!",
      author: "Cliente fiel"
    },
    {
      text: "Eu não consigo ficar sem! Perfeição. É top das top!",
      author: "Cliente encantada"
    },
    {
      text: "Minhas compras na sua loja só está começando. Sua loja foi Deus que te deu e graças a ele que eu tenho vocês pra comprar minhas coisas. Sucesso pra você que sua loja cresça mais!",
      author: "Cliente grata"
    },
    {
      text: "Acompanho você há bastante tempo e me lembro da loja quando era perto do mercado Íris. Fico tão feliz por suas conquistas, o quanto cresceu e está maravilhosa. Parabéns, você merece muito!",
      author: "Cliente antiga"
    },
    {
      text: "Difícil entrar na loja e levar algo a mais, peças maravilhosas, ótima qualidade, e tem um atendimento excelente. A loja não poderia ter funcionárias melhores!",
      author: "Cliente impressionada"
    },
    {
      text: "Realmente o atendimento das meninas é diferenciado demais. Você vai pra comprar um batom e leva até o que não está no orçamento! Se toda loja de Carinhanha tivesse um atendimento assim seria melhor comprar coisas por aqui.",
      author: "Cliente apaixonada"
    },
    {
      text: "Maravilhosa! Nota mil, nunca entrei em uma loja e ser atendida tão bem. Melhor loja. Sucesso pra você!",
      author: "Cliente entusiasmada"
    },
    {
      text: "Sou de SP mas sigo vocês e compro quando vou aí em Carinhanha. Maravilhosas! Que linda! Volte sempre!",
      author: "Elidiana - SP"
    },
    {
      text: "Assim que ponho o pé na loja, as meninas oferecem ajuda e é se precisar. O diferencial da loja é justamente porque a gente fica bem à vontade para olhar as novidades, sem pressão. As meninas sempre bem educadas e dispostas a nos ajudar quando precisa, cuida até do filhinho da gente para olhar as coisas.",
      author: "Mãe agradecida"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que nossas clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground">
            Depoimentos reais de quem já experimentou nossos produtos e atendimento
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2 h-full">
                    <Card className="border-2 border-border hover:border-primary transition-all duration-300 h-[280px]">
                      <CardContent className="pt-6 pb-6 flex flex-col h-full">{/* ... keep existing code */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className="fill-primary text-primary"
                            />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground italic mb-4 flex-grow">
                          "{testimonial.text}"
                        </p>
                        <p className="text-sm font-semibold text-foreground">
                          - {testimonial.author}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
