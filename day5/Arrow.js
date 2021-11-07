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

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */

function sides(literals, ...expressions) {
    let numerator1 = expressions[1] + Math.sqrt(expressions[1] * expressions[1] -16 * expressions[0]);
    let numerator2 = expressions[1] - Math.sqrt(expressions[1] * expressions[1] -16 * expressions[0]);
    let denominator = 4;

    let s1 = numerator1 / denominator;
    let s2 = numerator2 / denominator;
    let array = [s1,s2];
    if (array[1] < array[0]){
        let temp = array[0];
        array[0] = array[1];
        array[1] = temp;
    }

    return array;
}

