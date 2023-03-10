import { createSlice } from "@reduxjs/toolkit"
import { InitialRouter, AppRouter } from "../Routers"

const InitialState = {
    router: InitialRouter
}

export const RouterSlice = createSlice({
    name: 'changeRouter',
    initialState: InitialState,
    reducers: {
        changeAppRouter: (state)=>{
            state.router = AppRouter;
        },
        changeIntialRouter: (state) => {
            state.router = InitialRouter;
        }
    }
})

export const {changeAppRouter, changeIntialRouter} = RouterSlice.actions;
export default RouterSlice.reducer;