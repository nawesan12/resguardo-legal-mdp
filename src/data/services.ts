import { FileHeart, Briefcase, Gavel, Users } from "lucide-react";
import type { Specialty } from "@/types";

export const specialties: Record<string, Specialty> = {
  amparos: {
    id: "amparos",
    icon: FileHeart,
    title: "Amparos de Salud y por Mora",
    description:
      "Defendemos tu derecho a la salud y agilizamos los procesos administrativos para garantizar una respuesta rápida y efectiva.",
    items: [
      { title: "Amparos de Salud" },
      { title: "Amparos por Mora" },
    ],
  },
  laboral: {
    id: "laboral",
    icon: Briefcase,
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
    id: "civil",
    icon: Gavel,
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
    id: "familia",
    icon: Users,
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

export const specialtyTabs = [
  { id: "amparos", label: "Amparos" },
  { id: "laboral", label: "Laboral y ART" },
  { id: "civil", label: "Civil" },
  { id: "familia", label: "Familia" },
];
