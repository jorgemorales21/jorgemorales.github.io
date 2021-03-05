import React from 'react';
import "./home-frame.css";

function HomeFrame() {
    return(
        <div className='homeFrame'>
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
        </div>
    );
}

export default HomeFrame;