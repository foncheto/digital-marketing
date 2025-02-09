"use client";

import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";
import { IconStarFilled } from "@tabler/icons-react";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";

const serviciosDeMedicion = [
  {
    icon: "/images/s_1.png",
    title: "Caudalímetros",
    description:
      "Medición precisa de flujo para diversas aplicaciones industriales.",
  },
  {
    icon: "/images/s_2.png",
    title: "Medidores de Nivel",
    description: "Controla y supervisa con precisión los niveles de líquidos.",
  },
  {
    icon: "/images/s_3.png",
    title: "Sensores de Presión",
    description:
      "Monitoreo confiable para garantizar seguridad y eficiencia en tus procesos.",
  },
  {
    icon: "/images/s_4.png",
    title: "Medidores de Temperatura",
    description:
      "Soluciones de medición de temperatura adaptadas a tus necesidades.",
  },
  {
    icon: "/images/s_5.png",
    title: "Instrumentos de Calidad de Fluidos",
    description:
      "Analiza parámetros químicos y físicos para asegurar la calidad de tus fluidos.",
  },
  {
    icon: "/images/s_6.png",
    title: "Servicios de Calibración",
    description:
      "Mantenimiento y calibración de equipos para resultados óptimos.",
  },
];

export default function Home() {
  return (
    <div
      className="overflow-clip 
 inset-0 
 -z-10 h-full w-full bg-[#fafafa]
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px]"
    >
      {/* Header / Navbar */}
      <Element
        name="top"
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 
   xl:w-4/5 2xl:w-[68%] bg-white flex items-center 
   justify-between py-6 px-4 md:px-8 mx-6"
      >
        <Link href={"/"}>
          <Image
            src={"/logo/logo2.webp"}
            alt="Logo Analitiks"
            width={1000}
            height={1000}
            className="w-36"
          />
        </Link>

        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
            {/* Menú de navegación */}
            <Link href={"/blog"} className="hover:text-blue-500">
              Empresa
            </Link>

            <ScrollLink
              to="productos"
              smooth={true}
              className="hover:text-blue-500"
            >
              Parámetros
            </ScrollLink>

            <ScrollLink
              to="nosotros"
              smooth={true}
              className="hover:text-blue-500"
            >
              Productos
            </ScrollLink>

            <ScrollLink
              to="catalogo"
              smooth={true}
              className="hover:text-blue-500"
            >
              Noticias
            </ScrollLink>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <a href="tel:+56999999999" className="hidden lg:flex">
            <button className="px-4 py-2 rounded-md flex items-center gap-x-3">
              +56 9 9999 9999
            </button>
          </a>

          <Link
            href={"/contacto"}
            className="
  py-3 
  px-6
  text-lg 
  hover:bg-[#4881C0]
  rounded-[6px]
  border-2
  border-black
  text-white
  bg-[#121212]
  transition
  duration-200
     hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
     dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            Cotiza Aquí
          </Link>
        </div>
      </Element>
      {/* Hero / Portada */}
      <main className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <h1>
            <CoverDemo />
          </h1>
          <p
            className="md:text-center
           text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500"
          >
            Agenda una reunión con nosotros para conocer tus necesidades
            específicas y recibir una cotización en minutos.
          </p>

          <div
            className="
                 flex 
                  md:justify-center 
                  items-center 
                  gap-x-4
                   "
          >
            <Link
              href="/contacto"
              className="py-3 
            px-10
            md:px-16
      md:text-xl
      hover:bg-[#4881C0] 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
       dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
            >
              Agendar Reunión
            </Link>
            <Link
              href={"/catalogo"}
              className="
              bg-white
   py-3 
   px-10
   md:px-16
      md:text-xl
        border-4
        border-black
        rounded-[6px]
        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
        dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              Catálogo
            </Link>
          </div>

          {/* Cuatro bullet points (anteriormente "Design, Development, Marketing, Strategy") */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Calidad
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Precisión
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Innovación
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Confiabilidad
              </p>
            </BoxReveal>
          </div>

          {/* Métricas e "InfiniteMovingLogos" */}
          <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
            <div className="md:w-2/5">
              <h1 className="text-2xl font-medium text-gray-600 w-4/5">
                Confiado por empresas en todo el mundo para medir fluidos con
                precisión
              </h1>

              <div className="flex my-6 gap-x-5 w-full">
                <div>
                  <h1 className="text-blue-500 text-3xl md:text-5xl">
                    <NumberTicker value={1000} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Clientes Satisfechos
                    </p>
                  </h1>
                </div>

                <div className="w-px bg-gray-300 self-stretch"></div>

                <div className="flex-1 min-w-0">
                  <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                    <NumberTicker value={100} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Proyectos Realizados
                    </p>
                  </h1>
                </div>
              </div>
            </div>

            <section className="overflow-hidden mt-10 md:w-4/5">
              <InfiniteMovingLogos
                speed="slow"
                direction="left"
                items={[
                  {
                    logo: "/logo/logo2.webp",
                    name: "Analitiks",
                  },
                  {
                    logo: "/logo/logo2.webp",
                    name: "Analitiks",
                  },
                ]}
              />
            </section>
          </div>
        </div>
      </main>

      {/* Sección Productos/Servicios */}
      <Element name="productos">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto ">
          <h1>
            <WordPullUpDemo />
          </h1>
          <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
            Todos nuestros productos y servicios ofrecen soluciones de medición
            para garantizar precisión y eficiencia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {serviciosDeMedicion.map((servicio) => (
              <div
                key={servicio.title}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
              >
                <Image
                  src={servicio.icon}
                  width={10000}
                  height={10000}
                  className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  alt={servicio.title}
                />
                <h1 className="text-xl font-medium">{servicio.title}</h1>
                <p className="text-gray-500">{servicio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>

      {/* Sección de espacio en blanco */}
      <section className="h-20"></section>

      {/* Proceso */}
      <Element name="proceso">
        <main className="md:px-0 mx-6 md:mx-auto">
          <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
            Nuestro{" "}
            <span className="text-blue-500 flex gap-x-1 items-center">
              Proceso
            </span>
          </h1>

          <p
            className="text-center 
          py-4 md:w-1/2 mx-auto 
          text-xl md:text-2xl text-gray-500"
          >
            Ofrecemos asesoría y soporte integral para asegurar soluciones
            confiables y eficientes.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <AnimatedBeamMultipleOutputDemo />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
              <BoxRevealDemo />
            </div>
          </div>
        </main>
      </Element>

      {/* Testimonial */}
      <section>
        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
          <Image
            src={"/logo/logo2.webp"}
            width={10000}
            height={10000}
            className=" md:w-1/3 rounded-md"
            alt="Cliente satisfecho"
          />
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <h1 className="text-lg md:text-2xl ">
              &quot;Hemos trabajado con Analitiks por más de 2 años y han sido
              un aliado clave para garantizar la medición precisa de nuestros
              fluidos industriales. Estamos encantados con los resultados.&quot;
            </h1>
            <div className="flex items-center gap-x-1">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>

            <span className="text-xl font-medium">
              Juan Pérez <br />
              Gerente de Operaciones, FluidCorp
            </span>
          </div>
        </main>
      </section>

      {/* Garantías */}
      <Element name="garantias">
        <ShootingStarsAndStarsBackgroundDemo />
      </Element>

      {/* Llamado a la acción final */}
      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>

      {/* Footer */}
      <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
        <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium ">
            <Image
              src={"/logo/logo2.webp"}
              width={10000}
              height={10000}
              className="w-40"
              alt="Logo Analitiks"
            />
          </h1>
          <p className="text-left  text-xl  text-gray-500">+56 9 9999 9999</p>
          <p className="text-left  text-xl  text-gray-500">info@analitiks.cl</p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-center gap-x-4 gap-y-2 mt-10 text-center md:text-left">
          <span>© 2025 Analitiks. Todos los derechos reservados.</span>
          <Link href="/" className="text-blue-500">
            Política de privacidad
          </Link>
        </div>
      </footer>
    </div>
  );
}
