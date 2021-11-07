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
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    for(let alphabet of s){
        if(alphabet == 'a' || alphabet == 'i' || alphabet == 'o' || alphabet == 'u' ||alphabet == 'e')
        console.log(alphabet);
    }
    for(let alphabet of s){
        if(alphabet != 'a' && alphabet != 'i' && alphabet != 'o' && alphabet != 'u' &&alphabet != 'e')
        console.log(alphabet);
    }
}

