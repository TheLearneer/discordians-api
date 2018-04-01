const express = require('express');
const router = express.Router(); // eslint-disable-line
const { letterTrans } = require('../functions/translate');

const dictionary = {
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

router.get('/translate/fancy2', (req, res) => {
    const inputText = req.query.text;
    if (!inputText) return res.json({ error: 'You must provide some text.' });
    return res.json({ message: letterTrans(inputText.toLowerCase(), dictionary) });
});

module.exports = router;
