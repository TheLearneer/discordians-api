const Route = require('../structures/route');

class NoEndpoint extends Route {

    usage() {
        this.app.get('*', async (req, res) => res.json({ error: 'The person who sent you here preety much foolded ya.' }));
    }

}

module.exports = NoEndpoint;
