import styled from "styled-components";

export const HeroStyled = styled.header`
  background-image: url("/images/mobile/image-header.jpg");
  height: 62vh;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 2em 1em 0;
  display: flex;
  flex-direction: column;
  gap: 2em;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    gap: 6em;
    padding: 3em 3em 0;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    background-image: url("/images/desktop/image-header.jpg");
    background-size: cover;
    min-height: 100vh;
  }

  .menu {
    display: flex;
    justify-content: space-between;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      img {
        width: 10vw;
        height: 4vh;
      }
    }
  }

  .title {
    h1 {
      color: ${({ theme }) => theme.colors.white};
      font-size: 2.6em;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 5.5em;
        margin-bottom: 2em;
      }
    }

    img {
      width: 13%;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        width: 3%;
      }
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;

  .menu-desktop {
    display: none;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      display: flex;
      gap: 2em;
    }
  }

  &.open > .dropdown-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    gap: 0.5em;
    position: absolute;
    padding: 2.5em 1em;
    z-index: 1;
    right: 0;
    top: 4em;
    width: 80vw;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      display: none;
    }

    &::before {
      content: "";
      width: 0;
      height: 0;
      position: absolute;
      top: -15px;
      right: -15px;
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      border-bottom: 30px solid ${({ theme }) => theme.colors.white};
      transform: rotate(-90deg);
    }
  }

  .dropdown-content a {
    font-size: 0.9em;
    color: ${({ theme }) => theme.colors.darkGrayishBlue};
    padding: 1.5em 2em;
    text-decoration: none;
    display: block;

    &.contact {
      color: ${({ theme }) => theme.colors.veryDarkDesaturatedBlue};
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.4em;
      padding: 1em 1em;
      &.contact {
        color: ${({ theme }) => theme.colors.veryDarkDesaturatedBlue};
      }
    }
  }

  & .contact {
    font-family: "Fraunces", serif;
    font-weight: 700;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.yellow};
    border-radius: 50px;
    width: max-content;
    padding: 2em;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
  button {
    border: none;
    background-color: transparent;
    padding: 0;

    @media (min-width: ${({ theme }) => theme.desktop}) {
      display: none;
    }
  }
`;
