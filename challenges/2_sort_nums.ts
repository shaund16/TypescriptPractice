export function solution(nums: number[]): number[] {
  return nums.sort((a, b) => {return a - b});
}

console.log(solution([1,2,10,50,5]))
