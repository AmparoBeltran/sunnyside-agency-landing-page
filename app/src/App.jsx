import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/GlobalStyles";
import Hero from "./components/Hero";
import MainContainer from "./components/MainContainer";
import Testimonials from "./components/Testimonials";
import GridImages from "./components/GridImages";
import Footer from "./components/Footer";

const theme = {

  colors: {

    // Primary

    softRed: 'hsl(7, 99%, 70%)',
    yellow: 'hsl(51, 100%, 49%)',
    darkDesaturatedCyan: 'hsl(167, 40%, 24%)', // (graphic design text)
    darkBlue: 'hsl(198, 62%, 26%)', //(photography text)
    darkModerateCyan: 'hsl(168, 34%, 41%)', //(footer)

    // Neutral

    veryDarkDesaturatedBlue: 'hsl(212, 27%, 19%)',
    veryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
    darkGrayishBlue: 'hsl(232, 10%, 55%)',
    grayishBlue: 'hsl(210, 4%, 67%)',
    white: 'hsl(0, 0%, 100%)',

  },

  desktop: '1440px',

}

//font: 'Fraunces', serif,

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Hero />
      <MainContainer />
      <Testimonials />
      <GridImages />
      <Footer />
    </ThemeProvider>
  )
}

export default App