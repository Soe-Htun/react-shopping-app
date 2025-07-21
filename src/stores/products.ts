import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductData } from '../types/products';

interface ProductsState {
    items: ProductData[]
}

const initialState: ProductsState = {
    items: []
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<ProductData[]>) {
            state.items = action.payload
        }
    }
})

export const { setProducts } = productSlice.actions;
export default productSlice.reducer