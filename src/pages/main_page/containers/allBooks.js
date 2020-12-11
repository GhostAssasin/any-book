import React from "react"
import {connect} from "react-redux";
import {clearAllBooksRequest, getAllBooksRequest} from "../../../redux/allBooks/all.books.actions";
import BookEntity from "../components/BookEntity";
import {addBookToWishlistRequest} from "../../../redux/wishlist/wishlist.actions";
import {addBookToBasketRequest} from "../../../redux/basket/basket.actions";

class AllBooks extends React.Component{
    componentDidMount() {
        this.props.getAllBooks(10);
    }

    render() {
        const items = this.props.items.map((item) => {
            return(<BookEntity key={item.id} type="true" item={item} addBookToBasket ={this.props.addBookToBasket} addToWishlist={this.props.addToWishlist}/>);
         });
        return (
            <div>{items}</div>
        );
    }
}

const mapStateToProps =(...state) =>{
    return({
        items: state[0].allBooksReducer.items,
        startIndex: state[0].allBooksReducer.startIndex
    });}


const mapDispatchToProps = dispatch => ({
    getAllBooks: (startIndex) => dispatch(getAllBooksRequest(startIndex)),
    clearAllBooks: () => dispatch(clearAllBooksRequest()),
    addToWishlist: (payload) => dispatch(addBookToWishlistRequest(payload)),
    addBookToBasket: (payload) => dispatch(addBookToBasketRequest(payload)),
})
export default connect(mapStateToProps, mapDispatchToProps)(AllBooks)
