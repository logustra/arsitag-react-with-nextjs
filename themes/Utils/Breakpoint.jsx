import { css } from 'styled-components';

/*
{properti}{breakpoint} without available space
{properti}{breakpoint}_{properti}{breakpoint} with available space

properti
mn : min-width;
mx : max-width;

breakpoint
xs : xtra small     = 576px;
sm : small          = 576px;
md : medium         = 768px;
lg : large          = 992px ;
xl : xtra large     = 1200px;

example

${media.mnsm`
    your css
`}

that means your css is used at screen resolution 576px until large devices

${media.mnsm_mxlg`
    your css
`}

that means your css is used at screen resolution 576px until 991px
and have available space at screen resolution 992px until large devices

*/

const sizes = {
    small: 576,
    medium: 768,
    large: 992,
    xlarge: 1200,
}

function xs(...args) {
    return css`
        @media only screen and (max-width: ${sizes.small}px) {
            ${css(...args)}
        }
    `
}

function sm(...args) {
    return css`
        @media only screen and (min-width: ${sizes.small}px) and (max-width: ${sizes.medium - 1}px) {
            ${css(...args)}
        }
    `
}

function mnsm(...args) {
    return css`
        @media only screen and (min-width: ${sizes.small}px) {
            ${css(...args)}
        }
    `
}

function mnsm_mxlg(...args) {
    return css`
        @media only screen and (min-width: ${sizes.small}px) and (max-width: ${sizes.large - 1}px) {
            ${css(...args)}
        }
    `
}

function mnsm_mxxl(...args) {
    return css`
        @media only screen and (min-width: ${sizes.small}px) and (max-width: ${sizes.xlarge - 1}px) {
            ${css(...args)}
        }
    `
}

function md(...args) {
    return css`
        @media only screen and (min-width: ${sizes.medium}px) and (max-width: ${sizes.large - 1}px) {
            ${css(...args)}
        }
    `
}

function mnmd(...args) {
    return css`
        @media only screen and (min-width: ${sizes.medium}px) {
            ${css(...args)}
        }
    `
}

function mnmd_mxxl(...args) {
    return css`
        @media only screen and (min-width: ${sizes.medium}px) and (max-width: ${sizes.xlarge - 1}px) {
            ${css(...args)}
        }
    `
}

function lg(...args) {
    return css`
        @media only screen and (min-width: ${sizes.large}px) and (max-width: ${sizes.xlarge - 1}px) {
            ${css(...args)}
        }
    `
}

function mnlg(...args) {
    return css`
        @media only screen and (min-width: ${sizes.large}px) {
            ${css(...args)}
        }
    `
}

function xl(...args) {
    return css`
        @media only screen and (min-width: ${sizes.xlarge}px) {
            ${css(...args)}
        }
    `
}

const media = {
    xs,
    sm,
    mnsm,
    mnsm_mxlg,
    mnsm_mxxl,
    md,
    mnmd,
    mnmd_mxxl,
    lg,
    mnlg,
    xl,
}

export default media;

