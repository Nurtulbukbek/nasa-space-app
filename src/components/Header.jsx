import { Link } from "react-router-dom"

function Header() {
    return(
        <>
            <div className="header">
                <Link to={'/Home'}>
                    <span className="headerText">Home</span>
                </Link>
                <Link to={'/Home'}>
                    <span className="headerText">Quiz</span>
                </Link>
                <Link to={'/Home'}>
                    <span className="headerText">Info</span>
                </Link>
            </div>
        </>
    )
}

export default Header