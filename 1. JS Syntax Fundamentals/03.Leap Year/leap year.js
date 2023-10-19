function solve(year)
{
    let IsLeap = false;
    if(year % 4 === 0 )
    {
        if(year % 100 !== 0)
        {
            IsLeap = true;
        }
    }
    if(year % 400 === 0)
    {
        IsLeap = true;
    }

    if(IsLeap === true)
    {
        console.log('yes')
    }
    else console.log('no')
}

solve(2000)