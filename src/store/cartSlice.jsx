import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            const existingProduct = state.find(item => item.id === action.payload.id);
      
            if (existingProduct) {
              // If the product is already in the cart, update its quantity
              existingProduct.quantity += 1;
            } else {
              // If the product is not in the cart, add it with quantity 1
              state.push({ ...action.payload, quantity: 1 });
            }
          },
      
          remove(state, action) {
            return state.map(item => {
              if (item.id === action.payload) {
                // If the item is found, decrement the quantity
                const updatedItem = { ...item, quantity: item.quantity - 1 };
          
                // Return the updated item only if the quantity is greater than zero
                return updatedItem.quantity > 0 ? updatedItem : null;
              }
              return item;
            }).filter(Boolean); // Remove any null values from the array
          }
          ,
          
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;