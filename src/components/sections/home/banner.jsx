import { Container, Grid } from '@mui/material'
import React, { Fragment } from 'react'
import veg from '../../../assets/images/image.png'



const Banner = () => {
    return (
        <Fragment>
            <div className="banner">
                <Container>
                    <Grid container spacing={0} alignItems="center" justifyContent="center">
                        <Grid item xs={12} md={6} className="banner-text">
                            <p>EveryDAy</p>
                            <p>Essential</p>
                            <p>10%</p>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img src={veg} alt="" className="banner-image" />
                        </Grid>
                    </Grid>

                    
                </Container>
            </div>
        </Fragment>
    )
}

export default Banner
