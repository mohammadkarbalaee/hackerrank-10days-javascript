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
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {

    try{
        var  charArray = s.split('');
    } catch(e){
        console.log(e.message);
        console.log(s);
        return;
    }

    try{
        var reversedArray = charArray.reverse();
    } catch(e){
        console.log(e.message);
        console.log(s);
        return;
    }

    try{
        var finalString = reversedArray.join('');
    } catch(e){
        console.log(e.message);
        console.log(s);
        return;
    }

    if(finalString !== undefined)
        console.log(finalString);
}



