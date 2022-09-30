import React from 'react';

const x = () => {
    const solve = function (key, message) {
        const mapGen = (key) => {
            const baseString = 'abcdefghijklmnopqrstuvwxyz';
            const baseArr = baseString.split('');
            let baseNum = 0;
            let mapping = {};
            let collatorArr = [];
            const keyTrim = key.replaceAll(' ', '');
            for (let i = 0; i < keyTrim.length; i++) {
                if (!collatorArr.includes(keyTrim[i])) {
                    collatorArr.push(keyTrim[i]);
                    mapping[keyTrim[i]] = baseArr[baseNum];
                    baseNum++;
                }
            }
            mapping[' '] = ' ';
            return mapping;
        };
        const mapping = mapGen(key);
        return message
            .split('')
            .map((el) => mapping[el])
            .join('');
    };
    const key = 'the quick brown fox jumps over the lazy dog';
    const message = 'vkbs bs t suepuv';
    console.log(solve(key, message));
    return <></>;
};

export default x;
