const amthal = require("./data/index.json");

const randomMathal = () => {
  return amthal[Math.floor(Math.random() * amthal.length)];
};

/**
 * Get N random amthal from an amthalArray
 */
const randomN = (amthalArray, n) => {
  const limit = amthalArray.length < n ? amthalArray.length : n;
  const randomIndicesSet = new Set();

  while (randomIndicesSet.size < limit) {
    const randomIndex = Math.floor(Math.random() * amthalArray.length);
    if (!randomIndicesSet.has(randomIndex)) {
      randomIndicesSet.add(randomIndex);
    }
  }

  return Array.from(randomIndicesSet).map(randomIndex => {
    return amthalArray[randomIndex];
  });
};

const randomTen = () => randomN(amthal, 10);

module.exports = { amthal, randomMathal, randomN, randomTen };
