import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const statuses = {
  "Activo": "text-green-700 bg-green-50 ring-greenn-400",
  "Requiere una Acción": "text-yellow-600 bg-yellow-50 ring-yellow-500",
  "Atrasado": "text-red-700 bg-red-50 ring-red-600",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

let fechaActual = new Date();
const anio = fechaActual.getFullYear();
const mes = fechaActual.getMonth() + 1;
const dia = fechaActual.getDate();
fechaActual = new Date(anio + "/" + mes + "/" + dia);

export default function ListMiProyectos({ proyecto, handleEliminarProyecto, hanldeSelectProyecto }){
  const fechaTramite = new Date(proyecto.fechaIngresoTramite);

  const diasRestantes = Math.floor((fechaTramite - fechaActual) / (1000 * 60 * 60 * 24));
  let estado = proyecto.estado;
  proyecto.requisitos.forEach(requisito => {
    if (requisito.archivoRequisito.length <= 0) {
      if (diasRestantes < 5) {
        estado = "Requiere una Acción"
        if (diasRestantes < 0) {
          estado = "Atrasado";
          return;
        }
        return;
      }
    }
  })

  return(
    <>
    
    <li className="overflow-hidden rounded-md border">
    <div className={`flex items-center gap-x-4 border-b ${statuses[estado]} ${proyecto.estado !== 'Activo' ? statuses[estado] : ''} p-6`}>
        <div className={`text-sm font-medium leading-6 ${statuses[estado]} ${proyecto.estado !== 'Activo' ? statuses[estado] : ''}`}>
  {proyecto.nombre}
</div>
        <Menu as="div" className="relative ml-auto">
          <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
            <span className="sr-only">Open options</span>
            <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href={`miproyecto/${proyecto._id}`}
                    className={classNames(
                      active ? "bg-gray-50" : "",
                      "block px-3 py-1 text-sm leading-6 text-gray-900"
                    )}
                  >
                    Ver
                  </a>
                )}
              </Menu.Item>
              <Menu.Item onClick={() => hanldeSelectProyecto(proyecto)}>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-50" : "",
                      "block px-3 py-1 text-sm leading-6 text-gray-900"
                    )}
                  >
                    Editar
                  </a>
                )}
              </Menu.Item>
              <Menu.Item onClick={() => handleEliminarProyecto(proyecto._id)}>
                {({ active }) => (
                  <Link
                    className={classNames(
                      active ? "bg-gray-50" : "",
                      "block px-3 py-1 text-sm leading-6 text-gray-900"
                    )}
                  >
                    Eliminar
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
      {/* <div className="flex justify-between gap-x-4 py-3">
          <dt className="text-gray-500">Id del proyecto:</dt>
          <dd className="text-gray-700 truncate">{proyecto._id}</dd>
        </div> */}
        <div className="flex justify-between gap-x-4 py-3">
          <dt className="text-gray-500">Notas:</dt>
          <dd className="text-gray-700 truncate">{proyecto.notas}</dd>
        </div>
        <div className="flex justify-between gap-x-4 py-3">
          <dt className="text-gray-500">Fecha de ingreso de tramite:</dt>
          <dd className="text-gray-700">{proyecto.fechaIngresoTramite}</dd>
        </div>
        <div className="flex justify-between gap-x-4 py-3">
          <dt className="text-gray-500">Estado:</dt>
          <dd className="flex items-start gap-x-2">
            <div
              className={classNames(
                statuses[estado],
                "rounded-md bg-black/5 py-1 px-2 text-xs font-medium border ring-inset"
              )}
            >
              {estado}
            </div>
          </dd>
        </div>
      </dl>
    </li>
    </>
  )
} 


