import React from 'react';
// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaRegUser } from 'react-icons/fa';
import handImage from '../img/hand_700px.png';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
    const MenuList = ['Make', 'play', 'study'];
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
                    {MenuList.map((manu) => (
                        <li>{manu}</li>
                    ))}
                </ul>

                <div className="search_box">
                    <FaSearch className="search_icon" />
                    <input className="search_input" placeholder="Search..." type="text" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
