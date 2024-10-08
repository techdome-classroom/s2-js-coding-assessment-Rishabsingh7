const {isValid} = require("./program1");
const assert = require("assert");

/**
 * There is the code 
 * var isValid = function(s) {
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



 */



describe("test cases for problem 1 ", function () {

    it("test case 1", function () {
        const result = isValid("()");
        assert.equal(true, result);
    });

    it("test case 2", function () {
        const result = isValid("()[]{}");
        assert.equal(true, result);
    });

    it("test case 3", function () {
        const result = isValid("{[()]}");
        assert.equal(true, result);
    });

    it("test case 4", function () {
        const result = isValid("(]");
        assert.equal(false, result);
    });

    it("test case 5", function () {
        const result = isValid("([)]");
        assert.equal(false, result);
    });

    it("test case 6", function () {
        const result = isValid("");
        assert.equal(true, result);
    });

    it("test case 7", function () {
        const result = isValid("(){");
        assert.equal(false, result);
    });

})

