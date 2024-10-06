import Header from "../components/Header";
import BackgroundDown from "../components/BackgroundDown";
import BackgroundUp from "../components/BackgroundUp";
function Info() {

    return(
        <>
            <BackgroundUp bgBig = "none"/>
            <Header color3 = "#29CBEE" />
                <div className="container">
                    <div className="homePage">
                        <div className="statelite">
                            <img src="/statelite.png" alt="statelite" />
                        </div>

                        <div className="profiles">
                            <div className="profile">
                                <div className="photo">
                                    <div className="profImage">
                                        <img src="" alt="" />
                                    </div>
                                </div>
                                <div className="description">
                                    <div className="descContainer">
                                        <p>Owner</p>
                                    </div>
                                </div>
                            </div>

                            <div className="profile">
                                <div className="photo">
                                    
                                </div>
                                <div className="description">

                                </div>
                            </div>

                            <div className="profile">
                                <div className="photo">
                                    
                                </div>
                                <div className="description">

                                </div>
                            </div>

                            <div className="profile">
                                <div className="photo">
                                    
                                </div>
                                <div className="description">

                                </div>
                            </div>

                            <div className="profile">
                                <div className="photo">
                                    
                                </div>
                                <div className="description">

                                </div>
                            </div>

                            <div className="profile">
                                <div className="photo">
                                    
                                </div>
                                <div className="description">

                                </div>
                            </div>
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

export default Info