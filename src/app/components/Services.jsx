import { Box, Grid } from "@mui/material"
import book from "../../assets/service/book.svg"
import cBook from "../../assets/service/carbon-book.svg"
import health from "../../assets/service/health.svg"

export default function Services() {
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
            <Box mx="auto" maxWidth="1600px" px={2} py={8}>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={12} sm={6} md={4} lg={4} display="flex" justifyContent="center">
                        <div className="flex flex-col items-center w-[328px]">
                            <img src={book.src} alt="book" />
                            <span className="text-[24px] font-[700] py-2">
                                Easy Wins
                            </span>
                            <span className="text-[14px] font-[400] py-3 px-8">
                                Get your best looking smile now!
                            </span>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} display="flex" justifyContent="center">
                        <div className="flex flex-col items-center w-[328px]">
                            <img src={cBook.src} alt="concrete" />
                            <span className="text-[24px] font-[700] py-2">
                                Concrete
                            </span>
                            <span className="text-[14px] font-[400] py-3 px-8">
                            Defalcate is most focused in helping you discover your most beautiful smile
                            </span>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} display="flex" justifyContent="center">
                        <div className="flex flex-col items-center w-[328px]">
                            <img src={health.src} alt="health" />
                            <span className="text-[24px] font-[700] py-2">
                                Hack Growth
                            </span>
                            <span className="text-[14px] font-[400] py-3 px-8">
                            Overcame any hurdle or any other problem.
                            </span>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
    
}