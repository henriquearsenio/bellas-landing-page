import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Importe suas imagens aqui. Certifique-se de que elas estejam na pasta src/assets
import screenshot1 from "@/assets/1.jpeg";
import screenshot2 from "@/assets/2.jpeg";
import screenshot3 from "@/assets/3.jpeg";
import screenshot4 from "@/assets/4.jpeg";
import screenshot5 from "@/assets/5.jpeg";

const screenshots = [
  { src: screenshot1, alt: "Screenshot 1 da conversa no WhatsApp" },
  { src: screenshot2, alt: "Screenshot 2 da conversa no WhatsApp" },
  { src: screenshot3, alt: "Screenshot 3 da conversa no WhatsApp" },
  { src: screenshot4, alt: "Screenshot 4 da conversa no WhatsApp" },
  { src: screenshot5, alt: "Screenshot 5 da conversa no WhatsApp" },
];

const WhatsappCarousel = () => {
  return (
    <Carousel className="w-full h-full max-w-full"> {/* Adicionado h-full */}
      <CarouselContent className="h-full"> {/* Adicionado h-full */}
        {screenshots.map((screenshot, index) => (
          <CarouselItem key={index} className="h-full flex items-center justify-center"> {/* Adicionado h-full e centralização */}
            <div className="p-1 h-full w-full flex items-center justify-center"> {/* Adicionado h-full w-full e centralização */}
              <Card className="border-none shadow-none h-full w-full flex items-center justify-center bg-transparent"> {/* Adicionado h-full w-full e bg-transparent */}
                <CardContent className="flex items-center justify-center p-0 h-full w-full bg-white/10 rounded-xl"> {/* Removido aspect-square, adicionado h-full w-full e bg-white/10 */}
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="max-h-full max-w-full object-contain rounded-xl" // Alterado para max-h-full e object-contain
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-white/20 hover:bg-white/30 border-none" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-white/20 hover:bg-white/30 border-none" />
    </Carousel>
  );
};

export default WhatsappCarousel;