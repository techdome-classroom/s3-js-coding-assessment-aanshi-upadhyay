/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let stack = [];
    
   
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
   
    for (let char of s) {
        if (char in bracketMap) {
            let topElement = stack.length > 0 ? stack.pop() : '#';
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
