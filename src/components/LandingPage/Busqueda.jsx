import { CheckCircleIcon } from '@heroicons/react/20/solid'
import React, { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Busqueda = () => {

  const revealRef = useRef(null);
 
  useEffect(() => {
    ScrollReveal().reveal(revealRef.current, {
      duration: 3000,
      origin: 'right',
      distance: '400px'

    });
  }, []);  

  return (
    <>
    <div ref={revealRef}>
    <div className="bg-white py-12 sm:py-12">
      <div className="relative isolate">
        <div className="mx-auto max-w-4xl sm:px-6 lg:px-8  shadow-lg">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 py-16 px-6 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-10">
            <img
              className="h-60 w-full sm:h-96 sm:w-full flex-none rounded-2xl object-cover object-center shadow-xl  lg:h-auto lg:max-w-[350px] "
              src="https://pdftramites.nyc3.digitaloceanspaces.com/ImagenesIKTANStrategies/Imagen-servicio.png"
              alt=""
            />
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-3xl">Gestion Fisica</h2>
              <p className="mt-6 text-sm leading-6 text-black text-justify">
              Nuestro servicio de Gestión Física en la CDMX ayuda a nuestros clientes a cumplir con sus medidas 
              de prevención de contagios de COVID-19, brindando una opción para evitar el desplazamiento a la CDMX 
              para la entrega de información física en oficialía de partes. Existen muchas razones para utilizar
               nuestro servicio de Gestión Física:
              </p>
              <ul className='list-disc list-inside mt-6 mb-6 text-sm leading-6 text-black text-justify'>
                <li>Evita vuelos innecesarios.</li>
                <li>Ahorra en hospedaje y viáticos.</li>
                <li>Ahorra tiempo.</li>
                <li>Check and Double-Check para entrega de expedientes.</li>
              </ul>
              {/* <p className="mt-6 mb-6 text-sm leading-6 text-black text-justify">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                accusamus quisquam.
              </p> */}
                {/* <button
                    type="button"
                    className="rounded-md bg-[#DD102A] py-2.5 px-8 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Learn More
                </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Busqueda