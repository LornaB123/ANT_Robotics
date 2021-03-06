import { useState } from 'react'

function Banner() {
    const [isOpen, setIsOpen] = useState(false)

    function handleClick() {
        setIsOpen(!isOpen)
    }

    return (
        <div className={"banner"}>
            <img className= "banner__left-left-line" alt=""></img>
            <img className= "banner__left-right-line" alt=""></img>
            <img className= "banner__left-top-line" alt=""></img>

            <div className="banner__title-img" alt="blocks"></div>
            <h1 className="banner__title">ANT Robotics</h1>

            <img className= "banner__right-bottom-line" alt=""></img>
            <img className= "banner__right-left-line" alt=""></img>
            <img className= "banner__right-top-line" alt=""></img>

                <p className='banner__subtitle'>We simplify employment, team-up, and upgrade of transport robots in warehouses and factories.</p>
                <button 
                    className={`banner__video-button ${isOpen}`}
                    onClick={handleClick}>
                        Watch Video
                </button>
                <button 
                    className={`banner__learn-button ${isOpen}`}
                    onClick={handleClick}>
                        Learn More
                </button>
        </div>
    )
}

export default Banner;