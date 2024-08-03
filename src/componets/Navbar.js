import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    return (
        <div>
            <div>
                <FontAwesomeIcon icon={faCoffee} />
            </div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Navbar;
