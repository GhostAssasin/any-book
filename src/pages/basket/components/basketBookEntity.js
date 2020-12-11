import React from "react"
import {Container, Row, Col, Button, Input} from 'reactstrap';

export default function BasketBookEntity (props){
    let authors = '';
    props.item.authors.forEach((item,index) =>{(index===0)? authors+= item : authors+= ', ' + item;})
    return(
        <div style={{padding: "10px", margin : "100px"}}>
            <Container>
                <Row>
                    <Col><Button onClick={() => {props.removeBookFromBasket(props.item.id)}}>Remove</Button></Col>
                    <Col><img src={props.item.imgLink} alt={""}/></Col>
                    <Col>
                        <Row><h5>{props.item.title}</h5></Row>
                        <Row><h6>{authors}</h6></Row>
                        <Row><h6>{props.item.rating + ' / 5'}</h6></Row>
                        <Row>{props.item.price.amount + ' ' + props.item.price.currencyCode}</Row>
                    </Col>
                    <Col xs='1'></Col>
                        <Row>
                            <Col xs='2'><Button onClick={() => {props.changeMultiplier(-1, props.item.id)}}>-</Button></Col>
                            <Col xs='3'><Input onChange ={(event) => props.changeMultiplier(event.target.value, props.item.id)}  value = {props.item.multiplier}/></Col>
                            <Col xs='1'><Button onClick={() => {props.changeMultiplier(-100, props.item.id)}}>+</Button></Col>
                        </Row>
                    <Col xs='1'>{(props.item.price.amount * props.item.multiplier).toFixed(2) + ' ' + props.item.price.currencyCode}</Col>
                </Row>
            </Container>
        </div>
    );

}



