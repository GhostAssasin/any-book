import React from "react"
import {connect} from "react-redux";
import {clearAllBooksRequest, getAllBooksRequest} from "../../redux/allBooks/all.books.actions";
import BookEntity from "../../components/allbooks/BookEntity";
import {addBookToWishlistRequest} from "../../redux/wishlist/wishlist.actions";
import {addBookToBasketRequest} from "../../redux/basket/basket.actions";
import {Col, Row} from "reactstrap";
import AdditionalMenu from "../../components/allbooks/AdditionalMenu";
// import InfiniteScroll from "react-infinite-scroll-component";

class AllBooks extends React.Component{
    componentDidMount() {
        if(this.props.items.length === 0) {
            this.props.getAllBooks({startIndex: 0, searchKey: this.props.searchKey, orderBy: 'relevance'});
        }
    }

    render() {
        const items = this.props.items.map((item) => {

            return(
                <Col  xs='3' key={item.id}>
                    {item.visibility && <BookEntity
                        key={item.id}
                        type="true"
                        item={item}
                        addBookToBasket={this.props.addBookToBasket}
                        addToWishlist={this.props.addToWishlist}
                    />}
                    </Col>

                );
         });
        return (

            <div>

                <Col><AdditionalMenu/></Col>
                {this.props.searchError && <div>Sorry we can't find any book to match yours search request. Please try another keyword...</div>}
                <Col className = 'scrollArea' style = {{position: 'relative', top: '100px'}}>
                    {/*<InfiniteScroll*/}
                    {/*    dataLength={this.props.items.length}*/}
                    {/*    next={this.props.getAllBooks(*/}
                    {/*        {startIndex: this.props.startIndex,*/}
                    {/*         searchKey: this.props.searchKey,*/}
                    {/*         orderBy: this.props.orderBy })}*/}
                    {/*    style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.*/}
                    {/*    hasMore={this.props.hasMore}*/}
                    {/*    loader={<h4>Loading...</h4>}*/}
                    {/*>*/}
                        <Row>{items}</Row>
                    {/*</InfiniteScroll>*/}

                </Col>
                </div>
        );
    }
}

const mapStateToProps =(...state) =>{
    return({
        items: state[0].allBooks.items,
        startIndex: state[0].allBooks.startIndex,
        searchKey : state[0].allBooks.searchKey,
        orderBy: state[0].allBooks.orderBy,
        searchError: state[0].allBooks.searchError,
        hasMore: state[0].allBooks.hasMore

    });}


const mapDispatchToProps = dispatch => ({
    getAllBooks: (startIndex) => dispatch(getAllBooksRequest(startIndex)),
    clearAllBooks: () => dispatch(clearAllBooksRequest()),
    addToWishlist: (payload) => dispatch(addBookToWishlistRequest(payload)),
    addBookToBasket: (payload) => dispatch(addBookToBasketRequest(payload)),
})
export default connect(mapStateToProps, mapDispatchToProps)(AllBooks)
