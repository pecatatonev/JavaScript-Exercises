function solve(number, op1, op2, op3, op4, op5)
{
    let num = Number(number);
    let array = [];
    array.push(op1);
    array.push(op2);
    array.push(op3);
    array.push(op4);
    array.push(op5);

    for(i = 0; i < array.length; i++)
    {
        switch(array[i])
        {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num += 1;
                break;
            case 'bake':
                num *=3 
                break;
            case 'fillet':
                num -= num * 0.2;
                break;
        }
        console.log(num);
    }
   
}

solve('9', 'dice', 'spice', 'chop', 'bake',
'fillet');