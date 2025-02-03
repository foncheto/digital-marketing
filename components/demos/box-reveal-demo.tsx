"use client";

import BoxReveal from "@/components/magicui/box-reveal";
import Link from "next/link";

const BoxRevealDemo = () => {
  return (
    <div className="flex flex-col ml-10 overflow-hidden pt-8 space-y-4 h-full w-full">
      {/* Paso 1 */}
      <BoxReveal boxColor="#3b82f6" duration={0.5}>
        <p className="text-2xl md:text-3xl font-semibold text-neutral-800 dark:text-neutral-100">
          1. Conéctate
        </p>
      </BoxReveal>
      <BoxReveal boxColor="#3b82f6" duration={0.5}>
        <p className="text-md md:text-lg text-gray-600 dark:text-gray-400">
          Programa una reunión.{" "}
          <Link href="/contacto" className="text-[#3b82f6] hover:underline">
            Clic aquí
          </Link>
        </p>
      </BoxReveal>

      {/* Paso 2 */}
      <BoxReveal boxColor="#3b82f6" duration={0.5}>
        <p className="text-2xl md:text-3xl font-semibold text-neutral-800 dark:text-neutral-100">
          2. Colabora
        </p>
      </BoxReveal>
      <BoxReveal boxColor="#3b82f6" duration={0.5}>
        <p className="text-md md:text-lg text-gray-600 dark:text-gray-400">
          Comparte tus requerimientos.
        </p>
      </BoxReveal>

      {/* Paso 3 */}
      <BoxReveal boxColor="#3b82f6" duration={0.5}>
        <p className="text-2xl md:text-3xl font-semibold text-neutral-800 dark:text-neutral-100">
          3. Creamos
        </p>
      </BoxReveal>
      <BoxReveal boxColor="#3b82f6" duration={0.5}>
        <p className="text-md md:text-lg text-gray-600 dark:text-gray-400">
          Desarrollamos tu solución.
        </p>
      </BoxReveal>
    </div>
  );
};

export default BoxRevealDemo;
