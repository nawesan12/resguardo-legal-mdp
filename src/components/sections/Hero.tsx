"use client";

import Image from "next/image";
import { Shield, Scale, FileCheck, Users } from "lucide-react";
import { AnimatedInView } from "@/components/ui/AnimatedInView";
import { ButtonLink } from "@/components/ui/Button";
import { motion } from "framer-motion";

const features = [
  { icon: Shield, text: "Protección Legal" },
  { icon: Scale, text: "Justicia Garantizada" },
  { icon: FileCheck, text: "Casos Resueltos" },
  { icon: Users, text: "Atención Personalizada" },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1589216532372-1c2a36790049?q=80&w=2070&auto=format&fit=crop"
          alt="Oficina legal profesional"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-emerald-900/80" />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-transparent animate-gradient" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 px-6 py-20 max-w-7xl mx-auto w-full">
        <AnimatedInView>
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-sm mb-6"
            >
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-100 text-sm font-medium">
                Primera Consulta Gratuita
              </span>
            </motion.div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="block bg-gradient-to-r from-white via-emerald-100 to-emerald-200 bg-clip-text text-transparent">
                RESGUARDO
              </span>
              <span className="block bg-gradient-to-r from-emerald-300 via-emerald-200 to-white bg-clip-text text-transparent">
                LEGAL
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-2xl md:text-3xl text-emerald-100 mb-4 font-light">
              Protegemos Tus Derechos
            </p>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Asesoramiento legal personalizado en{" "}
              <span className="text-emerald-300 font-semibold">Mar del Plata</span>.
              Conocer tus derechos es el primer paso para protegerlos.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <ButtonLink
                href="#contact"
                size="lg"
                className="shadow-emerald-lg hover:shadow-emerald text-lg px-10 py-5"
              >
                ¡Consultá Ahora!
              </ButtonLink>
              <ButtonLink
                href="#specialties"
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Ver Especialidades
              </ButtonLink>
            </div>

            {/* Feature badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 text-emerald-300" />
                  <span className="text-sm font-medium text-center">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedInView>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
