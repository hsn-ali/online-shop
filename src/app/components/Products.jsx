'use client'

import { useEffect } from 'react';
import { addProducts, setMaxProducts } from '@/utils/productsSlice';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import ProductCard from './ProductCard'
import { Box, Button, Grid } from '@mui/material';
import { GET_ALL_PRODUCTS } from '@/utils/constant';

export default function Products() {

    const dispatch = useAppDispatch();
    const {currentPage, itemsPerPage, products, skip, maxProducts} = useAppSelector(store => store?.products);


    const fetchProducts = async () => {
        if (products.length !== 0 && products.length == maxProducts ) return;
        const res = await fetch(`${GET_ALL_PRODUCTS}${currentPage}&limit=${itemsPerPage}&skip=${skip}`);
        const items = await res.json();
        if (items.products.length == 0) return;
        dispatch(addProducts(items.products));
        dispatch(setMaxProducts(items.total));
    }

    const handleLoadMore = () => {
        setTimeout(() => {
            fetchProducts();
        }, 100)
    };

    useEffect(() => {
        if (products.length > 0) return;
        fetchProducts();
    }, [])

    return (
        <>
        <div className="flex flex-col items-center">
            <span className="text-[20px] font-[400] text-[#737373] py-1">
                Featured Products
            </span>
            <span className="text-[24px] font-[700] text-[#252B42] py-1">
                BESTSELLER PRODUCTS
            </span>
            <span className="text-[14px] font-[400] text-[#737373] py-1">
                Problems trying to resolve the conflict between 
            </span>
        </div>
        <Box mx="auto" maxWidth="1600px" px={2}>
            <Grid container spacing={2} justifyContent="center">
                {products.map(product => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={2.4}>
                    <ProductCard product={product} />
                </Grid>
                ))}
            </Grid>
            {(products.length < maxProducts) && <Box mt={2} textAlign="center">
                <Button variant="outlined" color="primary" sx={{padding: '10px 40px'}} onClick={handleLoadMore}>
                    LOAD MORE PROJECTS
                </Button>
            </Box>}
        </Box>
        </>
    )
}