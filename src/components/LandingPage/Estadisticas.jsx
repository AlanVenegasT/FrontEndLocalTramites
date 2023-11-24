import React, { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const stats = [
    { id: 1, name: 'Servicio', value: '8.8/10' },
    { id: 2, name: 'Ahorro', value: '9.0/10' },
    { id: 3, name: 'Eficiencia', value: '9.1/10' },
    { id: 4, name: 'Actualización', value: '8.8/10' },
  ]

const Estadisticas = () => {

  const revealRef = useRef(null);
 
  useEffect(() => {
    ScrollReveal().reveal(revealRef.current, {
      duration: 3000,
      origin: 'bottom',
      distance: '400px'

    });
  }, []);  

  return (
    <>
    <div ref={revealRef}>
    <div className="bg-white py-0 sm:py-0  mb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden text-center sm:grid-cols-2 lg:grid-cols-4 shadow-md">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white p-8">
                <dt className="text-lg font-medium leading-6 text-black ">{stat.name}</dt>
                <dd className="order-first text-4xl font-extrabold  text-[#DD102A]">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Estadisticas