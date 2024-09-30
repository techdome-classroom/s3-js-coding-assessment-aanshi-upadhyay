/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    var isValid = function(s) {
        // Stack to keep track of opening brackets
        let stack = [];
        
        // Mapping of closing brackets to their corresponding opening brackets
        const bracketMap = {
            ')': '(',
            '}': '{',
            ']': '['
        };
        
        // Traverse the string
        for (let char of s) {
            if (char in bracketMap) {
                // If it's a closing bracket, pop the top element from the stack if it's not empty
                // Otherwise, use a dummy value '#'
                let topElement = stack.length > 0 ? stack.pop() : '#';
                // Check if the popped element matches the corresponding opening bracket
                if (bracketMap[char] !== topElement) {
                    return false;
                }
            } else {
                // If it's an opening bracket, push it onto the stack
                stack.push(char);
            }
        }
        
        // If the stack is empty, all opening brackets have been matched correctly
        return stack.length === 0;
    };
    
    module.exports = { isValid };
    














};

module.exports = { isValid };


