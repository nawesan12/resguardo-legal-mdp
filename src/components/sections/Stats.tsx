"use client";

import { Trophy, Users, FileCheck, Star } from "lucide-react";
import { AnimatedInView } from "@/components/ui/AnimatedInView";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Trophy,
    value: "500+",
    label: "Casos Ganados",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Users,
    value: "1000+",
    label: "Clientes Satisfechos",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: FileCheck,
    value: "15+",
    label: "Años de Experiencia",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Star,
    value: "5.0",
    label: "Valoración Promedio",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
];

export function Stats() {
  return (
    <section className="py-20 bg-white border-y border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <AnimatedInView key={stat.label} delay={index * 0.1}>
              <motion.div
                className="text-center bg-white p-4"
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Icon with colored background - ALWAYS DARK ICONS */}
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${stat.bgColor} shadow-md mb-4`}>
                  <stat.icon className={`w-10 h-10 ${stat.color}`} strokeWidth={2} />
                </div>

                {/* Numbers - ALWAYS BLACK/DARK TEXT */}
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                  {stat.value}
                </div>

                {/* Labels - ALWAYS DARK GRAY TEXT */}
                <div className="text-gray-700 font-semibold text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            </AnimatedInView>
          ))}
        </div>
      </div>
    </section>
  );
}
