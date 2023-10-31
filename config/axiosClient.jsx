import axios from "axios";

const axiosClient = axios.create(
    {
        baseURL: "http://localhost:8080/api", //https://seal-app-y62qh.ondigitalocean.app/api
    }
);

export default axiosClient;