import React from "react"
import { Container, Row, Col} from 'reactstrap';

export default function SingleBook (props){
    let authors = '';
    props.item.authors.forEach((item,index) =>{(index===0)? authors+= item : authors+= ', ' + item;})
    return(
        <div style={{padding: "10px", margin : "100px"}}>
            <Container>
                <Col>
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
                    <Col> {props.item.price.amount + ' ' + props.item.price.currencyCode}</Col>
                </Row>
                </Col>
                <Col>{props.item.description}</Col>
            </Container>
        </div>
    );

}



