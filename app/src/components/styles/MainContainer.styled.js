import styled from "styled-components";

export const MainContainerStyled = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  p {
    color: ${({ theme }) => theme.colors.darkGrayishBlue};
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    img:nth-of-type(1) {
      grid-column: 2/3;
    }
    .copy:nth-of-type(1) {
      grid-column: 1/2;
      grid-row-start: 1;
    }
  }

  img {
    width: 100%;
  }

  .copy {
    padding: 0 1em;
    margin: 60px 0;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      margin: 0;
      display: flex;
      flex-direction: column;
      text-align: left;
      padding: 6em;
      gap: 4em;

      h1 {
        font-size: 4em;
        margin: 0;
      }

      p {
        margin: 0;
        font-size: 2em;
        line-height: 2em;
      }
      a {
        font-size: 2em;
      }
      .underline {
        width: max-content;
      }
    }

    a {
      text-transform: uppercase;
      font-family: "Fraunces", serif;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.veryDarkDesaturatedBlue};
    }
    .underline {
      text-decoration: none;
      position: relative;
    }
    .underline::after {
      position: absolute;
      content: "";
      height: 8px;
      bottom: 0;
      border-radius: 20px;
      margin: 0 auto;
      left: 0;
      right: 0;
      width: 100%;
      background-color: hsl(50.88deg 100% 49.02% / 40%);
      z-index: -1;
    }

    .underline:hover::after {
      background-color: ${({ theme }) => theme.colors.yellow};
    }

    .underline.red::after {
      background-color: hsl(6.75deg 98.69% 70% / 34%);
    }
    .underline.red:hover::after {
      background-color: ${({ theme }) => theme.colors.softRed};
    }
  }

  .card-container {
    position: relative;
    display: flex;

    .copy {
      position: absolute;
      bottom: 0em;
      .photography-copy {
        color: ${({ theme }) => theme.colors.darkBlue};
      }
      .design-copy {
        color: ${({ theme }) => theme.colors.darkDesaturatedCyan};
      }
      @media (min-width: ${({ theme }) => theme.desktop}) {
        text-align: center;
        padding-top: 0;
        bottom: unset;
        top: 72%;
      }
    }
  }
`;
