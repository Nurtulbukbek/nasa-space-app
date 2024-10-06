import Header from "../../components/Header"; 
import BackgroundDown from "../../components/BackgroundDown";
import BackgroundUp from "../../components/BackgroundUp";

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Level6() {

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
                        <img className="secondPlanet" src="/uran.png" alt="" />
                        <img src="/sun.png" alt="" />
                    </div>
                </div>
                <div className="quizQuestion">
                    <div className="quizQuestions">
                        <h1 className="levelTitle">LEVEL 6</h1>
                        <div className="question">
                            <img className="questionPhoto" src="/oceanLevel.png" alt="" />
                            <p>Look at the photo. What do the highlited words refer to?</p>
                        </div>
                        <div className="answers">
                            
                                <div className="answer"  
                                onClick={handleItemClick1} 
                                style={{
                                        color: selectedItem === 'a' ? 'green' : 'white',
                                        cursor: 'pointer',
                                        }}>
                                    Aeorosol
                                </div>
                                <div className="answer"  
                                onClick={handleItemClick2} 
                                style={{
                                            color: selectedItem === 'b' ? 'red' : 'white',
                                            cursor: 'pointer',
                                        }}>
                                    Cloud
                                </div>
                                <div className="answer"  
                                onClick={handleItemClick3} 
                                style={{
                                            color: selectedItem === 'c' ? 'red' : 'white',
                                            cursor: 'pointer',
                                        }}>
                                    Plankton
                                </div>
                                <div className="answer"  
                                onClick={handleItemClick4} 
                                style={{
                                            color: selectedItem === 'd' ? 'red' : 'white',
                                            cursor: 'pointer',
                                        }}>
                                    Ocean
                                </div>
                        </div>    
                    </div>
                    <div className="nextButton">
                        <Link to= {"/Quiz/Level7"}>
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

export default Level6