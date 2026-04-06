"use client";

import { useState } from "react";
import { MapPin, Mail, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedInView } from "@/components/ui/AnimatedInView";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { contactInfo, socialLinks } from "@/data/contact";

type FormStatus = {
  message: string;
  type: "info" | "success" | "error" | "";
};

export function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>({
    message: "",
    type: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ message: "Enviando tu mensaje...", type: "info" });

    setTimeout(() => {
      setFormStatus({
        message:
          "¡Gracias por tu mensaje! Nos pondremos en contacto con vos a la brevedad.",
        type: "success",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormStatus({ message: "", type: "" }), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle
          title="Contáctanos"
          subtitle="¿Tenés una consulta? Completá el formulario o contactanos directamente. Estamos aquí para ayudarte."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Contact Form */}
          <AnimatedInView delay={0.2} className="lg:col-span-3">
            <motion.div
              className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl border border-gray-100"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-emerald">
                  <Send className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Envianos tu Consulta</h3>
                  <p className="text-gray-600 text-sm">Te respondemos en menos de 24 horas</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Nombre y Apellido"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="tu@email.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Teléfono (opcional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="(0223) 123-4567"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="caseType"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Tipo de Consulta
                    </label>
                    <select
                      id="caseType"
                      name="caseType"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white"
                      disabled={isSubmitting}
                    >
                      <option value="">Seleccioná una opción</option>
                      <option value="laboral">Derecho Laboral</option>
                      <option value="familia">Derecho de Familia</option>
                      <option value="civil">Derecho Civil</option>
                      <option value="amparos">Amparos de Salud</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Tu Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                    placeholder="Contanos brevemente sobre tu caso o consulta..."
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full shadow-emerald-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Consulta
                    </>
                  )}
                </Button>
              </form>

              {formStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  aria-live="polite"
                  className={`mt-6 p-4 rounded-xl flex items-center gap-3 ${
                    formStatus.type === "success"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : formStatus.type === "error"
                        ? "bg-red-50 text-red-700 border border-red-200"
                        : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  }`}
                >
                  {formStatus.type === "success" && <CheckCircle2 className="w-5 h-5" />}
                  <span className="font-medium">{formStatus.message}</span>
                </motion.div>
              )}
            </motion.div>
          </AnimatedInView>

          {/* Contact Information */}
          <AnimatedInView delay={0.4} className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl text-white h-full">
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Dirección</p>
                    <p className="text-gray-300 text-sm">
                      {contactInfo.address.street}<br />
                      {contactInfo.address.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a
                      href={socialLinks.email}
                      className="text-emerald-300 hover:text-emerald-200 transition-colors text-sm"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <WhatsAppIcon size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">WhatsApp</p>
                    <a
                      href={socialLinks.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-300 hover:text-emerald-200 transition-colors text-sm"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src={contactInfo.mapsEmbedUrl}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de la oficina de Resguardo Legal"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </AnimatedInView>
        </div>
      </div>
    </section>
  );
}
