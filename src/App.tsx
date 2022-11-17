import theme from './theme/Theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/GlobalStyles';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import DarkModeProvider from './theme/DarkModeContextProvider';
import Footer from './components/Footer/Footer';

function App() {

  return (

    <ThemeProvider theme={theme}>

        <GlobalStyles/>

        <DarkModeProvider>
        
          <div className="App">

              <Header/>

                <Routes>

                  <Route index element={<Home/>} />

                  <Route path="/articles" element={<p>Articles</p>} />

                  <Route path="/poetry" element={<p>Poetry</p>} />

                  <Route path="/stories" element={<p>Stories</p>} />

                  <Route path="/about" element={<p>About</p>} />

                  <Route path="/contact" element={<p>Contact</p>} />

                </Routes>

              <Footer/>

          </div>

        </DarkModeProvider>

      </ThemeProvider>

  );


}

export default App;
