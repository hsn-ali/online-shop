'use client'

import * as React from 'react';
import social from "../../assets/footer/social.svg";
import input from "../../assets/footer/input.svg";
import { Box, Grid, Typography } from '@mui/material';

export default function Footer() {

  return (
    <>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#FAFAFA', py: 6 }}>
              <Typography variant="h4" color="#252B42" fontWeight={700}>
                  Bandage
              </Typography>
              <div className='flex'>
                  <img src={social.src} alt="icons" />
              </div>
          </Box>

          <Box sx={{ mx: 'auto', maxWidth: '1400px', px: 2, my: 4 }}>
              <Grid container spacing={0} justifyContent="center">
                  <Grid item xs={12} sm={6} md={6} lg={2} display="flex" justifyContent="center" alignItems="center">
                      <Box sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
                          <Typography variant="h6" color="#252B42" sx={{ py: 2, fontWeight: 700 }}>
                              Company
                          </Typography>
                          <Typography variant="body1" color="#737373" sx={{ py: 1, fontWeight: 700 }}>
                              About Us
                          </Typography>
                          <Typography variant="body1" color="#737373" sx={{ py: 1, fontWeight: 700 }}>
                              Carrier
                          </Typography>
                          <Typography variant="body1" color="#737373" sx={{ py: 1, fontWeight: 700 }}>
                              We are hiring
                          </Typography>
                          <Typography variant="body1" color="#737373" sx={{ py: 1, fontWeight: 700 }}>
                              Blog
                          </Typography>
                      </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={2} display="flex" justifyContent="center" alignItems="center">
                      <Box sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
                          <Typography variant="h6" color="#252B42" sx={{ py: 2, fontWeight: 700 }}>
                              Legal
                          </Typography>
                          <Typography variant="body1" color="#737373" sx={{ py: 1, fontWeight: 700 }}>
                              About Us
                          </Typography>
                          <Typography variant="body1" color="#737373" sx={{ py: 1, fontWeight: 700 }}>
                              Carrier
                          </Typography>
                          <Typography variant="body1" color="#737373" sx={{ py: 1, fontWeight: 700 }}>
                              We are hiring
                          </Typography>
                          <Typography variant="body1" color="#737373" sx={{ py: 1, fontWeight: 700 }}>
                              Blog
                          </Typography>
                      </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={2} display="flex" justifyContent="center" alignItems="center">
                      <Box sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
                          <Typography variant="h6" color="#252B42" sx={{ py: 2, fontWeight: 700 }}>
                              Features
                          </Typography>
                          <Typography variant="body1" color="#737373" sx={{ py: 1, fontWeight: 700 }}>
                              Business Marketing
                          </Typography>
                          <Typography variant="body1" color="#737373" sx={{ py: 1, fontWeight: 700 }}>
                              User Analytic
                          </Typography>
                          <Typography variant="body1" color="#737373" sx={{ py: 1, fontWeight: 700 }}>
                              Live Chat
                          </Typography>
                          <Typography variant="body1" color="#737373" sx={{ py: 1, fontWeight: 700 }}>
                              Unlimited Support
                          </Typography>
                      </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={2} display="flex" justifyContent="center" alignItems="center">
                      <Box sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
                          <Typography variant="h6" color="#252B42" sx={{ py: 2, fontWeight: 700 }}>
                              Resources
                          </Typography>
                          <Typography variant="body1" color="#737373" sx={{ py: 1, fontWeight: 700 }}>
                              IOS & Android
                          </Typography>
                          <Typography variant="body1" color="#737373" sx={{ py: 1, fontWeight: 700 }}>
                              Watch a Demo
                          </Typography>
                          <Typography variant="body1" color="#737373" sx={{ py: 1, fontWeight: 700 }}>
                              Customers
                          </Typography>
                          <Typography variant="body1" color="#737373" sx={{ py: 1, fontWeight: 700 }}>
                              API
                          </Typography>
                      </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={2} display="flex" justifyContent="center" alignItems="start">
                      <Box sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
                          <Typography variant="h6" color="#252B42" sx={{ py: 2, fontWeight: 700 }}>
                              Get In Touch
                          </Typography>
                          <div className='py-2'>
                            <img src={input.src} alt="" />
                          </div>
                          <Typography variant="body1" color="#737373" sx={{ py: 2, fontWeight: 400, fontSize: '12px' }}>
                          Lore imp sum dolor Amit
                          </Typography>
                      </Box>
                  </Grid>
              </Grid>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#FAFAFA', py: 3 }}>
              <Typography fontSize="14px" color="#737373" fontWeight={700}>
                  Made With Love By HASSAN ALI...  All Right Reserved
              </Typography>
          </Box>
    </>
  );
}