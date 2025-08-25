// redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    error: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state) => {
            state.loading = false;
            state.error = null;
        },
        clearUser: (state) => {
            state.loading = false;
            state.error = null;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const { setUser, clearUser, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;
