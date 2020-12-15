import React from "react"
import {connect} from "react-redux";
import BookEntity from "../../components/allbooks/BookEntity";
import {
    clearWishlistRequest,
    removeBookFromWishlistRequest
} from "../../redux/wishlist/wishlist.actions";
import {addBookToBasketRequest} from "../../redux/basket/basket.actions";
import {Row} from "reactstrap";
import NothingHere from "../../components/basket/nothingHere";

class Wishlist extends React.Component{
    render() {
        const items = this.props.items.map((item,index) => {
            return(
                    <BookEntity
                        key={'wishlist'+index}
                        item = {item}
                        type ={false}
                        addBookToBasket ={this.props.addBookToBasket}
                        removeBookFromWishlist = {this.props.removeBookFromWishlist}
                    />
                );
        });
        return(
            <div>
                <Row style = {{width: '1000px', position: 'relative', marginLeft: 'auto', marginRight: 'auto'}}>{items}</Row>
                {(this.props.items.length === 0) && <NothingHere alert = {'Nothing here right now, but you can add stuff on main page and comeback :)'}/> }
            </div>
        );
    }
}

const mapStateToProps =(state) =>{
    return({
        items: state.wishlist.items,
    })
}

const mapDispatchToProps = dispatch => ({
    removeBookFromWishlist: (payload) => dispatch(removeBookFromWishlistRequest(payload)),
    clearWishlist: () => dispatch(clearWishlistRequest()),
    addBookToBasket: (payload) => dispatch(addBookToBasketRequest(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)
