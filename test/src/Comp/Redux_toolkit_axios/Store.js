import { configureStore } from "@reduxjs/toolkit";
import UserData from "./Slice";


const Store = configureStore({
    reducer: {
        user : UserData
    }
})

export default Store