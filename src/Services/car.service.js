import {axiosService} from "./axios.service";
import {urls} from "../Constants";

const carService = {
    getAll:()=> axiosService.get(urls.cars),
    create:(car)=> axiosService.post(urls.cars, car)
}

export {
    carService
}