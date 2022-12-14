import { useEffect, useState } from "react";
import styled from "styled-components";
import ITheme from "../../models/ITheme";

import apiConfig from '../../services/external/apiConfig';
import { getUserObject } from "../../services/external/getUser";

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

    img {
        height: 100%;
        width: 100%;
        border-radius: 1000px;
        object-fit: cover;
    }

    @media screen and (max-width: ${(theme) => theme.screen.mobile}) {
        height: 130px;
    }
`;

const ProfilePicture = () => {

    const [ profileImg, setProfileImg ] = useState<String>( 'abcd.jpg' );

    useEffect(
        () => {
            const getProfileImage = async () => {
                const userObject = await getUserObject();
                setProfileImg( userObject );
            };

            getProfileImage();
        }, []
    );

    return ( 
        <DisplayPicture>
            <img src={`${IMG_URL}/${profileImg}`} alt="dp" />
        </DisplayPicture>
     );
}
 
export default ProfilePicture;