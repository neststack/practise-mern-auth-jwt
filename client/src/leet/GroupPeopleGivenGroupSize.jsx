import React from 'react';

const x = () => {
    const solve = function (groupSizes) {
    const finalArr = [];
    const set = new Set(groupSizes);
    const setArr = Array.from(set);
    let tempArr = [];
    for (let i = 0; i < setArr.length; i++) {
        for (let j = 0; j < groupSizes.length; j++) {
            if (setArr[i] === groupSizes[j]) {
                tempArr.push(j);
                if (tempArr.length === setArr[i]) {
                    finalArr.push(tempArr);
                    tempArr = [];
                }
            }
        }
    }
    return finalArr;
    };
    //prettier-ignore
    const groupSizes = [2,3,3,3,2,1];
    console.log(solve(groupSizes));
    return <></>;
};

export default x;
