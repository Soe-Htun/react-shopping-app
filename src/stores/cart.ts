import { createSlice } from "@reduxjs/toolkit";
interface CartItem {
    productId: string;
    quantity: number;
}
interface CartState {
    items: CartItem[];
    statusTab: boolean
}

const initialState: CartState = {
    items: [],
    statusTab: false
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { productId, quantity } = action.payload;
            const indexProductId = (state.items).findIndex(item => item.productId === productId)
            if(indexProductId >= 0) {
                state.items[indexProductId].quantity += quantity;
            } else {
                state.items.push({productId, quantity});
            }
        },
        changeQuantity(state, action) {
            const { productId, quantity } = action.payload;
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if(quantity > 0) {
                state.items[indexProductId].quantity = quantity
            } else {
                // delete state.items[indexProductId];
                state.items = (state.items).filter(item => item.productId !== productId)
            }
        },
        toggleStatusTab(state) {
            if(state.statusTab === false) {
                state.statusTab = true;
            } else {
                state.statusTab = false
            }
        }
    }
})
export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions
export default cartSlice.reducer;