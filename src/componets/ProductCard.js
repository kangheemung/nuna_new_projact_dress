import React from 'react';

const ProductCard = ({ item }) => {
    return (
        <div className={item?.choice === true ? 'product-card' : 'product-card hidden'}>
            <img src={item?.img} className="img_dress"></img>
            <div>{item?.title}</div>
            <div>${item?.price}</div>
            <div> {item?.new == true ? '신제품' : ''}</div>
        </div>
    );
};

export default ProductCard;
