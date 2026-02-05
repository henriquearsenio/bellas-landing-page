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
    <Carousel className="w-full max-w-full">
      <CarouselContent>
        {screenshots.map((screenshot, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="border-none shadow-none">
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full h-full object-cover rounded-xl"
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