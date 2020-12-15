import React from "react"
import {connect} from "react-redux";
import {
    changeSearchFieldRequest,
    changeSearchKeyRequest,
    clearAllBooksRequest, filterCategoriesRequest,
    getAllBooksRequest, setFilterCategoriesRequest
} from "../../redux/allBooks/all.books.actions";
import {Col, Input, Row} from "reactstrap";
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
            <Row className='add-menu'>
                <Col xs={12} md={6} lg={4}>
                    <div className='sort'>
                        <Row>
                            <Col>
                                <div>
                                    <Input
                                        className='sort-input'
                                        type='select'
                                        defaultValue='relevance'
                                        onChange={(event) => {
                                            this.props.clearAllBooks();
                                            this.props.getAllBooks({
                                                startIndex: 0,
                                                searchKey: this.props.searchKey,
                                                orderBy: event.target.value
                                            });
                                        }}>
                                        <option value= 'relevance'>relevance</option>
                                        <option value= 'newest'>newest</option>
                                    </Input>
                                    <img src={sort} className='img-1'  alt = '0'/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <div>
                        <img className='img-2' src={filterImg}  alt = '0'/>
                        <Select
                            className='filter-select'
                            multi={true}
                            options={this.props.categories}
                            onChange={(value) => {this.props.filterCategories(value); this.props.setFilterCategories(value)}}
                            values={this.props.filterCategoriesValue}
                            closeOnScroll={true}
                            searchable={false}
                            separator={true}
                        />
                    </div>
                </Col>
                <Col xs={12} md={6} lg={4}><Search/></Col>
            </Row>
        );
    }
}

const mapStateToProps =(state) =>{
    return({
        searchField: state.allBooks.searchField,
        startIndex: state.allBooks.startIndex,
        searchKey: state.allBooks.searchKey,
        orderBy: state.allBooks.orderBy,
        categories: state.allBooks.categories,
        filterCategoriesValue: state.allBooks.filterCategoriesValue
    })
}

const mapDispatchToProps = dispatch => ({
    getAllBooks: (payload) => dispatch(getAllBooksRequest(payload)),
    clearAllBooks: () => dispatch(clearAllBooksRequest()),
    changeSearchKey: (payload) => dispatch(changeSearchKeyRequest(payload)),
    changeSearchField: (payload) => dispatch(changeSearchFieldRequest(payload)),
    filterCategories: (payload) => dispatch(filterCategoriesRequest(payload)),
    setFilterCategories: (payload) => dispatch(setFilterCategoriesRequest(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalMenu)
