import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import handImage from '../img/hand_700px.png';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FaRegUser, FaSearch } from 'react-icons/fa';
import hamburger from '../img/hamburger.png';
import { colors } from '@material-ui/core';
const Navbar = ({ authenticate, setAuthenticate }) => {
    const MenuList = ['Make', 'H', 'Sale', '아동', 'Products'];
    const [isSearchVisible, setSearchVisible] = useState(false);

    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const toggleSearch = () => {
        setSearchVisible(!isSearchVisible);
    };

    const search = (e) => {
        if (e.key === 'Enter') {
            let keyword = e.target.value;
            console.log(keyword);
            navigate(`?q=${keyword}`);
        }
    };
    const toggleSidebar = () => {
        const sidebar = document.querySelector('.sidebar_box');
        if (sidebar.style.display === 'none') {
            sidebar.style.display = 'block';
        } else {
            sidebar.style.display = 'none';
        }
    };
    const handleLogout = () => {
        setAuthenticate(false);
        navigate('/login');
    };
    const closeSidebar = () => {
        const sidebar = document.querySelector('.sidebar_box');
        if (sidebar.style.display === 'block') {
            sidebar.style.display = 'none';
        }
    };
    return (
        <div>
            <div className="top_container">
                <div className="top_button">
                    <img className="hamburger" src={hamburger} alt="hamburger" onClick={toggleSidebar} />

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
                </div>
                <div className="manu-list-containt">
                    <ul className="manu-list">
                        {MenuList.map((menu, index) => (
<li key={index} className="menu-item">
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
                </div>

                <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                    <ul className="sidebar_box">
                        <div className="close_button" onClick={closeSidebar}>
                            x
                        </div>
                        <div className="sidebar_text">
                            {MenuList.map((menu, index) => (
                                <ul key={index}>
                                    {menu === 'Products' ? (
                                        <Link to="/" className="login_link">
                                            {menu}
                                        </Link>
                                    ) : (
                                        menu
                                    )}
                                </ul>
                            ))}
                        </div>
                    </ul>
                </div>
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
                    <div className="search_box">
                        <FaSearch className="search_icon" onClick={toggleSearch} size={28} />
                        {isSearchVisible && (
                            <input className="search_input" placeholder="Search..." type="text" onKeyPress={search} />
                        )}
                    </div>
                </div>
                <div className="small_search_box">
                    <div>
                        <FaSearch className="search_icon" size={40} />
                    </div>
                    <div>
                        <input className="search_input" placeholder="Search..." type="text" onKeyPress={search} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
