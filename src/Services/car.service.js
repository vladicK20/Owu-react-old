import {axiosService} from "./axios.service";
import {urls} from "../Constants";

const carService = {
    getAll: ()=> axiosService.get(urls.cars), // obtain info from server
    getById: (id)=> axiosService.get(`${urls.cars}/${id}`),
    create: (car)=> axiosService.post(urls.cars, car), // write info to server
    updateById: (id, newCar)=> axiosService.put(`${urls.cars}/${id}`, newCar), // write info to server
    deleteById: (id)=> axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
}