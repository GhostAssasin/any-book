import React from 'react';
import {Container, Row } from 'reactstrap';
import  { Link} from "react-router-dom";
import  '../../assets/scss/header.scss'
import basketImg from '../../assets/images/basket.png'
import wishListImg from '../../assets/images/wish-list.png'
import logoImg from '../../assets/images/logo.png'
import {connect} from "react-redux";

const AppHeader = (props) => {
    return (
        <div className='blank'>
        <div className="header">
               <Container>
                   <Row>
                       <div className = 'logo-container'>
                           <Link  to="/">
                               <img className='logo' src={logoImg} alt = '0'/>
                           </Link>
                       </div>
                   </Row>
                   <div className = 'header-images'>
                       <Link to="/wishlist">
                           <img src={wishListImg} alt = '0'/>
                       </Link>
                       <Link to="/basket">
                           <img src={basketImg} alt = '0'/>
                       </Link>

                   </div>
                   <div>
                       <div>{props.wishlistCount}</div>
                       <div>{props.basketCount}</div>
                   </div>

               </Container>
        </div>
        </div>
    );
}
const mapStateToProps =(...state) =>{
    return({
        wishlistCount: state[0].wishlist.items.length,
        basketCount: state[0].basket.items.length,


    });}


export default connect(mapStateToProps, null)(AppHeader);