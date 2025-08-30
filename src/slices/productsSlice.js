import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        featured: [],
        new: [],
        bestSeller: [],
        springSale: [],
        allProducts: []
    },
    reducers: {
        setFeaturedProducts: (state, action) => {
            state.featured = [...action.payload];
        },
        setNewProducts: (state, action) => {
            state.new = [...action.payload];
        },
        setBestSellerProducts: (state, action) => {
            state.bestSeller = [...action.payload];
        },
        setSpringSaleProducts: (state, action) => {
            state.springSale = [...action.payload];
        },
        setAllProducts: (state, action) => {
            state.allProducts = [...action.payload];
        }
    },
})

export const { setFeaturedProducts, setNewProducts, setBestSellerProducts, setSpringSaleProducts, setAllProducts} = productsSlice.actions

export default productsSlice.reducer