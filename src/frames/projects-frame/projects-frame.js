import React from "react";
import Header from "../../components/header/header.js"
import tgifPic from "./../../assets/tgif_logo.png";
import sudokuPic from "./../../assets/sudoku copy.png";
import bearmapsPic from "./../../assets/bearmaps.png";
import googlePic from "./../../assets/googleLogo.png";
import bcPic from "./../../assets/bc_logo.png";
import p5Logo from "./../../assets/p5_logo.svg";
import "./projects-frame.css";
// Flip Cards Source: https://www.w3schools.com/howto/howto_css_flip_card.asp

function ProjectsFrame() {
    return(
        <div className='projectsFrame' id='projects'>
            <div className='projectsHeaderFrame'>
                <Header text='a few of my projects'/>
            </div>
            <div className='projectsLowerFrame lowerFrame1'>
                <div className='leftProjectFrame projectFrame'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front project1FrontContainer">
                                <div>
                                    Google STEP Project
                                </div>
                                <div className='imgContainer'>
                                    <img className="projectsIcon"
                                        src={googlePic}
                                        alt="Google Logo"
                                    />
                                </div>
                            </div>
                            <div class="flip-card-back project1BackContainer">
                                <div className='project1BackText backText'>
                                    As part of the Google Play team, my partner and I built a
                                    new module on the Play Store details page of games that
                                    showcases gameplay videos from YouTube. My focus was on the
                                    backend server code.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='centerProjectFrame projectFrame'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front project2FrontContainer">
                                <div>
                                    BlueConduit Software
                                </div>
                                <div className='imgContainer'>
                                    <img className='projectsIcon'
                                        src={bcPic}
                                        alt="BlueConduit Logo"
                                    />
                                </div>
                            </div>
                            <div class="flip-card-back project2BackContainer">
                                <div className='project2BackText backText'>
                                    As part of <a href="https://codebase.berkeley.edu/" target="_blank">Codebase</a>, my team and I developed a full-stack web application
                                    for <a href="https://www.blueconduit.com/" target="_blank">BlueConduit</a> to
                                    onboard city utility officials and process their service
                                    line data, providing access to BlueConduit’s mapping tools
                                    for their water system. We used Vue.js for the frontend, Bootstrap for styling,
                                    Django in the backend, and the Mapbox API for map visualization.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rightProjectFrame projectFrame'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front project3FrontContainer">
                                <div>
                                    Voting Forum
                                </div>
                                <div className='imgContainer'>
                                    <img className="projectsIcon"
                                        src={tgifPic}
                                        alt="The Green Initiative Fund Logo"
                                    />
                                </div>
                            </div>
                            <div class="flip-card-back project3BackContainer">
                                <div className='project2BackText backText'>
                                    As part of <a href="https://codebase.berkeley.edu/" target="_blank">Codebase</a>, my team and I built a full stack voting
                                    portal for <a id="tgifLink" href="https://tgif.berkeley.edu/" target="_blank">
                                    The Green Initiative Fund (TGIF)</a> using HTML/CSS, React,
                                    Javascript, NodeJS, and PostgreSQL.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='projectsLowerFrame lowerFrame2'>
                <div className='leftProjectFrame projectFrame'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front project4FrontContainer">
                                <div>
                                    P5 Project
                                </div>
                                <div className='imgContainer'>
                                    <img
                                        src={p5Logo}
                                        alt="p5 Logo"
                                    />
                                </div>
                            </div>
                            <div class="flip-card-back project4BackContainer">
                                <div className='project1BackText backText'>
                                    Built a fun and
                                    interactive <a href="https://jorgemorales21.github.io/cb-mentored-p5/sights-sounds/" target="_blank">virtual tour</a> of the Berkeley
                                    campus using the P5 Javascript library.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='centerProjectFrame projectFrame'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front project5FrontContainer">
                                <div>
                                    Sudoku Generator
                                </div>
                                <div className='imgContainer'>
                                    <img className='sudokuPic'
                                        src={sudokuPic}
                                        alt="Sudoku"
                                    />
                                </div>
                            </div>
                            <div class="flip-card-back project5BackContainer">
                                <div className='project2BackText backText'>
                                    I built a <a href="https://tinyurl.com/jorge-sudoku" target="_blank">sudoku puzzle generator</a> that uses a
                                    backtracking algorithm to generate an original
                                    9x9 sudoku board. I also used Python's Tkinter framework
                                    to build a fully-functional and playeable GUI.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rightProjectFrame projectFrame'>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front project6FrontContainer">
                                <div>
                                    BearMaps
                                </div>
                                <div className='imgContainer'>
                                    <img className='bearmapsPic'
                                        src={bearmapsPic}
                                        alt="bearmaps"
                                    />
                                </div>
                            </div>
                            <div class="flip-card-back project6BackContainer">
                                <div className='project2BackText backText'>
                                    Built a smaller, Berkeley-based version of
                                    Google Maps that works using KD-Trees, the A*
                                    algorithm to find shortest paths, and a Trie
                                    structure to generate autocomplete search results.
                                    Implemented rastering mechanism to provide zooming in/out
                                    features + routing directions.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsFrame;