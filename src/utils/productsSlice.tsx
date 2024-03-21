import {PayloadAction, createSlice} from "@reduxjs/toolkit";

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

interface ProductsState {
    products: Product[];
    currentPage: number;
    itemsPerPage: number;
    skip: number;
    maxProducts: number;
}

const initialState: ProductsState = {
    products: [],
    currentPage: 1,
    itemsPerPage: 10,
    skip: 0,
    maxProducts: 0
};


const ProductsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = [...state.products, ...action.payload];
            state.skip = state.currentPage * state.itemsPerPage;
            state.currentPage += 1;
        },
        setMaxProducts: (state, action) => {
            state.maxProducts = action.payload;
        }
    }
});

export const {addProducts, setMaxProducts} = ProductsSlice.actions;

export default ProductsSlice.reducer;