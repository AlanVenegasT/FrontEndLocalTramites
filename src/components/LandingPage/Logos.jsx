
import { Link } from "react-router-dom";
import React, { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Logos = () => {
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
    <div className="bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 shadow-lg pb-5">
      <h3 className="text-center text- font-semibold leading-8 text-gray-900">
      Descubre el poder de la <span className=' text-[#DD102A] text-xl '> diversidad: </span>  Explora nuestras empresas y encuentra soluciones para todos.
        </h3>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-4 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Link to="https://iktanambiental.com">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 duration-700 hover:scale-110"
            src="https://pdftramites.nyc3.digitaloceanspaces.com/ImagenesIKTANStrategies/LOGO%20IKTAN%20AMBIENTAL.png"
            alt="Transistor"
            width={158}
            height={48}
          />
          </Link >
          <Link to="https://ppciem.mx/">
          <img
            className="col-span-1 max-h-12 w-full object-contain lg:col-span-1 duration-700 hover:scale-110"
            src="https://ppciem.mx/images/logoWeb.svg"
            alt="Reform"
            width={158}
            height={48}
          />
          </Link>
          <Link to="https://iktantraining.com/">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 duration-700 hover:scale-110"
            src="https://pdftramites.nyc3.digitaloceanspaces.com/ImagenesIKTANStrategies/LOGO%20IKTAN%20TRAINING%20(1).png"
            alt="Tuple"
            width={158}
            height={48}
          />
          </Link>
          <Link to="https://iktanprotect.com/">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 duration-700 hover:scale-110"
            src="https://pdftramites.nyc3.digitaloceanspaces.com/ImagenesIKTANStrategies/undefined%20-%20Imgur.png"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          </Link>
          <Link to="https://iktanstrategies.com/">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 duration-700 hover:scale-110"
            src="https://pdftramites.nyc3.digitaloceanspaces.com/ImagenesIKTANStrategies/LOGO%20IKTAN%20STRATEGIES.jpg"
            alt="Statamic"
            width={158}
            height={48}
          />
          </Link>
        </div>
      </div>
    </div>
      </div>
    </>
  );
};

export default Logos;
