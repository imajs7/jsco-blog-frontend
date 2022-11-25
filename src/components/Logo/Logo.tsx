import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ITheme from '../../models/ITheme';
import { DarkModeContext } from '../../theme/DarkModeContextProvider';

type StyleProps = {
    theme: ITheme,
}

const LogoDiv = styled.div.attrs(( {theme} : StyleProps ) => theme)`
 
    padding:  ${(theme) => theme.padding.tiny} ${(theme) => theme.padding.small};

    font-weight: 700;
`;

function Logo() {
  const { darkMode } = useContext( DarkModeContext );
  return (
    <LogoDiv className={darkMode ? 'lightbackground' : 'darkbackground'}>
      <Link to="/">Blogr</Link>
    </LogoDiv>
  )
}

export default Logo;