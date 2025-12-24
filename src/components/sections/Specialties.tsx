"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { AnimatedInView } from "@/components/ui/AnimatedInView";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ButtonLink } from "@/components/ui/Button";
import { specialties, specialtyTabs } from "@/data/services";

interface TabButtonProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

function TabButton({ id, label, isActive, onClick, icon: Icon }: TabButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative text-sm sm:text-base font-semibold py-4 px-4 sm:px-6 transition-all duration-300 flex-grow text-center group overflow-hidden ${
        isActive
          ? "text-white"
          : "text-gray-600 hover:text-emerald-700"
      }`}
      aria-selected={isActive}
      role="tab"
      id={`tab-${id}`}
      aria-controls={`panel-${id}`}
      whileHover={{ scale: isActive ? 1 : 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Active background */}
      {isActive && (
        <motion.div
          layoutId="activeTabBg"
          className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-xl shadow-lg"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}

      {/* Hover background for inactive */}
      {!isActive && (
        <div className="absolute inset-0 bg-emerald-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      {/* Content */}
      <div className="relative flex items-center justify-center gap-2">
        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-emerald-600'}`} />
        <span>{label}</span>
      </div>

      {/* Shine effect on active */}
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
            repeatDelay: 2,
          }}
        />
      )}
    </motion.button>
  );
}

export function Specialties() {
  const [activeTab, setActiveTab] = useState("laboral");
  const currentService = specialties[activeTab];
  const IconComponent = currentService.icon;

  return (
    <section id="specialties" className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-100/40 to-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-100/40 to-emerald-100/40 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle
          title="ESPECIALIDADES"
          subtitle="Soluciones legales específicas y efectivas para cada una de tus necesidades."
        />

        <AnimatedInView delay={0.2}>
          <div className="max-w-5xl mx-auto">
            {/* Enhanced Tabs */}
            <div
              className="flex flex-col sm:flex-row justify-center gap-3 p-2 mb-12 bg-white rounded-2xl shadow-xl border border-gray-100"
              role="tablist"
              aria-label="Especialidades legales"
            >
              {specialtyTabs.map((tab) => (
                <TabButton
                  key={tab.id}
                  id={tab.id}
                  label={tab.label}
                  isActive={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  icon={specialties[tab.id].icon}
                />
              ))}
            </div>

            {/* Enhanced Tab Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                role="tabpanel"
                id={`panel-${activeTab}`}
                aria-labelledby={`tab-${activeTab}`}
              >
                <div className="relative bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                  {/* Gradient accent top */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500" />

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-100/50 to-transparent rounded-bl-full" />

                  <div className="flex flex-col md:flex-row items-start gap-8 relative">
                    {/* Icon Section - Enhanced */}
                    <motion.div
                      className="md:w-1/4 flex justify-center md:justify-start w-full"
                      initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <div className="relative">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-emerald-500/30 rounded-3xl blur-2xl scale-110 animate-pulse-glow" />

                        {/* Icon container */}
                        <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                          <IconComponent size={80} className="text-white" strokeWidth={1.5} />

                          {/* Sparkle */}
                          <motion.div
                            className="absolute -top-2 -right-2 bg-amber-400 rounded-full p-2 shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.2, 1], rotate: [0, 180, 360] }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                          >
                            <Sparkles size={16} className="text-white" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Content Section - Enhanced */}
                    <div className="md:w-3/4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
                          {currentService.title}
                        </h3>
                      </motion.div>

                      <motion.p
                        className="text-gray-600 mb-6 text-lg leading-relaxed"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {currentService.description}
                      </motion.p>

                      {/* Enhanced list */}
                      <motion.div
                        className="mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {currentService.items.map((item, index) => (
                            <motion.div
                              key={item.title}
                              className="flex items-start gap-3 p-4 rounded-xl hover:bg-emerald-50/50 transition-all duration-300 group cursor-default border border-transparent hover:border-emerald-200"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.6 + index * 0.05 }}
                              whileHover={{ x: 4 }}
                            >
                              <div className="mt-0.5 flex-shrink-0">
                                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-300">
                                  <CheckCircle
                                    size={16}
                                    className="text-emerald-600 group-hover:text-white transition-colors"
                                  />
                                </div>
                              </div>
                              <span className="text-gray-700 font-medium group-hover:text-emerald-700 transition-colors">
                                {item.title}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Enhanced CTA */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-4"
                      >
                        <ButtonLink
                          href="#contact"
                          className="group shadow-emerald-lg"
                          size="lg"
                        >
                          Consultar sobre {currentService.title.split(' ')[0]}
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </ButtonLink>

                        <a
                          href={`tel:+5492234567890`}
                          className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-all duration-300 border-2 border-emerald-200 hover:border-emerald-300"
                        >
                          Llamar Ahora
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimatedInView>

        {/* Trust badge */}
        <AnimatedInView delay={0.5}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg border border-emerald-100">
              <CheckCircle className="text-emerald-500" size={20} />
              <span className="text-gray-700 font-semibold text-sm">
                Asesoramiento personalizado en cada especialidad
              </span>
            </div>
          </div>
        </AnimatedInView>
      </div>
    </section>
  );
}
