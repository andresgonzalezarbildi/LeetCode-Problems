/*

A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

 

Example 1:

Input: arr = [3,5,1]
Output: true
Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.

Example 2:

Input: arr = [1,2,4]
Output: false
Explanation: There is no way to reorder the elements to obtain an arithmetic progression.

 

Constraints:

    2 <= arr.length <= 1000
    -106 <= arr[i] <= 106

*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    //  I would be given an array, with numbers, no empty arrays or any edge cases i should know about

    //  I should return a boolean

    //  [3,7,1] => false
    //  [42, 6, 78] => true
    //  [3, 9, 7, 11, 5] => true


    // start by sorting the array
        let sorted = arr.sort((a, b) => a - b)
        console.log(sorted)
    //  store difference between the first two numbers
        let diff = sorted[1] - sorted[0]
        console.log(diff)
    //  check if any of the numbers in the array has another difference, and return a boolean accordingly
        for (let i = 1; i < sorted.length; i++) {
            if (sorted[i+1]) {
                if ( sorted[i + 1] - sorted[i] !== diff) {
                    console.log(sorted[i+1], sorted[i], sorted[i + 1] - sorted[i])
                    return false
                }

            }
        }
        return true
};
