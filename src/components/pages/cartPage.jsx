import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItemsRequest, updateItemQuantityRequest } from '../../redux/reducer/cartSlice';
import '../../assets/css/cartPage.css';
import Banner from '../sections/home/banner';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PageTitle from '../../helpers/pageTitle';

const CartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const status = useSelector((state) => state.cart.status);
    const error = useSelector((state) => state.cart.error);

    useEffect(() => {
        dispatch(fetchCartItemsRequest());
    }, [dispatch]);

    // const handleIncreaseQuantity = (itemId) => {
    //     dispatch(updateItemQuantityRequest({ itemId, quantity: 1 }));
    // };

    // const handleDecreaseQuantity = (itemId) => {
    //     dispatch(updateItemQuantityRequest({ itemId, quantity: -1 }));
    // };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const calculateTax = (subtotal) => {
        const taxRate = 0.08; // Example: 8% tax rate
        return subtotal * taxRate;
    };

    const calculateShipping = () => {
        return 5.00; // Example: Flat rate shipping
    };

    const subtotal = calculateSubtotal();
    const tax = calculateTax(subtotal);
    const shipping = calculateShipping();
    const total = subtotal + tax + shipping;

    if (status === 'loading') {
        return <div className="loading-spinner">Loading...</div>;
    }

    if (status === 'failed') {
        return <div className="error-message">Error: {error}</div>;
    }

    return (
        <Fragment>
            <PageTitle title='Your Cart'/>
        <div className="cart-page">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <div className="empty-cart">
                    <p>Your cart is empty. <a href="/view">Browse products</a> to add items to your cart.</p>
                </div>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3 className="cart-item-title">{item.title}</h3>
                                <p className="cart-item-price">Price: ${item.price.toFixed(2)}</p>
                                <div className="cart-item-quantity">
                                    <button 
                                        className="quantity-button" 
                                        // onClick={() => handleDecreaseQuantity(item.id)}
                                        disabled={item.quantity <= 1}
                                    >
                                        -
                                    </button>
                                    <span className="quantity-value">{item.quantity}</span>
                                    <button 
                                        className="quantity-button" 
                                        // onClick={() => handleIncreaseQuantity(item.id)}
                                    >
                                        +
                                    </button>
                                </div>
                                <p className="cart-item-discount">Discount: {item.discountPercentage}%</p>
                                <p className="cart-item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div className="payment-details">
                <h3>Payment Details</h3>
                <div className="payment-detail">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="payment-detail">
                    <span>Tax:</span>
                    <span>${tax.toFixed(2)}</span>
                </div>
                <div className="payment-detail">
                    <span>Shipping:</span>
                    <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="payment-detail total">
                    <span><strong>Total:</strong></span>
                    <span><strong>${total.toFixed(2)}</strong></span>
                </div>
                <div className="payment-detail total">
                    {/* <span><strong>CheckOut</strong></span> */}
                    {/* <span><strong>${total.toFixed(2)}</strong></span> */}
                    <Button variant='contained' color='success'>
                        <Link to='/check'>
                        <strong>CheckOut</strong>
                        </Link>
                        </Button>
                </div>
            </div>
        </div>
        </Fragment>
    );
};
 
export default CartPage;
