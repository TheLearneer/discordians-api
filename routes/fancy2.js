const TranslateRoute = require('../structures/translateBase');

/**
 * @api {get} /translate/fancy2 Fancy2
 * @apiName Fancy2
 * @apiGroup Translate
 * 
 * @apiSuccess {String} message The translated text.
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "message": 'ωєℓ¢σмє тσ тнє αρι.'
 *    }
 * 
 * @apiParam {String} text The text to be converted.
 * @apiSampleRequest /translate/fancy2
 */
class Fancy2Route extends TranslateRoute {

    constructor(...args) {
        super(...args);

        this.dictionary = {
            'a': 'α',
            'b': 'в',
            'c': '¢',
            'd': '∂',
            'e': 'є',
            'f': 'ƒ',
            'g': 'g',
            'h': 'н',
            'i': 'ι',
            'j': 'נ',
            'k': 'к',
            'l': 'ℓ',
            'm': 'м',
            'n': 'η',
            'o': 'σ',
            'p': 'ρ',
            'q': 'q',
            'r': 'я',
            's': 'ѕ',
            't': 'т',
            'u': 'υ',
            'v': 'ν',
            'w': 'ω',
            'x': 'χ',
            'y': 'у',
            'z': 'z'
        };
    }

    usage() {
        this.router.get('/fancy2', (req, res) => {
            const inputText = req.query.text;
            if (!inputText) return res.json({ error: 'You must provide some text.' });
            return res.json({ message: this.translate.letterTrans(inputText.toLowerCase(), this.dictionary) });
        });
    }

}

module.exports = Fancy2Route;
