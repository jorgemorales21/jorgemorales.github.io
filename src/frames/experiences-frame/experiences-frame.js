// import React, { useEffect, useState } from "react";
import Header from "../../components/header/header.js"
// import Airtable from 'airtable';
import "./experiences-frame.css";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// const base = new Airtable({apiKey: process.env.REACT_APP_API_KEY}).base('appkktYvh9LMh0IJc');

function ExperiencesFrame() {
    // const [positions, setPositions] = useState([]);

    // useEffect(()=> {
    //     base("positions")
    //     .select({ view: "Grid View"})
    //     .eachPage((records, fetchNextPage) => {
    //         setPositions(records);
    //         fetchNextPage();            
    //     });
    // },[])

    return(
        <div className = 'experiencesFrame' id='experiences'>
            <div className='xpHeaderFrame'>
                <Header text='a few of my experiences'/>
            </div>
            <div className='lowerFrame'>
                {/* <VerticalTimeline>
                    {positions.map((position) => (
                        <VerticalTimelineElement
                            className={position.fields.classname}
                            date={position.fields.Date}
                        >
                            <h3 className="vertical-timeline-element-title">{position.fields.Title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{position.fields.Location}</h4>
                            <p>
                            {position.fields.Details}
                            </p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline> */}
                

                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Summer 2022"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Google SWE Intern</h3>
                        <h4 className="vertical-timeline-element-subtitle">Location TBD</h4>
                        <p>
                        Over the summer of 2022, I will be working as a Software Engineering intern at Google.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Fall 2021"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Codebase Client Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Berkeley, CA</h4>
                        <p>
                        Partnered with BlueConduit--a machine learning & data analytics company started
                        in Flint, Michigan to help with the water crisis--to build a full stack web app
                        that will become open-source and will help map out local lead-contaminated pipelines.
                        The project was part of an initiative backed by a $3 million grant by Google.org.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Summer 2021"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Google STEP Intern</h3>
                        <h4 className="vertical-timeline-element-subtitle">Remote</h4>
                        <p>
                        During the summer of 2021, I worked as a Google STEP intern on the Play Store team
                        focused on partnering with top game developers to increase user engagement and game downloads.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Spring 2021"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Codebase Mentored Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Berkeley, CA</h4>
                        <p>
                        Partnered with The Green Initiative Fund (TGIF)--a UC Berkeley nonprofit organization
                        that allocates student funds to various campus green initiatives--to build a custom web voting
                        portal, facilitating TGIF's committee discussion and proposal voting process.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Fall 2019"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">UAVs @ Berkeley</h3>
                        <h4 className="vertical-timeline-element-subtitle">Berkeley, CA</h4>
                        <p>
                        Worked with small group of students passionate about Unmanned Aerial Vehicles (UAVs) while
                        exploring the intersection of hardware and software.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Fall 2019"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">UC Berkeley</h3>
                        <h4 className="vertical-timeline-element-subtitle">Berkeley, CA</h4>
                        <p>
                        Enrolled at UC Berkeley.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default ExperiencesFrame;