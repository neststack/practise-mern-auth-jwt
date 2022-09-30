import React from 'react';

const x = () => {
    const solve = function (s) {
    const key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const keyArr = key.split('');
    const finalArr = [];
    let colStart = keyArr.indexOf(s[0]);
    let colEnd = keyArr.indexOf(s[3]);
    let rowStart = parseInt(s[1], 10);
    let rowEnd = parseInt(s[4], 10);
    console.log(colStart, rowStart);
    for (let i = colStart; i < colEnd + 1; i++) {
        for (let j = rowStart; j < rowEnd + 1; j++) {
            finalArr.push(`${key[i]}${j}`);
        }
    }
    return finalArr;
    };
    const s = 'B2:F9';
    console.log(solve(s));
    return <></>;
};

export default x;
