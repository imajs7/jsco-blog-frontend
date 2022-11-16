import { Link } from "react-router-dom";
import styled from "styled-components";
import ITheme from "../../models/ITheme";

type StyleProps = {
    theme: ITheme
}

const MenuDiv = styled.div.attrs(( {theme} : StyleProps ) => theme)`
    height: 35px;
    display: flex;
    align-items: center;
    gap: 20px;

    a {
        display: inline-block;
        padding-inline: 10px;
        padding-block: 8px;
        transition: all 400ms ease;
    }
    
`;

const Mainmenu = () => {

    return (
        <MenuDiv>

            <Link to="/feeds">Feeds</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/authors">Authors</Link>
            <Link to="/notices">Notices</Link>
            
        </MenuDiv>
     );
}
 
export default Mainmenu;