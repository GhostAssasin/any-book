import React from 'react';
import {
    Navbar,
} from 'reactstrap';
import  { Link} from "react-router-dom";

const AppHeader = (props) => {




    return (
        <div style={{zIndex: '100', position: 'fixed', backgroundColor: '#C1C1C1', width: "100%"}}>
            <Navbar  light expand="lg">
                <Link to="/"><h2>AnyBook</h2></Link>
                    <Link to="/wishlist">Wishlist</Link>
                    <Link to="/basket">Basket</Link>



            </Navbar>
        </div>
    );
}

export default AppHeader;