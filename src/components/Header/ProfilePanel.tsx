import styled from "styled-components";
import ITheme from "../../models/ITheme";
import apiConfig from '../../services/external/apiConfig';
import Verified from "../Verified/Verified";
import ProfilePicture from "./ProfilePicture";
import { Container } from '../../theme/CustomStyledComponemts';
import { ActionButton } from "../Buttons/ActionButton";
import { useEffect, useState } from "react";
import { getBannerObject } from "../../services/external/getSettings";

const IMG_URL = apiConfig.IMG_PATH;

type StyleProps = {
    theme: ITheme,
}

const ProfileDiv = styled.div.attrs(( {theme} : StyleProps ) => theme)`

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    min-height: 220px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 30px;

    @media screen and (max-width: ${(theme) => theme.screen.mobile}) {
        flex-direction: column;
        justify-content: center;
    }

    .profile__info {
        display: flex;
        flex-direction: column;
        gap: 10px;

        @media screen and (max-width: ${(theme) => theme.screen.mobile}) {
            align-items: center;
            justify-content: center;
        }

        .profile__title {
            width: (100%, 600px);
        }

        .profile__title,
        .profile__short-intro {
            color: #FFFFFF;
        }

        button {
            align-self: start;

            @media screen and (max-width: ${(theme) => theme.screen.mobile}) {
                align-self: center;
            }
        }
    }
`;

const ProfilePanel = () => {

    const [ appBanner, setAppBanner ] = useState<String>( 'abcd.jpg' );

    useEffect(
        () => {
            const getBanner = async () => {
                const bannerObject = await getBannerObject();
                setAppBanner( bannerObject.value );
            };

            getBanner();
        }, []
    );

    return ( 
        <ProfileDiv style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("${IMG_URL}/${appBanner}")`,
        }} >

                <div className="profile__picture">
                    <ProfilePicture/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">Anurag Jaisingh <Verified/></h1>
                    <p className="profile__short-intro">Posts on socio-economic & political issues</p>
                    <ActionButton>Follow</ActionButton>
                </div>

        </ProfileDiv>
     );
}
 
export default ProfilePanel;