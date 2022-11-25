import theme from './theme/Theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/GlobalStyles';
import Header from './components/Header/Header';
import DarkModeProvider from './theme/DarkModeContextProvider';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import { Container } from './theme/CustomStyledComponemts';

function App() {

  return (

    <ThemeProvider theme={theme}>

        <GlobalStyles/>

        <DarkModeProvider>
        
          <div className='App'>

              <Container>
                <Header/>
                <Main/>
                <Footer/>
              </Container>

          </div>

        </DarkModeProvider>

      </ThemeProvider>

  );


}

export default App;
