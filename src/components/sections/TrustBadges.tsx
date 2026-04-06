"use client";

import { Shield, BadgeCheck, Gift, Lock } from "lucide-react";
import { AnimatedInView } from "@/components/ui/AnimatedInView";

const badges = [
  {
    icon: Shield,
    title: "Colegio de Abogados",
    description: "Mar del Plata",
  },
  {
    icon: BadgeCheck,
    title: "Matrícula Vigente",
    description: "Profesionales habilitados",
  },
  {
    icon: Gift,
    title: "Primera Consulta",
    description: "Gratuita y sin compromiso",
  },
  {
    icon: Lock,
    title: "Confidencialidad",
    description: "Garantizada por ley",
  },
];

export function TrustBadges() {
  return (
    <section className="py-12 bg-gray-100/60">
      <div className="container mx-auto px-6">
        <AnimatedInView>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {badges.map((badge) => (
              <div
                key={badge.title}
                className="flex flex-col items-center text-center gap-2 p-4"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-1">
                  <badge.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">
                  {badge.title}
                </p>
                <p className="text-gray-500 text-xs">{badge.description}</p>
              </div>
            ))}
          </div>
        </AnimatedInView>
      </div>
    </section>
  );
}
