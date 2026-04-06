import { Mail, Linkedin } from "lucide-react";
import { Logo } from "@/components/Logo";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { contactInfo, socialLinks } from "@/data/contact";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <a
          href="#"
          className="inline-flex items-center justify-center"
          aria-label="Resguardo Legal - Inicio"
        >
          <Logo size="lg" showText={false} />
          <span className="ml-2 text-2xl font-bold text-white">Resguardo Legal</span>
        </a>

        <p className="mt-4 mb-6 text-gray-400 max-w-md mx-auto">
          Brindando certeza y seguridad jurídica a nuestros clientes.
        </p>

        <div className="flex justify-center space-x-6 mb-8">
          <a
            href={socialLinks.email}
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Enviar email"
          >
            <Mail size={24} />
          </a>
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Contactar por WhatsApp"
          >
            <WhatsAppIcon size={24} />
          </a>
          <a
            href={socialLinks.linkedin}
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Visitar LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 space-y-3">
          <p className="text-gray-500 text-xs max-w-2xl mx-auto">
            Este sitio no constituye asesoramiento jurídico. La información proporcionada es de carácter general y no reemplaza una consulta profesional.
          </p>
          <p className="text-gray-500 text-xs">
            Matriculados en el Colegio de Abogados del Dpto. Judicial de Mar del Plata.
          </p>
          <p className="text-gray-500 text-sm mt-4">
            &copy; {currentYear} Resguardo Legal. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            {contactInfo.address.street}, {contactInfo.address.city} |{" "}
            <a href={socialLinks.email} className="hover:underline">
              {contactInfo.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
