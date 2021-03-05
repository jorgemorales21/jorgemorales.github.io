import React from 'react';
import ExperiencesFrame from '../../frames/experiences-frame/experiences-frame';
import "./experience.css";

function Experience({classNames, headerText, bodyText}) {
    return(
        <div className={classNames}>
            <span className='xpHeaderText'>
                {headerText}
            </span>
            <br/><br/>
            <span className='xpBodyText'>
                {bodyText}
            </span>
        </div>
    );
}

export default Experience;