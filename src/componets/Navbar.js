import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import handImage from '../img/hand_700px.png';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FaRegUser, FaSearch } from 'react-icons/fa';

const Navbar = ({ authenticate, setAuthenticate }) => {
    const MenuList = ['Make', 'H', 'Sale', '아동', 'Products'];
    const [isSearchVisible, setSearchVisible] = useState(false);
    const toggleSearch = () => {
        setSearchVisible(!isSearchVisible);
    };
    const navigate = useNavigate();

    const search = (e) => {
        if (e.key === 'Enter') {
            let keyword = e.target.value;
            console.log(keyword);
            navigate(`?q=${keyword}`);
        }
    };
    const handleLogout = () => {
        setAuthenticate(false);
        navigate('/login');
    };

    return (
        <div>
            <div>
                {authenticate ? (
                    <div className="login_button" onClick={handleLogout}>
                        <FontAwesomeIcon icon={faUser} />
                        <span style={{ cursor: 'pointer' }}>로그아웃</span>
                    </div>
                ) : (
                    <div className="login_button" onClick={() => navigate('/login')}>
                        <FontAwesomeIcon icon={faUser} />
                        <span style={{ cursor: 'pointer' }}>로그인</span>
                    </div>
                )}
                <div className="logeline">
                    <img
                        className="loge"
                        src={handImage}
                        alt="Hand Gesturing Sign of Communication"
                        onClick={() => navigate('/')}
                    />
                    DRING
                </div>
                <div className="top_contain">
                    <ul className="manu-list">
                        {MenuList.map((menu, index) => (
                            <li key={index}>
                                {menu === 'Products' ? (
                                    <Link to="/" className="manu">
                                        {menu}
                                    </Link>
                                ) : (
                                    menu
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="search_box">
                        <FaSearch className="search_icon" />
                        <input className="search_input" placeholder="Search..." type="text" onKeyPress={search} />
                    </div>
                    <div className=" small_search_box ">
                        <FaSearch className="search_icon" onClick={toggleSearch} />
                        {isSearchVisible && (
                            <input className="search_input" placeholder="Search..." type="text" onKeyPress={search} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
