import React, { useEffect } from "react";
import Modal from "react-modal";

const ModalCrearUsuario = ({
  modalIsOpen,
  closeModal,
  handleSubmit,
  nombre,
  correo,
  estado,
  accesoIA,
  rol,
  setNombre,
  setCorreo,
  setEstado,
  setAccesoIA,
  setRol,
  usuarioSelected,
}) => {
  useEffect(() => {
    
    if (usuarioSelected.uid) {
      setNombre(usuarioSelected.nombre || "");
      setCorreo(usuarioSelected.correo || "");
      setEstado(usuarioSelected.estado);
      setAccesoIA(usuarioSelected.accesoChat.acceso);
      setRol(usuarioSelected.rol || "");
    } else {
      setNombre("");
      setCorreo("");
      setEstado("");
      setAccesoIA("");
      setRol("");
    }
  }, [usuarioSelected]);

  return (
    <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  contentLabel="Usuario Modal"
  className="fixed inset-0 flex items-center justify-center"
>
  <div className="absolute bg-gray-500 bg-opacity-70 inset-0 "></div>
  <div className="relative transform overflow-hidden rounded-lg bg-white px-8 pb-4 pt-5 text-left shadow-xl transition-all">
    <div>
      <h3 className="text-base text-center font-semibold leading-6 text-gray-900">
        Editar Usuario
      </h3>
      <form onSubmit={handleSubmit} className="mt-3">
        <label className="block">
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="mt-1 p-2   border rounded-md w-full"
          />
        </label>
        <label className="block mt-3">
          Correo:
          <input
            type="text"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </label>

        <label className="block mt-3">
          Estado:
          <select
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          >
            <option>Selecciona el Estado</option>
            <option value="true">Activo</option>
            <option value="false">Inactivo</option>
          </select>
        </label>

        <label className="block mt-3">
          Servicio IA:
          <select
            value={accesoIA}
            onChange={(e) => setAccesoIA(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          >
            <option>Selecciona el Estado</option>
            <option value="true">Activo</option>
            <option value="false">Inactivo</option>
          </select>
        </label>

        <label className="block mt-3">
          Rol:
          <select
            value={rol}
            onChange={(e) => setRol(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          >
            <option>Selecciona el Role</option>
            <option value="USER_ROLE">User</option>
            <option value="ADMIN_ROLE">Admin</option>
          </select>
        </label>

        <button
          type="submit"
          className="mt-4 inline-flex justify-center w-full rounded-md bg-[#E12E2E] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Editar
        </button>
      </form>
      <button
        onClick={closeModal}
        className="mt-3 inline-flex justify-center w-full rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Cerrar
      </button>
    </div>
  </div>
</Modal>

  );
};

export default ModalCrearUsuario;