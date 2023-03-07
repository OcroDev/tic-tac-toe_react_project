import { WINNER_COMBOS } from '../combos.enum';

export const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }

  return null;
};

export const checkDraw = (boardToCheck) => {
  let draw = !boardToCheck.includes('');
  return draw;
};
