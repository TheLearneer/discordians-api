const express = require('express');
const router = express.Router(); // eslint-disable-line
const { get } = require('snekfetch');
const HTMLParser = require('fast-html-parser');

async function getLine(today) {
	try{
		const { text } = await get('http://www.pickuplinegen.com/');
		const root = HTMLParser.parse(text);
		const rawLine = root.querySelector('#content');
		let msg = rawLine.childNodes[0].rawText.replace(/[\r\n\t]+/g, '').replace('    ', '')
		return {
			pickupLine: msg
		}
	}catch(err) { // eslint-disable-line
		return {
			error: "Something went wrong, sorry for the trouble. If it doesn't get fixed soon contact the api devs."
		}
	}
	
}

router.get('/fun/pickup-line', async (req, res) => {
    const result = await getLine();
    return res.json(result);
});

module.exports = router;
