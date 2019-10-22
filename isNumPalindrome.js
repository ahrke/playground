var isPalindrome = function(x) {
    return x.toString().split("").reverse().join("") === x.toString()
};

console.log(isPalindrome(1241))
console.log(isPalindrome(45654))
console.log(isPalindrome(-121))