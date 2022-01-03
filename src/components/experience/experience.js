import React from 'react';
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