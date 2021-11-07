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

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    nums.sort((a,b) => a - b);

    // console.log(nums);

    let set = new Set(nums);

    // console.log('set before delete ' + Array.from(set));
    // console.log(nums);
    set.delete(nums[nums.length - 1]);

    // console.log('set after delete ' + Array.from(set));
    if (set.size === 0){
        return nums[0];
    }
    let newArray = Array.from(set);
    return newArray[newArray.length - 1];
    // Complete the function
}
