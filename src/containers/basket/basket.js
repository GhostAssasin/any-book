import React from "react"
import {connect} from "react-redux";
import BasketBookEntity from "../../components/basket/BasketBookEntity";
import {
    changeMultiplierRequest,
    clearBasketRequest,
    removeBookFromBasketRequest
} from "../../redux/basket/basket.actions";
import {Row} from "reactstrap";
import '../../assets/scss/basket.scss'
import buyImg from '../../assets/images/buy.png'
import NothingHere from "../../components/basket/nothingHere";

class Basket extends React.Component{
    render() {
        const items = this.props.items.map((item,index) => {
            return(
                <Row key={`basket${item.id}`}>
                    <BasketBookEntity
                        item={item}
                        removeBookFromBasket={this.props.removeBookFromBasket}
                        changeMultiplier={this.props.changeMultiplier}
                    />
                </Row>
            );
        });
        return(
            <div>
                {items}
                {(this.props.items.length !== 0) &&
                <div className='info-panel-basket'>
                    <h3>Total Cost: {this.props.totalCost}</h3>
                    <img className='buy-basket' src={buyImg} alt='0'/>
                </div>}
                {(this.props.items.length === 0) && <NothingHere alert = {'Your\'s basket is completely empty, you can find some books in main page'}/> }
            </div>
        );
    }
}

const mapStateToProps =(state) =>{
    return({
        items: state.basket.items,
        totalCost: state.basket.totalCost,
    })
}

const mapDispatchToProps = dispatch => ({
    removeBookFromBasket: (payload) => {dispatch(removeBookFromBasketRequest(payload))},
    clearBasket: () => dispatch(clearBasketRequest()),
    changeMultiplier: (multiplier, id) => dispatch(changeMultiplierRequest(multiplier, id)),

})
export default connect(mapStateToProps, mapDispatchToProps)(Basket)
