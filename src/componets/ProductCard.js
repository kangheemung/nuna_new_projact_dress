import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    const showDetail = (id) => {
navigate(`/products/${item.id}`);
    };
    return (
        <div onClick={showDetail} className={item?.choice === true ? 'product-card' : 'product-card hidden'}>
            <img src={item?.img} className="img_dress" />
            <div>{item?.title}</div>
            <div>${item?.price}</div>
            <div> {item?.new === true ? '신제품' : ''}</div>
        </div>
    );
};

export default ProductCard;
