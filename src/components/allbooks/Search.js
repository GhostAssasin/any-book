import React from "react"
import {connect} from "react-redux";
import {
    changeSearchFieldRequest,
    changeSearchKeyRequest,
    clearAllBooksRequest,
    getAllBooksRequest
} from "../../redux/allBooks/all.books.actions";
import {Col, Input} from "reactstrap";
import searchImg from '../../assets/images/search.png';
import '../../assets/scss/Search.scss'

class Search extends React.Component{
    render() {
        const doSearch = () => {
            if(this.props.searchField){
                this.props.clearAllBooks();
                this.props.changeSearchKey();
                this.props.getAllBooks({
                    startIndex: this.props.startIndex,
                    searchKey: this.props.searchField,
                    orderBy: this.props.orderBy});
            }
        }
        const _handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                doSearch();
            }
        }
        return (

                <div className= 'search'>
                   <Col>
                       <Input
                           onChange ={(event) => this.props.changeSearchField(event.target.value)}
                           value = {this.props.searchField}
                           onKeyDown={_handleKeyDown}
                       />
                   </Col>
                    <img src={searchImg}  onClick = {() => {doSearch()}} alt={""}/>
                </div>
        );


    }
}

const mapStateToProps =(...state) =>{
    return({
        searchField: state[0].allBooks.searchField,
        startIndex: state[0].allBooks.startIndex,
        searchKey: state[0].allBooks.searchKey,
        orderBy: state[0].allBooks.orderBy
    });}


const mapDispatchToProps = dispatch => ({
    getAllBooks: (payload) => dispatch(getAllBooksRequest(payload)),
    clearAllBooks: () => dispatch(clearAllBooksRequest()),
    changeSearchKey: (payload) => dispatch(changeSearchKeyRequest(payload)),
    changeSearchField: (payload) => dispatch(changeSearchFieldRequest(payload)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Search)
