import React from 'react';

const x = () => {
    const solve = function (s) {
        let stack = 0;
        let count = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === 'L') stack++;
            if (s[i] === 'R') stack--;
            if (stack === 0) count++;
        }
        return count;
    };
    const s = 'RLRRLLRLRL';
    console.log(solve(s));
    return <></>;
};

export default x;
