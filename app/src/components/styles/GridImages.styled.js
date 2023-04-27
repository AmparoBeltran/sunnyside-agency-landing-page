import styled from "styled-components";

export const GridImagesStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .desktop {
    display: none;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    .mobile {
      display: none;
    }
    .desktop {
      display: block;
    }
  }

  img {
    width: 50vw;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 25vw;
    }
  }
`;
