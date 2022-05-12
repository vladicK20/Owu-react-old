import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./Slices";

const rootReducer = combineReducers({
    cars: carReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store