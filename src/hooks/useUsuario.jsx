import { useContext } from "react";
import UsuarioContext from "../context/UsuarioProvider";

const useUsuario = () =>{
    //Extrae los valores del context para utilizarlos
    return useContext(UsuarioContext)
}

export default useUsuario;