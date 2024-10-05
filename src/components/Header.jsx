import { Link } from "react-router-dom"

function Header() {
    return(
        <>
            <div className="header">
                <Link to={'/Home'}>
                    <span className="headerText">HOME</span>
                </Link>
                <Link to={'/Home'}>
                    <span className="headerText">QUIZ</span>
                </Link>
                <Link to={'/Home'}>
                    <span className="headerText">INFO</span>
                </Link>
            </div>
        </>
    )
}

export default Header