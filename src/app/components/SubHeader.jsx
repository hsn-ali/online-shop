'use client'
import { Badge, Grid, IconButton, List, ListItem, ListItemText } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CartModal from "./CartModal";
import WishListModal from "./WishListModal";
import { useSelector } from "react-redux";
import { useState } from "react";

const SubHeader = () => {
    
    const cartItemCount = useSelector(store => (store.cart?.items?.filter(item => item.product)).length);
    const wishItemCount = useSelector(store => (store.cart?.items?.filter(item => item.wishList)).length);
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const [isWishModalOpen, setIsWishModalOpen] = useState(false);

    const handleOpenCartModal = () => {
        setIsCartModalOpen(true);
    };

    const handleCloseCartModal = () => {
        setIsCartModalOpen(false);
    };

    const handleOpenWishModal = () => {
        setIsWishModalOpen(true);
    };

    const handleCloseWishModal = () => {
        setIsWishModalOpen(false);
    };

    return (
        <Grid container alignItems="center" justifyContent="space-around">
            <Grid item>
                  <span className="ml-1 font-[700] text-[24px]">Bandage</span>
            </Grid>
            <Grid item>
                <List component="nav" sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <ListItem button>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Products" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Categories" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Contact" />
                    </ListItem>
                </List>
            </Grid>
            <Grid item>
                <IconButton sx={{color: "#23A6F0"}}>
                    <AccountCircleIcon /> <span className="ml-2 text-[14px] font-[700]">Login/Register</span>
                </IconButton>
                <IconButton sx={{color: "#23A6F0"}}>
                    <SearchIcon />
                </IconButton>
                <IconButton sx={{color: "#23A6F0"}} onClick={handleOpenCartModal}>
                    <Badge badgeContent={cartItemCount} color="success">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <IconButton sx={{color: "#23A6F0"}} onClick={handleOpenWishModal}>
                    <Badge badgeContent={wishItemCount} color="primary">
                    <FavoriteIcon />
                    </Badge>
                </IconButton>
            </Grid>
            <CartModal open={isCartModalOpen} onClose={handleCloseCartModal} />
            <WishListModal open={isWishModalOpen} onClose={handleCloseWishModal} />
        </Grid>
    );
};

export default SubHeader;