import React from 'react';
import "./navigation-bar.css";

function NavigationBar() {
    return(
        <div className='navBarFrame'>
            <div className='textFrame'>
                <a href='#about'>about</a>
                <a href='#experiences'>experience</a>
                <a href='#projects'>projects</a>
                <a href='#contact'>contact</a>
                
                {/* <div className='about'>
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
                </div> */}
            </div>
        </div>
    );
}

export default NavigationBar;