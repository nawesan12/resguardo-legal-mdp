"use client";

import Image from "next/image";
import { AnimatedInView } from "@/components/ui/AnimatedInView";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <AnimatedInView>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
                  alt="Equipo de Resguardo Legal trabajando"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimatedInView>
          </div>
          <div className="md:w-1/2">
            <AnimatedInView delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprometidos con tu Tranquilidad
              </h2>
              <p className="text-gray-700 mb-4">
                En <strong>Resguardo Legal</strong>, entendemos que cada caso es
                único y merece una atención personalizada. Nuestro equipo de
                abogados en Mar del Plata combina experiencia, conocimiento y una
                dedicación inquebrantable para ofrecerte la mejor estrategia
                legal.
              </p>
              <p className="text-gray-700 mb-6">
                Nuestra misión es construir relaciones de confianza a largo plazo,
                brindando un servicio transparente, ético y orientado a
                resultados. Tu tranquilidad es nuestro principal objetivo.
              </p>
            </AnimatedInView>
          </div>
        </div>
      </div>
    </section>
  );
}
