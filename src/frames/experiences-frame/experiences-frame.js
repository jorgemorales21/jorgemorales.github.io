import Header from "../../components/header/header.js"
import "./experiences-frame.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import googlePic from "./../../assets/googleLogo.png";
import bcPic from "./../../assets/bc_logo.png";
import tgifLogoRound from "./../../assets/tgif_round_logo.png";
import droneIcon from "./../../assets/drone-icon.png";
import berkeleyLogo from "./../../assets/berkeley-logo.png";

function ExperiencesFrame() {
    return(
        <div className = 'experiencesFrame' id='experiences'>
            <div className='xpHeaderFrame'>
                <Header text='a few of my experiences'/>
            </div>
            <div className='lowerFrame'>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Summer 2022"
                        iconStyle={{ background: 'white', boxShadow:"0 0 0 4px #fff, 0 3px 0 4px rgb(0 0 0 / 5%)" }}
                        icon={<img className="projectsIcon" src={googlePic} alt="Google Logo"/>}
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
                        iconStyle={{ background: 'white', boxShadow:"0 0 0 4px #fff, 0 3px 0 4px rgb(0 0 0 / 5%)" }}
                        icon={<img className="projectsIcon" src={bcPic} alt="BlueConduit Logo"/>}
                    >
                        <h3 className="vertical-timeline-element-title">Codebase Client Developer [BlueConduit]</h3>
                        <h4 className="vertical-timeline-element-subtitle">Berkeley, CA</h4>
                        <p>
                        Partnered with <a href="https://www.blueconduit.com/" target="_blank">BlueConduit</a>--a machine learning & data analytics company started
                        in Flint, Michigan to help with the water crisis--to build a full stack web app
                        that will become open-source and will help map out local lead-contaminated pipelines.
                        The project was part of an initiative backed by
                        a <a href="https://www.blueconduit.com/post/google-grant-advances-blueconduit-s-mission-to-identify-and-remove-lead-service-lines" target="_blank">$3 million grant</a> by Google.org.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Summer 2021"
                        iconStyle={{ background: 'white', boxShadow:"0 0 0 4px #fff, 0 3px 0 4px rgb(0 0 0 / 5%)" }}
                        icon={<img className="projectsIcon" src={googlePic} alt="Google Logo"/>}
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
                        iconStyle={{ background: 'white', boxShadow:"0 0 0 4px #fff, 0 3px 0 4px rgb(0 0 0 / 5%)" }}
                        icon={<img className="projectsIcon" src={tgifLogoRound} alt="TGIF Logo"/>}

                    >
                        <h3 className="vertical-timeline-element-title">Codebase Mentored Developer [TGIF]</h3>
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
                        iconStyle={{ background: 'white', textAlign:"center", paddingTop:"9px", boxShadow:"0 0 0 4px #fff, 0 3px 0 4px rgb(0 0 0 / 5%)" }}
                        icon={<img className="uavsContainer" src={droneIcon} alt="Drone Icon"/>}
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
                        iconStyle={{ background: 'white', boxShadow:"0 0 0 4px #fff, 0 3px 0 4px rgb(0 0 0 / 5%)" }}
                        icon={<img className="projectsIcon" src={berkeleyLogo} alt="Berkeley Logo"/>}
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