exports.wordTrans = (text, dict, join = ' ') => {
    if (typeof text !== 'string') throw new TypeError('text must be a string.');
    if (typeof dict !== 'object') throw new TypeError('dictionary must be an object.');
    return text.split(' ').map(word => {
        const strip = word.replace(/[!@#$%^&*()`~=+[\]{};:",.<>?]/g, '');
        const lowerCase = strip.toLowerCase();
        if (!dict[lowerCase]) return word;
        let change = word.toLowerCase().replace(lowerCase, dict[lowerCase]);
        if (strip.charAt(0).toUpperCase() === strip.charAt(0)) {
            change = change.replace(dict[lowerCase].charAt(0), dict[lowerCase].charAt(0).toUpperCase());
        }
        if (strip.length > 1 && strip.toUpperCase() === strip) change = change.toUpperCase();
        return change;
    }).join(join);
};

exports.letterTrans = (text, dict, join = '') => {
    if (typeof text !== 'string') throw new TypeError('text must be a string.');
    if (typeof dict !== 'object') throw new TypeError('dictionary must be an object.');
    return text.split('').map(letter => dict[letter] || letter).join(join);
};

exports.regexTrans = (text, dict, flags = 'gi') => {
    if (typeof text !== 'string') throw new TypeError('text must be a string.');
    if (typeof dict !== 'object') throw new TypeError('dictionary must be an object.');
    if (typeof flags !== 'string') throw new TypeError('flags must be a string.');
    for (const expression of Object.keys(dict)) {
        const regex = new RegExp(expression, flags);
        text = text.replace(regex, dict[expression]);
    }
    return text;
};

exports.multiLetterTrans = (text, dict, join = '') => {
    if (typeof text !== 'string') throw new TypeError('text must be a string.');
    if (typeof dict !== 'object') throw new TypeError('dictionary must be an object.');
    return text.split('').map(letter => dict[letter] ? dict[letter][Math.floor(Math.random() * dict[letter].length)] : letter).join(join);
};
