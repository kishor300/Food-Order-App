import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'my_cart_slice',
    // This slice name is not important. Imp is slice name given in store 'appStore' for accessing slice.
    initialState: {
        items: []
    },
    reducers: {
        // Dispatched Action : function(reducer) which modifies slice of store
        // action_name : ()=>{ } reducer function
        addItem: (state, Action) => {
            state.items.push(Action.payload)    // Appends new elements to the end of an array `items`
        },
        removeItem: (state, Action) => {
            state.items.pop();      // Removes the last element from an array and returns it
        },
        clearCart: (state, Action) => {
            state.items.length = 0;     // Clearing all items of list
            // OR
            // return ({ items: [] })   // replace original state `{ item: ["pizza"] }` with `{ items: [] }`
        }
    }
});

// Action creators for the types of actions that are handled by the slice reducer.
export const cartSliceAction = cartSlice.actions;

// The slice's reducer.
// All reducers fun of slice are combined in one reducer to pass it to store.
export const cartSliceReducer = cartSlice.reducer;


/*
Syntax :

createSlice<{
    items: never[];
}, {
    addItem: (state: WritableDraft<{
        items: never[];
    }>, Action: {
        payload: any;
        type: string;
    }) => void;
}, "cart", SliceSelectors<{
    items: never[];
}>, "cart">(options: CreateSliceOptions<...>): Slice<...>
import createSlice
A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
*/