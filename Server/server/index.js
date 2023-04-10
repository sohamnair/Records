const record = require('./server');

const listen = (app) => {
    app.use('/', record);

    app.use('*', (req, res) => {
        res.status(404).send('Oops, Page not found');
    });
};

module.exports = listen;
