import { injectGlobal } from 'styled-components';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Lato');

    body {
        font-family: 'Lato', sans-serif;
        font-size: 14px;
        background: var(--smoke);
    }

    p {
        margin: 0;
    }

    a {
        color: var(--gray);
    }

    .btn-line-danger {
        background: var(--white);
        border: 1px solid var(--danger);
        color: var(--danger);

        &:hover,
        &:focus,
        &:active {
            background: var(--white) !important;
            color: var(--danger) !important;
        }
    }

    .navbar {

        .input-group-append {
            display: block;
            padding 5px 15px 0 15px;
            border: 1px solid #ced4da;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }

    [class^=rate-] {
        font-size: 24px;
        letter-spacing: 0;
        line-height: 35px;
        color: var(--darksmoke);
    }

    .rate-1 {
        span {
            &:nth-of-type(1) {
                color: var(--danger);
            }
        }
    }

    .rate-2 {
        span {
            &:nth-of-type(1),
            &:nth-of-type(2) {
                color: var(--danger);
            }
        }
    }

    .rate-3 {
        span {
            &:nth-of-type(1),
            &:nth-of-type(2),
            &:nth-of-type(3) {
                color: var(--danger);
            }
        }
    }

    .rate-4 {
        span {
            &:nth-of-type(1),
            &:nth-of-type(2),
            &:nth-of-type(3),
            &:nth-of-type(4) {
                color: var(--danger);
            }
        }
    }

    .rate-5 {
        span {
            &:nth-of-type(1),
            &:nth-of-type(2),
            &:nth-of-type(3),
            &:nth-of-type(4),
            &:nth-of-type(5) {
                color: var(--danger);
            }
        }
    }
`
