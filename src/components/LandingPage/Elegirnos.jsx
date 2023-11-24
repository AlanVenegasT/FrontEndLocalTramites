import React, { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


const Elegirnos = () => {

  const revealRef = useRef(null);
 
  useEffect(() => {
    ScrollReveal().reveal(revealRef.current, {
      duration: 3000,
      origin: 'left',
      distance: '400px'

    });
  }, []);

  return (
    <>
    <div ref={revealRef}>
      <div className="bg-white">
        <div className="mx-auto max-w-xs md:max-w-2xl  lg:max-w-4xl xl:max-w-5xl flex flex-col md:flex-col lg:flex-row xl:flex-row  ">
          <div className="basis-1/2 pr-0 md:pr-14 lg:pr-14 xl:pr-14"> {/*Texto */}
          <h2 className='text-[#DD102A] text-start text-sm '>Industria Pozos Petroleros</h2>
          <h3 className="text-2xl font-black py-4">Gestión Regulatoria</h3>
          <p className="pb-4">Los Contratos de E&E conllevan el cumplimiento con múltiples autoridades en alguna de las 400 diferentes posibles gestiones (Autorizaciones, Permisos, Informes, Avisos, Reportes, etc.) derivadas de la regulación vigente.</p>
          <p className="pb-4">Ayudamos a nuestros clientes a obtener la resolución favorable de trámites del Sector Energía (ASEA, CNH, etc.). Contamos con procesos legal y técnicamente robustos, refinados a través de una amplia experiencia en los procesos de gestión de los Reguladores del Sector.</p>
          {/* <ul className="list-disc list-inside ">
            <li className="py-2 text-justify text-[#DD102A] "><span className="text-black"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rerum eum officiis! Repellat eaque amet at aut necessitatibus, voluptatibus minima illum iusto quasi labore quaerat provident, eum consequuntur ex alias?</span></li>
            <li className="py-2 text-justify text-[#DD102A] "><span className="text-black"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rerum eum officiis! Repellat eaque amet at aut necessitatibus, voluptatibus minima illum iusto quasi labore quaerat provident, eum consequuntur ex alias?</span></li>
            <li className="py-2 text-justify text-[#DD102A] "><span className="text-black"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rerum eum officiis! Repellat eaque amet at aut necessitatibus, voluptatibus minima illum iusto quasi labore quaerat provident, eum consequuntur ex alias?</span></li>
          </ul> */}

          <h3 className="text-2xl font-black py-4">Dictaminación de Pozos</h3>
          <p className="pb-4">La dictaminación de pozos por Terceros Autorizados es un elemento fundamental para cumplir la regulación de ASEA, por eso, en Iktan Strategies  ofrecer a nuestros clientes las mejores opciones</p>
          

          {/* <button
                    type="button"
                    className="rounded-md bg-[#DD102A] mt-5 mb-16 md:mt-5 md:mb-16 lg:mt-0 lg:mb-0 xl:mt-0 xl:mb-0 py-2.5 px-8 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Discover More
                </button> */}
          </div>
          <div className="basis-1/2 flex flex-col">
            <div className="basis-1/2 flex flex-row">
              <div className="flex flex-col overflow-hidden basis-1/2 w-10 h-56 mx-4 bg-white  shadow-lg">
                <div className="basis-1/3"><svg className="ml-5 mt-5" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#DD102A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg></div>
                <div className="basis-2/3">
                  <p className="font-bold px-3 py-2">Gestiones ante la ASEA:</p>
                  <p className="text-justify px-3 text-sm">Protección Ambiental, Residuos</p>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden basis-1/2 w-10 h-56 mx-4 mt-6 bg-white shadow-lg">
                <div className="basis-1/3"><svg className="ml-5 mt-5" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#DD102A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg></div>
                <div className="basis-2/3">
                  <p className="font-bold px-3 py-2">Gestiones ante la ASEA:</p>
                  <p className="text-justify px-3 text-sm">Exploración y Extracción, Sistemas de Administración, Seguros y Garantias Financieras  </p>
                </div>
              </div>
            </div>
            <div className="basis-1/2 flex flex-row">
              <div className="flex flex-col overflow-hidden basis-1/2 w-10 h-56 mx-4 bg-white shadow-lg">
              <div className="basis-1/3"><svg className="ml-5 mt-5" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#DD102A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg></div>
                <div className="basis-2/3">
                  <p className="font-bold px-3 py-2">Professional & Certified Company</p>
                  <p className="text-justify px-3 text-sm">Planes, Perforación de Pozos</p>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden basis-1/2 w-10 h-56 mx-4 mt-6 bg-white shadow-lg">
              <div className="basis-1/3"><svg className="ml-5 mt-5" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#DD102A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg></div>
                <div className="basis-2/3">
                  <p className="font-bold px-3 py-2">Professional & Certified Company</p>
                  <p className="text-justify px-3 text-sm">CNIH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Elegirnos