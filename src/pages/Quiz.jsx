import Header from "../components/Header";
import BackgroundDown from "../components/BackgroundDown";
import BackgroundUp from "../components/BackgroundUp";
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
                                    <img className="planet1 planet" src="/sun.png" alt="sun" /></div>
                                <div>
                                    <img className="planet2 planet" src="/mercury.png" alt="mercury" /></div>
                                <div>
                                    <img className="planet3 planet" src="/venus.png" alt="venus" /></div>
                                <div className="planet4 planet">
                                    <img src="/moon.png" alt="moon" />
                                    <img src="/earth.png" alt="earth" />
                                </div>
                                <div>
                                    <img className="planet5 planet" src="/mars.png" alt="mars" /></div>
                                <div>
                                    <img className="planet6 planet" src="/jupiter.png" alt="jupiter" /></div>
                                <div>
                                    <img className="planet7 planet" src="/saturn.png" alt="saturn" /></div>
                                <div>
                                    <img className="planet8 planet" src="/uran.png" alt="uran" /></div>
                            </div>
                        </div>

                        <div className="oceanmeow">
                            <img className="meowsWords" src="/meowsWords.png" alt="" />
                            <img className="oceanmeow" src="/oceancat.png" alt="oceancat" />
                        </div>
                    </div>
                </div>
            <BackgroundDown/>
        </>
    )
}

export default Quiz