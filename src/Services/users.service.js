import {axiosService} from "./axios.service";
import {urls} from "../Constants";

export const usersService = {
    getAll: ()=> axiosService.get(urls.users)
}