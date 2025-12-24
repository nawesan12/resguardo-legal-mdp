import type { LucideIcon } from "lucide-react";

export interface TeamMember {
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
}

export interface SpecialtyItem {
  title: string;
}

export interface Specialty {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  items: SpecialtyItem[];
}

export interface Testimonial {
  quote: string;
  name: string;
  caseType: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface ContactInfo {
  address: {
    street: string;
    city: string;
  };
  email: string;
  phone: string;
  whatsapp: string;
  mapsEmbedUrl: string;
}
