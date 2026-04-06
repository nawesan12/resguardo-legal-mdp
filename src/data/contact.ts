import type { ContactInfo, NavLink } from "@/types";

export const contactInfo: ContactInfo = {
  address: {
    street: "Rivadavia 3174, Piso 5",
    city: "Mar del Plata, Buenos Aires",
  },
  email: "resguardolegalmdp@gmail.com",
  phone: "(0223) 456-7890",
  whatsapp: "5492234567890",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.834036909875!2d-57.54982268467576!3d-38.0044529797184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584de1e35334d7b%3A0x23a1f73e97f51684!2sAv.%20Rivadavia%203174%2C%20B7600GXR%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1662660281931!5m2!1ses-419!2sar",
};

export const navLinks: NavLink[] = [
  { href: "#specialties", label: "Especialidades" },
  { href: "#about", label: "Quiénes Somos" },
  { href: "#faq", label: "Preguntas" },
  { href: "#contact", label: "Contacto" },
];

export const socialLinks = {
  whatsapp: `https://wa.me/${contactInfo.whatsapp}`,
  whatsappWithMessage: `https://wa.me/${contactInfo.whatsapp}?text=Hola,%20quisiera%20hacer%20una%20consulta%20desde%20su%20sitio%20web.`,
  email: `mailto:${contactInfo.email}`,
  linkedin: "#",
};
