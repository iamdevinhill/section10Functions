'use strict';

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split('');
    return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
    console.log(`Transformed string: ${fn(str)}`)
}

transformer('JavaScript is the best!', upperFirstWord);
