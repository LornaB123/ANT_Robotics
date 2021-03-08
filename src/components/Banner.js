import { useState } from 'react'

function Banner() {
    const [isOpen, setIsOpen] = useState(false)

    function handleClick() {
        setIsOpen(!isOpen)
    }

    return (
      <div className={"banner"}>
        <div className="banner__column-1">
          <img className="banner__left-left-line" alt=""></img>
          <img className="banner__left-left-square" alt=""></img>
          <img className="banner__left-right-line" alt=""></img>
          <img className="banner__left-right-square" alt=""></img>
          <img className="banner__left-top-line" alt=""></img>
          <img className="banner__left-top-square" alt=""></img>
        </div>

        <div className="banner__column-2">
          <div className="banner__title-img" alt="blocks"></div>
          <img className="banner__orange-title-block" alt=""></img>
          <img className="banner__title-image-top-square" alt=""></img>
          <img className="banner__title-image-bottom-block" alt=""></img>

          <h1 className="banner__title">ANT Robotics</h1>
          <p className="banner__subtitle">
            We simplify employment, team-up, and upgrade of transport robots in
            warehouses and factories.
          </p>
          <div className="banner__button-container">
          <button
            className={`banner__video-button ${isOpen}`}
            onClick={handleClick}
          >
            Watch Video
          </button>
          <button
            className={`banner__learn-button ${isOpen}`}
            onClick={handleClick}
          >
            Learn More
          </button>
          </div>
        </div>

        <div className="banner__column-3">
          <img className="banner__right-bottom-line" alt=""></img>
          <img className="banner__right-bottom-square" alt=""></img>
          <img className="banner__right-left-line" alt=""></img>
          <img className="banner__right-left-square" alt=""></img>
          <img className="banner__right-top-line" alt=""></img>
          <img className="banner__right-top-square" alt=""></img>
        </div>
      </div>
    );
}

export default Banner;