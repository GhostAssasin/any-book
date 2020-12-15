import React from "react"
import {connect} from "react-redux";
import {
    clearAllBooksRequest,
    getAllBooksRequest
} from "../../redux/allBooks/all.books.actions";
import BookEntity from "../../components/allbooks/BookEntity";
import {addBookToWishlistRequest} from "../../redux/wishlist/wishlist.actions";
import {addBookToBasketRequest} from "../../redux/basket/basket.actions";
import {Col, Row} from "reactstrap";
import AdditionalMenu from "../../components/allbooks/AdditionalMenu";
import InfiniteScroll from 'react-infinite-scroller';
import NothingHere from "../../components/basket/nothingHere";

class AllBooks extends React.Component{

    componentDidMount() {
        if(this.props.items.length === 0) {
            this.props.getAllBooks({startIndex: 0, searchKey: this.props.searchKey, orderBy: 'relevance'});
        }
    }

    render() {
        console.log(this.props.searchError)
        const loadMore = () =>{
            this.props.getAllBooks({
                startIndex: this.props.startIndex,
                searchKey: this.props.searchKey,
                orderBy: this.props.orderBy
            })
        }
        const items = this.props.items.map((item) => {
            return item.visibility
                ? (<BookEntity
                        key={`book-${item.id}`}
                        type="true"
                        item={item}
                        addBookToBasket={this.props.addBookToBasket}
                        addToWishlist={this.props.addToWishlist}
                    />)
                : null;
         });
        return (
            <div>
                <Col>
                    <AdditionalMenu/>
                </Col>
                <Col className='scrollArea' style={{position: 'relative', top: '100px'}}>
                    <InfiniteScroll loadMore={loadMore} hasMore={this.props.hasMore} loader={''}>
                        <Row>{items}</Row>
                    </InfiniteScroll>
                </Col>
                {(this.props.serverError) && <NothingHere alert = {'Sorry... We got some network error. Please try again, or wait a little. We\'ll fix all as soon as we can do. :\'('}/> }
                {(this.props.searchError) && <NothingHere alert = {'Sorry we can\'t find any book to match yours search request. Please try another keyword...'}/> }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return({
        items: state.allBooks.items,
        startIndex: state.allBooks.startIndex,
        searchKey : state.allBooks.searchKey,
        orderBy: state.allBooks.orderBy,
        searchError: state.allBooks.searchError,
        hasMore: state.allBooks.hasMore,
        serverError: state.allBooks.serverError
    });}

const mapDispatchToProps = dispatch => ({
    getAllBooks: (startIndex) => dispatch(getAllBooksRequest(startIndex)),
    clearAllBooks: () => dispatch(clearAllBooksRequest()),
    addToWishlist: (payload) => dispatch(addBookToWishlistRequest(payload)),
    addBookToBasket: (payload) => dispatch(addBookToBasketRequest(payload)),
})
export default connect(mapStateToProps, mapDispatchToProps)(AllBooks)
