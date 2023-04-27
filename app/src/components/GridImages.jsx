import { GridImagesStyled } from "./styles/GridImages.styled";

export default function GridImages() {
    return (
        <GridImagesStyled>
            <img className="mobile" src="/images/mobile/image-gallery-milkbottles.jpg" />
            <img className="desktop" src="/images/desktop/image-gallery-milkbottles.jpg" />

            <img className="mobile" src="/images/mobile/image-gallery-orange.jpg" />
            <img className="desktop" src="/images/desktop/image-gallery-orange.jpg" />


            <img className="mobile" src="/images/mobile/image-gallery-cone.jpg" />
            <img className="desktop" src="/images/desktop/image-gallery-cone.jpg" />


            <img className="mobile" src="/images/mobile/image-gallery-sugar-cubes.jpg" />
            <img className="desktop" src="/images/desktop/image-gallery-sugarcubes.jpg" />


        </GridImagesStyled>
    )
}