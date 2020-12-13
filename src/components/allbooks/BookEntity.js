import React from "react"
import { Container, Row, Col} from 'reactstrap';
import {Link} from "react-router-dom";
import  '../../assets/scss/bookEntity.scss'
import wishlistImgAdd from '../../assets/images/wish-list-add.png'
import wishlistImgRmv from '../../assets/images/wish-list-delete.png'
import basketImgAdd from '../../assets/images/basket-add.png'
import ReactStars from "react-rating-stars-component";

export default function BookEntity (props){
        return(
            <div className = 'Book'>
                <Container className = 'book-container'>
                    <div className='add-to-wishlist'>
                        {!props.type &&
                            <img src={wishlistImgRmv} alt ='0'
                                 onClick={() => {props.removeBookFromWishlist(props.item.id)}}/>
                        }
                        {props.type &&
                            <img src={wishlistImgAdd} alt ='0'
                                 onClick={() => {props.addToWishlist(props.item)}}/>
                        }
                    </div>
                    <Link to={`/books/${props.item.id}`} style={{ textDecoration: 'none' }}>
                        <Row>
                            <Col><div className = 'thumbnail-img'><img src={props.item.imgLink} alt={""}/></div></Col>
                        </Row>
                        <Row>
                            <Col className= 'title'>
                                {props.item.title}
                            </Col>
                        </Row>
                        <Row>
                            <Col className='authors'><h6>{props.item.authors[0]}</h6></Col>
                        </Row>
                        <Row>
                            <Col>
                                <ReactStars
                                    count={5}
                                    edit= {false}
                                    value = {Number.parseInt(props.item.rating)}
                                    size={24}
                                    activeColor="#ffd700"
                                />
                               </Col>
                        </Row>
                    </Link>
                    <Row>
                        <Col>
                            <h5>{props.item.price.amount + ' ' + props.item.price.currencyCode}</h5>
                            <div className='add-to-basket'>
                                <img src={basketImgAdd} alt ='0' onClick={() => {props.addBookToBasket(props.item)}}/>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        );

}



