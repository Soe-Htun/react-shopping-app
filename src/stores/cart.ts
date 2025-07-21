import { createSlice } from "@reduxjs/toolkit";
interface CartItem {
    productId: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: []
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { productId, quantity } = action.payload;
            state.items.push({productId, quantity});
        }
    }
})
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer;