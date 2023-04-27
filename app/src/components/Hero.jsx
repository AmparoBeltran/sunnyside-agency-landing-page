import { HeroStyled, Nav } from "./styles/Hero.styled"
import { useState } from "react"

export default function Hero() {
    const [open, setOpen] = useState(false)
    const handleOpenButton = () => {
        setOpen((state) => !state);
    }

    return (
        <HeroStyled>
            <div className="menu">
                <img src="/images/logo.svg" />

                <Nav className={open ? 'open' : ''}>
                    <button onClick={handleOpenButton}><img src="/images/icon-hamburger.svg" /></button>
                    <div className="menu-desktop dropdown-content">
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Projects</a>
                        <a className="contact" href="#">Contact</a>
                    </div>
                </Nav>

            </div>
            <div className="title">
                <h1>We are creatives</h1>
                <img src="/images/icon-arrow-down.svg" />
            </div>
        </HeroStyled>
    )
}