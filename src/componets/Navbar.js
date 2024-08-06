import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import handImage from '../img/hand_700px.png';
import { FaRegUser, FaSearch } from 'react-icons/fa';

const Navbar = () => {
    const MenuList = ['Make', 'play', 'study'];
    const [isSearchVisible, setSearchVisible] = useState(false);
    const toggleSearch = () => {
        setSearchVisible(!isSearchVisible);
    };
    return (
        <div>
            <div>
                <div className="login_button">
                    <FaRegUser />
                    <div>login</div>
                </div>
            </div>
            <div className="logeline">
                <img className="loge" src={handImage} alt="Hand Image" />
                DRING
            </div>
            <div className="top_contain">
                <ul className="manu-list">
                    {MenuList.map((manu, index) => (
                        <li key={index}>{manu}</li>
                    ))}
                </ul>
                <div className="search_box">
                    <FaSearch className="search_icon" />
                    <input className="search_input" placeholder="Search..." type="text" />
                </div>
                <div className=" small_search_box ">
                    <FaSearch className="search_icon" onClick={toggleSearch} />
                    {isSearchVisible && <input className="search_input" placeholder="Search..." type="text" />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
