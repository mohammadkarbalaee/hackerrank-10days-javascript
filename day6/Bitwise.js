'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function biggestLessK(ands,k) {

    let biggest = 0;
    for (let i = 0; i < ands.length; i++) {
        if (ands[i] > biggest && ands[i] < k){
            biggest = ands[i];
        }
    }

    return biggest;
}

function getMaxLessThanK(n,k){

    let ands = [];
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i < j){
                ands.push(i & j);
            }
        }
    }

    return biggestLessK(ands,k);
}
