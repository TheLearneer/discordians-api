const express = require('express');
const router = express.Router(); // eslint-disable-line
const { multiLetterTrans } = require('../functions/translate');

const dictionary = {
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

router.get('/translate/leet', (req, res) => {
    const inputText = req.query.text;
    if (!inputText) return res.json({ error: 'You must provide some text.' });
    return res.json({ message: multiLetterTrans(inputText.toLowerCase(), dictionary) });
});

module.exports = router;
