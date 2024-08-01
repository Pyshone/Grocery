import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProductsRequest } from '../../redux/reducer/productsSlice';
import { addToCart, addToCartRequest, toggleFavorite } from '../../redux/reducer/cartSlice';
import Home from '../../views/app/pages/home';
import { Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Banner from '../sections/home/banner';
import PageTitle from '../../helpers/pageTitle';

const ViewAll = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items: products, status, error } = useSelector((state) => state.products);
    const cartItems = useSelector((state) => state.cart.items);
    const favoriteItems = useSelector((state) => state.cart.favoriteItems || []);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProductsRequest());
        }
    }, [status, dispatch]);

    const handleAddToCart = (product) => {
        const quantity = 1; 
        dispatch(addToCartRequest({ productId: product.id, quantity }));
        dispatch(addToCart(product))
    };

    const handleFavorite = (product) => {
        dispatch(toggleFavorite(product));
    };

    const isInCart = (productId) => {
        return cartItems.some(item => item.id === productId);
    };
    
    const isFavorite = (productId) => {
        return favoriteItems.some(item => item.id === productId);
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }


    return (
        <Fragment>
            {/* <Banner  /> */}
            <PageTitle title='Vegetables'/>
            <div className="products-header">
                <h1>Products</h1>
            </div>
            <div className="grocery-page">
                {products.map((product) => (
                    <div key={product.id} className="grocery-item">
                        <div className="grocery-item-content">
                            <img src={product.thumbnail} alt={product.title} className="product-image" />
                            <div className="product-header">
                                <IconButton
                                    className={`favorite-icon ${isFavorite(product.id) ? 'favorited' : ''}`}
                                    onClick={() => handleFavorite(product)}
                                >
                                    {isFavorite(product.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                </IconButton>
                            </div>
                            <p className="product-title">{product.title}</p>
                            <p className="product-price">${product.price}</p>
                        </div>
                        <div className="product-buttons">
                            <Button
                                variant="contained"
                                color="success"
                                className="subscribe-button"
                                onClick={() => handleAddToCart(product)}
                                disabled={isInCart(product.id)}
                            >
                                {isInCart(product.id) ? 'Added' : 'Add to Cart'}
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default ViewAll;
