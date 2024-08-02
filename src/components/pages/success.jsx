import React, { Fragment } from 'react'
import '../../assets/css/success.css'
import { Divider } from '@mui/material'

const Success = () => {
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
      <Divider/>
      <section className='sus'>
        <div>
          <h1>your order details</h1>
          <img src="" alt="hiui" />
          <p>Total:</p>
        </div>
        <div>
          <h1>Summary</h1>
          <p>Order Id:</p>
          <p>OrderTotal:</p>
          <p>OrderDate:</p>
        </div>
        <div>
        <h1>Shipping Address</h1>
        <p>Name:</p>
        <p>Address:</p>
        <p>Contact No:</p>
      </div>
      </section>
      </div>
    </Fragment>
  )
}

export default Success
