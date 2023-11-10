import { useEffect, useState } from "react";
import Alerta from "../Alerta";
import useUsuario from "../../hooks/useUsuario";
import ListUsuarios from "./ListUsuarios";

const Usuarios = () => {

  const { consultarUsuarios, eliminarUsuario } = useUsuario();

  const [alerta, setAlerta] = useState({});
  const [usuarios, setUsuarios] = useState([]);

  //form 
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setReload(false);
    const mostrarUsuarios = async () => {
      const { data } = await consultarUsuarios();
      const response = data.data.data;
      setUsuarios(response);
    };
    mostrarUsuarios();
  }, [reload])

  // console.log("Usuarios data", usuarios.data)
    //  console.log(usuarios[0].uid)

  const handleEliminarUsuario = async (id) => {
    setAlerta({});
    const {msg, error} = await eliminarUsuario(id);
    setAlerta({
      msg,
      error
    });
    setReload(true);
  };

  const { msg } = alerta;
  return (
    <div className="px-4 sm:px-6 lg:px-8 lg:mt-20 xl:mt-20">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>

        
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
                />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Usuarios;