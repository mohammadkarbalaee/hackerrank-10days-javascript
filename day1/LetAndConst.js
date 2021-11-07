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

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    var r = readLine();
    const PI = Math.PI;
    let area = PI * r * r;
    let perimiter = PI * r * 2;

    // Print the area of the circle:
    console.log(area);
    // Print the perimeter of the circle:
    console.log(perimiter);
    
    try {    