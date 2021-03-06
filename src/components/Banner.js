import { useState } from 'react'

function Banner() {
    const [isOpen, setIsOpen] = useState(false)

    function handleClick() {
        setIsOpen(!isOpen)
    }

    return (
        <div className={"banner"}>
            <div className="banner__title-img" alt="logo"></div>
            <h1 className="banner__title">ANT Robotics</h1>
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