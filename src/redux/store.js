import {combineReducers, createStore} from "redux";
import {reducerUsers} from "./users.reducer";
import {reducerPosts} from "./posts.reducer";

let reducers = combineReducers({usersState: reducerUsers, postsState: reducerPosts});

export let store = createStore(reducers)