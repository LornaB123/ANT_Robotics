import { useState, useEffect } from 'react'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const [lightNav, setLightNav] = useState(false)

    function handleClick() {
        setIsOpen(!isOpen)
    }

    function handleScroll() {
        window.scrollY >= 546 ? setLightNav('nav_light') : setLightNav('')
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    })

    return (
        <nav className={`nav ${lightNav}`}>
            <p className="nav__logo">ANT Robotics</p>
            <p className='nav__link'>in</p>
            <button 
                className={`nav__button ${isOpen && 'nav__button_cross'}`}
                onClick={handleClick}
            />
            <ul className={`nav__list ${isOpen && 'nav__list_open'}`}>
                <li>Robots</li>
                <li>Benefits</li>
                <li>Gallery</li>
                <li>Will it work for Me?</li>
                <li>Team</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    )
}

export default NavBar