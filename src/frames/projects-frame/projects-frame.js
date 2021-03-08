import React, { useEffect, useState } from "react";
import Header from "../../components/header/header.js"
import tgifPic from "./../../assets/tgif-3.png";
import sudokuPic from "./../../assets/sudoku copy.png";
import bearmapsPic from "./../../assets/bearmaps.png";
import ReactCardFlip from 'react-card-flip';
import "./projects-frame.css";

function ProjectsFrame() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    return(
        <div className='projectsFrame' id='projects'>
            <div className='projectsHeaderFrame'>
                <Header text='a few of my projects'/>
            </div>
            <div className='projectsLowerFrame'>

                <div className='leftProjectFrame projectFrame'>

                    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                        <div className='project1FrontContainer projectContainer'>
                            <div className='project1FrontText'>
                                Voting Forum
                            </div>
                            <div className='imgContainer1'>
                                <img className='profilePic'
                                    src={tgifPic}
                                    alt="The Green Initiative Fund"
                                />
                            </div>
                            <button onClick={handleClick}>Flip</button>
                        </div>

                        <div className='project1BackContainer projectContainer'>
                            <div className='project1BackText backText'>
                                As part of codebase, my team and I are currently building
                                a web-based voting forum to streamline the voting process for
                                The Green Initiative Fund, a non-profit that allocates student fees to grants
                                for projects aimed at improving and supporting UC Berkeley's sustainability
                                efforts.
                            </div>
                            <button onClick={handleClick}>Flip</button>
                        </div>
                    </ReactCardFlip>

                    {/* <div className='project1Container projectContainer'>
                        <div className='project1Text'>
                            Voting Forum
                        </div>
                        <div className='imgContainer1'>
                            <img className='profilePic'
                                src={tgifPic}
                                alt="The Green Initiative Fund"
                            />
                        </div>
                    </div> */}
                </div>

                <div className='centerProjectFrame projectFrame'>

                    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                        <div className='project2FrontContainer projectContainer'>
                            <div className='project2FrontText'>
                                Sudoku Generator
                            </div>
                            <div className='imgContainer1'>
                                <img className='sudokuPic'
                                    src={sudokuPic}
                                    alt="Sudoku"
                                />
                            </div>
                            <button onClick={handleClick}>Flip</button>
                        </div>

                        <div className='project2BackContainer projectContainer'>
                            <div className='project2BackText backText'>
                                I built a sudoku puzzle generator that uses a
                                backtracking algorithm to generate an original
                                9x9 sudoku board. I also used Python's Tkinter framework
                                to build a fully-functional and playeable GUI.
                            </div>
                            <button onClick={handleClick}>Flip</button>
                        </div>
                    </ReactCardFlip>
                    
                    {/* <div className='project2Container projectContainer'>
                            <div className='project2Text'>
                                Sudoku Generator
                            </div>
                            <div className='imgContainer1'>
                                <img className='profilePic'
                                    src={sudokuPic}
                                    alt="Sudoku"
                                />
                            </div>
                     </div> */}
                </div>

                <div className='rightProjectFrame projectFrame'>
                    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                        <div className='project3FrontContainer projectContainer'>
                            <div className='project3FrontText'>
                                BearMaps
                            </div>
                            <div className='imgContainer1'>
                                <img className='bearmapsPic'
                                    src={bearmapsPic}
                                    alt="bearmaps"
                                />
                            </div>
                            <button onClick={handleClick}>Flip</button>
                        </div>

                        <div className='project3BackContainer projectContainer'>
                            <div className='project3BackText backText'>
                                Built a smaller, Berkeley-based version of
                                Google Maps that works using KD-Trees, the A*
                                algorithm to find shortest paths, and a Trie
                                structure to generate autocomplete search results.
                                Implemented rastering mechanism to provide zooming in/out
                                features + routing directions.
                            </div>
                            <button onClick={handleClick}>Flip</button>
                        </div>
                    </ReactCardFlip>


                    {/* <div className='project3Container projectContainer'>
                            <div className='project3Text'>
                                BearMaps
                            </div>
                            <div className='imgContainer1'>
                                <img className='profilePic'
                                    src={bearmapsPic}
                                    alt="BearMaps"
                                />
                            </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default ProjectsFrame;