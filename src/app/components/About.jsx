'use client'

import { Box, Grid, Typography } from "@mui/material";
import user from "../../assets/about/user.svg";
import rating from "../../assets/about/stars.svg";
import about from "../../assets/about/about.svg";
import * as React from 'react';

export default function About() {

  return (
      <Box sx={{ mx: 'auto', maxWidth: '1400px', px: 2 }}>
          <Grid container spacing={0} justifyContent="center">
              <Grid item xs={12} sm={6} md={6} lg={6} display="flex" justifyContent="center" alignContent="center">
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Typography variant="body1" component="span" py={2} fontSize={24} color="#252B42" fontWeight={700}>What they say about us</Typography>
                      <img src={user.src} alt="" className="py-3"/>
                      <img src={rating.src} alt=""  className="py-3"/>
                      <Typography variant="body2" component="span" py={2} fontSize={14} color="#737373" fontWeight={700}>
                          Slate helps you see how many more days you need to work to reach your financial goal.
                      </Typography>
                      <Typography variant="subtitle1" component="span" color="#23A6F0" fontWeight={700} py={2}>
                          Regina Miles
                      </Typography>
                      <Typography variant="body2" component="span" py={2} fontSize={14} color="#252B42" fontWeight={700}>Designer</Typography>
                  </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} display="flex" justifyContent="center" alignContent="center">
                  <Box sx={{ textAlign: 'center' }}>
                      <img src={about.src} alt="" />
                  </Box>
              </Grid>
          </Grid>
      </Box>
  );
}