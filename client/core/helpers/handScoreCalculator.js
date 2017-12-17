import { getCardNumberValue } from "./cardValueParser";

export const calculateHandScore = cards => {
  let acesCount = countAces(cards);
  let score = calculateInitialHandScore(cards);

  while (acesCount > 0 && score > 21) {
    score -= 10;
    acesCount -= 1;
  }

  return score;
};

const calculateInitialHandScore = cards => {
  return cards.reduce((accumulator, card) => {
    return accumulator + getCardNumberValue(card.value);
  }, 0);
};

const countAces = cards => {
  return cards.reduce((accumulator, card) => {
    return accumulator + (card.value === 'ACE' ? 1 : 0)
  }, 0);
};
