import React, { Fragment } from 'react'
import '../../../assets/css/explore.css'
import { Button } from '@mui/material'
import jac from "../../../assets/images/j1.png"
import { explore, vegetable } from '../../../helpers/map'
import { Link } from 'react-router-dom'

const ExpGroc = () => {
    return (
        <Fragment >
            <div className='explore-explore'>

            <div >
                <div className='groc-head'>
                    <div>Grocery</div>
                    <div className='see'>
                        <Link to="/view" className='see' >
                            See all
                        </Link>
                    </div>
                </div>
                <div className='groc-img'>
                    {explore.map((item) => (
                        <div key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <p>{item.title}</p>
                            <p>{item.weight}</p>
                            <div className='rate'>
                                <p>${item.Amount}</p>
                                <Button>+</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div style={{ marginTop: "50px" }}>
                <div className='groc-head'>
                    <div>Vegetables</div>
                    <div > <Link to='/view' className='see'>See all</Link></div>
                </div>
                <div className='groc-img'>
                    {vegetable.map((item) => (
                        <div key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <p>{item.title}</p>
                            <p>{item.weight}</p>
                            <div className='rate'>
                                <p>${item.Amount}</p>
                                <Button>+</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>


        </Fragment>
    )
}

export default ExpGroc
