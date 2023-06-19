import { configureStore } from "@reduxjs/toolkit";
import RouterSlice from "./RouterSlice";

const store = configureStore({
    reducer: {
        Router: RouterSlice
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;