import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

interface CartItem {
    product: Product;
    quantity: number;
    wishList: Product;
    wishListQty: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action: PayloadAction<CartItem>) => {
            const { product, quantity, wishList, wishListQty } = action.payload;
            
            if (wishList) {
                const existingWishlistItemIndex = state.items.findIndex(item => item.wishList?.id === wishList.id);
                if (existingWishlistItemIndex !== -1) {
                    const updatedWishlistItem = { ...state.items[existingWishlistItemIndex], wishListQty: 1 };
                    state.items[existingWishlistItemIndex] = updatedWishlistItem;
                } else {
                    state.items.push(action.payload);
                }
            } else {
                const existingCartItemIndex = state.items.findIndex(item => item.product?.id === product.id);
                if (existingCartItemIndex !== -1) {
                    const updatedCartItem = { ...state.items[existingCartItemIndex], quantity: state.items[existingCartItemIndex].quantity + 1 };
                    
                    state.items[existingCartItemIndex] = updatedCartItem;
                } else {
                    state.items.push(action.payload);
                }
            }
        },
        removeItemFromCart(state, action) {
            const itemId = action.payload;
            let itemIndex;
            if (action.payload.wish) {
                itemIndex = state.items.findIndex(item => item.wishList?.id === itemId.itemId);
                
                if (itemIndex !== -1) {
                    if (state.items[itemIndex].wishListQty > 1) {
                        state.items[itemIndex].wishListQty -= 1;
                    } else {
                        state.items.splice(itemIndex, 1);
                    }
                }
            } else {
                itemIndex = state.items.findIndex(item => item.product?.id === itemId);
                if (itemIndex !== -1) {
                    if (state.items[itemIndex].quantity > 1) {
                        state.items[itemIndex].quantity -= 1;
                    } else {
                        state.items.splice(itemIndex, 1);
                    }
                }
            }
        },
        clearCart: (state, action) => {
            if (action.payload) {
                state.items = state.items.filter(item => !item.product);;
            } else {
                state.items = state.items.filter(item => !item.wishList);;
            }
        }
    }
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;