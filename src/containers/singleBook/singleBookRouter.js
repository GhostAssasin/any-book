import React from "react"
import {connect} from "react-redux";
import SingleBook from "../../components/singleBook/SingleBook";
import {setSelectedBookAction} from "../../redux/basket/basket.actions";

class SingleBookRouter extends React.Component {
    componentDidMount() {
        const bookId = this.props.match.params.id;
        const book = this.props.items.find(item => item.id === bookId);
        if (book) {
            this.props.setSelectedBook(book);
        }
    }

    render() {
        return this.props.selectedBook.id ? <SingleBook item = {this.props.selectedBook} /> : null;
    }
}

const mapStateToProps =(state) => {
    return({
        items: state.allBooks.items,
        selectedBook: state.basket.selectedBook
    })
}

const mapDispatchToProps = dispatch => ({
    setSelectedBook: (book) => dispatch(setSelectedBookAction(book))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleBookRouter)
