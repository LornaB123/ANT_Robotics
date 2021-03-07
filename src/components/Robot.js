import robot from '../images/OTTO100 1.png'

function Robot() {
    return (
        <div className="robot">
            <div className="robot__container">
                <div className="robot__container-image">
                    <img className="robot__image" src={robot} alt="robot image"/>
                    <div className="robot__wrapper-info">
                        <h2>OTTO 100 (pending)</h2>
                        <p><span>Max payload: </span>220 lbs (100 kg)</p>
                        <p><span>Size: </span>740 x 550 x 310 mm</p>
                        <p><span>Max speed: </span>4.3 mph</p>
                        <p><span>Running time: </span>4 hrs or 9 mi</p>
                        <p><span>Charging time: </span>1.2 hrs (0-80%: 0.75 hrs)</p>
                        <button className="button">Get more info</button>
                    </div>
                    <button className="button arrow robot__button robot__button_next robot__button_fade" />
                    <button className="button arrow robot__button" />
                </div>
                <div className="robot__container-description">
                    <h2>Wide choice of transport robots</h2>
                    <p>Few words about robots. Lorem ipsum, abra-kadabra, bla-bla-bla, information about robots here.</p>
                    <p>Some facts here & below</p>
                    <p>Flexible</p>
                    <p>Customizable</p>
                </div>
            </div>
        </div>
    )
}

export default Robot