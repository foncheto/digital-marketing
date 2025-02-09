"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function LetsMakeThingsHappenSection() {
  return (
    <section
      className="
        my-10
        md:py-20
        md:mx-auto
        bg-accent
        rounded-[45px]
        p-[50px]
        md:p-[60px]
        relative
      "
    >
      <div className="md:pr-[22rem]">
        <p className="text-3xl font-medium text-gray-800 dark:text-gray-100">
          Trabajemos juntos
        </p>

        <p className="my-10 text-xl text-gray-700 dark:text-gray-300">
          ¿Necesitas soluciones precisas y confiables para medir fluidos?
          Contacta a nuestro equipo y descubre cómo podemos impulsar la
          eficiencia en tus operaciones.
        </p>

        <Link
          href="/contacto"
          className="
            py-3 
            px-10
            md:px-16
            md:text-xl
            rounded-[6px]
            border-2
            border-black
            dark:border-white
            bg-[#121212]
            text-white
            hover:bg-[#abcbff]
            transition
            duration-200
            hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]
            dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]
          "
        >
          Contáctanos
        </Link>
      </div>

      <div className="absolute -top-8 right-8 hidden md:block">
        <Image
          src="/images/proposal_illustration.png"
          alt="Ilustración de propuesta"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}

export default LetsMakeThingsHappenSection;
