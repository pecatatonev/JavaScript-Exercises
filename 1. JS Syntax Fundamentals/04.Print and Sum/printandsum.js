function solve(start,end)
{
    let array = [];
    let sum=0;
    for(i= start; i <= end; i++)
    {   
        sum+=i;
        array.push(i);
    }
    console.log(array.join(' '))
    console.log(`Sum: ${sum}`);
}

solve(5, 10);
