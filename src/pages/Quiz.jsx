import Header from "../components/Header";
import BackgroundDown from "../components/BackgroundDown";
import BackgroundUp from "../components/BackgroundUp";

import React from "react";
import { Link } from "react-router-dom";
function Quiz() {

    return(
        <>
            <BackgroundUp bgSmall = "none" />
            <Header color2 = "#29CBEE" />
                <div className="container">
                    <div className="homePage ">
                        <div className="statelite">
                            <img src="/statelite.png" alt="statelite" />
                        </div>

                        <div className="planets">
                            <div className="planetsImgs">
                                    <div>
                                        <img className="planet1 planet" src="/sun.png" alt="sun" />
                                    </div>
                                    
                                    <div >
                                        <Link to={"/Quiz/Level1"}>
                                            <img className="planet2 planet" src="/mercury.png" alt="mercury" />
                                        </Link>
                                        
                                    </div>
                                    
                                            

                                    <div>
                                        <Link to={"/Quiz/Level1"}>
                                            <img className="planet3 planet" src="/venus.png" alt="venus" />
                                        </Link>
                                        
                                    </div>
                                    <div className="planet4 planet">
                                        <Link to={"/Quiz/Level2"}>
                                        <img src="/moon.png" alt="moon" />
                                        <img src="/earth.png" alt="earth" />
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to={"/Quiz/Level3"}>
                                            <img className="planet5 planet" src="/mars.png" alt="mars" />
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to={"/Quiz/Level4"}>
                                            <img className="planet6 planet" src="/jupiter.png" alt="jupiter" />
                                        </Link>
                                        
                                    </div>
                                    <div>
                                        <Link to={"/Quiz/Level5"}>
                                            <img className="planet7 planet" src="/saturn.png" alt="saturn" />
                                        </Link>
                                        
                                    </div>
                                    <div>
                                        <Link to={"/Quiz/Level6"}>
                                            <img className="planet8 planet" src="/uran.png" alt="uran" />
                                        </Link>
                                    </div>
                            </div>

                            <div className="oceanmeow">
                                <img className="meowsWords" src="/meowsWords.png" alt="" />
                                <img className="oceanmeow" src="/oceancat.png" alt="oceancat" />
                            </div>
                        </div>
                    </div>
                </div>
            <BackgroundDown/>
        </>
    )
}

export default Quiz