import axios from "axios";

const axiosClient = axios.create(
    {
        baseURL: "https://plankton-app-wit7e.ondigitalocean.app/api"  //https://plankton-app-wit7e.ondigitalocean.app/api
    }
);

export default axiosClient;