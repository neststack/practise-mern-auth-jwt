import React from 'react';

const x = () => {
    const solve = function (s) {
    let countR = 0;
    let countL = 0;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'L') countL++;
        if (s[i] === 'R') countR++;
        if (countL === countR) count++;
    }
    return count;
    };
    const s = 'RLRRLLRLRL';
    console.log(solve(s));
    return <></>;
};

export default x;
