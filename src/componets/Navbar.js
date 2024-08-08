import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import handImage from '../img/hand_700px.png';
import { FaRegUser, FaSearch } from 'react-icons/fa';

const Navbar = () => {
    const MenuList = ['Make', 'H', 'Sale', 'Products'];
    const [isSearchVisible, setSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const toggleSearch = () => {
        setSearchVisible(!isSearchVisible);
    };
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    };
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };
    return (
        <div>
            <div>
                <div className="login_button " onClick={goToLogin}>
                    <FaRegUser className="login_icon" />
                    <div className="login_link">login</div>
                </div>
            </div>
            <div className="logeline">
                <img className="loge" src={handImage} alt="Hand Gesturing Sign of Communication" />
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
                    <input
                        className="search_input"
                        placeholder="Search..."
                        type="text"
                        value={searchQuery}
                        hange={handleSearch}
                    />
                </div>
                <div className=" small_search_box ">
                    <FaSearch className="search_icon" onClick={toggleSearch} />
                    {isSearchVisible && (
                        <input
                            className="search_input"
                            placeholder="Search..."
                            type="text"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
