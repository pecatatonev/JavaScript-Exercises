function solve(input){
let wordsToFind = input.shift();

let words = wordsToFind.split(" ");

let wordsCount = [];
words.forEach(w => {
    let count = 0;
    for (let index = 0; index < input.length; index++) {
        
        if(w === input[index])
        {
           count++;
        }
        
    }
    wordsCount.push({
        word: w,
        occurences: count,
    })
});

wordsCount.sort((w1,w2) => w2.occurences - w1.occurences);

wordsCount.forEach(w => {
    console.log(
        `${w.word} - ${w.occurences}`
    )
});
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'])