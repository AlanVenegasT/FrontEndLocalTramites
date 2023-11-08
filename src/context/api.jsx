import axios from "axios";

const API_URL = "https://plankton-app-wit7e.ondigitalocean.app/api/tramiteController/mostrarTramitesTodo" //Se le agrego esto. /tramiteController/mostrarTramitesTodo  https://seal-app-y62qh.ondigitalocean.app/api

export const obtenerTramites = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los trámites:", error);
    throw error;
  }
};