import { configureStore } from "@reduxjs/toolkit";
import { cartSliceReducer } from "./cartSlice";

const appStore = configureStore({
    // Common reducer for multiple slices like 'cart' & their united single 'reducer function'
    reducer: {
        // slice : reducer function
        cart: cartSliceReducer,     // This slice name 'cart' & it's respective reducer function is imp for accessing data.
    }
});

export default appStore;