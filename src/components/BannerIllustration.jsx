import React from "react";

const BannerIllustration = () => {
  return (
    <svg
      viewBox="0 0 480 420"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-xl"
    >
      {/* Code window */}
      <g>
        <rect
          x="20"
          y="20"
          width="380"
          height="260"
          rx="14"
          fill="#0b1220"
          stroke="#1e3a8a"
          strokeWidth="1.5"
        />
        <rect x="20" y="20" width="380" height="34" rx="14" fill="#111c33" />
        <circle cx="42" cy="37" r="5" fill="#f87171" />
        <circle cx="60" cy="37" r="5" fill="#fbbf24" />
        <circle cx="78" cy="37" r="5" fill="#34d399" />

        <rect x="42" y="78" width="120" height="10" rx="5" fill="#22d3ee" />
        <rect x="42" y="100" width="220" height="10" rx="5" fill="#3b4a6b" />
        <rect x="42" y="122" width="180" height="10" rx="5" fill="#3b4a6b" />
        <rect x="66" y="144" width="150" height="10" rx="5" fill="#22d3ee" opacity="0.7" />
        <rect x="66" y="166" width="200" height="10" rx="5" fill="#3b4a6b" />
        <rect x="42" y="188" width="90" height="10" rx="5" fill="#3b4a6b" />
        <rect x="42" y="210" width="260" height="10" rx="5" fill="#3b4a6b" />
        <rect x="66" y="232" width="130" height="10" rx="5" fill="#22d3ee" opacity="0.7" />
      </g>

      {/* Data card */}
      <g>
        <rect
          x="140"
          y="230"
          width="260"
          height="170"
          rx="14"
          fill="#0e1830"
          stroke="#22d3ee"
          strokeWidth="1.5"
        />
        <rect x="164" y="254" width="120" height="10" rx="5" fill="#e5e7eb" />
        <rect x="164" y="272" width="80" height="8" rx="4" fill="#64748b" />

        {/* Bars */}
        <rect x="164" y="330" width="24" height="40" rx="3" fill="#1e3a8a" />
        <rect x="200" y="310" width="24" height="60" rx="3" fill="#1e3a8a" />
        <rect x="236" y="290" width="24" height="80" rx="3" fill="#22d3ee" />
        <rect x="272" y="320" width="24" height="50" rx="3" fill="#1e3a8a" />
        <rect x="308" y="300" width="24" height="70" rx="3" fill="#1e3a8a" />
        <rect x="344" y="270" width="24" height="100" rx="3" fill="#22d3ee" />

        {/* Trend line */}
        <polyline
          points="176,340 212,320 248,300 284,330 320,310 356,280"
          fill="none"
          stroke="#67e8f9"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default BannerIllustration;
