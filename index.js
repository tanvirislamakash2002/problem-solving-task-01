// problem 1: Reverse words in a sentence

const ReverseWord = (sentence) => {
    const words = sentence.split(' ');
    const reverseWord = words.reverse();
    const result = reverseWord.join(' ');
    return result
}

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
// console.log(removeDuplicates('hello'));

// problem 6: Find the longest increasing subsequence

function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;

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

// console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));

// problem 7: Count the number of vowels in a string

function CountVowels(str) {
    const vowels = 'aeiou';
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// console.log(CountVowels("hello")); 

// problem 8: Find the majority element in an array

function majorityElement(nums) {
    let candidate = null;
    let count = 0;

    // Phase 1: Find potential candidate
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    // Phase 2: Verify candidate actually is majority
    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    return count > nums.length / 2 ? candidate : null;
}

// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

// problem 9: Rotate a string by k positions

function RotateStringByPosition(str, k) {
    if (str.length === 0) return str;

    k = k % str.length;
    let result = '';

    for (let i = str.length - k; i < str.length; i++) {
        result += str[i];
    }

    for (let i = 0; i < str.length - k; i++) {
        result += str[i];
    }

    return result;
}

// console.log(RotateStringByPosition("hello", 2));

// problem 9: Find the missing elements in a consecutive sequence

function findMissingElements(nums) {
    if (nums.length === 0) return [];
    
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    const range = max - min + 1;
    
    // Create boolean array to mark presence
    const present = new Array(range).fill(false);
    
    // Mark existing numbers
    for (let num of nums) {
        present[num - min] = true;
    }
    
    // Collect missing numbers
    const missing = [];
    for (let i = 0; i < range; i++) {
        if (!present[i]) {
            missing.push(min + i);
        }
    }
    
    return missing;
}

// console.log(findMissingElements([10, 11, 13, 14])); 