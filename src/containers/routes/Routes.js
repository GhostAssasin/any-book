import React from 'react';
import {Route, Switch} from "react-router-dom";
import Wishlist from "../wishlist/Wishlist";
import Basket from "../basket/basket";
import AllBooks from "../allBooks/allBooks";
import SingleBookRouter from "../singleBook/singleBookRouter";


export default class Routes extends React.Component{
    render() {
        return(
            <Switch>
                <Route exact path='/wishlist'><Wishlist/></Route>
                <Route exact path='/basket'><Basket/></Route>
                <Route exact path='/' ><AllBooks/></Route>
                <SingleBookRouter/>
                <Route path='*' ><AllBooks/></Route>
            </Switch>
        );
    }
}