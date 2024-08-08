import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const getDetailPage = async () => {
        let url = `http://localhost:3001/products/${id}`;
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        setProduct(data);
    };

    useEffect(() => {
        getDetailPage();
    }, []);
    return (
        <div className="detail_information">
            <Container>
                <Row>
                    <div className="detail_box">
                        <Col md={6} className="order-md-1 detail_img">
                            <img className="detail_img_box" src={product?.img} />
                        </Col>
                        <Col md={6} className="order-md-2 detail_text">
                            <div clasName="detail_text_box">
                                <div>{product?.title}</div>
                                <div>${product?.price}</div>

                                <Form.Select size="lg">
                                    <option> 사이즈 선택</option>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                </Form.Select>

                                <div> {product?.new == true ? '신제품' : ''}</div>

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
