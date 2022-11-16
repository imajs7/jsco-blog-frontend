import styled, { keyframes } from 'styled-components';
import ITheme from '../../models/ITheme';

type StyleProps = {
    theme: ITheme
}

const loadingKeyframes = keyframes`
    0% {
        top: 28px;
        left: 28px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: -1px;
        left: -1px;
        width: 58px;
        height: 58px;
        opacity: 0;
    }
`;

const LoadingDiv = styled.div.attrs(( {theme} : StyleProps ) => theme)`
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;

    div {
        position: absolute;
        background: ${(theme) => theme.colors.accentcolor};
        opacity: 1;
        border-radius: 50%;
        animation: ${loadingKeyframes} 1.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;

        &:nth-child(2) {
            animation-delay: -0.7s;
        }
    }
`;

const Loading = () => {
    return ( 
        <LoadingDiv className="loading">
            <div></div>
            <div></div>
        </LoadingDiv>
     );
}
 
export default Loading;