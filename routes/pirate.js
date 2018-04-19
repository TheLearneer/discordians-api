const TranslateRoute = require('../structures/translateBase');

/**
 * @api {get} /translate/pirate Pirate
 * @apiName Pirate
 * @apiGroup Translate
 * 
 * @apiSuccess {String} message The translated text.
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "message": 'Welcome t\' thar API.'
 *    }
 * 
 * @apiParam {String} text The text to be converted.
 * @apiSampleRequest /translate/pirate
 */
class PirateRoute extends TranslateRoute {

    constructor(...args) {
        super(...args);

        this.dictionary = {
            'address': "port o' call",
            'admin': 'helm',
            'am': 'be',
            'an': 'a',
            'and': "n'",
            'are': 'be',
            'award': 'prize',
            'bathroom': 'head',
            'beer': 'grog',
            'before': 'afore',
            'belief': 'creed',
            'between': 'betwixt',
            'big': 'vast',
            'bill': 'coin',
            'bills': 'coins',
            'boss': 'admiral',
            'bourbon': 'rum',
            'box': 'barrel',
            'boy': 'lad',
            'buddy': 'mate',
            'business': 'company',
            'businesses': 'companies',
            'calling': "callin'",
            'canada': 'Great North',
            'cash': 'coin',
            'cat': 'parrot',
            'cheat': 'hornswaggle',
            'comes': 'hails',
            'comments': 'yer words',
            'cool': 'shipshape',
            'country': 'land',
            'dashboard': 'shanty',
            'dead': "in Davy Jones's Locker",
            'disconnect': 'keelhaul',
            'do': "d'",
            'dog': 'parrot',
            'dollar': 'doubloon',
            'dollars': 'doubloons',
            'dude': 'pirate',
            'employee': 'crew',
            'everyone': 'all hands',
            'eye': 'eye-patch',
            'family': 'kin',
            'fee': 'debt',
            'female': 'wench',
            'females': 'wenches',
            'food': 'grub',
            'for': 'fer',
            'friend': 'mate',
            'friends': 'crew',
            'fuck': 'shiver me timbers',
            'gin': 'rum',
            'girl': 'lass',
            'girls': 'lassies',
            'go': 'sail',
            'good': 'jolly good',
            'grave': "Davy Jones's Locker",
            'group': 'maties',
            'gun': 'bluderbuss',
            'haha': 'yo ho',
            'hahaha': 'yo ho ho',
            'hahahaha': 'yo ho ho ho',
            'hand': 'hook',
            'happy': 'grog-filled',
            'hello': 'ahoy',
            'hey': 'ahoy',
            'hi': 'ahoy',
            'hotel': 'fleebag inn',
            'i': 'me',
            "i'm": 'i be',
            'internet': "series o' tubes",
            'invalid': 'sunk',
            'is': 'be',
            'island': 'isle',
            "isn't": 'be not',
            "it's": "'tis",
            'jail': 'brig',
            'kill': 'keelhaul',
            'king': 'king',
            'ladies': 'lasses',
            'lady': 'lass',
            'lawyer': 'scurvy land lubber',
            'left': 'port',
            'leg': 'peg',
            'logout': 'walk the plank',
            'lol': 'blimey',
            'male': 'pirate',
            'man': 'pirate',
            'manager': 'admiral',
            'money': 'doubloons',
            'month': 'moon',
            'my': 'me',
            'never': 'nary',
            'no': 'nay',
            'not': 'nay',
            'of': "o'",
            'old': 'barnacle-covered',
            'omg': 'shiver me timbers',
            'over': "o'er",
            'page': 'parchment',
            'people': 'scallywags',
            'person': 'scurvy dog',
            'posted': 'tacked to the yardarm',
            'president': 'king',
            'prison': 'brig',
            'quickly': 'smartly',
            'really': 'verily',
            'relative': 'kin',
            'relatives': 'kin',
            'religion': 'creed',
            'restaurant': 'galley',
            'right': 'starboard',
            'rotf': "rollin' on the decks",
            'say': 'cry',
            'seconds': "ticks o' tha clock",
            'shipping': 'cargo',
            'shit': 'shiver me timbers',
            'small': 'puny',
            'snack': 'grub',
            'soldier': 'sailor',
            'sorry': 'yarr',
            'spouse': "ball 'n' chain",
            'state': 'land',
            'supervisor': "Cap'n",
            "that's": 'that be',
            'the': 'thar',
            'theif': 'swoggler',
            'them': "'em",
            'this': 'dis',
            'to': "t'",
            'together': "t'gether",
            'treasure': 'booty',
            'vodka': 'rum',
            'was': 'be',
            'water': 'grog',
            'we': 'our jolly crew',
            "we're": "we's",
            'whiskey': 'rum',
            'whisky': 'rum',
            'wine': 'grog',
            'with': "wit'",
            'woman': 'comely wench',
            'women': 'beauties',
            'work': 'duty',
            'yah': 'aye',
            'yeah': 'aye',
            'yes': 'aye',
            'you': 'ye',
            "you're": 'you be',
            "you've": 'ye',
            'your': 'yer',
            'yup': 'aye'
        };
    }

    usage() {
        this.router.get('/pirate', (req, res) => {
            const inputText = req.query.text;
            if (!inputText) return res.json({ error: 'You must provide some text.' });
            return res.json({ message: this.translate.wordTrans(inputText, this.dictionary) });
        });
    }

}

module.exports = PirateRoute;
