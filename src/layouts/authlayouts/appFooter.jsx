import { Container } from '@mui/material'
import React, { Fragment } from 'react'
// import '../../../assets/css/footer.css'
import '../../assets/css/footer.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import icon1 from '../../assets/images/icon 1.png'
import icon2 from '../../assets/images/iocn 2.png'
import icon3 from '../../assets/images/icon 3.png'
import icon4 from '../../assets/images/icon 4.png'
import icon5 from '../../assets/images/icon 5.png'


const AppFooter = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
    console.log('count:', itemCount);
    console.log(cartItems,"hiiiii....")


    return (
        <Fragment>
            <div className="footer">
                <Container>
                    <div className='footer-division'>
                        <Link to='/home'>
                            <img src={icon1} alt="1" />
                        </Link>
                        <Link to='/explore'>
                            <img src={icon2} alt="2" />
                        </Link>
                        <Badge badgeContent={itemCount} color="error">
                        <Link to='/cart'>

                            <img src={icon3} alt="3" />
                        </Link>

                        </Badge>

                        <Badge  color="secondary">

                        <img src={icon4} alt="4" />
                        </Badge>

                        <IconButton aria-label="cart">
                            <img src={icon5} alt="5" />
                        </IconButton>
                    </div>
                </Container>
            </div>
        </Fragment>)}
export default AppFooter
