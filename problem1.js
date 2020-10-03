const givenBoard = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

const checkIfExists = (board, word, position, i, j) => {
  if (board[i][j] !== word[position]) {
    return false;
  }
  if (word.length - 1 === position) {
    return true;
  }
  const character = board[i][j];
  board[i][j] = " ";
  let isPresent = false;
  if (i > 0) {
    isPresent = isPresent | checkIfExists(board, word, position + 1, i - 1, j);
    if (isPresent) return isPresent;
  }
  if (j > 0) {
    isPresent = isPresent | checkIfExists(board, word, position + 1, i, j - 1);
    if (isPresent) return isPresent;
  }
  if (i < board.length - 1) {
    isPresent = isPresent | checkIfExists(board, word, isPresent + 1, i + 1, j);
    if (isPresent) return isPresent;
  }
  if (j < board[0].length - 1) {
    isPresent = isPresent | checkIfExists(board, word, isPresent + 1, i, j + 1);
    if (isPresent) return isPresent;
  }
  board[i][j] = character;
  return isPresent;
};

const isExist = (givenBoard, word) => {
  if (
    givenBoard.length !== 0 &&
    givenBoard !== null &&
    givenBoard[0].length !== 0
  ) {
    const firstElement = givenBoard[0];
    for (let i = 0; i < givenBoard.length; i++) {
      for (let j = 0; j < firstElement.length; j++) {
        if (checkIfExists(givenBoard, word, 0, i, j)) {
          return true;
        }
      }
    }
    return false;
  }
  return false;
};

console.log(isExist(givenBoard, "ABCCED"));
console.log(isExist(givenBoard, "SEE"));
console.log(isExist(givenBoard, "ABCB"));
