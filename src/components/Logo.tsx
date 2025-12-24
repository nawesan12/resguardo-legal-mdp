interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const sizes = {
  sm: { width: 32, height: 32 },
  md: { width: 40, height: 40 },
  lg: { width: 56, height: 56 },
};

export function Logo({ className = "", size = "md", showText = true }: LogoProps) {
  const { width, height } = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Shield Shape */}
        <path
          d="M32 4L8 14V30C8 44.36 18.16 57.52 32 60C45.84 57.52 56 44.36 56 30V14L32 4Z"
          fill="url(#shieldGradient)"
          stroke="#059669"
          strokeWidth="2"
        />

        {/* Inner Shield Highlight */}
        <path
          d="M32 8L12 16.5V30C12 42.24 20.8 53.36 32 56C43.2 53.36 52 42.24 52 30V16.5L32 8Z"
          fill="url(#innerGradient)"
        />

        {/* Balance Scale - Beam */}
        <rect
          x="30"
          y="18"
          width="4"
          height="4"
          rx="2"
          fill="#1f2937"
        />
        <rect
          x="31"
          y="22"
          width="2"
          height="16"
          fill="#1f2937"
        />
        <rect
          x="18"
          y="24"
          width="28"
          height="2"
          rx="1"
          fill="#1f2937"
        />

        {/* Left Scale Plate */}
        <path
          d="M18 26L14 34H26L22 26H18Z"
          fill="#059669"
          stroke="#047857"
          strokeWidth="0.5"
        />
        <ellipse
          cx="20"
          cy="34"
          rx="6"
          ry="2"
          fill="#047857"
        />

        {/* Right Scale Plate */}
        <path
          d="M42 26L38 34H50L46 26H42Z"
          fill="#059669"
          stroke="#047857"
          strokeWidth="0.5"
        />
        <ellipse
          cx="44"
          cy="34"
          rx="6"
          ry="2"
          fill="#047857"
        />

        {/* Chains */}
        <line x1="18" y1="26" x2="20" y2="26" stroke="#1f2937" strokeWidth="1" />
        <line x1="22" y1="26" x2="20" y2="26" stroke="#1f2937" strokeWidth="1" />
        <line x1="42" y1="26" x2="44" y2="26" stroke="#1f2937" strokeWidth="1" />
        <line x1="46" y1="26" x2="44" y2="26" stroke="#1f2937" strokeWidth="1" />

        {/* Base */}
        <rect
          x="26"
          y="40"
          width="12"
          height="3"
          rx="1.5"
          fill="#1f2937"
        />
        <rect
          x="24"
          y="43"
          width="16"
          height="3"
          rx="1.5"
          fill="#1f2937"
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="shieldGradient" x1="32" y1="4" x2="32" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#10b981" />
            <stop offset="1" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="innerGradient" x1="32" y1="8" x2="32" y2="56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#d1fae5" stopOpacity="0.3" />
            <stop offset="1" stopColor="#a7f3d0" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {showText && (
        <span className="font-bold text-gray-900">
          Resguardo Legal
        </span>
      )}
    </div>
  );
}

export function LogoIcon({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Resguardo Legal"
    >
      {/* Shield Shape */}
      <path
        d="M32 4L8 14V30C8 44.36 18.16 57.52 32 60C45.84 57.52 56 44.36 56 30V14L32 4Z"
        fill="url(#shieldGradientIcon)"
        stroke="#059669"
        strokeWidth="2"
      />

      {/* Inner Shield Highlight */}
      <path
        d="M32 8L12 16.5V30C12 42.24 20.8 53.36 32 56C43.2 53.36 52 42.24 52 30V16.5L32 8Z"
        fill="url(#innerGradientIcon)"
      />

      {/* Balance Scale - Beam */}
      <rect x="30" y="18" width="4" height="4" rx="2" fill="#1f2937" />
      <rect x="31" y="22" width="2" height="16" fill="#1f2937" />
      <rect x="18" y="24" width="28" height="2" rx="1" fill="#1f2937" />

      {/* Left Scale Plate */}
      <path d="M18 26L14 34H26L22 26H18Z" fill="#059669" stroke="#047857" strokeWidth="0.5" />
      <ellipse cx="20" cy="34" rx="6" ry="2" fill="#047857" />

      {/* Right Scale Plate */}
      <path d="M42 26L38 34H50L46 26H42Z" fill="#059669" stroke="#047857" strokeWidth="0.5" />
      <ellipse cx="44" cy="34" rx="6" ry="2" fill="#047857" />

      {/* Base */}
      <rect x="26" y="40" width="12" height="3" rx="1.5" fill="#1f2937" />
      <rect x="24" y="43" width="16" height="3" rx="1.5" fill="#1f2937" />

      <defs>
        <linearGradient id="shieldGradientIcon" x1="32" y1="4" x2="32" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10b981" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="innerGradientIcon" x1="32" y1="8" x2="32" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#d1fae5" stopOpacity="0.3" />
          <stop offset="1" stopColor="#a7f3d0" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
