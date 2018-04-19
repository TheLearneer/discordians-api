const translator = require('../functions/translate');
const Route = require('./route');

class TranslateRoute extends Route {

    constructor(...args) {
        super(...args);

        this.base = 'translate';
        this.translate = translator;
    }

}

module.exports = TranslateRoute;
