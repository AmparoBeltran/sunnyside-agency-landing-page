import { MainContainerStyled } from "./styles/MainContainer.styled";

export default function MainContainer() {
    return (
        <MainContainerStyled>
            <img src="/images/mobile/image-transform.jpg" />
            <div className="copy">
                <h1>Transform your brand</h1>
                <p>We are a full-service creative agency specializing in helping brands grow fast.
                    Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <a className="underline" href="#">Learn more</a>
            </div>

            <img src="/images/mobile/image-stand-out.jpg" />
            <div className="copy">
                <h1>Stand out to the right audience</h1>
                <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
                </p>
                <a className="underline red" href="#">Learn more</a>

            </div>
            <div className="card-container">
                <img src="/images/mobile/image-graphic-design.jpg" />
                <div className="copy">
                    <h1 className="design-copy">Graphic design</h1>
                    <p className="design-copy">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>

                </div>
            </div>
            <div className="card-container">
                <img src="/images/mobile/image-photography.jpg" />
                <div className="copy">
                    <h1 className="photography-copy">Photography</h1>
                    <p className="photography-copy">  Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                    </p>

                </div>
            </div>
        </MainContainerStyled>
    )
}