import styled from "styled-components";
import ITheme from "../../models/ITheme";

type StyleProps = {
    theme: ITheme,
}

const FooterDiv = styled.div.attrs(( {theme} : StyleProps ) => theme)`

    h4 {
        text-align: center;
        height: 45px;
        line-height: 45px;
    }

`;

const Footer = () => {
    return ( 
        <>
            <FooterDiv>
                <h4>&copy; copyright 2022 Blog</h4>
            </FooterDiv>
        </>
     );
}
 
export default Footer;