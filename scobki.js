"use strict";

const optionGlobal = {
  brackets: {
    "(": ")",
    "[": "]",
    "{": "}",
  },
  isStrict: true,
};

const checkBrackets = (str, options = optionGlobal) => {
  const brackets = options.brackets;
  const stack = new Stack(str.lenght);
  for (const symbol of str) {
    if (brackets[symbol]) {
      stack.push(symbol);
    }
    if (brackets[stack.pick()] === symbol) {
      stack.pop();
    } else if (Object.values(brackets).includes(symbol)) {
      return false;
    }
  }
  return stack.empty;
};

console.log(checkBrackets("(a{}))", optionGlobal));
