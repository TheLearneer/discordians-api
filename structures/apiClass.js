const express = require('express');
const fs = require('fs-nextra');

module.exports = class pokemonAPI {

    constructor(port = process.env.PORT || 3000) {
        // the port to start the web server
        this.port = port;
        // the express App and router
        this.app = express();
        this.router = express.Router(); // eslint-disable-line
    }

    async loadRoutes() {
        const files = await fs.readdir('./routes');
        files.map(file => { // eslint-disable-line
            try {
                if (file.endsWith('.js')) {
                    const Route = require(`../routes/${file}`);
                    const routee = new Route(this.router, this.app);
                    this.app.use(routee.base ? `/${routee.base}` : '', routee.run());
                }
            } catch (error) { console.log(error.message); }
        });
    }

    async start() {
        await this.loadRoutes();
        this.app.listen(this.port, () => {
            console.log(`App is ready on port ${this.port} !!`);
        });
    }

};
