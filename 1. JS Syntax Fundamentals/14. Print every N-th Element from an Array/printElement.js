function solve(array, step)
{
    const myArray = [...array];
    let arr = [];
    let length = myArray.length;
    for(let i = 0; i < length; i++)
    {
       if(i % step === 0)
       {
        arr.push(myArray[i]);
       }
       
    }
    return arr;
}

solve(['dsa',
'asd',
'test',
'tset'],
2);