const Route = require('../structures/route');

/**
 * @api {get} /comic/garfield Garfield
 * @apiName Garfield
 * @apiGroup Comic
 * 
 * @apiSuccess {URL} image URL to the image. 
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "image": 'https://d1ejxu6vysztl5.cloudfront.net/comics/garfield/2018/2018-04-19.gif'
 *    }
 * 
 * @apiParam {Boolean} today=false Whether to get today's comic or not.
 * @apiSampleRequest /comic/garfield
 */
class GarfieldComic extends Route {

    constructor(...args) {
        super(...args);
        this.base = 'comic';
    }

    usage() {
        this.router.get('/garfield', async (req, res) => {
            const getToday = req.query.today;
            let today = false;
            if (getToday && getToday == 'true') today = true; // eslint-disable-line
            const result = this.getComic(today);
            return res.json(result);
        });
    }

    getDate(today) {
        const comicDate = today ? new Date(Date.now()) : this.functions.randomDate(new Date(267062400000), new Date());
        const year = comicDate.getUTCFullYear();
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

    getComic(today) {
        try {
            const date = this.getDate(today);
            const year = date.split('-')[0];
            return { image: `https://d1ejxu6vysztl5.cloudfront.net/comics/garfield/${year}/${date}.gif` };
        }catch(err) { // eslint-disable-line
			console.log(err);
            return { error: "Something went wrong, sorry for the trouble. If it doesn't get fixed soon contact the api devs." };
        }
    }

}

module.exports = GarfieldComic;
