"use client";

import { ButtonLink } from "@/components/ui/Button";
import { Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-emerald" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ¿Necesitás Asesoramiento Legal?
            </h2>
            <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
              Cada caso es único. Enviá tu consulta de forma gratuita y sin compromiso.
              Estamos listos para ayudarte a encontrar la mejor solución.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <ButtonLink
              href="#contact"
              variant="secondary"
              size="lg"
              className="shadow-2xl"
            >
              Hacer una Consulta
            </ButtonLink>
            <ButtonLink
              href="tel:+5492234567890"
              className="bg-white/20 hover:bg-white/30 border border-white/30 backdrop-blur-sm"
              size="lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Llamar Ahora
            </ButtonLink>
          </motion.div>

          {/* Info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Clock, title: "Respuesta Rápida", desc: "Te respondemos en 24hs" },
              { icon: Mail, title: "Consulta Online", desc: "Desde donde estés" },
              { icon: Phone, title: "Atención Directa", desc: "Hablá con un abogado" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
              >
                <item.icon className="w-8 h-8 mx-auto mb-3 text-emerald-200" />
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-emerald-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
