import React from "react"
import {connect} from "react-redux";
import BookEntity from "../main_page/components/BookEntity";
import {
    clearWishlistRequest,
    removeBookFromWishlistRequest
} from "../../redux/wishlist/wishlist.actions";
import {addBookToBasketRequest} from "../../redux/basket/basket.actions";

class Wishlist extends React.Component{
   render() {
        const items = this.props.items.map((item,index) => {
            return(
                <BookEntity key={'wishlist'+index}  item = {item} type ={false} addBookToBasket ={this.props.addBookToBasket} removeBookFromWishlist = {this.props.removeBookFromWishlist}/>
            );
        });
        return(
            <div>{items}</div>
        );
    }
}

const mapStateToProps =(...state) =>{
    return({
        items: state[0].wishlistReducer.items,
    });}


const mapDispatchToProps = dispatch => ({
    removeBookFromWishlist: (payload) => {
        dispatch(removeBookFromWishlistRequest(payload))
    },
    clearWishlist: () => dispatch(clearWishlistRequest()),
    addBookToBasket: (payload) => dispatch(addBookToBasketRequest(payload)),

})
export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)
