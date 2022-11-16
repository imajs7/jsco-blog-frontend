import styled from "styled-components";
import ITheme from "../../models/ITheme";

import apiConfig from '../../services/external/apiConfig';

const IMG_URL = apiConfig.IMG_PATH;

type StyleProps = {
    theme: ITheme,
}


const DisplayPicture = styled.div.attrs(( {theme} : StyleProps ) => theme)`
    height: 180px;
    aspect-ratio: 1;
    border-radius: 1000px;
    border: 2px solid ${(theme) => theme.colors.accentcolor};
    padding: 3px;
    overflow: hidden;
    margin-bottom: -25%;

    img {
        height: 100%;
        width: 100%;
        border-radius: 91px;
        object-fit: cover;
    }

    @media screen and (max-width: ${(theme) => theme.screen.mobile}) {
        height: 130px;
    }
`;

const ProfilePicture = () => {
    return ( 
        <DisplayPicture>
            <img src={`${IMG_URL}/abcd.jpg`} alt="dp" />
        </DisplayPicture>
     );
}
 
export default ProfilePicture;