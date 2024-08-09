import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [products, setProducts] = useState([]);
    const [query, setquery] = useSearchParams();

    let [error, setError] = useState('');

    const getProducts = async () => {
        try {
            let keyword = query.get('q') || '';
            console.log('쿼리 값은?', keyword);
            let url = `http://localhost:3001/products?q=${keyword}`;
            let response = await fetch(url);
            console.log('url', url);
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            let jsonData = await response.json();
            let filteredProducts = jsonData.filter((product) =>
                product.title.toLowerCase().includes(keyword.toLowerCase())
            );

            if (filteredProducts.length < 1) {
                if (keyword !== '') {
                    setError(`No products match '${keyword}'`);
                } else {
                    throw new Error('No results found');
                }
            }
            setProducts(filteredProducts);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        getProducts();
    }, [query]);

    //카드 가운데 한줄에 4개
    //반응형
    console.log(query);

    return (
        <div>
            <div className="products_container">
                <Container>
                    {error ? (
                        <Alert variant="danger" className="text-center">
                            {error}
                        </Alert>
                    ) : (
                        <Row>
                            {products.length > 0 ? (
                                products.map((product) => (
                                    <Col md={3} sm={12} key={product.id}>
                                        <ProductCard item={product} />
                                    </Col>
                                ))
                            ) : (
                                <div>No products found</div>
                            )}
                        </Row>
                    )}
                </Container>
            </div>
        </div>
    );
};

export default ProductAll;
