import React from 'react';
import styled from 'styled-components';
import ITheme from '../../models/ITheme';

type StyleProps = {
    theme: ITheme,
}

const LogoDiv = styled.div.attrs(( {theme} : StyleProps ) => theme)`
    border-radius: 20px 3px;
    outline-offset: 1px;
    outline: 2px solid ${(theme) => theme.colors.accentcolor};
    background-color: ${(theme) => theme.colors.accentcolor};
    color: ${(theme) => theme.colors.lightcolor};
    padding:  ${(theme) => theme.padding.tiny} ${(theme) => theme.padding.small};

    font-weight: 700;
`;

function Logo() {
  return (
    <LogoDiv>Oped</LogoDiv>
  )
}

export default Logo;