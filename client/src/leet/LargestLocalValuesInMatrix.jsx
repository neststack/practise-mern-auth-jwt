import React from 'react';

const x = () => {
    const solve = function (grid) {
    let n = grid.length;
    let finalArr = [];
    for (let i = 0; i < n - 2; i++) {
        let nestArr = [];
        for (let j = 0; j < n - 2; j++) {
            let collArr = [];
            collArr.push(grid[i][j]);
            collArr.push(grid[i][j + 1]);
            collArr.push(grid[i][j + 2]);
            collArr.push(grid[i + 1][j]);
            collArr.push(grid[i + 1][j + 1]);
            collArr.push(grid[i + 1][j + 2]);
            collArr.push(grid[i + 2][j]);
            collArr.push(grid[i + 2][j + 1]);
            collArr.push(grid[i + 2][j + 2]);
            nestArr[j] = collArr.reduce((acc, cur) => {
                if (cur > acc) acc = cur;
                return acc;
            }, 0);
        }
        finalArr[i] = nestArr;
    }
    return finalArr;
    };
    //prettier-ignore
    const grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]];
    console.log(solve(grid));
    return <></>;
};

export default x;
