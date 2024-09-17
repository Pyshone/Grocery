import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        favoriteItems:[]
    },
    reducers: {
    
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(i => i.id === item.id);
            console.log("Succesfully added to cart:",item.id)
            if (!existingItem) {
                state.items.push({ ...item, quantity: 1 });
            }
        },

        addToCartRequest: (state) => {
            state.status = 'loading';
        },
        addToCartSuccess: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(i => i.id === item.productId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }
            state.status = 'succeeded';
        },
        addToCartFailure: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
        toggleFavorite(state, action) {
            const productId = action.payload.id;
            const index = state.favoriteItems.findIndex(item => item.id === productId);
            if (index >= 0) {
                // If product is already in favorites, remove it
                state.favoriteItems.splice(index, 1);
            } else {
                // If product is not in favorites, add it
                state.favoriteItems.push(action.payload);
            }
        },
        fetchCartItemsRequest: (state) => {
            state.status = 'loading';
        },
        fetchCartItemsSuccess: (state, action) => {
            state.items = action.payload;
            state.status = 'succeeded';
        },
        fetchCartItemsFailure: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});

export const {addToCart,addToCartRequest, addToCartSuccess, addToCartFailure, toggleFavorite,
    fetchCartItemsRequest, fetchCartItemsSuccess, fetchCartItemsFailure } = cartSlice.actions;
export default cartSlice.reducer;