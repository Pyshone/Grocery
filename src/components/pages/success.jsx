import React, { Fragment, useState } from 'react'
import '../../assets/css/success.css'
import { Divider } from '@mui/material'
import { useLocation } from 'react-router-dom';


const Success = () => {
  const location = useLocation();
  const { formData, subtotal, tax, shipping, total } = location.state;



  return (
    <Fragment>
      <div className="success-success">
        <div className='sus-head'>
          <div>
            <h1>Thank you :)</h1>
            <p>Payment is successfully processsed and your order is on the way</p>
            <p>Transaction ID:267676GHERT105467</p>
          </div>
        </div>
        <Divider />
        <section className='sus'>
          <div>
            <h1>your order details</h1>
            <img src="" alt="hiui" />
            <p>Total:</p>
          </div>
          <div>
            <h1>Shipping Address</h1>
              <p><strong>Name: </strong>{formData.fullName}</p>
              <p><strong>Email: </strong>{formData.email}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Address:</strong> {formData.address}</p>
              <p><strong>Delivery Address: </strong>{formData.deliveryAddress}</p>
              <p><strong>Payment Method: </strong>{formData.paymentMethod}</p>
          </div>
          <div>
            <h1>Summary</h1>
            <p>Order Id:</p>
            <p>OrderTotal:</p>
            <p>OrderDate:</p>
          </div>
        </section>
      </div>
    </Fragment>
  )
}

export default Success
