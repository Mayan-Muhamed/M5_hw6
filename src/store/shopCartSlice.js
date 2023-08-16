import { createSlice } from "@reduxjs/toolkit";

const shopCartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)
        },
        clearCart: () => {
            return []
        }
    }
})

export const shopCartActions = shopCartSlice.actions
export const shopCartReducer = shopCartSlice.reducer