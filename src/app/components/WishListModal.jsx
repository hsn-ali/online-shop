import React from 'react';
import { IconButton, Modal, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { addItemToCart, clearCart, removeItemFromCart } from '@/utils/cartSlice';

const WishListModal = ({ open, onClose }) => {
    const items = useSelector(store => (store.cart?.items));
    const cartItems = items?.filter(item => item.wishList);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addItemToCart({product}));
    };
    
    const handleRemoveFromWishList = (itemId) => {
        dispatch(removeItemFromCart({itemId, wish: true}));
    };
    
    const handleClearWishList = () => {
        dispatch(clearCart());
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="wishlist-modal-title"
            aria-describedby="wishlist-modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 800,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                }}
            >
                <Typography variant="h6" id="wishlist-modal-title" gutterBottom>
                    Your Wish List
                </Typography>
                {cartItems.length > 0 ? cartItems.map((item) => (
                    <Box key={item.wishList?.id} display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                        <Box display="flex" alignItems="center">
                            <img src={item.wishList?.thumbnail} alt={item.wishList?.title} style={{ width: 60, height: 60, marginRight: 2 }} />
                            <Typography variant="body1">{item.wishList?.title}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <IconButton onClick={() => handleAddToCart(item.wishList)}><AddIcon /></IconButton>
                            <IconButton onClick={() => handleRemoveFromWishList(item.wishList?.id)}><DeleteIcon /></IconButton>
                        </Box>
                    </Box>
                )) : <div><h1>No Products in Wish List</h1></div>}
                {cartItems.length > 0 && <Box display="flex" justifyContent="flex-end">
                    <IconButton onClick={handleClearWishList}><DeleteIcon /> Clear Wish List</IconButton>
                </Box>}
                <Box display="flex" justifyContent="flex-end">
                    <IconButton onClick={onClose}><CloseIcon /></IconButton>
                </Box>
            </Box>
        </Modal>
    );
};

export default WishListModal;