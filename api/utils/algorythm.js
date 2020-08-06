function algorythm(message, COLS, ROWS) {
  const blocks = {};

  for (let i = 0; i < COLS * ROWS; i++) {
    const mod = i % ROWS;
    const letter = message[i] || ' ';

    blocks[mod] = (blocks[mod] || []).concat(letter);
  }

  return Object.values(blocks).reduce((prev, curr) => {
    return `${prev}${curr.join('')}`;
  }, '');
}

module.exports = algorythm;
