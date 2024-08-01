import React, { Fragment } from 'react'
import { Container, Grid } from '@mui/material'

const PageTitle = ({title}) => {
  return (
    <div>
      <Fragment>
            <div className="PageTitle">
                    <Grid container spacing={2} alignItems="start" justifyContent="center">
                        <Grid item xs={12} md={6} className="banner-text">
                            <h1>{title}</h1>
                        </Grid>
                    </Grid>

                    
            </div>
        </Fragment>
    </div>
  )
}

export default PageTitle
