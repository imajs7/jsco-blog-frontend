import { useContext } from "react";
import styled from "styled-components";
import ITheme from "../../models/ITheme";
import { Container } from "../../theme/CustomStyledComponemts";
import { DarkModeContext } from "../../theme/DarkModeContextProvider";
import theme from "../../theme/Theme";
import Mainmenu from "../Menus/MainMenu";
import ProfilePanel from "./ProfilePanel";
import Topbar from './Topbar';

type StyleProps = {
    theme: ITheme,
}

const darkHr = {
    border: '0', 
    height: '1px',
    background: `${theme.colors.lightcolor}`,
    backgroundImage: `linear-gradient(to right, ${theme.colors.darkcolor}, ${theme.colors.lightcolor}, ${theme.colors.darkcolor})`
}

const lightHr = {
    border: '0',
    height: '1px',
    background: `${theme.colors.darkcolor}`,
    backgroundImage: `linear-gradient(to right, ${theme.colors.lightcolor}, ${theme.colors.darkcolor}, ${theme.colors.lightcolor})`
}

const MainMenuDiv = styled.div.attrs(( {theme} : StyleProps ) => theme)`

    display: flex;
    justify-content: start;

    @media screen and (max-width: ${(theme) => theme.screen.mobile}){
        justify-content: center;
    }
`;

const Header = () => {

    const { darkMode } = useContext( DarkModeContext );

    return ( 
        <>
            <Topbar/>

            <ProfilePanel/>

            <Container>
                <MainMenuDiv>
                    <Mainmenu />
                </MainMenuDiv>
                <hr style={darkMode ? darkHr : lightHr} />
            </Container>
        </>
     );
}
 
export default Header;