import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ITheme from "../../models/ITheme";
import { DarkModeContext } from "../../theme/DarkModeContextProvider";

type StyleProps = {
    theme: ITheme
}

const MenuDiv = styled.div.attrs(( {theme} : StyleProps ) => theme)`
    height: 45px;
    display: flex;
    align-items: center;
    gap: 20px;

    a {
        display: inline-block;
        padding-inline: 10px;
        padding-block: 8px;
        transition: all 400ms ease;
    }

    &.lightbackground {
        a {
            color: ${(theme) => theme.colors.darkcolor};

            &:hover {
                color: ${(theme) => theme.colors.accentcolor};
            }
        }

        button {
            color: ${(theme) => theme.colors.lightcolor};
            background-color:${(theme) => theme.colors.darkcolor};
        }
    }

    &.darkbackground {
        a {
            color: ${(theme) => theme.colors.lightcolor};

            &:hover {
                color: ${(theme) => theme.colors.accentcolor};
            }
        }

        button {
            color: ${(theme) => theme.colors.darkcolor};
            background-color:${(theme) => theme.colors.lightcolor};
        }
    }
    
`;

const Mainmenu = () => {

    const { darkMode } = useContext( DarkModeContext );

    return (
        <MenuDiv className={darkMode ? 'darkbackground' : 'lightbackground'}>

            <Link to="/">Feed</Link>
            <Link to="/myspace">Myspace</Link>
            <Link to="/authors">Authors</Link>
            <Link to="/notices">Notices</Link>
            
        </MenuDiv>
     );
}
 
export default Mainmenu;