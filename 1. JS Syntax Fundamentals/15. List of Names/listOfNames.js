function solve(array)
{   
    let arr = [];
    for(let i = 0; i < array.length; i++)
    {
        array.sort();
        arr.push(`${i + 1}.${array[i]}`)
    }

    console.log(arr.join('\r\n'));
}

solve(["John",
"Bob",
"Christina",
"Ema"]);