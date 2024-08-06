import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductAll = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        let url = `http://localhost:3001/products`;
        let response = await fetch(url);
        let jsonData = await response.json();
        console.log(jsonData);
        setProducts(jsonData);
        console.log(setProducts);
    };

    useEffect(() => {
        getProducts();
    }, []);
    //카드 가운데 한줄에 4개
    //반응형

    return (
        <div>
            <div className="products_contanse">
                <Container>
                    <Row>
                        {products.map((menu) => (
                            <Col lg={3}>
                                <ProductCard item={menu} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default ProductAll;
