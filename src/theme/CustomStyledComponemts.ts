import styled from "styled-components";
import ITheme from "../models/ITheme";

type StyleProps = {
    theme: ITheme
}
  
const Container = styled.div.attrs(( {theme} : StyleProps ) => theme)`

    width: min( 100% - 20px, ${(theme) => theme.container.bigscreen} );
    margin-inline: auto;

`;

export {
  Container
};