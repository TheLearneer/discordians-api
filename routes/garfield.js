const express = require('express');
const router = express.Router(); // eslint-disable-line

function randomDate(start, end) {
    return new Date(start.getTime() + (Math.random() * (end.getTime() - start.getTime())));
}

function getDate(today) {
    const comicDate = today ? new Date(Date.now()) : randomDate(new Date(267062400000), new Date());	
    let year = comicDate.getUTCFullYear();
    let month = comicDate.getUTCMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }
    let date = comicDate.getUTCDate();
    if (date < 10) {
      date = `0${date}`;
    }
	return `${year}-${month}-${date}`;
}

function getComic(today) {
	try{
		const date = getDate(today);
		const year = date.split('-')[0];
		return {
			image: `https://d1ejxu6vysztl5.cloudfront.net/comics/garfield/${year}/${date}.gif`
		}
	}catch(err) { // eslint-disable-line
		return {
			error: "Something went wrong, sorry for the trouble. If it doesn't get fixed soon contact the api devs."
		}
	}
	
}

router.get('/comic/garfield', async (req, res) => {
    const getToday = req.query.today;
    let today = false;
    if (getToday && getToday == "true") today = true; // eslint-disable-line
    const result = await getComic(today);
    return res.json(result);
});

module.exports = router;
