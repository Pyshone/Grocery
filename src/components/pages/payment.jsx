import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {TextField,RadioGroup,FormControlLabel,Radio,Button,Typography,Card,CardContent,FormControl,FormLabel,
  Grid ,Box} from "@mui/material";
import "../../assets/css/payment.css";
import PageTitle from "../../helpers/pageTitle";

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
  const [formData, setFormData] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  // const onFormSubmit = (values) => {
  //   console.log(values, "values");
  // };
  const onFormSubmit = (data) => {
    setFormData(data);
    console.log(data, "data");
  };

  return (
    <Fragment>
      <PageTitle title="PAYMENT" />
      <div className="pay-pay">
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <div className="checkout-container">
              <Card className="checkout-card">
                <CardContent>
                  <Typography variant="h4" gutterBottom align="center">
                    Checkout
                  </Typography>
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
              </Card>
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
             
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default CheckoutPage;
