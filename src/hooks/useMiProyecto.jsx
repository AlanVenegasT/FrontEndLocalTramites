//Accedemos a la información del context
import { useContext } from "react";
import MiProyectoContext from "../context/MiProyectoProvider";

const useMiProyecto = () =>{
    //Estraemos los valores del context para utilizarlos
    return useContext(MiProyectoContext)
}

export default useMiProyecto;