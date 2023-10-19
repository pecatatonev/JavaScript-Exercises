function solve(number)
{
    let sum = 0;
    while(number !== 0)
    {
        let currNum = number % 10;
        sum += currNum;
        number = Math.floor(number / 10);;
        
    }

    console.log(sum)
}

solve(543)