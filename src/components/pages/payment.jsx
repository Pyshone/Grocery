import React, { Fragment, useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {TextField,RadioGroup,FormControlLabel,Radio,Button,Typography,Card,CardContent,FormControl,FormLabel,
  Grid } from "@mui/material";
import "../../assets/css/payment.css";
import PageTitle from "../../helpers/pageTitle";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItemsRequest, updateItemQuantityRequest } from '../../redux/reducer/cartSlice';
import '../../assets/css/cartPage.css';
import { Link, useNavigate  } from 'react-router-dom';

// Define validation schema with Yup
const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone Number is required"),
  address: yup.string().required("Address is required"),
  // deliveryAddress: yup.string().required("Delivery Address is required"),
  // paymentMethod: yup.string().required("Payment Method is required"),
});

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const status = useSelector((state) => state.cart.status);
  const error = useSelector((state) => state.cart.error);
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  

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

  // const onFormSubmit = (values) => {
  //   console.log(values, "values");
  // };
  const onFormSubmit = (data) => {
    setFormData(data);
    console.log(data, "data");
    // navigate('/success', { state: { formData: data, subtotal, tax, shipping, total } });
  };

  return (
    <Fragment>
      <PageTitle title="PAYMENT" />
      <div className="pay-pay">
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <div className="checkout-container">
              <div className="checkout-card">
                <CardContent>
                  <h4 align="center">
                    Checkout
                  </h4>
                  <form
                    onSubmit={handleSubmit(onFormSubmit)}
                    className="checkout-form"
                  >
                    <h3>
                      Contact Details
                    </h3>
                    <TextField
                      label="Full Name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      {...register("fullName")}
                      error={!!errors.fullName}
                      helperText={errors.fullName?.message}
                    />
                    <TextField
                      label="Email Address"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      {...register("email")}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                    <TextField
                      label="Phone Number"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      {...register("phone")}
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                    />
                    <TextField
                      label="Address"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      {...register("address")}
                      error={!!errors.address}
                      helperText={errors.address?.message}
                    />

                    <FormControl component="fieldset" className="section">
                      <FormLabel component="legend">Delivery Address</FormLabel>
                      <RadioGroup
                        row
                        {...register("deliveryAddress")}
                        defaultValue="home,office"
                      >
                        <FormControlLabel
                          value="home"
                          control={<Radio />}
                          label="Home"
                        />
                        <FormControlLabel
                          value="office"
                          control={<Radio />}
                          label="Office"
                        />
                      </RadioGroup>
                      {errors.deliveryAddress && (
                        <Typography color="error">
                          {errors.deliveryAddress.message}
                        </Typography>
                      )}
                    </FormControl>

                    <FormControl component="fieldset" className="section">
                      <FormLabel component="legend">Payment Method</FormLabel>
                      <RadioGroup
                        row
                        {...register("paymentMethod")}
                        defaultValue=""
                      >
                        <FormControlLabel
                          value="credit"
                          control={<Radio />}
                          label="Credit Card"
                        />
                        <FormControlLabel
                          value="paypal"
                          control={<Radio />}
                          label="PayPal"
                        />
                        <FormControlLabel
                          value="cod"
                          control={<Radio />}
                          label="Cash On Delivery"
                        />
                      </RadioGroup>
                      {errors.paymentMethod && (
                        <Typography color="error">
                          {errors.paymentMethod.message}
                        </Typography>
                      )}
                    </FormControl>

                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Submit Your Address
                    </Button>
                  </form>
                 
                </CardContent>
              </div>
            </div>
          </Grid>
          <Grid xs={12} md={6} marginBottom={50}>
          {formData && (
                              <Card className="checkout"
                              
                              >

                      <h3 align="center">
                        Submitted Data
                      </h3>
                <CardContent>
                      
                        
                        <Typography variant="subtitle1" gutterBottom>
                          <strong>Full Name:</strong> {formData.fullName}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                          <strong>Email:</strong> {formData.email}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                          <strong>Phone Number:</strong> {formData.phone}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                          <strong>Address:</strong> {formData.address}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                          <strong>Delivery Address:</strong> {formData.deliveryAddress}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                          <strong>Payment Method:</strong> {formData.paymentMethod}
                        </Typography>
                        </CardContent>
                    </Card>
                  )}
             


             <div>
                <div className="payment-details">
                <h3>Order Summary</h3>
                <div className="payment-detail">
                    <span>CartSubtotal:</span>
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
                    <span><strong>OrderTotal:</strong></span>
                    <span><strong>${total.toFixed(2)}</strong></span>
                </div>
                <div className="payment-detail total">
                    <span><strong></strong></span>
                    <span><strong></strong></span>
                    <Button variant='contained' color='success' onClick={() => navigate('/success', { state: { formData, subtotal, tax, shipping, total } })}>
                    <strong>Place Order</strong>
                  </Button>
                </div>
            </div>
             </div>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default CheckoutPage;
