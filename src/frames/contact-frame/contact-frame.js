import React from 'react';
import Header from "../../components/header/header.js"
import "./contact-frame.css";

function ContactFrame() {
    return(
        <div className='contactFrame'>
            <div className='contactHeaderFrame'>
                <Header text='my contact info'/>
            </div>
            <div className='lowerContactFrame'>
                <div className='contactTex'>
                    jorge.morales@berkeley.edu
                </div>
            </div>
        </div>
    );
}

export default ContactFrame;