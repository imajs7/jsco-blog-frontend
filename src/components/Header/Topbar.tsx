import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ITheme from "../../models/ITheme";
import { Container } from "../../theme/CustomStyledComponemts";
import { DarkModeContext } from "../../theme/DarkModeContextProvider";
import Logo from "../Logo/Logo";

type StyleProps = {
    theme: ITheme,
}

const TopbarDiv = styled.div.attrs(( {theme} : StyleProps ) => theme)`

    & > div {
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    }

    .rightControls {

        height: 100%;
        display: flex;
        
        & > a,
        & > .faIcon {
            cursor: pointer;
            font-weight: 500;
            padding-block: 9px;
            padding-inline: 15px;
            transition: all 300ms ease;
        }
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

const Topbar = () => {

    const { darkMode, darModeHandler } = useContext( DarkModeContext );

    const clickHandler = () => {
        darModeHandler( null );
    };

    useEffect(
        () => {
            if(darkMode) {
                document.body.classList.remove( 'lightbackground' );
                document.body.classList.add( 'darkbackground' );
            } else {
                document.body.classList.remove( 'darkbackground' );
                document.body.classList.add( 'lightbackground' );
            }
            
        },
        [darkMode]
    );

    return ( 
        <TopbarDiv className={darkMode ? 'darkbackground' : 'lightbackground'}>
            <Container>
                <Logo/>
                <div className="rightControls">
                    { 
                        darkMode ? (
                            <FontAwesomeIcon 
                                icon={faSun} 
                                onClick={clickHandler} 
                                className='faIcon'
                            />
                        ) : (
                            <FontAwesomeIcon 
                                icon={faMoon} 
                                onClick={clickHandler}
                                className='faIcon'    
                            />
                        )
                    }
                    <Link to="/abcd">Settings</Link>
                    <Link to="/efgh">Signout</Link>
                </div>
            </Container>
        </TopbarDiv>
     );
}
 
export default Topbar;