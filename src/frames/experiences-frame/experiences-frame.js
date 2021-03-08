import React, { useEffect, useState } from "react";
import Header from "../../components/header/header.js"
import Airtable from 'airtable';
import "./experiences-frame.css";
import Experience from "../../components/experience/experience.js"

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const base = new Airtable({apiKey: process.env.REACT_APP_API_KEY}).base('appkktYvh9LMh0IJc');

function ExperiencesFrame() {
    const [positions, setPositions] = useState([]);

    useEffect(()=> {
        base("positions")
        .select({ view: "Grid View"})
        .eachPage((records, fetchNextPage) => {
            setPositions(records);
            fetchNextPage();            
        });
    },[])

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
                    {/* <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="Summer 2021"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Summer 2021 Intern</h3>
                        <h4 className="vertical-timeline-element-subtitle">Bay Area</h4>
                        <p>
                        This summer I will be interning at [company] on [team]
                        </p>
                    </VerticalTimelineElement> */}
                   
                   <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Summer 2021"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Summer 2021 Intern</h3>
                        <h4 className="vertical-timeline-element-subtitle">SF Bay Area</h4>
                        <p>
                        This summer I will be interning at [company] on [team]
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
                        Worked with team of 8 to learn web development fundamentals while building a web application for a non-profit
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
                        Worked with small group of students passionate about Unmanned Aerial Vehicles (UAVs) while exploring the intersection of hardware and software
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
                        Enrolled at UC Berkeley
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default ExperiencesFrame;