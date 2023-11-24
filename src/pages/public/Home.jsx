import React from 'react';
import About from '../../components/LandingPage/About';
import Blog from '../../components/LandingPage/Blog';
import Busqueda from '../../components/LandingPage/Busqueda';
import Elegirnos from '../../components/LandingPage/Elegirnos';
// import Estadisticas from '../../components/LandingPage/Estadisticas';
import Hero from '../../components/LandingPage/Hero';
import Logos from '../../components/LandingPage/Logos';
import Services from '../../components/LandingPage/Services';
//import Testimoniales from '../../components/LandingPage/Testimoniales';

const Home = () => {
  return (
    <>
    
    <Hero/> 
    <Logos/>
    <Services/>
    <Busqueda/>
    <About/>
    {/* <Estadisticas/> */}
    <Elegirnos/>
    {/* <Testimaniales/> */}
    <Blog/>   
    </>
  )
}

export default Home