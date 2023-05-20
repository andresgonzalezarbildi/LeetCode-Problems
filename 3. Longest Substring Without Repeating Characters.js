/*

Given a string s, find the length of the longest
substring
without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 

Constraints:

    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // I will be given a string, could have numbers, sapces, etc, and can also be an empty string

    // I should return just a number

    // lengthOfLongestSubstring('bbbbb')    // => 1
    // lengthOfLongestSubstring('pwwkew')   // => 3
    // lengthOfLongestSubstring('')         // => 0

    //  Create a variable to store longest string
        let longestString = ''
    //  Create a variable to store result
        let result = 0

    //  Loop through the array
        for(let letter of s) {
        // adding each letter to the longest string, checking if repeated
            if (!longestString.includes(letter)) {
                longestString += letter
            } else {
        //if bigger, change result variable
                result = Math.max(longestString.length, result)
                longestString = longestString.slice(longestString.indexOf(letter) + 1) + letter
            }
        }
    // return result
        return Math.max(longestString.length, result)
};

/*
console.log(lengthOfLongestSubstring('bbbbb'), 5)    // => 1
console.log(lengthOfLongestSubstring('pwwkew'), 3)   // => 3
console.log(lengthOfLongestSubstring(''), 0)         // => 0
*/
