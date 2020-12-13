import React from "react"
import {connect} from "react-redux";
import {
    changeSearchFieldRequest,
    changeSearchKeyRequest,
    clearAllBooksRequest, filterCategoriesRequest,
    getAllBooksRequest, setFilterCategoriesRequest
} from "../../redux/allBooks/all.books.actions";
import  {Input} from "reactstrap";
import Search from "./Search";
import Select from "react-dropdown-select";
import '../../assets/scss/additionalMenu.scss'
import filterImg from '../../assets/images/categorize.png';
import sort from '../../assets/images/sort.png';



class AdditionalMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            options: [
                {value: 'relevance', label: 'relevance' },
                {value: 'newest', label: 'newest ' }
            ]
        }
    }
    render() {
        return (
            <div className='add-menu'>
                <div className = 'empty'></div>
                    <div className='sort'>
                        <img src={sort}  alt = '0'/>
                        <Input
                            type='select'
                            defaultValue = 'relevance'
                            onChange={(event) => {
                                this.props.clearAllBooks();
                                this.props.getAllBooks({
                                    startIndex: 0,
                                    searchKey: this.props.searchKey,
                                    orderBy: event.target.value});
                            }}>
                            <option value= 'relevance'>relevance</option>
                            <option value= 'newest'>newest</option>

                        </Input>
                    </div>
                    <img className='img-2' src={filterImg}  alt = '0'/>

                    <div className='categories'>

                        <Select
                            multi =  {true}
                            options = {this.props.categories}
                            onChange = {(value) => {this.props.filterCategories(value); this.props.setFilterCategories(value)}}
                            values = {this.props.filterCategoriesValue}
                            style = {{width: '300px'}}
                            closeOnScroll = {true}
                        />
                    </div>
                    <div className= {'empty-r'}/>
                    <Search/>
            </div>

        );


    }
}

const mapStateToProps =(...state) =>{
    return({
        searchField: state[0].allBooks.searchField,
        startIndex: state[0].allBooks.startIndex,
        searchKey: state[0].allBooks.searchKey,
        orderBy: state[0].allBooks.orderBy,
        categories: state[0].allBooks.categories,
        filterCategoriesValue: state[0].allBooks.filterCategoriesValue
    });}


const mapDispatchToProps = dispatch => ({
    getAllBooks: (payload) => dispatch(getAllBooksRequest(payload)),
    clearAllBooks: () => dispatch(clearAllBooksRequest()),
    changeSearchKey: (payload) => dispatch(changeSearchKeyRequest(payload)),
    changeSearchField: (payload) => dispatch(changeSearchFieldRequest(payload)),
    filterCategories: (payload) => dispatch(filterCategoriesRequest(payload)),
    setFilterCategories: (payload) => dispatch(setFilterCategoriesRequest(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(AdditionalMenu)
