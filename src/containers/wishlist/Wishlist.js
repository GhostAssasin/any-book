import React from "react"
import {connect} from "react-redux";
import BookEntity from "../../components/allbooks/BookEntity";
import {
    clearWishlistRequest,
    removeBookFromWishlistRequest
} from "../../redux/wishlist/wishlist.actions";
import {addBookToBasketRequest} from "../../redux/basket/basket.actions";
import {Col, Row} from "reactstrap";

class Wishlist extends React.Component{
   render() {
        const items = this.props.items.map((item,index) => {
            return(
                <Col  xs='4' key={item.id}>
                    <BookEntity
                        key={'wishlist'+index}
                        item = {item}
                        type ={false}
                        addBookToBasket ={this.props.addBookToBasket}
                        removeBookFromWishlist = {this.props.removeBookFromWishlist}
                    />
                </Col>
                );
        });
        return(
            <Row style = {{width: '1000px'}}>{items}</Row>
        );
    }
}

const mapStateToProps =(...state) =>{
    return({
        items: state[0].wishlist.items,
    });}


const mapDispatchToProps = dispatch => ({
    removeBookFromWishlist: (payload) => {
        dispatch(removeBookFromWishlistRequest(payload))
    },
    clearWishlist: () => dispatch(clearWishlistRequest()),
    addBookToBasket: (payload) => dispatch(addBookToBasketRequest(payload)),

})
export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)
