import axios from "axios";
import baseURL from "../Constants/links";

export const axiosService = axios.create({baseURL})