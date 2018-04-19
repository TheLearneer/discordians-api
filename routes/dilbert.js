const Route = require('../structures/route');
const { get } = require('snekfetch');
const HTMLParser = require('fast-html-parser');

/**
 * @api {get} /comic/dilbert Dilbert
 * @apiName Dilbert
 * @apiGroup Comic
 * 
 * @apiSuccess {URL} image URL to the image. 
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "image": 'http://assets.amuniversal.com/717011b0fe7a01335e46005056a9545d'
 *    }
 * 
 * @apiParam {Boolean} today=false Whether to get today's comic or not.
 * @apiSampleRequest /comic/dilbert
 */
class DilbertComic extends Route {

    constructor(...args) {
        super(...args);
        this.base = 'comic';
    }

    usage() {
        this.router.get('/dilbert', async (req, res) => {
            const getToday = req.query.today;
            let today = false;
            if (getToday && getToday == 'true') today = true; // eslint-disable-line
            const result = await this.getComic(today);
            return res.json(result);
        });
    }

    getDate(today) {
        const date = today ? new Date(Date.now()) : this.functions.randomDate(new Date(1989, 4, 17), new Date());
        const year = date.getUTCFullYear(), month = date.getUTCMonth() + 1, day = date.getUTCDate();
        return `${year}-${month}-${day}`;
    }

    async getComic(today) {
        try {
            const date = this.getDate(today);
            const stripDate = `http://www.dilbert.com/strip/${date}`;
            const { text } = await get(stripDate);
            const root = HTMLParser.parse(text);
            const image = root.querySelector('.img-comic-container').childNodes[1].childNodes[1].rawAttrs.split('src="')[1].split('"')[0];
            return {
                image: image
            };
        }catch(err) { // eslint-disable-line
			console.log(err);
            return { error: "Something went wrong, sorry for the trouble. If it doesn't get fixed soon contact the api devs." };
        }
    }

}

module.exports = DilbertComic;
