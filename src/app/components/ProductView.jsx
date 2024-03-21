'use client'

import { Button } from "@mui/base";
import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import Products from "./Products";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import rating from "../../assets/about/stars.svg";
import colors from "../../assets/product/color.svg";
import like from "../../assets/product/like.svg";
import cart from "../../assets/product/cart.svg";
import eye from "../../assets/product/eye.svg";
import desciption from "../../assets/product/desc.svg";
import { GET_PRODUCT_BY_ID } from "@/utils/constant";
import { useParams } from "next/navigation";
import Footer from "./Footer";
import SubHeader from "./SubHeader";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/utils/cartSlice";
import Header from "./Header";

export default function ProductView() {

    const [product, setProducts] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(null);
    const [remainingImages, setRemainingImages] = useState([]);
    const searchParams = useParams();

    const dispatch = useDispatch();

    const handleAddToCart = (whish) => {
        if (whish) {
            dispatch(addItemToCart({ wishListQty: 1, wishList: product }));
        } else {
            dispatch(addItemToCart({ product: product, quantity: 1 }));
        }
    };

    const fetchProductById = async () => {
        const res = await fetch(`${GET_PRODUCT_BY_ID}${searchParams?.id}`);
        const item = await res.json();
        setProducts(item);
        setCurrentImageIndex(0);
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        fetchProductById();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setRemainingImages(product?.images?.filter((_, index) => index !== currentImageIndex));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentImageIndex]);

    const scrollLeft = () => {
        setCurrentImageIndex(prevIndex => Math.max(0, prevIndex - 1));
    };

    const scrollRight = () => {
        setCurrentImageIndex(prevIndex => Math.min(product?.images.length - 1, prevIndex + 1));
    };
    return (
        <>
<Header />
            <SubHeader />

            <div className="bg-[#FAFAFA]">
                <Box sx={{ mx: 'auto', maxWidth: '1400px', px: 2 }}>
                    <div className="p-5">
                        <span className="text-[#252B42] text-[14px] font-[700]">
                            Home
                        </span>
                        <ChevronRightIcon />
                        <span>
                            Shop
                        </span>
                    </div>

                    <div>
                        <div className='flex'>

                            <div style={{ textAlign: 'center', marginBottom: '16px' }} className="p-5">
                                <img
                                    className="rounded-lg"
                                    src={product?.images[currentImageIndex]}
                                    alt={`Product ${currentImageIndex + 1}`}
                                    style={{ height: '450px', width: '506px' }}
                                />
                            </div>
                            <div className="p-5">
                                <span className='text-[#252B42] text-[20px] font-[400] py-3'>{product?.title}</span>
                                <div className='flex py-3'>
                                    <img src={rating.src} alt="" /> <span className='text-[#737373] text-[14px] font-[700] ml-2'>{product?.rating} reveiws</span>
                                </div>
                                <span className='text-[#252B42] text-[24px] font-[700] py-3'>${product?.price}</span>
                                <div>
                                    <span className='text-[#737373] text-[14px] font-[700] py-3'>Availablility:</span> <span className='text-[#23A6F0] text-[14px] font-[700] ml-2 py-3'>{product?.stock > 0 ? 'In Stock' : 'Out Of Stock'}</span>
                                </div>
                                <div className='mt-32'>
                                    <img src={colors.src} alt="" />
                                </div>
                                <div className='flex flex-row mt-8'>
                                    <Button variant="contained" className="rounded" style={{ backgroundColor: '#23A6F0', color: 'white', padding: '10px 25px' }}>
                                        Select Option
                                    </Button>
                                    <div className='flex mx-2'>
                                        <img src={like.src} alt="" className='mx-2' onClick={() => { handleAddToCart(true) }} />
                                        <img src={cart.src} alt="" className='mx-2' onClick={() => { handleAddToCart(false) }} />
                                        <img src={eye.src} alt="" className='mx-2' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-5">

                            <Button onClick={scrollLeft} variant="contained" style={{ border: '1px solid #23A6F0', color: '#23A6F0', padding: '5px 15px' }} className="rounded mr-2" disabled={currentImageIndex === 0}>
                                Previous
                            </Button>
                            <Button onClick={scrollRight} variant="contained" style={{ border: '1px solid #23A6F0', color: '#23A6F0', padding: '5px 15px' }} className="rounded" disabled={currentImageIndex === product?.images.length - 1}>
                                Next
                            </Button>
                        </div>
                        <Grid container spacing={2} className="p-5">
                            {remainingImages && remainingImages.map((image, index) => (
                                <Grid item key={index}>
                                    <Paper style={{ minWidth: '100px', maxWidth: '100px' }}>
                                        <img src={image} alt={`Product ${currentImageIndex + 1}`} style={{ width: '100px', height: '75px' }} />
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </Box>
            </div>
            <div>
                <img src={desciption.src} width="100%" alt="" />
            </div>
            <Products />
            <div className="mt-5">
                <Footer />
            </div>
        </>
    );
}