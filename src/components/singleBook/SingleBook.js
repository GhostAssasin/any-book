import React from "react"
import { Container, Row, Col} from 'reactstrap';
import ReactStars from "react-rating-stars-component";
import '../../assets/scss/singleBook.scss'

export default function SingleBook (props){
    return(
        <div className='single-book-container'>
            <Container >
                <Col>
                    <Row>
                        <Col><img src={props.item.imgLink} alt={""}/></Col>
                        <Col>
                            <Row>
                                <h3>{props.item.title}</h3>
                            </Row>
                            <Row>
                                <h4>{props.item.authors.join(', ')}</h4>
                            </Row>
                            <Row>
                                <ReactStars
                                    count={5}
                                    edit={false}
                                    value={Number.parseInt(props.item.rating)}
                                    size={24}
                                    activeColor="#ffd700"
                                />
                            </Row>
                            <Row>
                                <h6>{props.item.publisher + ' ' + props.item.publishedDate}</h6>
                            </Row>
                            <Row>
                                 <h6>Price: {props.item.price.amount + ' ' + props.item.price.currencyCode}</h6>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Row>
                    <div className='description'>{props.item.description}</div>
                </Row>
            </Container>
        </div>
    );
}



