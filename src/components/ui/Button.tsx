"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const variants = {
  primary: "bg-emerald-600 text-white hover:bg-emerald-700",
  secondary: "bg-white text-gray-900 hover:bg-gray-100",
  outline: "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  className = "",
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  children,
  onClick,
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center
        rounded-lg font-semibold
        transition-colors duration-300
        focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      whileHover={disabled ? {} : { scale: 1.02, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
}

interface ButtonLinkProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export function ButtonLink({
  className = "",
  variant = "primary",
  size = "md",
  children,
  href,
  target,
  rel,
  onClick,
}: ButtonLinkProps) {
  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center
        rounded-lg font-semibold
        transition-colors duration-300
        focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      whileHover={{
        scale: 1.02,
        y: -2,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.a>
  );
}
