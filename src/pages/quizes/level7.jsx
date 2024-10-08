import Header from "../../components/Header"; 
import BackgroundDown from "../../components/BackgroundDown";
import BackgroundUp from "../../components/BackgroundUp";

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Level7() {

    const [selectedItem, setSelectedItem] = useState("")

    const handleItemClick1 = () => setSelectedItem('a');
    const handleItemClick2 = () => setSelectedItem('b');
    const handleItemClick3 = () => setSelectedItem('c');
    const handleItemClick4 = () => setSelectedItem('d');
    
    
    


    return(
        <>
            <BackgroundUp/>
            <Header color2 = "#29CBEE"/>
            <div className="container">
                
                <div className="statelite levelTop">
                    <img src="/statelite.png" alt="statelite" />
                    <div className="levelPlanets">
                        <img className="secondPlanet" src="/mercury.png" alt="" />
                        <img src="/sun.png" alt="" />
                    </div>
                </div>
                <div className="quizQuestion">
                    <div className="quizQuestions">
                        <h1 className="levelTitle">LEVEL 7</h1>
                        <div className="question">
                            PACE can observe all of the following EXCEPT
                        </div>
                        <div className="answers">
                            
                                <div className="answer"  
                                onClick={handleItemClick1} 
                                style={{
                                        color: selectedItem === 'a' ? 'green' : 'white',
                                        cursor: 'pointer',
                                        }}>
                                    Earth surface 
                                </div>
                                <div className="answer"  
                                onClick={handleItemClick2} 
                                style={{
                                            color: selectedItem === 'b' ? 'red' : 'white',
                                            cursor: 'pointer',
                                        }}>
                                    Global ocean color
                                </div>
                                <div className="answer"  
                                onClick={handleItemClick3} 
                                style={{
                                            color: selectedItem === 'c' ? 'red' : 'white',
                                            cursor: 'pointer',
                                        }}>
                                    Aerosols  
                                </div>
                                <div className="answer" 
                                onClick={handleItemClick4} 
                                style={{
                                            color: selectedItem === 'd' ? 'red' : 'white',
                                            cursor: 'pointer',
                                        }}>
                                    Clouds 
                                </div>
                        </div>     
                    </div>
                    <div className="nextButton">
                        <Link to= {"/Quiz/Level8"}>
                            <div className="next">
                                NEXT
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="oceanmeow">
                    <img className="meowsWords" src="/meowsWords2.png" alt="" />
                    <img className="oceanmeow" src="/oceancat.png" alt="oceancat" />
                </div>
            </div>
            <BackgroundDown/>   
        </>
    )
}

export default Level7