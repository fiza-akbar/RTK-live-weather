import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./slices/weatherSlice";

const store = configureStore({
    reducer:{
        weatherSlice,
    }
})

export default store;