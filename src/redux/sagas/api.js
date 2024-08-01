// api.js
import axios from 'axios';

// Function to add a product to the cart
export const addProductToCartApi = async (productId, quantity) => {
    try {
        const response = await axios.post('https://dummyjson.com/carts/add', {
            productId,
            quantity
        });
        return response.data;
    } catch (error) {
        console.error('API call error:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// Function to fetch cart items
export const fetchCartItemsApi = async () => {
    const response = await axios.get('https://dummyjson.com/carts');
    return response.data;
};
// export const addProductToCartApi = async (userId, productId, quantity) => {
//     const response = await axios.post('https://dummyjson.com/carts/add', {
//         userId, // Include userId in the payload
//         products: [{ productId, quantity }]
//     });
//     return response.data;
// };