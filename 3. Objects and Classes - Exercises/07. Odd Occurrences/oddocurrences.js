function solve(input){
input = input.toLowerCase().split(" ");

const wordOccurances = input.reduce((acc, curr) => {
acc[curr] = 0;
return acc;
}, {})


input.forEach((word) => {
    if(wordOccurances.hasOwnProperty(word)){
    wordOccurances[word] += 1
    }
});

for (const key in wordOccurances) {
    if (wordOccurances[key] % 2 !== 0) {
        console.log(`${key} `)
    }
}
// Object.keys(wordOccurances).forEach(key => {
//     if(wordOccurances[key] % 2 !== 0)
//     console.log(`${key} `)
// })

}


solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')