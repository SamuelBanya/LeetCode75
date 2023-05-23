/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // Example 1 and 2:
    // Example 1:
    // ABABAB
    // Example 2:
    // ABAB
    // This is supposedly an 'easy' question --> Kind of nuts
    // That being said and the fact that the problem itself is the
    // biggest word salad I have ever read in my life, you would
    // have to know that you need to find the minimum
    // of 'x' + 'y' in this scenario:

    // Overall 'time complexity' is:
    // min(m, n) * (n + m)

    // This is basically based upon the 'Greatest Common Denominator':
    let len1 = str1.length;
    let len2 = str2.length;

    if (len2 > len1) {
        return gcdOfStrings(str2, str1);
    }

    if (str1 === str2) {
        return str1;
    }

    if (str1.startsWith(str2)) {
        return gcdOfStrings(str1.substring(str2.length), str2);
    }

    return "";

};
