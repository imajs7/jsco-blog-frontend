import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ITheme from "../../models/ITheme";
import { DarkModeContext } from "../../theme/DarkModeContextProvider";
import Logo from "../Logo/Logo";

type StyleProps = {
    theme: ITheme,
}

const TopbarDiv = styled.div.attrs(( {theme} : StyleProps ) => theme)`

    height: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

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

`;

const Topbar = () => {

    const { darkMode, darModeHandler } = useContext( DarkModeContext );

    const clickHandler = () => {
        darModeHandler( null );
    };

    return ( 
        <TopbarDiv className={darkMode ? 'lightbackground' : 'darkbackground'}>

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

        </TopbarDiv>
     );
}
 
export default Topbar;