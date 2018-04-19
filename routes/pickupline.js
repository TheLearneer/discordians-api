const Route = require('../structures/route');
const { get } = require('snekfetch');
const HTMLParser = require('fast-html-parser');

class PickupLine extends Route {

    constructor(...args) {
        super(...args);
        this.base = 'fun';
    }

    usage() {
        this.router.get('/pickup-line', async (req, res) => {
            const result = await this.getLine();
            return res.json(result);
        });
    }

    async getLine() {
        try {
            const { text } = await get('http://www.pickuplinegen.com/');
            const root = HTMLParser.parse(text);
            const rawLine = root.querySelector('#content');
            const msg = rawLine.childNodes[0].rawText.replace(/[\r\n\t]+/g, '').replace('    ', '');
            return { pickupLine: msg };
		}catch(err) { // eslint-disable-line
            return { error: "Something went wrong, sorry for the trouble. If it doesn't get fixed soon contact the api devs." };
        }
    }

}

module.exports = PickupLine;
