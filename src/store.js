import { configureStore } from '@reduxjs/toolkit'
import menuReducer from "./slices/menuSlice"
import authReducer from "./slices/authSlice"
import dashboardReducer from "./slices/dashboardSlice"

export default configureStore({
    reducer: {
        menu: menuReducer,
        auth: authReducer,
        dashboard: dashboardReducer
    },
})