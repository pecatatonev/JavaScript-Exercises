function sum(num1, num2, num3)
{
    let sum = num1 + num2;
    
    function substract(){
        let result = sum - num3;
        console.log(result);
    }
    substract();
}

sum(42,
    58,
    100)
