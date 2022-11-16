export default interface ITheme {

    fonts: {
        styles: {
            cursive: string,
            paragraph: string,
            heading: string
        },
        sizes: {
            small: string,
            base: string,
            medium: string,
            large: string,
            xlarge: string,
            xxlarge: string
        }
    },

    colors: {
        accentcolor: string,
        successcolor: string,
        errorcolor: string,
        lightcolor: string,
        darkcolor: string
    },

    padding: {
        tiny: string,
        small: string,
        base: string,
        medium: string,
        large: string,
        xlarge: string
    },

    margin: {
        tiny: string,
        small: string,
        base: string,
        medium: string,
        large: string,
        xlarge: string
    },

    screen: {
        mobile: string,
        tablet: string,
        desktop: string
    },

    container: {
        bigscreen: string,
        smallscreen: string
    }
};