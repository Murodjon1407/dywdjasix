

const words = ['non', 'banan', 'mashina', 'asal', 'olma', 'aziza', 'gul'];


const wordsWithN = words.filter(word => word.includes('n'));


const wordsWithoutN = words.filter(word => !word.includes('n'));


console.log("'n' harfi ishtirok etgan so'zlar:", wordsWithN);
console.log("'n' harfi ishtirok etmagan so'zlar:", wordsWithoutN);
