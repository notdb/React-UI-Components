import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle.js';

function HeaderContent() {
    return(
        <div className="header-content">
        <HeaderTitle />
        <p>Content Goes Here</p>
        </div>
    );
}

export default HeaderContent;