import { createSlice } from "@reduxjs/toolkit"

const InitialState = {
    router: localStorage.getItem('authTokenForTheUser') ? true : false
}

export const RouterSlice = createSlice({
    name: 'changeRouter',
    initialState: InitialState,
    reducers: {
        changeAppRouter: (state)=>{
            state.router = true;
        },
        changeIntialRouter: (state) => {
            state.router = false;
        }
    }
})

export const {changeAppRouter, changeIntialRouter} = RouterSlice.actions;
export default RouterSlice.reducer;