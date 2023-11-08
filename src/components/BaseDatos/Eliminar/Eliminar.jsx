import { ChevronLeftIcon, HomeIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import useTramite from "../../../hooks/useTramite";
import { PantallaCarga } from "../../PantallaCarga";
import Alerta from "../../Alerta";

export const Eliminar = () => {
  const [alerta, setAlerta] = useState({});
  const [mostrarPantallaEspera, setMostrarPantallaEspera] = useState(false); // Nuevo estado
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const { eliminarTramitesAll } = useTramite();

  const onDeletAcept = async () => {
    setMostrarPantallaEspera(true);

    const response = await eliminarTramitesAll();
    console.log(response);
    const { message, error } = response;
    setAlerta({
      msg: message,
      error
    });
    setMostrarPantallaEspera(false); // Ocultar la pantalla flotante sin importar el resultado
    setMostrarConfirmacion(false); // También puedes ocultar el diálogo de confirmación aquí si lo deseas
  }

  const { msg } = alerta;

  return (
    <>
      {msg && <Alerta alerta={alerta} />}
      <div className="px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1 border-b border-gray-200 pb-4">
          {/* Navegacion Interna */}
          <nav className="flex justify-between" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <div>
                  <a className="text-slate-900/[0.8]">
                    <HomeIcon
                      className="h-5 w-5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Home</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronLeftIcon
                    className="h-5 w-5 flex-shrink-0 text-slate-900/[0.8]"
                    aria-hidden="true"
                  />
                  <a
                    href=""
                    className="ml-4 text-sm font-medium text-slate-900/[0.8]"
                  >
                    Regresar
                  </a>
                </div>
              </li>
            </ol>
          </nav>
          <div>
            <div className="border hover:drop-shadow-2xl border-black/10 p-6 my-8 duration-300 bg-white">
              <div className="px-4 sm:px-6 lg:px-8">
                <section className="sm:my-5">
                  <div className="col-span-full">
                    <label
                      className="block text-lg font-semibold leading-8 text-gray-900"
                    >
                      Acción:
                    </label>
                    <div className="flex items-center">
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4"
                        onClick={() => setMostrarConfirmacion(true)}
                      >
                        Eliminar
                      </button>

                      {/* Inicio de seccion oculta de boton eliminar */}
                      {mostrarConfirmacion && (
                        <div className="ml-4 mt-4">
                          <button
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
                            onClick={() => onDeletAcept()}>
                            Aceptar
                          </button>
                          <button
                            className="bg-yellow-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                            onClick={() => setMostrarConfirmacion(false)}
                          >
                            Cancelar
                          </button>
                        </div>
                      )}
                      {/* Fin de seccion oculta de boton eliminar */}

                    </div>
                  </div>
                </section>
              </div>
            </div>
            {/* Ventana de espera */}
            {mostrarPantallaEspera && (
              <PantallaCarga />
            )}


          </div>
        </div>
      </div>
    </>
  );
}
