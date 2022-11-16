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

    height: 180px;
    display: flex;
    align-items: end;

    & > div {
        display: flex;
        align-items: end;
        gap: 30px;

        .profile-info {
            flex-grow: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            margin-bottom: 20px;

            @media screen and (max-width: ${(theme) => theme.screen.mobile}) {
                gap: 5px;
                flex-direction: column;
                justify-content: center;
                align-items: start;
                margin-bottom:5px;
            }

        }
    }

    .short-intro {
        * {
            color: #FFFFFF;
        }
    }

    @media screen and (max-width: ${(theme) => theme.screen.mobile}) {
        height: 160px;

        & > div {
            gap: 20px;
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
                <div className="display-picture">
                    <ProfilePicture/>
                </div>
                <div className="profile-info">
                    <div className="short-intro">
                        <h1>Anurag Jaisingh <span style={{fontSize: '20px'}}><Verified/></span></h1>
                        <p>Posts on socio-economic & political issues</p>
                    </div>
                    <div className="follow">
                        <ActionButton>Follow</ActionButton>
                    </div>
                </div>
            </Container>
        </ProfileDiv>
     );
}
 
export default ProfilePanel;