"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Helper component for Font Awesome icons
const Icon = ({ className }: { className: string }) => (
  <i className={className}></i>
);

// Animation Variants for Framer Motion
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Animated component that triggers when in view
const AnimatedInView = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      //@ts-expect-error bla
      variants={fadeInUp}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  );
};

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "#specialties", label: "Especialidades" },
    { href: "#about", label: "Quiénes Somos" },
    { href: "#contact", label: "Contacto" },
  ];
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold text-gray-900 flex items-center"
        >
          <Icon className="fas fa-balance-scale-left mr-2 text-emerald-600" />
          Resguardo Legal
        </a>
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-emerald-600 transition duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
          >
            Consulta Gratuita
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-900 focus:outline-none"
          >
            <Icon className="fas fa-bars text-2xl" />
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white py-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-center py-2 px-4 text-sm text-gray-600 hover:bg-gray-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="block text-center mt-2 mx-4 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700"
          >
            Consulta Gratuita
          </a>
        </motion.div>
      )}
    </header>
  );
};

// Hero Section Component
const Hero = () => (
  <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center text-white text-center">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1589216532372-1c2a36790049?q=80&w=2070&auto=format&fit=crop')",
      }}
    ></div>
    <div className="absolute inset-0 bg-gradient-to-r from-gray-800/95 to-gray-700/85"></div>
    <div className="relative z-10 px-6">
      <AnimatedInView>
        <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-4">
          RESGUARDO LEGAL
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-2 font-light">
          PROTEGEMOS TUS DERECHOS.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Estamos para asesorarte y brindarte soluciones jurídicas acordes a tu
          caso.
          <br />
          Recordá que conocer tus derechos es protegerlos.
        </p>
        <motion.a
          href="#contact"
          className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block"
          whileHover={{
            scale: 1.05,
            y: -2,
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          ¡CONSULTÁNOS!
        </motion.a>
      </AnimatedInView>
    </div>
  </section>
);

// Call to Action Section
const CallToAction = () => (
  <section className="bg-gray-800 text-white">
    <div className="container mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold mb-2">
        Tu caso es único, consúltanos.
      </h2>
      <p className="text-gray-300 mb-6 text-lg">
        Enviá tu consulta gratuitamente y da el primer paso para encontrar una
        solución.
      </p>
      <motion.a
        href="#contact"
        className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold inline-block text-md"
        whileHover={{
          scale: 1.05,
          y: -2,
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Hacer una consulta
      </motion.a>
    </div>
  </section>
);

// Specialties Section Component
const Specialties = () => {
  const [activeTab, setActiveTab] = useState("laboral");
  const servicesData = {
    amparos: {
      icon: "fas fa-file-medical-alt",
      title: "Amparos de Salud y por Mora",
      description:
        "Defendemos tu derecho a la salud y agilizamos los procesos administrativos para garantizar una respuesta rápida y efectiva.",
      items: [{ title: "Amparos de Salud" }, { title: "Amparos por Mora" }],
    },
    laboral: {
      icon: "fas fa-briefcase",
      title: "Derecho Laboral y ART",
      description:
        "Representación experta para trabajadores, protegiendo tus derechos frente a despidos, accidentes y condiciones laborales injustas.",
      items: [
        { title: "Accidentes de Trabajo (ART)" },
        { title: "Enfermedad Profesional" },
        { title: "Despidos sin causa y con causa" },
        { title: "Diferencias Salariales" },
        { title: "Trabajo no registrado" },
      ],
    },
    civil: {
      icon: "fas fa-gavel",
      title: "Derecho Civil",
      description:
        "Soluciones legales para proteger tus intereses personales y patrimoniales en diversas situaciones de la vida cotidiana.",
      items: [
        { title: "Sucesiones" },
        { title: "Desalojos" },
        { title: "Accidentes de Tránsito" },
        { title: "Defensa del Consumidor" },
      ],
    },
    familia: {
      icon: "fas fa-users",
      title: "Derecho de Familia",
      description:
        "Acompañamiento sensible y profesional en los momentos más delicados, buscando siempre el bienestar de tu familia.",
      items: [
        { title: "Alimentos" },
        { title: "Divorcios" },
        { title: "Régimen de Comunicación" },
        { title: "Adopción por Integración" },
        { title: "Determinación de la Incapacidad (Curatela)" },
      ],
    },
  };

  const TabButton = ({ id, label }: { id: string; label: string }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`text-md sm:text-lg font-medium py-3 px-4 sm:px-6 border-b-2 transition duration-300 flex-grow text-center ${
        activeTab === id
          ? "border-emerald-500 text-emerald-700 bg-emerald-100/50"
          : "border-transparent text-gray-500 hover:text-emerald-600"
      }`}
    >
      {label}
    </button>
  );

  //@ts-expect-error bla
  const currentService = servicesData[activeTab];
  return (
    <section id="specialties" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedInView>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              ESPECIALIDADES
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Soluciones legales específicas y efectivas para cada una de tus
              necesidades.
            </p>
          </div>
        </AnimatedInView>
        <AnimatedInView delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-center border-b border-gray-200 mb-8">
              <TabButton id="amparos" label="Amparos" />
              <TabButton id="laboral" label="Laboral y ART" />
              <TabButton id="civil" label="Civil" />
              <TabButton id="familia" label="Familia" />
            </div>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="text-emerald-600 text-center md:w-1/4">
                  <Icon className={`${currentService.icon} text-6xl`} />
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {currentService.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {currentService.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-gray-700">
                    {currentService.items.map((item: { title: string }) => (
                      <li key={item.title} className="flex items-center">
                        <Icon className="fas fa-check-circle text-emerald-500 mr-2" />
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedInView>
      </div>
    </section>
  );
};

// About Us Section Component
const About = () => (
  <section id="about" className="py-20 bg-gray-100">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <AnimatedInView>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
              alt="Equipo de Resguardo Legal"
              className="rounded-lg shadow-2xl w-full"
            />
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

// Contact Section Component
const Contact = () => {
  const [formStatus, setFormStatus] = useState({ message: "", type: "" });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ message: "Enviando tu mensaje...", type: "info" });
    // This is a mock submission. In a real app, you'd handle the form submission here.
    setTimeout(() => {
      setFormStatus({
        message:
          "¡Gracias por tu mensaje! Nos pondremos en contacto con vos a la brevedad.",
        type: "success",
      });
      //@ts-expect-error bla
      e.target.reset();
      setTimeout(() => setFormStatus({ message: "", type: "" }), 5000);
    }, 2000);
  };
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedInView>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Contáctanos
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              ¿Tenés una consulta? Completá el formulario o envianos un mensaje.
              Estamos aquí para ayudarte.
            </p>
          </div>
        </AnimatedInView>
        <AnimatedInView delay={0.2}>
          <div className="max-w-4xl mx-auto bg-gray-50 p-8 sm:p-12 rounded-lg shadow-lg">
            <div className="text-center mb-8">
              <p className="text-gray-700 text-lg">
                <Icon className="fas fa-envelope mr-2 text-emerald-600" />
                <a
                  href="mailto:resguardolegalmdp@gmail.com"
                  className="hover:underline"
                >
                  resguardolegalmdp@gmail.com
                </a>
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Tu Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Contanos brevemente sobre tu caso..."
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <motion.button
                  type="submit"
                  className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold text-lg w-full sm:w-auto"
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow:
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Enviar Mensaje
                </motion.button>
              </div>
            </form>
            {formStatus.message && (
              <div
                className={`mt-6 text-center font-semibold ${formStatus.type === "success" ? "text-green-600" : "text-emerald-600"}`}
              >
                {formStatus.message}
              </div>
            )}
          </div>
        </AnimatedInView>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <a
          href="#"
          className="text-2xl font-bold flex items-center justify-center"
        >
          <Icon className="fas fa-balance-scale-left mr-2 text-emerald-400" />
          Resguardo Legal
        </a>
        <p className="mt-4 mb-6 text-gray-400 max-w-md mx-auto">
          Brindando certeza y seguridad jurídica a nuestros clientes.
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="mailto:resguardolegalmdp@gmail.com"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <Icon className="fas fa-envelope text-2xl" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <Icon className="fab fa-linkedin-in text-2xl" />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {currentYear} Resguardo Legal. Todos los derechos reservados.
        </p>
        <p className="text-gray-500 text-sm mt-1">
          Rivadavia 3174, Piso 5, Mar del Plata, Argentina |{" "}
          <a
            href="mailto:resguardolegalmdp@gmail.com"
            className="hover:underline"
          >
            resguardolegalmdp@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

// WhatsApp Button Component
const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/5492234567890?text=Hola,%20quisiera%20hacer%20una%20consulta%20desde%20su%20sitio%20web."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-5 right-5 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
    whileHover={{ scale: 1.1, rotate: 10 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 300 }}
    aria-label="Contactar por WhatsApp"
  >
    <Icon className="fab fa-whatsapp text-4xl" />
  </motion.a>
);

// Main App Component
export default function App() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      {/* Font Awesome CDN for icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        xintegrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <Header />
      <main>
        <Hero />
        <CallToAction />
        <Specialties />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
