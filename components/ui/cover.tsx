"use client";
import React, { useEffect, useId, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SparklesCore } from "./sparkles";

/**
 * A more professional and subdued Cover component,
 * with softened animations and neutral color tones.
 */
export const Cover = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const [containerWidth, setContainerWidth] = useState(0);
  const [beamPositions, setBeamPositions] = useState<number[]>([]);

  useEffect(() => {
    if (ref.current) {
      setContainerWidth(ref.current.clientWidth ?? 0);

      const height = ref.current.clientHeight ?? 0;
      // Adjust the spacing to have fewer beams for a subtler effect
      const numberOfBeams = Math.floor(height / 18);
      const positions = Array.from(
        { length: numberOfBeams },
        (_, i) => (i + 1) * (height / (numberOfBeams + 1))
      );
      setBeamPositions(positions);
    }
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative inline-block rounded-sm px-3 py-2 transition-all duration-300",
        "bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800",
        "group/cover"
      )}
    >
      {/* Subtle Sparkles & Beams on Hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="sparkle-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }} // softer presence
            exit={{ opacity: 0 }}
            transition={{
              opacity: {
                duration: 0.3,
              },
            }}
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <motion.div
              animate={{
                translateX: ["-50%", "0%"],
              }}
              transition={{
                translateX: {
                  duration: 10,
                  ease: "linear",
                  repeat: Infinity,
                },
              }}
              className="flex w-[200%] h-full"
            >
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={300} // fewer particles
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={300}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle horizontal beams */}
      {beamPositions.map((position, index) => (
        <Beam
          key={index}
          hovered={hovered}
          width={containerWidth}
          style={{
            top: `${position}px`,
          }}
        />
      ))}

      {/* Text with softened scale animation on hover */}
      <motion.span
        key={String(hovered)}
        animate={{
          scale: hovered ? 0.97 : 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "relative z-20 text-neutral-900 dark:text-neutral-100 transition-colors",
          "group-hover/cover:text-blue-600 dark:group-hover/cover:text-blue-400",
          className
        )}
      >
        {children}
      </motion.span>
    </div>
  );
};

/**
 * Beam
 * Creates a single horizontal line that animates color across it on hover.
 */
export const Beam = ({
  className,
  hovered,
  width = 600,
  ...svgProps
}: {
  className?: string;
  hovered?: boolean;
  width?: number;
} & React.ComponentProps<typeof motion.svg>) => {
  const id = useId();

  return (
    <motion.svg
      width={width}
      height="1"
      viewBox={`0 0 ${width} 1`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none absolute inset-x-0 w-full", className)}
      {...svgProps}
    >
      <motion.path d={`M0 0.5H${width}`} stroke={`url(#svgGradient-${id})`} />
      <defs>
        <motion.linearGradient
          id={`svgGradient-${id}`}
          key={String(hovered)}
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: "0%",
            x2: hovered ? "0%" : "10%",
            y1: 0,
            y2: 0,
          }}
          animate={{
            x1: hovered ? "100%" : "0%",
            x2: hovered ? "110%" : "10%",
          }}
          transition={{
            duration: 1.5,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <stop offset="0" stopColor="#4881C0" stopOpacity="0" />
          <stop
            offset="0.5"
            stopColor="#4881C0"
            stopOpacity={hovered ? 0.6 : 0.3}
          />
          <stop offset="1" stopColor="#4881C0" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  );
};
