import React from 'react';
import Header from "../../components/header/header.js"
import profilePic from "./../../assets/jorge.jpg";
import "./about-frame.css";

function AboutFrame() {
    return(
        <div className = 'aboutFrame' id='about'>
            <div className='topFrame'>
                <Header text='a little bit about me'/>
            </div>
            <div className='bottomFrame'>
                <div className='leftFrame'>
                    <div className='text1'>
                        I’m a 3rd-year studying computer science at
                        <span className='berkeley'> UC Berkeley</span>.
                    </div>
                    <div className='text2'>
                        I'm from <span className='sanDiego'>San Diego, CA</span> so moving to the
                        bay area brought its own set of weather challenges.
                    </div>
                    <div className='text3'>
                        I am currently exploring all the different subfields of <span className='softwareDev'>software development</span>. 
                    </div>
                </div>
                <div className='rightFrame'>
                    <div className='aboutImgContainer'>
                        <img className='profilePic'
                        src={profilePic}
                        alt="Jorge in Front of Sather Gate"
                        />
                    </div>
                    <div className='co2023'>
                        class of 2023
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutFrame;