import styled from "styled-components";

export const TestimonialsStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 3em;
  padding: 3em 2em;

  .testimonial-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3em;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    .testimonial-wrapper {
      flex-direction: row;
      width: 70vw;
    }
    article {
      display: flex;
      flex-direction: column;
      gap: 2em;
      align-items: center;
      padding: 1em;
    }
  }

  h1 {
    margin: 0;
    font-size: 1.2em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.grayishBlue};

    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 2em;
    }
  }

  img {
    width: 70px;
    border: none;
    border-radius: 100%;

    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 90px;
    }
  }

  p {
    line-height: 2em;
    color: ${({ theme }) => theme.colors.veryDarkGrayishBlue};

    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 1.4em;
      line-height: 1.5em;
    }
  }

  h6 {
    font-weight: 700;
    font-size: 1em;
    margin: 0;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 1.6em;
      margin: 10px;
    }
  }

  small {
    color: ${({ theme }) => theme.colors.grayishBlue};
    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 1.2em;
    }
  }
`;
