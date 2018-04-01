const express = require('express');
const router = express.Router(); // eslint-disable-line
const { get } = require('snekfetch');
const HTMLParser = require('fast-html-parser');

function randomDate(start, end) {
    return new Date(start.getTime() + (Math.random() * (end.getTime() - start.getTime())));
}

function getDate(today) {
    const date = today ? new Date(Date.now()) : randomDate(new Date(1989, 4, 17), new Date());
    const year = date.getUTCFullYear(), month = date.getUTCMonth() + 1, day = date.getUTCDate();
    return `${year}-${month}-${day}`;
}

async function getComic(today) {
	try{
		const date = getDate(today);

		const stripDate = `http://www.dilbert.com/strip/${date}`;
		const { text } = await get(stripDate);
		const root = HTMLParser.parse(text);
		const image = root.querySelector('.img-comic-container').childNodes[1].childNodes[1].rawAttrs.split('src="')[1].split('"')[0];
		return {
			URL: stripDate,
			image: image
		};
	}catch(err) { // eslint-disable-line
		return {
			error: "Something went wrong, sorry for the trouble. If it doesn't get fixed soon contact the api devs."
		}
	}
	
}

router.get('/comic/dilbert', async (req, res) => {
    const getToday = req.query.today;
    let today = false;
    if (getToday && getToday == "true") today = true; // eslint-disable-line
    const result = await getComic(today);
    return res.json(result);
});

module.exports = router;
