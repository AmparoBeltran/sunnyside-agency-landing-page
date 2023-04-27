import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: hsl(168.17deg 55.79% 62.86%);
  color: ${({ theme }) => theme.colors.darkDesaturatedCyan};
  padding: 3em 2em;
  gap: 3em;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    & > img {
      width: 7vw;
    }
  }

  img {
    color: ${({ theme }) => theme.colors.darkModerateCyan};
  }

  .footer-nav {
    display: flex;
    gap: 3em;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      margin-bottom: 50px;
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.darkDesaturatedCyan};
    }
  }
  .social {
    display: flex;
    justify-content: space-evenly;
    gap: 2em;
  }
`;
