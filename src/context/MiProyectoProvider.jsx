import { createContext } from "react";
import axiosClient from "../../config/axiosClient";

//Se utiliza en los hooks
const MiProyectoContext = createContext();

const MiProyectoProvider = ({ children }) =>{
    const obtenerMiProyectos = async (limit = 10, page= 1) =>{
        try {
            const data = await axiosClient(`/proyecto/misProyectos?limit=${limit}&page=${page}`,{
                withCredentials: true,
            });
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    // const crearProyecto = async (
    //     idt,
    //     nombre,
    //     estado,
    //     fechaIngresoTramite,
    //     notas
    // ) => {
    //     try {
    //         const data = await axiosClient.post(
    //             "/proyecto",
    //             {
    //                 idt,
    //                 nombre,
    //                 estado,
    //                 fechaIngresoTramite,
    //                 notas,
    //             },
    //             { withCredentials: true }
    //         );
    //         console.log(data);
    //         return { msg: data.data.message, error: false};
    //     } catch (error) {
    //         console.log(error);
    //         return { msg: "Error al crear el proyecto", error: true};
    //     }
    // };

    const editarMiProyecto = async (
        id,
        nombre,
        estado,
        fechaIngresoTramite,
        notas
    ) =>{
        try {
            const data = await axiosClient.put(
                `/proyecto/actualizarProyecto/${id}`,
                {
                    nombre,
                    estado,
                    fechaIngresoTramite,
                    notas,
                },
                {withCredentials: true}
            );
            console.log(data);
            return { msg: data.data.message, error: false};
        } catch (error) {
            return { msg: "Error al editar el proyecto", error: true};
        }
    };

    const eliminarMiProyecto = async (id) =>{
        try {
            const data = await axiosClient.delete(`/proyecto/borrarProyecto/${id}`, {
                withCredentials: true,
            });

            if (data && data.data) {
                return { msg: data.data.message, error: false};
            }else{
                return { msg: "Error al eliminar el proyecto", error: true};
            }
        } catch (error) {
            console.log(error);
            return { msg: "Error al eliminar el proyecto", error: true };
        }
    };


    return(
        <MiProyectoContext.Provider
            value={{
                obtenerMiProyectos,
                // crearProyecto,
                editarMiProyecto,
                eliminarMiProyecto
            }}
        >
            {children}
        </MiProyectoContext.Provider>
    )
}

export { MiProyectoProvider};

export default MiProyectoContext;