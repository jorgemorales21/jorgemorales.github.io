import React from 'react';
import Header from "../../components/header/header.js"
import emailIcon from "./../../assets/email-icon.svg";
import githubIcon from "./../../assets/github-icon.svg";
import instagramIcon from "./../../assets/ig-logo.svg";
import facebookIcon from "./../../assets/facebook-icon.svg";
import linkedinIcon from "./../../assets/linkedin-icon.svg";
import backToTopIcon from "./../../assets/top-icon.png";
import "./contact-frame.css";

function ContactFrame() {
    return(
        <div className='contactFrame' id='contact'>
            <div className='contactHeaderFrame'>
                <Header text='my contact info'/>
            </div>
            <div className='lowerContactFrame'>
                <div className='contactText'>
                    jorge.morales@berkeley.edu
                </div>
                <div className='socialMediaFrame'>
                    <div className='emailIconContainer'>
                        <a href="mailto:jorge.morales@berkeley.edu">
                            <img className='emailIcon icon'
                            src={emailIcon}
                            alt="Email Icon"
                            />
                        </a>
                    </div>
                    <div className='githubIconContainer icon'>
                        <a href="https://github.com/jorgemorales21" target="_blank">
                            <img className='githubIcon'
                            src={githubIcon}
                            alt="Github Icon"
                            />
                        </a>
                    </div>
                    <div className='instagramIconContainer icon'>
                        <a href="https://www.instagram.com/thejorgemorales/" target="_blank">
                            <img className='instagramIcon'
                            src={instagramIcon}
                            alt="Instagram Icon"
                            />
                        </a>
                    </div>
                    <div className='facebookIconContainer icon'>
                        <a href="https://www.facebook.com/jorge.morales.7121614/" target="_blank">
                            <img className='facebookIcon'
                            src={facebookIcon}
                            alt="Facebook Icon"
                            />
                        </a>
                    </div>
                    <div className='linkedinIconContainer icon'>
                        <a href="https://www.linkedin.com/in/jorge-morales21/" target="_blank">
                            <img className='linkedinIcon'
                            src={linkedinIcon}
                            alt="Linkedin Icon"
                            />
                        </a>
                    </div>
                    <div className='backToTopContainer'>
                        <a href="#home">
                            <img className='backToTopIcon'
                            src={backToTopIcon}
                            alt="Back To Top"
                            />
                        </a>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ContactFrame;