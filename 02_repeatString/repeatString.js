const repeatString = function (textToRepeat, repeatTimes) {
  let repeatedText = "";

  for (let i = 1; i <= repeatTimes; i++) {
    repeatedText += textToRepeat;
  }

  return repeatedText;
};

// Do not edit below this line
module.exports = repeatString;
