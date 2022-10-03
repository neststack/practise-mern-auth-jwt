import React from 'react';

const x = () => {
    const solve = function (nums) {
    let finalArr = [...nums];
    if (finalArr.length > 1) {
        for (let i = 1; i < nums.length; i++) {
            finalArr = finalArr
                .map((el, i, arr) => {
                    if (i !== arr.length - 1) {
                        return (el + arr[i + 1]) % 10;
                    }
                    return el;
                })
                .slice(0, finalArr.length - 1);
        }
    }
    return finalArr[0];
    };
    //prettier-ignore
    const nums = [1,2,3,4,5];
    console.log(solve(nums));
    return <></>;
};

export default x;
