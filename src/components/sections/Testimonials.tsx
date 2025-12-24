"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedInView } from "@/components/ui/AnimatedInView";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 via-emerald-50/20 to-blue-50/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle
          title="Qué Dicen Nuestros Clientes"
          subtitle="La confianza y satisfacción de nuestros clientes es nuestro mayor orgullo."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedInView key={testimonial.name} delay={index * 0.15}>
              <motion.article
                className="relative bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col group hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-t-2xl" />

                {/* Quote icon with background */}
                <div className="relative mb-6">
                  <div className="absolute -top-2 -left-2 w-16 h-16 bg-emerald-100 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
                  <Quote
                    size={40}
                    className="relative text-emerald-600"
                    fill="currentColor"
                  />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-gray-700 mb-6 flex-grow leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author info */}
                <footer className="mt-auto pt-6 border-t border-gray-100">
                  <cite className="not-italic">
                    <div className="flex items-center gap-3">
                      {/* Avatar placeholder */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-emerald-600 font-medium">
                          {testimonial.caseType}
                        </p>
                      </div>
                    </div>
                  </cite>
                </footer>

                {/* Verified badge */}
                <div className="absolute top-6 right-6">
                  <div className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    Verificado
                  </div>
                </div>
              </motion.article>
            </AnimatedInView>
          ))}
        </div>

        {/* Trust indicators */}
        <AnimatedInView delay={0.5}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg">
              <Star className="text-amber-400 fill-amber-400" size={24} />
              <span className="text-gray-700 font-semibold">
                Más de 500 reseñas positivas
              </span>
              <span className="text-2xl">⭐</span>
            </div>
          </div>
        </AnimatedInView>
      </div>
    </section>
  );
}
