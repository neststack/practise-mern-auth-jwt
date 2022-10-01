import React from 'react';

const x = () => {
    const solve = function (edges) {
        // wtf
        return edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]
            ? edges[0][0]
            : edges[0][1];
        // my solution
        // let mapping = {};
        // let collatorArr = [];
        // edges.flat().forEach((el) => {
        //     if (!collatorArr.includes(el)) {
        //         collatorArr.push(el);
        //         mapping[el] = 1;
        //     } else {
        //         mapping[el]++;
        //     }
        // });
        // return Object.keys(mapping).find(
        //     (key) => mapping[key] === edges.length
        // );
    };
    //prettier-ignore
    const edges = [[1,2],[5,1],[1,3],[1,4]];
    console.log(solve(edges));
    return <></>;
};

export default x;
