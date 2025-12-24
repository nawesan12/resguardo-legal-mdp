"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { socialLinks } from "@/data/contact";

export function WhatsAppButton() {
  return (
    <motion.a
      href={socialLinks.whatsappWithMessage}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon size={32} />
    </motion.a>
  );
}
