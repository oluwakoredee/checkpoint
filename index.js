function isPalindrome(word) {
    // Base case: an empty word or a word containing a single character is a palindrome
    if (word.length <= 1) {
        return true;
    }
    
    // Compare characters at the beginning and end of the word
    if (word[0] === word[word.length - 1]) {
        // Recursively test the substring without the first and last characters
        return isPalindrome(word.slice(1, -1));
    } else {
        // Characters at the beginning and end are different, not a palindrome
        return false;
    }
}

// Test the isPalindrome function
console.log(isPalindrome("gag"));    // Output: true
console.log(isPalindrome("kayak"));  // Output: true
console.log(isPalindrome("php"));    // Output: true
console.log(isPalindrome("radar"));  // Output: true
console.log(isPalindrome("hello"));  // Output: false
