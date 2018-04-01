const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3000;
const router = express.Router(); // eslint-disable-line

router.get('/', (req, res) => {
    res.json({
        about: 'Hello guys this is a hobby project. If you are interested in it you can meet the devs either around discord or reddit.',
        notice: 'If you are using this API, it would be super awesome if you credit the api devs i.e. TheDiscordians or simply refer to this API.',
        discord: 'https://discord.gg/jr8g83W',
        reddit: 'https://www.reddit.com/r/TheDiscordians',
        docs: ''
    });
});

// Loading different routes from different files.
fs.readdirSync('./routes').filter(file => app.use(require(`./routes/${file}`)));

app.use('/', router);

// handling the 404 error
app.get('*', (req, res) => {
    res.json({ error: 'Found nothing around here... Is this an abandoned land or land of possibilities ??' });
});

// starting hte api
app.listen(port, () => console.log(`API is listening on port ${port}`));
