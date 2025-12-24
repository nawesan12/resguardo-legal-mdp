import { Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { contactInfo, socialLinks } from "@/data/contact";

export function TopBar() {
  return (
    <div className="bg-gray-800 text-white text-sm py-2">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a
            href={socialLinks.email}
            className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
            aria-label={`Enviar email a ${contactInfo.email}`}
          >
            <Mail size={16} aria-hidden="true" />
            <span className="hidden sm:inline">{contactInfo.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
            aria-label={`Llamar al ${contactInfo.phone}`}
          >
            <WhatsAppIcon size={16} />
            <span>{contactInfo.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
