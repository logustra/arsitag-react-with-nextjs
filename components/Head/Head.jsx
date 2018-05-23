import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultDescription = '';

const Head = (props) => (
    <NextHead>
        <meta charSet="UTF-8" />
        <title>{props.title || ''}</title>
        <meta name="description" content={props.description || defaultDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/static/images/logo.png" type="image/png" />
        <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
    </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
}

export default Head;
