/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 
        'C': 100, 'D': 500, 'M': 1000
    };
    let total = 0; 
    let length = s.length;

   
    for (let i = 0; i < length; i++) {
       
        if (i + 1 < length && romanMap[s[i]] < romanMap[s[i + 1]]) {
            total -= romanMap[s[i]];
        } else {
            total += romanMap[s[i]];
        }
    }
    
    return total;



    
};


module.exports={romanToInt}