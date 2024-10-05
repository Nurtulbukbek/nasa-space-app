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
                                generation about PACE mission launched by NASA. 
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