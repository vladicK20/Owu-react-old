import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../Services";

const initialState = {
    cars: [],
    status: null,
    formErrors: {}
};

const getAll = createAsyncThunk(
    'getAllCars',
    async () => {
        const {data} = await carService.getAll();
        return data
    }
);

const create = createAsyncThunk(
    'create',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            return data
        } catch (e) {
            return rejectWithValue({status: e.message, formErrors: e.response.data})
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.cars = action.payload
            })
            .addCase(create.fulfilled, (state, action) => {
                state.cars.push(action.payload)
                console.log('completed');
            })
            .addCase(create.rejected, (state, action) => {
                const {status, formErrors} = action.payload;
                state.status = status
                state.formErrors = formErrors
            })
    }
    // extraReducers: {
    //     [getAll.pending]: (state, action) => {
    //         state.status = 'pending'
    //     },
    //     [getAll.fulfilled]: (state, action) => {
    //         state.status = 'fulfilled'
    //         state.cars = action.payload
    //     },
    //     [getAll.rejected]: (state, action) => {
    //         state.status = 'rejected'
    //     },
    //     [create.fulfilled]: (state, action) => {
    //         state.cars.push(action.payload)
    //         console.log('completed');
    //     },
    //     [create.rejected]: (state, action) => {
    //         const {status, formErrors} = action.payload;
    //         state.status = status
    //         state.formErrors = formErrors
    //     }
    // }
});

const {reducer: carReducer, actions} = carSlice;

const carActions = {
    getAll,
    create
}

export {
    carReducer,
    carActions
}