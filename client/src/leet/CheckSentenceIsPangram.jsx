import React from 'react';

const x = () => {
    const solve = function (sentence) {
    const set = new Set(sentence.split(''));
    return set.size === 26;
    };
    const sentence = 'thequickbrownfoxjumpsoverthelazydog';
    console.log(solve(sentence));
    return <></>;
};

export default x;
