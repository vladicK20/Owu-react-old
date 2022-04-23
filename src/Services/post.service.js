import {axiosService} from "./axios.service";
import {urls} from "../Constants";

const postService = {
    getAll: ()=> axiosService.get(urls.posts),
    getById: ()=> axiosService.get(`${urls.posts}/${id}` )
}

export {postService}