// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

const removeDuplicates = (array:number[]):number[] =>{
	return [...new Set(array)]
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))
//ts-node-dev --respawn --transpile-only src/problem-5.ts