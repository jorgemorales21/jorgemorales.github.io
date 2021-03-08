import React from 'react';
import "./home-frame.css";
import line1 from "./../../assets/line1.svg";
import line2 from "./../../assets/line2.svg";
import line3 from "./../../assets/line3.svg";
import line4 from "./../../assets/line4.svg";
import line5 from "./../../assets/line5.svg";

function HomeFrame() {
    return(
        <div className='homeFrame' id='home'>
            <div className='centerTextContainer'>
                <div className='greetingText'>
                    Hey, I'm
                </div>
                <div className='nameText'>
                    Jorge Morales
                </div>
                <div className='adjectivesText'>
                    student | developer | learner
                </div>
            </div>
            <img className='line1'
                src={line1}
                alt="line 1"
            />
            <img className='line2'
                src={line2}
                alt="line 2"
            />
            <img className='line3'
                src={line3}
                alt="line 3"
            />
            <img className='line4'
                src={line4}
                alt="line 4"
            />
            <img className='line5'
                src={line5}
                alt="line 5"
            />
        </div>
    );
}

export default HomeFrame;