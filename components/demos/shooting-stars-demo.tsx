"use client";

import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

// Example features in Spanish, tailored for a fluid measurement context:
const features = [
  {
    icon: "/icons/fast.svg",
    title: "Despacho Rápido",
    description:
      "Entrega y envío de equipos en el menor tiempo posible. Contáctanos para más detalles.",
  },
  {
    icon: "/icons/design.svg",
    title: "Diseño y Desarrollo",
    description:
      "Soluciones personalizadas para sistemas de medición de fluidos, basadas en tecnología de vanguardia.",
  },
  {
    icon: "/icons/scalable.svg",
    title: "Escalabilidad + Mantenimiento",
    description:
      "Ofrecemos mantenimiento y calibración para asegurar resultados precisos a largo plazo.",
  },
  {
    icon: "/icons/team.svg",
    title: "Equipo de Expertos",
    description:
      "Nuestro equipo multidisciplinario te asesorará en cada etapa.",
  },
  {
    icon: "/icons/safe.svg",
    title: "Prácticas Seguras",
    description:
      "Metodologías probadas para garantizar la seguridad y confiabilidad de tu sistema.",
  },
  {
    icon: "/icons/analytics.svg",
    title: "Análisis Avanzado",
    description:
      "Monitoreo y diagnóstico en tiempo real para maximizar la eficiencia.",
  },
  {
    icon: "/icons/flexible.svg",
    title: "Soluciones Dinámicas",
    description:
      "Adaptamos nuestros sistemas a tus requerimientos específicos.",
  },
  {
    icon: "/icons/support.svg",
    title: "Soporte 24/7",
    description:
      "Estamos disponibles a toda hora para brindar soporte inmediato.",
  },
  {
    icon: "/icons/money.svg",
    title: "Precios Accesibles",
    description:
      "Servicios de alta calidad a un costo competitivo para tu negocio.",
  },
];

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full mt-20 py-10 md:py-20 px-6 md:px-0 bg-neutral-900 rounded-[40px] overflow-hidden">
      {/* Title & Subtitle */}
      <h2 className="relative z-10 flex flex-col items-center max-w-5xl mx-auto text-center">
        <span className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-3">
          Nuestras Garantías
        </span>
        <p className="text-xl md:text-2xl text-gray-200">
          Aseguramos la más alta precisión y confiabilidad en cada medición.
        </p>
      </h2>

      {/* Features */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 xl:w-4/5 2xl:w-[68%] mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col bg-neutral-800 rounded-xl p-8 cursor-pointer hover:scale-[1.02] transition-transform"
          >
            <div
              className="
                w-16 p-4
                flex items-center justify-center 
                rounded-md 
                bg-gradient-to-br from-neutral-700 to-neutral-800 
                animate-pulse
              "
            >
              <Image
                src={feature.icon}
                width={10000}
                height={10000}
                alt="icon"
                className="w-8 h-8"
              />
            </div>

            <h3 className="text-xl font-bold mt-4 text-white">
              {feature.title}
            </h3>
            <p className="text-gray-200 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Background Animations */}
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
