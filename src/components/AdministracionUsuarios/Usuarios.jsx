import { useEffect, useState } from "react";
import useUsuario from "../../hooks/useUsuario";
import ListUsuarios from "./ListUsuarios";
import ModalCrearUsuario from "./ModalCrearUsuario";
import Pagination from "../Tramites/Pagination";
// import ModalCrearUsuario from

const Usuarios = () => {

  const { consultarUsuarios, eliminarUsuario , editarUsuario } = useUsuario();
  

  const [alerta, setAlerta] = useState({});
  const [usuarios, setUsuarios] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //form 
  const [totalUsuarios, setTotalUsuarios] = useState(0);
  const [paginate, setPaginate] = useState(1);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [estado, setEstado] = useState("");
  const [accesoIA, setAccesoIA] = useState("");
  const [rol, setRol] = useState("USER_ROLE");  
  const [reload, setReload] = useState(false);

  const [usuarioSelected, setUsuarioSelected] = useState({});

  useEffect(() => {
    setReload(false);
    const mostrarUsuarios = async () => {
      const { data } = await consultarUsuarios(10, paginate);
      if (data.data.data.length === 0) {
        setPaginate(1);
        setReload(true);
      }
      setTotalUsuarios(data.data.total);
     
      const response = data.data.data;
      setUsuarios(response);
    };
    mostrarUsuarios();
  }, [reload])

  // console.log("Usuarios data", usuarios.data)
    //  console.log(usuarios[0].uid)

  const openModal = () =>{
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setUsuarioSelected({}); //restablece proyectoSelected a un objeto vacío 
    setModalIsOpen(false); //cierra el modal.
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setAlerta({});

    if (usuarioSelected.uid) {
      const { msg, error } = await editarUsuario(
        usuarioSelected.uid,
        nombre,
        correo,
        estado,
        accesoIA,
        rol
      );
      setUsuarioSelected({});
      setAlerta({
        msg,
        error,
      });
      setReload(true);
    }
  }
  

  const handleEliminarUsuario = async (id) => {
    setAlerta({});
    const {msg, error} = await eliminarUsuario(id);
    setAlerta({
      msg,
      error
    });
    setReload(true);
  };

  const siguientePage = () => {
    setPaginate(paginate + 1);
    setReload(true);
  };

  const anteriorPage = () => {
    if (paginate === 0) {
      setPaginate(1);
    } else {
      setPaginate(paginate - 1);
    }
    setReload(true);
  };

  //La función hanldeSelectProyecto se utiliza cuando se hace clic en el botón de editar en ListProyectos. Actualiza el estado proyectoSelected con la información del proyecto seleccionado y abre el modal.
  const handleSelectUsuario = (usuario) =>{
    setUsuarioSelected(usuario);
    openModal();
  }


  const { msg } = alerta;
  return (
    <div className="px-4 sm:px-6 lg:px-8 lg:mt-20 xl:mt-20">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Usuarios: {totalUsuarios}</h1>
          
        </div>
        
      </div>

      <ModalCrearUsuario
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      handleSubmit={handleSubmit}
      nombre={nombre}
      correo={correo}
      estado={estado}
      accesoIA={accesoIA}
      rol={rol}
      setNombre={setNombre}
      setCorreo={setCorreo}
      setEstado={setEstado}
      setAccesoIA={setAccesoIA}
      setRol={setRol}
      usuarioSelected={usuarioSelected}
      />

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Nombre
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Estado
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Servicio IA
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Role
                  </th>
                  
                  
                </tr>
              </thead>
              {/*ITERACCION DE LA LISTA*/}
              <tbody className="divide-y divide-gray-200 bg-white"> 
                {usuarios.map((usuario) => (
                  <ListUsuarios
                  key={usuario.uid}
                  usuario={usuario} 
                  handleEliminarUsuario={handleEliminarUsuario}
                  handleSelectUsuario={handleSelectUsuario}
                />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Pagination
            paginate={paginate}
            anteriorPage={anteriorPage}
            siguientePage={siguientePage}
          />
      </div>
    </div>
  )
}

export default Usuarios;