import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailPage } from '../redux/actions/productAction';
import { authenticateAction } from '../redux/actions/authenciateAction';
const ProductDetailPage =  ({ setAuthenticate }) => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    //const dispatch = useDispatch();
    const selectedProduct = useSelector(state => state.product.selectedProduct); 
    const getDetailProduct = async () => {
        try {
            dispatch(getDetailPage(id));
            setLoading(false);
        } catch (error) {
            setError("Error fetching product details");
            setLoading(false);
        }
    };

    useEffect(() => {
        getDetailProduct();
    }, [id]); 

   
    if (loading || selectedProduct == null) return <h1>Loading</h1>;
     
    return (
        <div className="detail_information">
            <Container>
                <Row>
                    <div className="detail_box">
                        <Col md={6} className="order-md-1 detail_img">
                            <img className="detail_img_box" src={selectedProduct?.img}  />
                        </Col>
                        <Col md={6} className="order-md-2 detail_text">
                            <div clasName="detail_text_box">
                                <div clasName="detail_text_font">{selectedProduct?.title}</div>
                                <div clasName="detail_text_font">${selectedProduct?.price}</div>

                                <Form.Select size="lg">
                                    <option> 사이즈 선택</option>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                </Form.Select>

                                <div> {selectedProduct?.new === true ? '신제품' : ''}</div>

                                <div className="d-grid gap-2">
                                    <Button variant="dark" size="lg">
                                        추가
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default ProductDetailPage;
