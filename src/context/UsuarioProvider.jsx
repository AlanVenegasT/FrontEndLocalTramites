import { useState } from "react";
import { createContext } from "react";
import axiosClient from "../../config/axiosClient";

const UsuarioContext = createContext();

const UsuarioProvider = ({ children }) => {

    // trae los usuarios
    const consultarUsuarios = async (paginate, limit) =>{
        try {
            const respuesta = await axiosClient(
                `/usuarios?limit=${limit}&page=${paginate}`,
                {
                    withCredentials: true,
                }
            );
            return { respuesta };
        } catch (error) {
            console.log(error);
            return { error };
        }
    };

    return(
        <UsuarioContext.Provider
        value={{
            consultarUsuarios
        }}
        >
            {children}
        </UsuarioContext.Provider>
    );
};

export { UsuarioProvider };
export default UsuarioContext;
