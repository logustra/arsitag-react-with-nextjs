import { injectGlobal } from 'styled-components';
import media from '../Utils/Breakpoint';

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

    .card-small {
        margin: 65px auto 0 auto;
        width: 500px;
        color: var(--gray);
        border: 0;
        box-shadow: 0 2px 4px 0 #e6e7e8;
        padding: 50px;

        .card-title {
            font-size: 30px;
        }

        @media only screen and (max-width: 576px) {
            width: 100%;
        }
    }

    .navbar {

        .input-group-append {
            display: block;
            padding: 5px 15px 0 15px;
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
