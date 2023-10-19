function solve(fruit, weightInGrams, pricePerKG)
{
    let weightInKG = weightInGrams / 1000;
    let money = pricePerKG * weightInKG;
    console.log(`I need $${money.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80 );