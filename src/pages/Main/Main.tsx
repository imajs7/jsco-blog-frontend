import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Mainmenu from '../../components/Menus/MainMenu';
import Sidebar from '../../components/Sidebar/Sidebar';
import { DarkModeContext } from '../../theme/DarkModeContextProvider';
import Home from '../Home/Home';

const MainDiv = styled.div`
    display: flex;
    gap: 20px;

    .sidebar {
        width: 250px;
    }

    .main {
        width: calc(100% - 250px);
    }
`;

function Main() {

    const { darkMode } = useContext( DarkModeContext );
    
  return (
    <MainDiv className={darkMode ? 'darkbackground' : 'lightbackground'}>
        
        <div className="sidebar">
            <Sidebar/>
        </div>

        <div className="main">

            <Mainmenu />

            <hr />
            
            <Routes>

                <Route index element={<Home/>} />

                <Route path="/articles" element={<p>Articles</p>} />

                <Route path="/poetry" element={<p>Poetry</p>} />

                <Route path="/stories" element={<p>Stories</p>} />

                <Route path="/about" element={<p>About</p>} />

                <Route path="/contact" element={<p>Contact</p>} />

            </Routes>


        </div>
    </MainDiv>
  )
}

export default Main