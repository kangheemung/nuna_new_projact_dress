import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenciateAction';


const ProductCard = ({ item }) => {
    const navigate = useNavigate();

    const isAuthenticated = useSelector((state) => state.auth.authenticate);
    const showDetail = () => {
        if (isAuthenticated) {
            navigate(`/products/${item.id}`);
        } else {
            // Redirect to login page or display a message asking the user to log in
            navigate('/login');
        }
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
