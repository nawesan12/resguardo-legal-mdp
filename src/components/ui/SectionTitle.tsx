import { AnimatedInView } from "./AnimatedInView";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ title, subtitle, className = "" }: SectionTitleProps) {
  return (
    <AnimatedInView>
      <div className={`text-center mb-12 ${className}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </AnimatedInView>
  );
}
