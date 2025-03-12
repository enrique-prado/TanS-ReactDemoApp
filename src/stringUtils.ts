export const areAnagrams = (str1: string, str2: string, isCaseSensitive = false): boolean => {

    // Setup dictionary where the key is the character and the value is the count
    const charCounts: { [key: string]: number } = {};

    // Count the characters in the first string
    for (let char of str1) {
        if (!isCaseSensitive) {
            char = char.toLowerCase();
        }
        charCounts[char] = (charCounts[char] || 0) + 1;
    }

    // Count the characters in the second string
    for (let char of str2) {
        if (!isCaseSensitive) {
            char = char.toLowerCase();
        }
        charCounts[char] = (charCounts[char] || 0) -1;
    }

    // const iterator = Object.values(charCounts);
    // return iterator.every(count => count === 0);

    // Check if all character counts are 0
    for (const key in charCounts) {
        if (charCounts[key] !== 0) {
            return false;
        }
    }
    // return Object.values(charCounts).every(count => count === 0);

    return true;
}