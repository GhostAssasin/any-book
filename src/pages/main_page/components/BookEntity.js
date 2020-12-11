import React from "react"
import { Container, Row, Col, Button } from 'reactstrap';

export default function BookEntity (props){
    let authors = '';
    props.item.authors.forEach((item,index) =>{(index===0)? authors+= item : authors+= ', ' + item;})
        return(
            <div style={{padding: "10px", margin : "100px"}}>
                <Container>
                    <Row>
                        <Col><img src={props.item.imgLink} alt={""}/></Col>
                    </Row>
                    <Row>
                        <Col><h5>{props.item.title}</h5></Col>
                    </Row>
                    <Row>
                        <Col><h6>{authors}</h6></Col>
                    </Row>
                    <Row>
                        <Col><h6>{props.item.rating + ' / 5'}</h6></Col>
                    </Row>
                    <Row>
                        <Col>
                            {!props.type && <Button onClick={() => {props.removeBookFromWishlist(props.item.id)}}>Remove from wishlist</Button>}
                            {props.type && <Button onClick={() => {props.addToWishlist(props.item)}}>Add to wishlist</Button>}
                        </Col>
                        <Col> {props.item.price.amount + ' ' + props.item.price.currencyCode}</Col>
                        <Col><Button onClick={() => {props.addBookToBasket(props.item)}}>Buy</Button></Col>

                    </Row>
                </Container>
            </div>
        );

}



