import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg w-96">
                <div className="flex justify-end">
                    <button className="text-gray-600 hover:text-gray-800" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="mt-4">
                    <p className="text-gray-700">¿Estás seguro de que deseas eliminar la cuenta?</p>
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                        Confirmar
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const ListUsuarios = ({ usuario, handleEliminarUsuario }) => {
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
                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Editar
                </a>
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