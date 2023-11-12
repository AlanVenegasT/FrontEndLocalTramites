import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-base font-semibold leading-6 text-gray-900">Confirmar eliminación de cuenta</h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">¿Estás seguro de que deseas eliminar la cuenta?</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-4">
                <button
                  onClick={onConfirm}
                  className="inline-flex w-full justify-center rounded-md bg-[#E12E2E] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Confirmar
                </button>
                <button
                  onClick={onClose}
                  className=" inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const ListUsuarios = ({ usuario, handleEliminarUsuario, handleSelectUsuario }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const confirmarEliminar = () => {
        setModalOpen(true);
    };

    const handleConfirm = () => {
        handleEliminarUsuario(usuario.uid);
        setModalOpen(false);
    };

    const handleClose = () => {
        setModalOpen(false);
    };
    return (
        <tr>
            <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                <div className="flex items-center">
                    <div className="h-11 w-11 flex-shrink-0">
                        <img className="h-11 w-11 rounded-full" src={usuario.img} alt="" />
                    </div>
                    <div className="ml-4">
                        <div className="font-medium text-gray-900">{usuario.nombre}</div>
                        <div className="mt-1 text-gray-500">{usuario.correo}</div>
                    </div>
                </div>
            </td>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                <span className={`inline-flex items-center rounded-md ${usuario.estado ? 'bg-green-50' : 'bg-red-50'} px-2 py-1 text-xs font-medium ${usuario.estado ? 'text-green-700 ring-1 ring-inset ring-green-600/20' : 'text-red-700 ring-1 ring-inset ring-red-600/20'}`}>
                    {usuario.estado ? 'Active' : 'Inactive'}
                </span>
            </td>

            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{usuario.rol}</td>
            
            <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                <button
                    onClick={() => handleSelectUsuario(usuario)}
                    className="text-indigo-600 hover:text-indigo-900"
                >
                    Editar
                </button>
            </td>

            <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                <button
                    onClick={confirmarEliminar}
                    className="text-red-600 hover:text-red-800"
                >
                    Eliminar
                </button>
            </td>
            <Modal isOpen={modalOpen} onClose={handleClose} onConfirm={handleConfirm} />
        </tr>
    );
};

export default ListUsuarios;