import React from 'react';
import './Header.css'

const Header = () => {
    return (
        // Header
        <div>
            <div className='headerBack'>
                <h1 className='titleText mt-5 fw-bold'>Diu Faculty Spend Tracker</h1>
                <p>Distribute some money to Diu faculty members. Here is the list. Send them their Amount by clicking send Money button. </p>
                <h1 className='pb-2 mb-3'>Total Budget : <span className='million fw-bold'>210</span> Million</h1>
            </div>
        </div>
    );
};

export default Header;