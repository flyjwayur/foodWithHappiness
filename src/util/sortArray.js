export const sortByName = (arr, ascend) => {
  const order = ascend === true ? 1 : -1;

  return [...arr].sort((a, b) => {
    if (a.name && b.name) {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();

      //All the first letter of restaurant's name starts with non ASCII character,
      //But, localeCompare is used to prepare for the future cases which
      //accented characters are in first letter of restaurant names
      if (order > 0) {
        return nameA.localeCompare(nameB);
      } else if (order < 0) {
        return nameB.localeCompare(nameA);
      }
      return 0;
    }
    return [...arr];
  });
};
