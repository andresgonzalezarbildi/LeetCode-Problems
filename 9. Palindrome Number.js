/*

Given an integer x, return true if x is a
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

 

Constraints:

    -231 <= x <= 231 - 1

*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //  i would be given an integer, could be negative or positive, and i'll just read it as a string

    //  I should return a boolean

    //  isPalindrome(121) => true
    //  isPalindrome(-3553) => false


    //  Make it a string, then an array
        let arr = String(x).split('')
        let reversed = arr.slice(0).reverse().join('')
    //  Compare the reversed with the normal, and return the result
        return arr.join('') === reversed
};


console.log(isPalindrome(121), 'true') // ture
console.log(isPalindrome(-3553), 'flase') // false
