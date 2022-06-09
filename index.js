"use strict ";
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  return tutorials.map((stringTitle) => {
    const tokens = stringTitle.split(" ");
    const capitalizedTokens = tokens.map(
      (num) => num.charAt(0).toUpperCase() + num.slice(1)
    );
    const response = capitalizedTokens.join(" ");
    return response;
  });
};

console.log(titleCased(tutorials));
