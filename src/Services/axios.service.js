import axios from "axios";
import baseURL from "../Constants/URLS";

const axiosService = axios.create({baseURL});

export {
    axiosService
}