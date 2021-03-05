import React from 'react';
import Header from "../../components/header/header.js"
import tgifPic from "./../../assets/tgif-3.png";
import sudokuPic from "./../../assets/sudoku.png";
import bearmapsPic from "./../../assets/bearmaps.png";
import "./projects-frame.css";

function ProjectsFrame() {
    return(
        <div className='projectsFrame'>
            <div className='projectsHeaderFrame'>
                <Header text='a few of my projects'/>
            </div>
            <div className='projectsLowerFrame'>

                <div className='leftProjectFrame projectFrame'>
                    <div className='project1Container projectContainer'>
                        <div className='project1Text'>
                            Voting Forum
                        </div>
                        <div className='imgContainer1'>
                            <img className='profilePic'
                                src={tgifPic}
                                alt="The Green Initiative Fund"
                            />
                        </div>
                    </div>
                </div>
                <div className='centerProjectFrame projectFrame'>
                    <div className='project2Container projectContainer'>
                            <div className='project2Text'>
                                Sudoku Generator
                            </div>
                            <div className='imgContainer1'>
                                <img className='profilePic'
                                    src={sudokuPic}
                                    alt="Sudoku"
                                />
                            </div>
                     </div>
                </div>
                <div className='rightProjectFrame projectFrame'>
                    <div className='project3Container projectContainer'>
                            <div className='project3Text'>
                                BearMaps
                            </div>
                            <div className='imgContainer1'>
                                <img className='profilePic'
                                    src={bearmapsPic}
                                    alt="BearMaps"
                                />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsFrame;