import { useState } from "react";
import { createContext } from "react";
import axiosClient from "../../config/axiosClient";

const UsuarioContext = createContext();

const UsuarioProvider = ({ children }) => {
    // trae los usuarios
    const consultarUsuarios = async (limit = 10, page = 1) =>{
        try {
            const data = await axiosClient(
                `/usuarios?limit=${limit}&page=${page}`,
                {
                    withCredentials: true,
                }
            );
            // console.log(data)
            return { data };
        } catch (error) {
            console.log(error);
            return { error };
        }
    };

    const consultarUsuariosTrue = async (limit = 10, page = 1) =>{
        try {
            const data = await axiosClient(
                `usuarios/usuariosTrue?limit=${limit}&page=${page}`,
                {
                    withCredentials: true,
                }
            );
            return { data };
        } catch (error){
            console.log(error);
            return { error };
        }
    };

    const eliminarUsuario = async (id) =>{
        try {
            const data = await axiosClient.delete(
                `/usuarios/permenente/${id}`,
                {
                withCredentials: true,
            });
            
            
            if (data && data.data) {
                return { msg: data.data.message, error: false };
            } else {
                return { msg: "Error al eliminar el Usuario", error: true };
            }
        } catch (error) {
            console.log(error);
            return { msg: "Error al eliminar el usuario", error: true}
        }
    };

    const consultarUsuarioId = async (id) => {
        try {
            const data = await axiosClient(
                `/usuarios/usuario/${id}`,
                {
                    withCredentials: true,
                }
            );
            return { data };
        } catch (error) {
            console.log(error);
            return { error };
        }
    }

    const editarUsuario = async (
        id,
        nombre,
        correo,
        estado,
        acceso,
        intentos,
        rol
    ) => {
        try {
            const data = await axiosClient.put(
                `/usuarios/${id}`,
                {
                    nombre,
                    correo,
                    estado,
                    accesoChat:{acceso, intentos},
                    rol
                },
                { withCredentials: true }
            );
            console.log("DATOS:",data);
            return { msg: data.data.message, error: false };
        } catch(error){
            return { msg: "Error al editar el proyecto", error: true };
        }
    };

    const actualizarIntentos = async (
        id,
        acceso,
        intentos
    ) => {
        try {
            const data = await axiosClient.put(
                `/usuarios/${id}`,
                {
                    $set: {accesoChat:{acceso, intentos} },
                },
                { withCredentials: true }
            );
            //console.log("DATOS:",data);
            return { msg: data.data.message, error: false };
        } catch(error){
            return { msg: "Error al editar el proyecto", error: true };
        }
    }

    return(
        <UsuarioContext.Provider
        value={{
            consultarUsuarios,
            consultarUsuariosTrue,
            editarUsuario,
            eliminarUsuario,
            actualizarIntentos,
            consultarUsuarioId
        }}
        >
            {children}
        </UsuarioContext.Provider>
    );
};

export { UsuarioProvider };
export default UsuarioContext;
