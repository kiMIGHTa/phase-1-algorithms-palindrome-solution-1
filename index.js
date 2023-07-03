function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverseString(word);
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}
function reverseString(word) {
  const reversedWord = word.split("").reverse().join("")
 
  return reversedWord;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("kayak"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("heartless"));
}

module.exports = isPalindrome;
