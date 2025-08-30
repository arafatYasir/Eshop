import { configureStore } from '@reduxjs/toolkit'
import menuReducer from "./slices/menuSlice"
import authReducer from "./slices/authSlice"
import dashboardReducer from "./slices/dashboardSlice"
import productsReducer from "./slices/productsSlice"

export default configureStore({
    reducer: {
        menu: menuReducer,
        auth: authReducer,
        dashboard: dashboardReducer,
        products: productsReducer
    },
})