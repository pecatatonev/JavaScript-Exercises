function solve(number)
{
    let sum = 0;
    let firstNum = number % 10;
    let IsSame = true;
    while(number !== 0)
    {
        let currNum = number % 10;
        if(firstNum !== currNum)
        {
            IsSame = false;
        }
        sum += currNum;
        number = Math.floor(number / 10);;
        
    }

    if(IsSame)
    {
        console.log('true')
    }
    else console.log('false')
    console.log(sum)
}

solve(1234);