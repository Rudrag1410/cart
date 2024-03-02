import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const cartSlice = createSlice({
   name: 'cart',
   initialState: [],
   reducers: {
      add(state, action) {
         const newItem = action.payload;
         const existingItem = state.find(item => item.id === newItem.id);

         if (!existingItem) {
            // If the item doesn't exist in the cart, adding it and showing success toast
            state.push(newItem);

            toast.success('Item added to the cart');
         } else {
            // If the item already exists, showing an error toast
            toast.error('Item already exists in the cart');
         }
      },
      remove(state, action) {
         const removedItemId = action.payload;
         const newState = state.filter(item => item.id !== removedItemId);
         // Showing a toast for successful removal
         toast.warning('Item removed from the cart');
         return newState;
      },
   },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
