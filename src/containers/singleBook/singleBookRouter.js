import React from "react"
import {connect} from "react-redux";
import {Route} from "react-router-dom";
import SingleBook from "../../components/singleBook/SingleBook";

class SingleBookRouter extends React.Component{


    render() {


        const items = this.props.items.map((item) => {
            return(
                <Route key = {item.id} exact path = {`/books/${item.id}`}>
                    <SingleBook  item = {item}/>
                </Route>
            );
        });
        return (
            <Route>
                {items}
            </Route>





        );
    }
}

const mapStateToProps =(...state) => {
    return({
        items: state[0].allBooks.items
    });}

export default connect(mapStateToProps, null)(SingleBookRouter)
