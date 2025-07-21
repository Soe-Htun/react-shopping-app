import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import cartReducer from './cart';
import productsReducer from './products'

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // only persist cart
};
const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: {
//         cart: cartReducer,
//         products: productsReducer
//     }
// })

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch