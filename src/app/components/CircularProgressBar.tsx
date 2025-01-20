import React from "react";

interface CircularProgressProps {
  percentage: number;
  progressColor: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  progressColor,
}) => {
  const radius = 30; // Radius of the circle
  const strokeWidth = 9; // Stroke width for the circle
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  const size = radius * 2 + strokeWidth; // Calculate SVG size dynamically

  return (
    <div
      className="flex items-center justify-center relative"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background Circle */}
        <circle
          cx={size / 2} // Centered in the SVG
          cy={size / 2} // Centered in the SVG
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-gray-300"
        />
        {/* Progress Circle */}
        <circle
          cx={size / 2} // Centered in the SVG
          cy={size / 2} // Centered in the SVG
          r={radius}
          stroke={progressColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-500"
        />
      </svg>
      <span
        className="absolute text-md font-bold"
        style={{ color: progressColor }}
      >
        {percentage}%
      </span>
    </div>
  );
};

export default CircularProgress;
