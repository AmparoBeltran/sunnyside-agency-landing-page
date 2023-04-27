import { FooterStyled } from "./styles/Footer.styled";

export default function Footer() {
    return (
        <FooterStyled>
            <img src="/images/logo-green.svg" />
            <div className="footer-nav">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Projects</a>
            </div>
            <div className="social">
                <a href="#"><img src="/images/icon-facebook.svg" /></a>
                <a href="#"><img src="/images/icon-instagram.svg" /></a>
                <a href="#"><img src="/images/icon-twitter.svg" /></a>
                <a href="#"><img src="/images/icon-pinterest.svg" /></a>
            </div>
        </FooterStyled>
    )
}