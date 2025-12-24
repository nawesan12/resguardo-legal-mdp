"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { AnimatedInView } from "@/components/ui/AnimatedInView";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { teamMembers } from "@/data/team";

export function Team() {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle
          title="Nuestro Equipo"
          subtitle="Profesionales comprometidos con tu tranquilidad y tus derechos."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <AnimatedInView key={member.name} delay={index * 0.15}>
              <motion.article
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Image container with gradient overlay */}
                <div className="relative w-full h-80 overflow-hidden">
                  <Image
                    src={member.imageUrl}
                    alt={`Foto de ${member.name}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Social links on hover */}
                  <motion.div
                    className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    <a
                      href="#"
                      className="p-2 bg-white/90 hover:bg-white rounded-full transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} className="text-gray-700" />
                    </a>
                    <a
                      href="#contact"
                      className="p-2 bg-white/90 hover:bg-white rounded-full transition-colors"
                      aria-label="Enviar email"
                    >
                      <Mail size={20} className="text-gray-700" />
                    </a>
                  </motion.div>

                  {/* Specialty badge */}
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
                      Especialista
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col bg-gradient-to-br from-white to-gray-50/50">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-semibold mb-4 text-sm">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {member.bio}
                  </p>

                  {/* Decorative line */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-emerald-600 font-medium text-sm group-hover:gap-3 transition-all">
                      Ver perfil completo
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatedInView>
          ))}
        </div>

        {/* CTA below team */}
        <AnimatedInView delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              ¿Querés conocer más sobre nuestro equipo?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
            >
              Agenda una reunión
              <span className="text-xl">→</span>
            </a>
          </div>
        </AnimatedInView>
      </div>
    </section>
  );
}
