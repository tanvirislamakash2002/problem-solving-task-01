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

function CheckPalindrome(arr) {
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
