import React from 'react'

const Testimoniales = () => {
  return (
    <>
      <div className='pt-20'>
        <div>
          <h2 className='text-[#DD102A] text-center text-sm '>Testimonios</h2>
          <h3 className=' text-center text-3xl font-extrabold pb-5 pt-3 '>Lo que nuestros clientes dicen</h3>
          <p className=' text-center md:px-32 lg:px-72 xl:px-72 pb-8 '>Quis ipsum gravida. Accumsan lacus vel facilisis dolore magna aliqua lacus dolor sit amet, consectetur adipiscing elitd do.</p>
        </div>

        <div className='relative max-w-6xl mx-auto'>
          <div>
            <img className='object-cover w-full opacity-50' src="COntinentes.png" alt="" />
          </div>

          <div className='absolute top-2/3'>
            <p className=' text-center px-1 sm:px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fuga quidem corrupti commodi labore magnam velit reprehenderit fugiat. Vitae facere sit magni repellendus </p>
            <h4 className='text-[#DD102A] text-center text-lg '>Keya Akter</h4>
            <p className=' text-center'>Costumer</p>
          </div>


        </div>
      </div>
    </>
  )
}

export default Testimoniales