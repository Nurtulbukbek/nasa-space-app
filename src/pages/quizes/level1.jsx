import Header from "../../components/Header"; 
import BackgroundDown from "../../components/BackgroundDown";
import BackgroundUp from "../../components/BackgroundUp";

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Level1() {

    const [selectedItem, setSelectedItem] = useState("")

    const handleItemClick1 = () => setSelectedItem('Mercury');
    const handleItemClick2 = () => setSelectedItem('Uran');
    const handleItemClick3 = () => setSelectedItem('Mars');
    const handleItemClick4 = () => setSelectedItem('Earth');
    
    
    


    return(
        <>
            <BackgroundUp/>
            <Header color2 = "#29CBEE"/>
            <div className="container">
                
                <div className="statelite levelTop">
                    <img src="/statelite.png" alt="statelite" />
                    <div className="planets">
                        <img className="secondPlanet" src="/mercury.png" alt="" />
                        <img src="/sun.png" alt="" />
                    </div>
                </div>
                <div className="quizQuestion">
                    <div className="quizQuestions">
                        <h1 className="levelTitle">LEVEL 1</h1>
                        <div className="question">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Doloremque molestiae sunt rem libero ea nobis?
                        </div>
                        <div className="answers">
                            
                                <div className="answer"  
                                onClick={handleItemClick1} 
                                style={{
                                        color: selectedItem === 'Mercury' ? 'red' : 'white',
                                        cursor: 'pointer',
                                        }}>
                                    Mercury
                                </div>
                                <div className="answer"  onClick={handleItemClick2} style={{
                                                                                                color: selectedItem === 'Uran' ? 'green' : 'white',
                                                                                                cursor: 'pointer',
                                                                                            }}>
                                    Uran
                                </div>
                                <div className="answer"  onClick={handleItemClick3} style={{
                                                                                                color: selectedItem === 'Mars' ? 'red' : 'white',
                                                                                                cursor: 'pointer',
                                                                                            }}>
                                    Mars
                                </div>
                                <div className="answer"  onClick={handleItemClick4} style={{
                                                                                                color: selectedItem === 'Earth' ? 'red' : 'white',
                                                                                                cursor: 'pointer',
                                                                                            }}>
                                    Earth
                                </div>
                        </div>     
                    </div>
                    <div className="nextButton">
                        <Link to= {"/Quiz/Level2"}>
                            <div className="next">
                                NEXT
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="oceanmeow">
                    <img className="meowsWords" src="/meowsWords.png" alt="" />
                    <img className="oceanmeow" src="/oceancat.png" alt="oceancat" />
                </div>
            </div>
            <BackgroundDown/>   
        </>
    )
}

export default Level1