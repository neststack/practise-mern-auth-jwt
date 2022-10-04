import React from 'react';

const x = () => {
    const solve = function (nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && (i * j) % k === 0) count++;
        }
    }
    return count;
    };
    const nums = [3, 1, 2, 2, 2, 1, 3];
    const k = 2;
    console.log(solve(nums, k));
    return <></>;
};

export default x;
