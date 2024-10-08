/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
        const stack = [];
        const matchingBracket = {
            ')': '(',
            '}': '{',
            ']': '['
        };
        
        for (let char of s) {
            if (char === '(' || char === '{' || char === '[') {
                stack.push(char);
            } else {
                if (stack.length === 0 || stack.pop() !== matchingBracket[char]) {
                    return false;
                }
            }
        }
        
        return stack.length === 0;
    };

module.exports = { isValid };


