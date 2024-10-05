import Header from "../components/Header";
import BackgroundDown from "../components/BackgroundDown";
import BackgroundUp from "../components/BackgroundUp";
function HomePage() {

    return(
        <>
            <BackgroundUp/>
            <Header/>
                <div className="container">
                    <div className="homePage">
                        <div className="statelite">
                            <img src="/statelite.png" alt="statelite" />
                        </div>

                        <div className="homeText">
                            <h1>EXPLORE PACE</h1>
                            <h3>
                                Our project, which is called ExplorePACE, is dedicated to educate young 
                                generation about PACE mission launched by NASA. Our main goal is 
                                to make science more accessible and enjoyable, therefore we created a website, 
                                a fun and engaging platform, to spark the student`s interest in the scientific exploration of Earth, 
                                particularly oceanography and climate change, and help teachers to engage them during the lessons.
                            </h3>
                        </div>

                        <div className="oceancat">
                            <div className="blueDuga">
                                <img src="/blueDuga.png" alt="" />
                                <p>Oceanmeow</p>
                            </div>
                            <img className="oceancat" src="/oceancat.png" alt="oceancat" />
                        </div>
                    </div>
                </div>
                <BackgroundDown/>
        </>
    )
}

export default HomePage