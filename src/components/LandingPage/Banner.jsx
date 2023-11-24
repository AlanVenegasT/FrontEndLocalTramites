import React from 'react'
import { Link } from "react-router-dom";
import { MegaphoneIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const Banner = () => {

  const [estado,setEstado] = useState(true)
  const ocultarBanner = e => { e.preventDefault()
    setEstado (false)
  }


  return (
    <>
    {estado ? <> 
      <div className="fixed w-full z-50 inset-x-0 bottom-0">
        <div className="bg-black opacity-50">
          <div className="mx-auto max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex w-0 flex-1 items-center">
              <span className="flex rounded-lg bg-white p-2">
                  <MegaphoneIcon className="h-6 w-6 text-black" aria-hidden="true" />
                </span>

                <p className="ml-3 truncate font-medium text-white ">
                  <span className="md:hidden  ">www.iktantraining.com</span>
                  <span className="hidden md:inline ">www.iktantraining.com</span>
                </p>
              </div>
              <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                <Link
                  to="https://iktantraining.com/"
                  className="flex items-center justify-center rounded-md border-2 border-white bg-transparent px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-50 hover:text-[#0C3858] duration-700 "
                >
                  Conocenos
                </Link>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">


                <button
                  type="button"
                  onClick={e => ocultarBanner( e )}
                  className=" -mr-1 flex rounded-md p-2 hover:bg-black  focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                >
                  <span className="sr-only">Dismiss</span>
                  <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>  
      
      </>: <>  </>  
      }

    
    </>
  )
}

export default Banner