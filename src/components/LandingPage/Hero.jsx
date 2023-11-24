import React from 'react'


const Hero = () => {
  return (
    <>
      <div className="relative bg-[#DD102A] flex  items-center h-screen">
        <div className='flex flex-col pl-28'>
          <h1 className="text-white xl:text-7xl md:text-5xl sm:text-5xl text-4xl font-bold  mb-2 ">TERCERO AUTORIZADO</h1>
          <h2 className='text-white xl:text-6xl md:text-4xl sm:text-4xl text-2xl mb-5 w-44 md:w-96 lg:w-96 xl:w-[600px] '>PARA EXPLORACIÓN Y EXTRACCIÓN DE HIDROCARBUROS.</h2>
          <h2 className='text-white xl:text-6xl md:text-4xl sm:text-4xl text-2xl mb-5'>TA-D-A02/06-16/2021</h2>
          {/* <button
            type="button"
            className="rounded-md bg-white px-3.5 py-2.5 w-28 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Button text
          </button> */}
        </div>
        <img src="https://pdftramites.nyc3.digitaloceanspaces.com/ImagenesIKTANStrategies/wave.png" alt="Imagen" className="absolute bottom-0 w-full object-contain" />

        <img src="https://pdftramites.nyc3.digitaloceanspaces.com/ImagenesIKTANStrategies/hombreblanco.png" alt="" className='absolute w-1/3 h-3/4 left-2/3 hidden lg:block xl:block' />
      </div>
    </>
  )
}

export default Hero