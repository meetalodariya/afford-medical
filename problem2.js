const arr = [];

const isValid = false;

const isValidString = (str) => {
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "(" || char === "{" || char === "[") {
      arr.push(char);
    } else {
      if (arr.length !== 0 && isValidPair(arr[arr.length - 1], char)) {
        arr.pop();
      } else {
        return false;
      }
    }
  }
  return arr.length === 0;
};

const isValidPair = (str1, str2) => {
  return (
    (str1 == "(" && str2 == ")") ||
    (str1 == "{" && str2 == "}") ||
    (str1 == "[" && str2 == "]")
  );
};

console.log(isValidString("()"));
console.log(isValidString("()[]{}"));
console.log(isValidString("(]"));
console.log(isValidString("([)]"));
console.log(isValidString("{[]}"));
