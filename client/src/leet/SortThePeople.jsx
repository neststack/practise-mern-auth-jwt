import React from 'react';

const x = () => {
    const solve = function (names, heights) {
        const mapping = {};
        const finalArr = [];
        for (let i = 0; i < names.length; i++) {
            mapping[heights[i]] = names[i];
        }
        heights = heights.sort((a, b) => b - a);
        for (let i = 0; i < heights.length; i++) {
            finalArr.push(mapping[heights[i]]);
        }
        return finalArr;
    };
    //prettier-ignore
    const names = ['Alice', 'Bob', 'Mat'];
    const heights = [155, 185, 150];
    console.log(solve(names, heights));
    return <></>;
};

export default x;
