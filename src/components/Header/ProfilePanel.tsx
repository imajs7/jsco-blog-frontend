import styled from "styled-components";
import ITheme from "../../models/ITheme";
import apiConfig from '../../services/external/apiConfig';
import Verified from "../Verified/Verified";
import ProfilePicture from "./ProfilePicture";
import { Container } from '../../theme/CustomStyledComponemts';
import { ActionButton } from "../Buttons/ActionButton";

const IMG_URL = apiConfig.IMG_PATH;

type StyleProps = {
    theme: ITheme,
}

const ProfileDiv = styled.div.attrs(( {theme} : StyleProps ) => theme)`

    & > div {
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

const bannerImage = {
    background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("${IMG_URL}/abcd.jpg")`,

    backgroundPosition: 'center center',
    backgroundSize: 'cover'
};

const ProfilePanel = () => {
    return ( 
        <ProfileDiv style={bannerImage}>
            <Container>
                <div className="profile__picture">
                    <ProfilePicture/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">Anurag Jaisingh <Verified/></h1>
                    <p className="profile__short-intro">Posts on socio-economic & political issues</p>
                    <ActionButton>Follow</ActionButton>
                </div>
            </Container>
        </ProfileDiv>
     );
}
 
export default ProfilePanel;