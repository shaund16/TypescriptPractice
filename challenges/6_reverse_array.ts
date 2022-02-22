export const digitize = (n: number): number[] => {
  return String(n).split('').reverse().map(Number);
};

console.log(digitize(35231));
console.log(digitize(0));
