import React from 'react';
import { IconButton, Modal, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { addItemToCart, clearCart, removeItemFromCart } from '@/utils/cartSlice';

const CartModal = ({ open, onClose }) => {
    const items = useSelector(store => (store.cart?.items));
    const cartItems = items?.filter(item => item.product);
    const dispatch = useDispatch();

    const handleQuantityChange = (product) => {
        dispatch(addItemToCart({product}));
      };
    
      const handleRemoveFromCart = (itemId) => {
        dispatch(removeItemFromCart(itemId));
      };
    
      const handleClearCart = () => {
        dispatch(clearCart());
      };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="cart-modal-title"
            aria-describedby="cart-modal-description"
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
                <Typography variant="h6" id="cart-modal-title" gutterBottom>
                    Your Cart
                </Typography>
                {cartItems?.length > 0 ? cartItems.map((item) => (
                    <Box key={item.product?.id} display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                        <Box display="flex" alignItems="center">
                            <img src={item.product?.thumbnail} alt={item.product?.title} style={{ width: 60, height: 60, marginRight: 2 }} />
                            <span className='text-[#252B42] text-[20px] font-[400] mx-4'>{item.product?.title}</span>
                            <span className='text-[#252B42] text-[20px] font-[400] mx-4'>{item.quantity}</span>
                        </Box>
                        <Box display="flex" alignItems="center" marginLeft={12}>
                            <IconButton onClick={() => handleQuantityChange(item.product)} sx={{color: "#23A6F0"}}><AddIcon /></IconButton>
                            <Typography variant="body1">{item.product?.quantity}</Typography>
                            <IconButton onClick={() => handleRemoveFromCart(item.product?.id)} sx={{color: "#23A6F0"}}><RemoveIcon /></IconButton>
                            <IconButton onClick={() => handleRemoveFromCart(item.product?.id)} sx={{color: "#23A6F0"}}><DeleteIcon /></IconButton>
                        </Box>
                    </Box>
                )) : <div><h1>No Products in Cart</h1></div>
            }
                {cartItems.length > 0 && <Box display="flex" justifyContent="flex-end">
                    <IconButton onClick={handleClearCart}><DeleteIcon /> Clear Cart</IconButton>
                </Box>}
                <Box display="flex" justifyContent="flex-end">
                    <IconButton onClick={onClose}><CloseIcon /></IconButton>
                </Box>
            </Box>
        </Modal>
    );
};

export default CartModal;