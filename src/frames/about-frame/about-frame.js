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
                        I’m a 2nd-year studying computer science at
                        <span className='berkeley'> UC Berkeley</span>.
                    </div>
                    <div className='text2'>
                        I'm from San Diego, CA so moving to the
                        bay area brought its own set of weather challenges.
                    </div>
                    <div className='text3'>
                        I am currently exploring all the different subfields of software development. 
                    </div>
                </div>
                <div className='rightFrame'>
                    <div className='imgContainer'>
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