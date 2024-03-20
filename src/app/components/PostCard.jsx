'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import clock from "../../assets/post/clock.svg";
import comment from "../../assets/post/comments.svg";
import more from "../../assets/post/more.svg";

export default function PostCard({img}) {
  return (
    <Card className='m-4'>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            objectFit: 'fill', 'minWidth': '100%'
          }}
          image={img.src}
          alt="post"
        />
        <CardContent className="text-start">
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="start" padding='5px 0'>
            <Typography
                variant="span"
                className='text-[12px] font-[400] text-[#8EC2F2]'
            >
            Google
            </Typography>
            <Typography
                variant="span"
                className='text-[12px] font-[400] text-[#737373] px-2'
            >
                Trending
            </Typography>
            <Typography
                variant="span"
                className='text-[12px] font-[400] text-[#737373] px-2'
            >
                New
            </Typography>
        </Box>
          <Typography gutterBottom variant="span" component="div" className="text-[20px] font-[400] text-[#252B42]">
            Loudest à la Madison #1 
          </Typography>
          <Typography variant="span" className="text-[14px] font-[400] text-[#737373]">
          We focus on ergonomics and meeting 
you where you work. It is only a keystroke away.
          </Typography>
                  <Box py={4} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <img src={clock.src} alt="time" className='mb-2px]' />
                          <Typography variant="body2" color="text.secondary" sx={{ ml: 1, fontSize: '12px', fontWeight: '400' }}>
                              22 April 2021
                          </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <img src={comment.src} alt="comments" />
                          <Typography variant="body2" color="text.secondary" sx={{ ml: 1, fontSize: '12px', fontWeight: '400' }}>
                              22 comments
                          </Typography>
                      </Box>
                  </Box>
                  <div className='flex items-center py-2'>
                    <span className='mr-2 mb-[4px]'>
                        Learn More  
                    </span><img src={more.src} alt="more" />
                  </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}