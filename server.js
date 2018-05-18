const express = require('express');
const next = require('next');
const { parse } = require('url');
const getRoutes = require('./routes');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const routes = getRoutes();

app.prepare()
    .then(() => {
        const server = express();

        server.get('*', (req, res) => {
            const parseUrl = parse(req.url, true);
            const { pathname, query = {} } = parseUrl;
            const route = routes[pathname];
            if (route) {
                return app.render(req, res, route.page, query);
            }
            return handle(req, res);
        });

        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });
