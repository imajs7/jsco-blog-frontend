import styled from "styled-components";
import ITheme from "../../models/ITheme";
import { Link } from 'react-router-dom';

type StyleProps = {
    theme: ITheme,
    backcolor: string,
    forecolor: string,
    padding: string,
    margin: string,
    size: string
}

export const LinkButton = styled(Link).attrs(( props: StyleProps ) => props)`
    border: none;
    appearance: none;
    display: inline-block;
    border-radius: 2px;
    font-weight: 500;
    font-size: ${(props) => props.size ? props.size : props.theme.fonts.sizes.base};
    padding: ${(props) => props.padding ? props.padding : props.theme.padding.small};
    margin: ${(props) => props.margin ? props.margin : props.theme.margin.tiny};
    cursor: pointer;
    text-shadow: 0 0.04em 0.04em rgba(255, 255, 255, 0.253);
    transition: all 0.2s;

    &:active {
        transform: scale(0.975);
    }

`;