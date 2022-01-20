export function solution(str: string): string {
  return str.split('').reverse().join('');
}

console.log(solution('hello'))
console.log(solution('world'))
console.log(solution(''))