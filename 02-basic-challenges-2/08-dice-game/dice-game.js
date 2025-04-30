const WINNING_SUMS = [7, 11];
const LOSING_SUMS = [2, 3, 12];

function diceGameSimulation(numSimulations) {
  const rolls = [];

  for (let i = 0; i < numSimulations; i++) {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const sum = dice1 + dice2;
    let result;

    if (WINNING_SUMS.includes(sum)) {
      result = "win";
    } else if (LOSING_SUMS.includes(sum)) {
      result = "lose";
    } else {
      result = "roll again";
    }

    rolls.push({
      dice1,
      dice2,
      sum,
      result,
    });
  }

  return rolls;
}

module.exports = diceGameSimulation;
