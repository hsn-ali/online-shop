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
import { GET_PRODUCT_BY_ID } from "@/utils/constant";
import { useParams } from "next/navigation";

export default function ProductView() 
{
    
    const [product, setProducts] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(null);
    const [remainingImages, setRemainingImages] = useState([]);
    const searchParams = useParams();

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
        
<Box sx={{ mx: 'auto', maxWidth: '1400px', px: 2 }}>
                <div>
                    <span>
                        Home
                    </span>
                    <ChevronRightIcon />
                    <span>
                        Shop
                    </span>
                </div>

                <div>
                    <div className='flex'>

                        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                            <img
                                src={product?.images[currentImageIndex]}
                                alt={`Product ${currentImageIndex + 1}`}
                                style={{ maxWidth: '100%', maxHeight: '450px', minWidth: '506px' }}
                            />
                        </div>
                        <div>
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
                                <Button variant="contained" style={{ backgroundColor: '#23A6F0', color: 'white' }}>
                                    Select Option
                                </Button>
                                <div className='flex mx-2'>
                                    <img src={like.src} alt="" className='mx-2'/>
                                    <img src={cart.src} alt=""  className='mx-2'/>
                                    <img src={eye.src} alt=""  className='mx-2'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button onClick={scrollLeft} disabled={currentImageIndex === 0}>
                        Previous
                    </Button>
                    <Button onClick={scrollRight} disabled={currentImageIndex === product?.images.length - 1}>
                        Next
                    </Button>

                    {/* Display remaining images below the slider */}
                    <Typography variant="h5" mt={4}>
                        Remaining Images
                    </Typography>
                    <Grid container spacing={2}>
                        {remainingImages && remainingImages.map((image, index) => (
                            <Grid item key={index}>
                                <Paper style={{ minWidth: '200px', maxWidth: '200px' }}>
                                    <img src={image} alt={`Product ${currentImageIndex + 1}`} style={{ width: '100%', height: 'auto' }} />
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </Box>
            <Products />
            </>
    );
}