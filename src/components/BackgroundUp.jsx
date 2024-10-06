
function BackgroundUp(props) {
    return(
        <>
            <div className="bgUp">
                <img src="/space.png" alt="" className="bgSpace" style={{display: props.bgSmall}}/>
                <img src="/bigSpace.png" alt="" className="bgBigSpace" style={{display: props.bgBig}}/>
            </div>
        </>
    )
}

export default BackgroundUp