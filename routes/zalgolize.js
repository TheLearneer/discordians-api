const TranslateRoute = require('../structures/translateBase');

/**
 * @api {get} /translate/zalgolize Zalgolize
 * @apiName Zalgolize
 * @apiGroup Translate
 * 
 * @apiSuccess {String} message The translated text.
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "message": 'W̎̕èl̗com̖è̖ ̘̎t̘̗o ̛t̘̕h̘̀e̖ ̕A̗P̎̄I̗̘.̘̘'
 *    }
 * 
 * @apiParam {String} text The text to be converted.
 * @apiSampleRequest /translate/zalgolize
 */
class ZalgolizeRoute extends TranslateRoute {

    constructor(...args) {
        super(...args);

        this.souls = [
            // Highs
            [
                '̍', '̎', '̄', '̅', '̿', '̑', '̆', '̐', '͒', '͗',
                '͑', '̇', '̈', '̊', '͂', '̓', '̈', '͊', '͋', '͌',
                '̃', '̂', '̌', '͐', '̀', '́', '̋', '̏', '̒', '̓',
                '̔', '̽', '̉', 'ͣ', 'ͤ', 'ͥ', 'ͦ', 'ͧ', 'ͨ', 'ͩ',
                'ͪ', 'ͫ', 'ͬ', 'ͭ', 'ͮ', 'ͯ', '̾', '͛', '͆', '̚'
            ],
            // Mids
            [
                '̕', '̛', '̀', '́', '͘', '̡', '̢', '̧', '̨', '̴', '̵',
                '̶', '͜', '͝', '͞', '͟', '͠', '͢', '̸', '̷', '͡', '҉'
            ],
            // Lows
            [
                '̖', '̗', '̘', '̙', '̜', '̝', '̞', '̟', '̠', '̤',
                '̥', '̦', '̩', '̪', '̫', '̬', '̭', '̮', '̯', '̰',
                '̱', '̲', '̳', '̹', '̺', '̻', '̼', 'ͅ', '͇', '͈',
                '͉', '͍', '͎', '͓', '͔', '͕', '͖', '͙', '͚', '̣'
            ]
        ];
    }

    usage() {
        this.router.get('/zalgolize', (req, res) => {
            const inputText = req.query.text;
            if (!inputText) return res.json({ error: 'You must provide some text.' });
            return res.json({ message: this.zalgolize(inputText) });
        });
    }

    zalgolize(string) {
        let res = '';
        for (let i = 0; i < string.length; i += 1) {
            res += string[i];
            for (let k = 0; k < Math.floor(Math.random() * (this.souls.length + 1)); k += 1) { // eslint-disable-line
                res += this.souls[Math.floor(Math.random() * this.souls.length)][Math.floor(Math.random() * this.souls.length)];
            }
        }
        return res;
    }

}

module.exports = ZalgolizeRoute;
