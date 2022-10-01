import React from 'react';

const x = () => {
    const solve = function (nums) {
    let pIndex = 0;
    let nIndex = 1;
    const finalArr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            finalArr[pIndex] = nums[i];
            pIndex = pIndex+2;
        } else {
            finalArr[nIndex] = nums[i];
            nIndex = nIndex+2;
        }
    }
    return finalArr;
    };
    const nums = [3, 1, -2, -5, 2, -4];
    console.log(solve(nums));
    return <></>;
};

export default x;
