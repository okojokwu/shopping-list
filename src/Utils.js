export const Arr = (arr) => {
  let a = [];
  for (let b of arr) {
    // eslint-disable-next-line no-unused-expressions
    a.includes(b) ? null : a.push(b);
  }
  return a;
};
