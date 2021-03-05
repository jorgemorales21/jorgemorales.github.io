import React from 'react';
import "./navigation-bar.css";

function NavigationBar() {
    return(
        <div className='navBarFrame'>
            <div className='textFrame'>
                <div className='about'>
                    about
                </div>
                <div className='experience'>
                    experience
                </div>
                <div className='projects'>
                    projects
                </div>
                <div className='contact'>
                    contact
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;