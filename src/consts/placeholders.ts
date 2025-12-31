export const createPlaceholderArray = (count: number = 10) => {
  return Array.from({ length: count });
};

export const placeholderArray = createPlaceholderArray(10);
