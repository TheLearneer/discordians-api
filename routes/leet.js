const TranslateRoute = require('../structures/translateBase');

/**
 * @api {get} /translate/leet Leet
 * @apiName Leet
 * @apiGroup Translate
 * 
 * @apiSuccess {String} message The translated text.
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "message": '\\/\\/31<0443 +[] 7`[-]3 @|°9.'
 *    }
 * 
 * @apiParam {String} text The text to be converted.
 * @apiSampleRequest /translate/leet
 */
class LeetRoute extends TranslateRoute {

    constructor(...args) {
        super(...args);

        this.dictionary = {
            'a': ['4', '@'],
            'b': ['8,|3', '13', '|}', '|:', '|8', '18', '6', '|B', '|8', 'lo', '|o', '|3'],
            'c': ['<', '{', '[', '('],
            'd': ['|)', '|}', '|]'],
            'e': ['3'],
            'f': ['|=', 'ph', '|#', '|"'],
            'g': ['[', '-', '[+', '6'],
            'h': ['4', '|-|', '[-]', '{-}', '|=|', '[=]', '{=}'],
            'i': ['1', '|', '!', '9'],
            'j': ['_|', '_/', '_7', '_)'],
            'k': ['|<', '1<', 'l<', '|{', 'l{'],
            'l': ['|_', '|', '1', '][', '1'],
            'm': ['44', '^^', '/\\/\\', '/X\\', '[]\\/][', '[]V[]', '][\\\\//][', '(V)', '//..\\\\', 'N\\'],
            'n': ['|\\|', '/\\/', '/V', '][\\\\]['],
            'o': ['0', '()', '[]', '{}', '<>'],
            'p': ['|o', '|O', '|>', '|*', '|°', '|D', '/o'],
            'q': ['O_', '9', '(,)', '0'],
            'r': ['|2', '12', '.-', '|^', 'l2', 'Я'],
            's': ['5', '$', '§'],
            't': ['7', '+', '7`', '\'|\''],
            'u': ['|_|', '_', '/_/', '_/', '(_)', '[_]', '{_}'],
            'v': ['\\/'],
            'w': ['\\/\\/', '(/\\)', '\\^/', '|/\\|', '\\X/', 'VV'],
            'x': ['%', '*', '><', '}{', ')('],
            'y': ['`/', '¥'],
            'z': ['2', '7_', '>_']
        };
    }

    usage() {
        this.router.get('/leet', (req, res) => {
            const inputText = req.query.text;
            if (!inputText) return res.json({ error: 'You must provide some text.' });
            return res.json({ message: this.translate.multiLetterTrans(inputText.toLowerCase(), this.dictionary) });
        });
    }

}

module.exports = LeetRoute;
