import React from 'react';

const x = () => {
    const solve = function (bank) {
        return bank
            .map((el) =>
                el.split('').reduce((acc, cur) => {
                    return acc + parseInt(cur, 10);
                }, 0)
            )
            .filter((el) => el !== 0)
            .reduce((acc, cur, i, arr) => {
                if (i !== arr.length - 1) {
                    acc = acc + cur * arr[i + 1];
                }
                return acc;
            }, 0);
    };
    //prettier-ignore
    const bank = ["011001","000000","010100","001000"]
    console.log(solve(bank));
    return <></>;
};

export default x;
