import React from 'react';

const x = () => {
    const solve = function (a, b) {
    let max = a >= b ? a : b;
    let count = 0;
    for (let i = 1; i < max + 1; i++) {
        if (a % i === 0 && b % i === 0) count++;
    }
    return count;
    };
    //prettier-ignore
    const a = 6;
    const b = 12;
    console.log(solve(a, b));
    return <></>;
};

export default x;
