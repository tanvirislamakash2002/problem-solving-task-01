// problem 1: Reverse words in a sentence

const ReverseWord = (sentence) => {
    const words = sentence.split(' ');
    const reverseWord = words.reverse();
    const result = reverseWord.join(' ');
    return result
}
// example
// console.log(ReverseWord('Hello World'))

// problem 2: Find all pairs with a given sum in an array

const FindPairs = (arr, target) => {
    const seen = new Set();
    const pairs = [];

    for (let num of arr) {
        const complement = target - num;

        if (seen.has(complement)) {
            pairs.push([complement, num]);
        }

        seen.add(num);
    }

    return pairs;
}
// example
// console.log(FindPairs([1, 4, 5, 2, -2], 3))

// problem 3: Check if an array is a palindrome

const CheckPalindrome = (arr) => {
    const reversed = [...arr].reverse();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== reversed[i]) {
            return false;
        }
    }

    return true;
}
// example
// console.log(CheckPalindrome(([1, 2, 3, 2, 12])))

// problem 4: Rotate a matrix 90 degrees clockwise

const rotateMatrixClockwise = (matrix) => {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }

    return matrix;
}

// example
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(rotateMatrixClockwise(matrix));

// problem 5: Remove duplicates from a string

function removeDuplicates(str) {
    const seen = {};
    let result = '';

    for (let char of str) {
        if (!seen[char]) {
            seen[char] = true;
            result += char;
        }
    }

    return result;
}
// example
// console.log(removeDuplicates('hello'));

// problem 6: Find the longest increasing subsequence

function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;
    
    // dp[i] = length of LIS ending at index i
    const dp = new Array(nums.length).fill(1);
    let maxLength = 1;
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLength = Math.max(maxLength, dp[i]);
    }
    
    return maxLength;
}