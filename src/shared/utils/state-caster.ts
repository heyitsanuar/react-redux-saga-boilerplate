export const getById = (dictionary: any, id: string | number) => {
  return dictionary[id];
};

export const getList = (dictionary: any) => {
  return Object.entries(dictionary).map((item: any) => item[1]);
};

export const getKeys = (dictionary: any) => {
  return Object.keys(dictionary);
};

export const arrayToObject = (array: [], keyField: string) =>
  array.reduce((obj, item) => {
    obj[item[keyField]] = item;
    return obj;
  }, {});
