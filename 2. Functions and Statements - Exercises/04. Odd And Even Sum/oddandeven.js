function oddAndEvenSum(num){
    var digit=0;
    let sumOdd = 0;
    let sumEven = 0;
    while (num != 0) {
    digit = (num % 10);
    num = Math.trunc(num / 10);
    if(digit % 2 === 0){
        sumEven += digit; 
    }
    else sumOdd += digit
}

console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)

}

oddAndEvenSum(3495892137259234)