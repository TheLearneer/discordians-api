const express = require('express');
const router = express.Router(); // eslint-disable-line
const { letterTrans } = require('../functions/translate');

const dictionary = {
    'a': '𝔞',
    'b': '𝔟',
    'c': '𝔠',
    'd': '𝔡',
    'e': '𝔢',
    'f': '𝔣',
    'g': '𝔤',
    'h': '𝔥',
    'i': '𝔦',
    'j': '𝔧',
    'k': '𝔨',
    'l': '𝔩',
    'm': '𝔪',
    'n': '𝔫',
    'o': '𝔬',
    'p': '𝔭',
    'q': '𝔮',
    'r': '𝔯',
    's': '𝔰',
    't': '𝔱',
    'u': '𝔲',
    'v': '𝔳',
    'w': '𝔴',
    'x': '𝔵',
    'y': '𝔶',
    'z': '𝔷',
    'A': '𝔄',
    'B': '𝔅',
    'C': 'ℭ',
    'D': '𝔇',
    'E': '𝔈',
    'F': '𝔉',
    'G': '𝔊',
    'H': 'ℌ',
    'I': 'ℑ',
    'J': '𝔍',
    'K': '𝔎',
    'L': '𝔏',
    'M': '𝔐',
    'N': '𝔑',
    'O': '𝔒',
    'P': '𝔓',
    'Q': '𝔔',
    'R': 'ℜ',
    'S': '𝔖',
    'T': '𝔗',
    'U': '𝔘',
    'V': '𝔙',
    'W': '𝔚',
    'X': '𝔛',
    'Y': '𝔜',
    'Z': 'ℨ'
};

router.get('/translate/fancy', (req, res) => {
    const inputText = req.query.text;
    if (!inputText) return res.json({ error: 'You must provide some text.' });
    return res.json({ message: letterTrans(inputText, dictionary) });
});

module.exports = router;
