export const Rotate = (word: String, key: number) => {
  const Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const separator = "";

  const transfom = (letter: string) => {
    const index = Letters.indexOf(letter);

    if (index !== -1) {
      let newIndex = index + key;
      if (index + key >= 26) {
        newIndex = index + key - 26;
        return Letters[newIndex];
      } else {
        return Letters[newIndex];
      }
    }

    return letter;
  };

  return word
    .split(separator)
    .map((letter) => transfom(letter))
    .join(separator);
};
