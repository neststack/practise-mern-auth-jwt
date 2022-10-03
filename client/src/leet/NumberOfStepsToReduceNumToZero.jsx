import React from 'react';

const x = () => {
    const solve = function (num) {
        let count = 0;
        let number = num;
        while (number !== 0) {
            if (number % 2 === 0) {
                number = number / 2;
            } else {
                number--;
            }
            console.log(number);
            count++;
        }
        return count;
    };
    //prettier-ignore
    const num = 14;
    console.log(solve(num));
    return <></>;
};

export default x;
