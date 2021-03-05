import React from 'react';
import "./header.css";

function Header(props) {
    return(
        <div className='headerFrame'>
            <div className='leftLine line'>
                        
            </div>
            <div className='headerText'>
                {props.text}
            </div>
            <div className='rightLine line'>
                
            </div>
        </div>
    );
}

export default Header;