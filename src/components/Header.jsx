import { Link } from "react-router-dom"

function Header(props) {
    return(
        <>
            <div className="header">
                <Link to={'/'} style={{color: props.color}}>
                    <span className="headerText" style={{color: props.color1}}>HOME</span>
                </Link>
                <Link to={'/Quiz'} >
                    <span className="headerText" style={{color: props.color2}}>QUIZ</span>
                </Link>
                <Link to={'/'} style={{color: props.color}}>
                    <span className="headerText" style={{color: props.color3}}>INFO</span>
                </Link>
            </div>
        </>
    )
}

export default Header