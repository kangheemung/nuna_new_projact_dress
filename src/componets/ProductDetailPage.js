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
        <div>
            <Container>
                <Row>
                    <Col className="detail_img">
                        <img src={product?.img} />
                    </Col>
                    <Col>
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
                            <Button variant="success" size="lg">
                                추가
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductDetailPage;
