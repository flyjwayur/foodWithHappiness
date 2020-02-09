import { IDataRestaurant } from '../index.d';

export const sortByName = (arr: IDataRestaurant[], ascend: boolean): IDataRestaurant[] => {
  const order = ascend === true ? 1 : -1;

  const sortedArray = [...arr].sort((a: IDataRestaurant, b: IDataRestaurant): number => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    // All the first letter of restaurant's name starts with non ASCII character,
    // But, localeCompare is used to prepare for the future cases which
    // accented characters are in first letter of restaurant names
    if (nameA < nameB) {
      return -1 * order;
    } else if (nameA > nameB) {
      return 1 * order;
    }
    return 0;
  });
  return sortedArray;
};
