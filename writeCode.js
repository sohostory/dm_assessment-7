// 1) Sum Zero

const addToZero = (arr) => {
  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    const complement = -currentNum;

    if (set.has(complement)) return true;
    set.add(currentNum);
  }
  return false;
};

console.log("1. Sum Zero:", addToZero([1, 2, 3, -2]));
// This is a O(n). The runtime would increase as the array gets larger.
// Extra credit: The space complexity is O(n) as well because the set will grow as the array grows.

// 2) Unique Characters

const hasUniqueChars = (word) => {
  const set = new Set();

  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    if (set.has(char)) return false;
    set.add(char);
  }
  return true;
};

console.log("2. Unique Characters:", hasUniqueChars("Monday"));
// This is a O(n). The runtime would increase as the word gets longer.
// Extra credit: The space complexity is O(n) as well because the set will grow as the word grows.

// 3) Pangram Sentence

const isPangram = (sentence) => {
  const set = new Set();
  const allAlphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i].toLowerCase();

    if (allAlphabet.includes(char)) set.add(char);
  }
  return set.size === 26;
};

console.log(
  "3. Pangram Sentence:",
  isPangram("The quick brown fox jumps over the lazy dog")
);
// This is a O(n). The runtime would increase as the sentence gets longer.
// Extra credit: The space complexity is O(n) as well because the set will grow as the sentence grows.

// 4) Longest Word

const findLongestWord = (words) => {
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) longestWord = words[i];
  }
  return longestWord;
};

console.log("4. Longest Word:", findLongestWord(["hi", "hello"]));
// This is a O(n). The runtime would increase as the array gets longer.
// Extra credit: The space complexity is O(1) because the longestWord variable will only hold one word.
