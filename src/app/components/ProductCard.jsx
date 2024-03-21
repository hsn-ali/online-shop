'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function ProductCard({product}) {
    const {thumbnail, title, category, discountPercentage, price} = product;
    const router = useRouter();

    
    const route = () => {
      router.push('/productDetail/'+product.id);
    }


  return (
    // sx={{ maxWidth: 183 }}
    <Card className='m-4' sx={{ boxShadow: 'none' }}>
      <CardActionArea onClick={route}>
        <CardMedia
          component="img"
          sx={{
            height: 238, objectFit: 'fill', 'minWidth': '100%'
          }}
          image={thumbnail}
          alt={title}
        />
        <CardContent className="text-center">
          <Typography gutterBottom variant="span" component="div" className="text-[16px] font-[700] text-[#252B42]">
            {title}
          </Typography>
          <Typography variant="span" className="text-[14px] font-[700] text-[#737373]">
            {category}
          </Typography>
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" padding='5px 0'>
            <Typography
                variant="span"
                className='text-[16px] font-[700] text-[#737373]'
            >
            ${price}
            </Typography>
            <Typography
                variant="span"
                className='text-[16px] font-[700] text-[#23856D] px-2'
            >
                {discountPercentage}%
            </Typography>
            </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}