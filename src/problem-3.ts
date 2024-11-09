// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

const countWordOccurrences =(strSen:string, word:string):number =>{
	const result = [...strSen.split(" ")].filter(senWord => senWord == word.toLowerCase())
	
	return result.length
}
console.log(countWordOccurrences("I love typescript", "Typescript"))