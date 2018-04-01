const express = require('express');
const router = express.Router(); // eslint-disable-line

const souls = [
      // Highs
      [
        '̍', '̎', '̄', '̅', '̿', '̑', '̆', '̐', '͒',  '͗',
        '͑',  '̇', '̈', '̊', '͂',  '̓', '̈', '͊',  '͋',  '͌',
        '̃', '̂', '̌', '͐',  '̀', '́', '̋', '̏', '̒', '̓',
        '̔', '̽', '̉', 'ͣ',  'ͤ',  'ͥ',  'ͦ',  'ͧ',  'ͨ',  'ͩ',
        'ͪ',  'ͫ',  'ͬ',  'ͭ',  'ͮ',  'ͯ',  '̾', '͛',  '͆',  '̚'
      ],
      // Mids
      [
        '̕', '̛', '̀', '́', '͘', '̡', '̢', '̧', '̨', '̴', '̵',
        '̶', '͜',  '͝',  '͞',  '͟',  '͠',  '͢',  '̸', '̷', '͡', '҉'
      ],
      // Lows
      [
        '̖', '̗', '̘', '̙', '̜', '̝', '̞', '̟', '̠', '̤',
        '̥', '̦', '̩', '̪', '̫', '̬', '̭', '̮', '̯', '̰',
        '̱', '̲', '̳', '̹', '̺', '̻', '̼', 'ͅ',  '͇',  '͈',
        '͉',  '͍',  '͎',  '͓',  '͔',  '͕',  '͖',  '͙',  '͚',  '̣'
      ]
];

function zalgolize(string) {
    let res = '';
    for (let i = 0; i < string.length; i += 1) {
      res += string[i];
      for (let k = 0; k < Math.floor(Math.random() * (souls.length + 1)); k += 1) {
        res += souls[Math.floor(Math.random() * souls.length)][Math.floor(Math.random() * souls.length)];
      }
    }
    return res;
};
 
router.get('/translate/zalgolize', async (req, res) => {
    const inputText = req.query.text;
    if (!inputText) return res.json({ error: 'You must provide some text.' });
    return res.json({ message: zalgolize(inputText) });
});

module.exports = router;
 