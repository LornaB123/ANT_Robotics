import { useState, useEffect } from 'react'

function NavBar(props) {
    const { bannerRef, 
            productRef,
            benefitsRef,
            galleryRef,
            customerBenefitsRef,
            teamRef} = props
    const [isOpen, setIsOpen] = useState(false)
    const [lightNav, setLightNav] = useState('')

    function handleClick() {
        setIsOpen(!isOpen)
    }

    function handleScroll() {
        window.scrollY >= bannerRef.current.offsetHeight - 60 ? setLightNav('nav_light') : setLightNav('')
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    })

    return (
        <nav className={`nav ${lightNav}`}>
            <p 
                className="nav__logo" 
                onClick={() => bannerRef.current.scrollIntoView()}
                >
                    ANT Robotics
                </p>
            <p className='nav__link'>in</p>
            <button 
                className={`nav__button ${isOpen && 'nav__button_cross'}`}
                onClick={handleClick}
            />
            <ul className={`nav__list ${isOpen && 'nav__list_open'}`}>
                <li onClick={() => productRef.current.scrollIntoView()}>Robots</li>
                <li onClick={() => benefitsRef.current.scrollIntoView()}>Benefits</li>
                <li onClick={() => galleryRef.current.scrollIntoView()}>Gallery</li>
                <li onClick={() => customerBenefitsRef.current.scrollIntoView()}>Will it work for Me?</li>
                <li onClick={() => teamRef.current.scrollIntoView()}>Team</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    )
}

export default NavBar