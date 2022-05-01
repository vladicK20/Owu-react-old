import {LOAD_POSTS, LOAD_USERS} from "./action.types";

const loadsUsers = () => async (dispatch) => {
    let users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    dispatch({type: LOAD_USERS, payload: users})
}

const loadsPosts = () => async (dispatch) => {
    let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());
    dispatch({type: LOAD_POSTS, payload: posts})
}

export {loadsUsers, loadsPosts}