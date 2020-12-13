import React from "react"
import {connect} from "react-redux";
import BasketBookEntity from "../../components/basket/BasketBookEntity";
import {
    changeMultiplierRequest,
    clearBasketRequest,
    removeBookFromBasketRequest
} from "../../redux/basket/basket.actions";

class Basket extends React.Component{
    render() {
        const items = this.props.items.map((item,index) => {
            return(
                <BasketBookEntity
                    key={'wishlist'+index}
                    item = {item}
                    removeBookFromBasket = {this.props.removeBookFromBasket}
                    changeMultiplier = {this.props.changeMultiplier}
                />
            );
        });
        return(
            <div>
                {items}
                <div><h3>Total Cost: {this.props.totalCost}</h3></div>
            </div>
        );
    }
}

const mapStateToProps =(...state) =>{
    return({
        items: state[0].basket.items,
        totalCost: state[0].basket.totalCost,
    });}


const mapDispatchToProps = dispatch => ({
    removeBookFromBasket: (payload) => {dispatch(removeBookFromBasketRequest(payload))},
    clearBasket: () => dispatch(clearBasketRequest()),
    changeMultiplier: (multiplier, id) => dispatch(changeMultiplierRequest(multiplier, id)),

})
export default connect(mapStateToProps, mapDispatchToProps)(Basket)
