import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import ProductCard from '../componets/ProductCard'; // Check for correct path here
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
    const products = useSelector((state) => state.products);
    const [query, setQuery] = useSearchParams();
    let [error, setError] = useState('');
    const dispatch = useDispatch();

    const getProducts = () => {
        const keyword = query.get('q') || '';
        dispatch(productAction.resetProducts())
        dispatch(productAction.getProducts(keyword));
    };
    useEffect(() => {
        getProducts();
    }, [query]);

    useEffect(() => {
        if (products.length === 0) {
            if (query.get('q')) {
                setError(`No products match '${query.get('q')}'`);
            } else {
                setError('No results found');
            }
        } else {
            setError(''); // Clear error message if results are found
        }
    }, [products, query]);


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
