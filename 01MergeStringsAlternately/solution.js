/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let word1Length = word1.length;
    let word2Length = word2.length;
    let mergedString = "";

    // Check to see if the length of 'word1' is longer than 'word2'
    if (word1Length > word2Length) {
        // Use word2Length as the limit:
        for (let i = 0; i < word2Length; i++) {
            mergedString += word1[i];
            mergedString += word2[i]
        }
        // Go through the rest of the letters for 'word1':
        for (let j = word2Length; j < word1Length; j++) {
            mergedString += word1[j];
        }
    }

    // Check to see if the length of 'word2' is longer than 'word1'
    else if (word2Length > word1Length) {
        // Use word2Length as the limit:
        for (let i = 0; i < word1Length; i++) {
            mergedString += word1[i];
            mergedString += word2[i];
        }
        // Go through the rest of the letters for 'word2':
        for (let j = word1Length; j < word2Length; j++) {
            mergedString += word2[j];
        }
    }

    // Both strings have equal lengths:
    else {
        for (let i = 0; i < word1Length; i++) {
            mergedString += word1[i];
            mergedString += word2[i];
        }
    }

    console.log("mergedString: " + mergedString);

    return mergedString;
};
