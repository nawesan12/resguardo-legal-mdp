"use client";

import { MessageSquare, Search, Route, Trophy } from "lucide-react";
import { AnimatedInView } from "@/components/ui/AnimatedInView";
import { SectionTitle } from "@/components/ui/SectionTitle";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Contactanos",
    description: "Envianos tu consulta gratuita por formulario, WhatsApp o teléfono.",
  },
  {
    icon: Search,
    number: "02",
    title: "Evaluamos tu Caso",
    description: "Analizamos la situación y te informamos sobre tus derechos.",
  },
  {
    icon: Route,
    number: "03",
    title: "Estrategia Legal",
    description: "Definimos el mejor camino a seguir para proteger tus intereses.",
  },
  {
    icon: Trophy,
    number: "04",
    title: "Resolución",
    description: "Trabajamos con dedicación hasta obtener el mejor resultado posible.",
  },
];

export function Process() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-50 rounded-full blur-3xl opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle
          title="¿Cómo Trabajamos?"
          subtitle="Un proceso claro y transparente para que sepas qué esperar en cada etapa."
        />

        <div className="max-w-5xl mx-auto">
          {/* Desktop horizontal */}
          <div className="hidden md:grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200" />

            {steps.map((step, index) => (
              <AnimatedInView key={step.number} delay={index * 0.15}>
                <div className="flex flex-col items-center text-center relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-emerald mb-4 relative z-10">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase mb-1">
                    Paso {step.number}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </AnimatedInView>
            ))}
          </div>

          {/* Mobile vertical */}
          <div className="md:hidden space-y-8 relative pl-12">
            {/* Vertical line */}
            <div className="absolute left-5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-200 via-emerald-400 to-emerald-200" />

            {steps.map((step, index) => (
              <AnimatedInView key={step.number} delay={index * 0.1}>
                <div className="flex items-start gap-4 relative">
                  <div className="absolute -left-12 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-emerald z-10">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">
                      Paso {step.number}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-0.5">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
