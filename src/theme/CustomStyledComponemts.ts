import styled from "styled-components";
import ITheme from "../models/ITheme";

type StyleProps = {
    theme: ITheme
}
  
const Container = styled.div.attrs(( {theme} : StyleProps ) => theme)`

    width: min( 100%, ${(theme) => theme.container.bigscreen} );
    margin-inline: auto;
    box-shadow: 0 0 15px 5px rgb(0 0 0 / 0.4);

`;

export {
  Container
};