import React from "react"
import {Container, Row, Col, Button, Input} from 'reactstrap';
import {Link} from "react-router-dom";
import '../../assets/scss/basketBookEntity.scss'
import basketRemoveImg from '../../assets/images/basket-delete.png'
import '../../assets/scss/bookEntity.scss'
import ReactStars from "react-rating-stars-component";

export default function BasketBookEntity (props){
    let authors = '';
    props.item.authors.forEach((item,index) =>{(index===0)? authors+= item : authors+= ', ' + item;})
    return(
        <div className='container-item-basket'>
            <Container>
                <Row>
                    <Col>
                        <img
                            className = 'basket-remove-img'
                            src={basketRemoveImg} alt= '0'
                            onClick={() => {props.removeBookFromBasket(props.item.id)}}
                        />
                    </Col>
                    <Link to={`/books/${props.item.id}`}>
                        <Row>
                        <Col><img src={props.item.imgLink} alt={""}/></Col>
                        <Col >
                            <div className = 'content-box'>
                                <Row className= 'title'>{props.item.title}</Row>
                                <Row className='authors'>{authors}</Row>
                                <Row>
                                    <ReactStars
                                        count={5}
                                        edit={false}
                                        value={Number.parseInt(props.item.rating)}
                                        size={24}
                                        activeColor="#ffd700"
                                    />
                                </Row>
                                <Row>{props.item.price.amount + ' ' + props.item.price.currencyCode}</Row>
                            </div>
                        </Col>
                        </Row>
                        </Link>
                        <Row>
                            <Col>
                                <div className='count-select'>
                                    <div>
                                        <Button onClick={() => {props.changeMultiplier(true, props.item.id)}}>+</Button>
                                        <Input
                                            readOnly ={'readonly'}
                                            onChange ={(event) => props.changeMultiplier(event.target.value, props.item.id)}
                                            value = {props.item.multiplier}/>
                                        <Button onClick={() => {props.changeMultiplier(false, props.item.id)}}>-</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    <div className='price'>{(props.item.price.amount * props.item.multiplier).toFixed(2) + ' ' + props.item.price.currencyCode}</div>
                </Row>
            </Container>
        </div>
    );

}



