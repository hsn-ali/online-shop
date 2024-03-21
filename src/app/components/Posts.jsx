'use client'

import { Box, Grid } from "@mui/material";
import post from "../../assets/post/post.svg";
import post1 from "../../assets/post/post1.svg";
import post2 from "../../assets/post/post2.svg";
import PostCard from "./PostCard";
import * as React from 'react';

export default function Posts() {

  return (
    
    <Box mx="auto" maxWidth="2000px" px={2}>
    <Grid container spacing={0} justifyContent="center">
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
            <PostCard img={post}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2.4}>  
            <PostCard img={post1}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
            <PostCard img={post2}/>
        </Grid>
    </Grid>
    </Box>
  );
}