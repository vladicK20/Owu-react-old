import {axiosService} from "./axios.service";
import {urls} from "../Constants";

export const postsService = {
    getPostsByUserId: (id) => axiosService.get(`${urls.posts}?userId=${id}`)
}