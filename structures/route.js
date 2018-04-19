const miscFunctions = require('../functions/miscs');

class Route {

    constructor(router, app) {
        this.router = router;
        this.app = app;

        // functions so that wont have to call it in every route file
        this.functions = miscFunctions;
    }

    usage() {
        this.router.get('/hello', (req, res) => {
            res.send('Hello world.');
        });
    }

    run() {
        this.usage();
        return this.router;
    }

}

module.exports = Route;
