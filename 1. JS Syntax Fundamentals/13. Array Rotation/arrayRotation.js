function solve(array, rotations)
{
    for(i = 0; i < rotations; i++)
    {
       const firstElements = array.shift();
       array.push(firstElements);
    }
    console.log(array.join(' '));
}

solve([51, 47, 32, 61, 21], 2);